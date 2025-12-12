import Stripe from 'stripe'

// Lazy-load Stripe client to avoid build-time errors
let stripeInstance: Stripe | null = null

function getStripe(): Stripe {
  if (!stripeInstance) {
    const secretKey = process.env.STRIPE_SECRET_KEY
    if (!secretKey || secretKey === 'sk_test_placeholder') {
      throw new Error('Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable.')
    }
    stripeInstance = new Stripe(secretKey, {
      apiVersion: '2025-03-31.basil',
      typescript: true,
    })
  }
  return stripeInstance
}

export const stripe = new Proxy({} as Stripe, {
  get: (_target, prop) => {
    const client = getStripe()
    return client[prop as keyof Stripe]
  },
})

// Pricing configuration
export const PRICING = {
  starter: {
    name: 'Starter',
    setupFee: 49900, // $499 in cents
    monthlyPrice: 4900, // $49 in cents
    botLimit: 1,
    conversationLimit: 500,
    priceId: process.env.STRIPE_STARTER_PRICE_ID,
  },
  professional: {
    name: 'Professional',
    setupFee: 49900,
    monthlyPrice: 9900, // $99 in cents
    botLimit: 3,
    conversationLimit: 2000,
    priceId: process.env.STRIPE_PROFESSIONAL_PRICE_ID,
  },
  business: {
    name: 'Business',
    setupFee: 49900,
    monthlyPrice: 19900, // $199 in cents
    botLimit: 10,
    conversationLimit: 10000,
    priceId: process.env.STRIPE_BUSINESS_PRICE_ID,
  },
}

export type PricingTier = keyof typeof PRICING

// Create a checkout session for new subscription
export async function createCheckoutSession({
  customerId,
  priceId,
  setupFee,
  successUrl,
  cancelUrl,
}: {
  customerId: string
  priceId: string
  setupFee: number
  successUrl: string
  cancelUrl: string
}): Promise<Stripe.Checkout.Session> {
  return stripe.checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
      // One-time setup fee
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Setup Fee',
            description: 'One-time onboarding and setup fee',
          },
          unit_amount: setupFee,
        },
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    subscription_data: {
      trial_period_days: 30, // First month free
    },
  })
}

// Create or retrieve Stripe customer
export async function getOrCreateCustomer({
  email,
  name,
  userId,
}: {
  email: string
  name?: string
  userId: string
}): Promise<Stripe.Customer> {
  // Check if customer exists
  const existingCustomers = await stripe.customers.list({
    email,
    limit: 1,
  })

  if (existingCustomers.data.length > 0) {
    return existingCustomers.data[0]
  }

  // Create new customer
  return stripe.customers.create({
    email,
    name,
    metadata: {
      userId,
    },
  })
}

// Get subscription details
export async function getSubscription(subscriptionId: string): Promise<Stripe.Subscription | null> {
  try {
    return await stripe.subscriptions.retrieve(subscriptionId)
  } catch {
    return null
  }
}

// Cancel subscription
export async function cancelSubscription(subscriptionId: string): Promise<Stripe.Subscription> {
  return stripe.subscriptions.cancel(subscriptionId)
}

// Create customer portal session
export async function createPortalSession({
  customerId,
  returnUrl,
}: {
  customerId: string
  returnUrl: string
}): Promise<Stripe.BillingPortal.Session> {
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  })
}
