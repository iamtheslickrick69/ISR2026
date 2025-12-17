import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { stripe, PRICING, getOrCreateCustomer, PricingTier } from '@/lib/stripe'

// POST /api/payments/checkout - Create a Stripe checkout session
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { tier } = body as { tier: PricingTier }

    if (!tier || !PRICING[tier]) {
      return NextResponse.json({ error: 'Invalid pricing tier' }, { status: 400 })
    }

    const pricing = PRICING[tier]

    // Get or create profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    const profileData = profile as any

    // Get or create Stripe customer
    let stripeCustomerId = profileData?.stripe_customer_id

    if (!stripeCustomerId) {
      const customer = await getOrCreateCustomer({
        email: user.email!,
        name: profileData?.full_name || undefined,
        userId: user.id,
      })
      stripeCustomerId = customer.id

      // Update profile with Stripe customer ID
      await (supabase
        .from('profiles')
        .update as any)({ stripe_customer_id: stripeCustomerId })
        .eq('id', user.id)
    }

    // Create checkout session
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${pricing.name} Plan`,
              description: `${pricing.botLimit} bot(s), ${pricing.conversationLimit} conversations/month`,
            },
            unit_amount: pricing.monthlyPrice,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
        // One-time setup fee
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Setup Fee',
              description: 'One-time onboarding and setup fee (includes first month free)',
            },
            unit_amount: pricing.setupFee,
          },
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 30,
        metadata: {
          tier,
          userId: user.id,
        },
      },
      success_url: `${appUrl}/agent-builder?payment=success`,
      cancel_url: `${appUrl}/agent-builder/settings?payment=canceled`,
      metadata: {
        tier,
        userId: user.id,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
