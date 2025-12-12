'use client'

import { useState } from 'react'
import { useAuth } from './use-auth'

export function useSubscription() {
  const { profile } = useAuth()
  const [loading, setLoading] = useState(false)

  const createCheckout = async (tier: 'starter' | 'professional' | 'business') => {
    setLoading(true)
    try {
      const response = await fetch('/api/payments/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to create checkout')
      }

      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error('Checkout error:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const openPortal = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/payments/portal', {
        method: 'POST',
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to open portal')
      }

      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error('Portal error:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return {
    tier: profile?.subscription_tier || 'free',
    status: profile?.subscription_status || 'active',
    botLimit: profile?.bot_limit || 1,
    conversationLimit: profile?.conversation_limit || 100,
    conversationsUsed: profile?.conversations_used || 0,
    loading,
    createCheckout,
    openPortal,
    isPro: profile?.subscription_tier !== 'free',
  }
}
