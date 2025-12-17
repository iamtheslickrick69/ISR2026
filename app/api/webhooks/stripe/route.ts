import { NextRequest, NextResponse } from 'next/server'
import { stripe, PRICING, PricingTier } from '@/lib/stripe'
import { createAdminClient } from '@/lib/supabase/server'
import Stripe from 'stripe'

// POST /api/webhooks/stripe - Handle Stripe webhook events
export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const supabase = createAdminClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.userId
        const tier = session.metadata?.tier as PricingTier

        if (userId && tier) {
          const pricing = PRICING[tier]

          await (supabase
            .from('profiles')
            .update as any)({
              subscription_tier: tier,
              subscription_status: 'trialing',
              stripe_subscription_id: session.subscription as string,
              bot_limit: pricing.botLimit,
              conversation_limit: pricing.conversationLimit,
            })
            .eq('id', userId)
        }
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = subscription.customer as string

        // Find user by Stripe customer ID
        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single()

        if (profile) {
          const profileData = profile as any
          let status: 'active' | 'past_due' | 'canceled' | 'trialing' = 'active'

          if (subscription.status === 'trialing') status = 'trialing'
          else if (subscription.status === 'past_due') status = 'past_due'
          else if (subscription.status === 'canceled') status = 'canceled'

          await (supabase
            .from('profiles')
            .update as any)({
              subscription_status: status,
              stripe_subscription_id: subscription.id,
            })
            .eq('id', profileData.id)
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = subscription.customer as string

        // Find user by Stripe customer ID
        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single()

        if (profile) {
          const profileData = profile as any
          await (supabase
            .from('profiles')
            .update as any)({
              subscription_tier: 'free',
              subscription_status: 'canceled',
              stripe_subscription_id: null,
              bot_limit: 1,
              conversation_limit: 100,
            })
            .eq('id', profileData.id)
        }
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const customerId = invoice.customer as string

        // Find user by Stripe customer ID
        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single()

        if (profile) {
          const profileData = profile as any
          await (supabase
            .from('profiles')
            .update as any)({ subscription_status: 'past_due' })
            .eq('id', profileData.id)
        }
        break
      }

      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice
        const customerId = invoice.customer as string

        // Find user by Stripe customer ID
        const { data: profile } = await supabase
          .from('profiles')
          .select('id, subscription_status')
          .eq('stripe_customer_id', customerId)
          .single()

        if (profile) {
          const profileData = profile as any
          if (profileData.subscription_status === 'past_due') {
            await (supabase
              .from('profiles')
              .update as any)({ subscription_status: 'active' })
              .eq('id', profileData.id)
          }
        }

        // Reset monthly conversation count
        await (supabase
          .from('profiles')
          .update as any)({ conversations_used: 0 })
          .eq('stripe_customer_id', customerId)

        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
