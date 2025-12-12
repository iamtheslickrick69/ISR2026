'use client'

import { useState, useEffect, useCallback } from 'react'
import { Lead } from '@/types/database'

interface UseLeadsOptions {
  botId?: string
  status?: string
  limit?: number
  offset?: number
}

export function useLeads(options: UseLeadsOptions = {}) {
  const [leads, setLeads] = useState<Lead[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLeads = useCallback(async () => {
    try {
      setLoading(true)

      const params = new URLSearchParams()
      if (options.botId) params.set('bot_id', options.botId)
      if (options.status) params.set('status', options.status)
      if (options.limit) params.set('limit', options.limit.toString())
      if (options.offset) params.set('offset', options.offset.toString())

      const response = await fetch(`/api/leads?${params.toString()}`)
      if (!response.ok) throw new Error('Failed to fetch leads')

      const data = await response.json()
      setLeads(data.leads || [])
      setTotal(data.total || 0)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [options.botId, options.status, options.limit, options.offset])

  useEffect(() => {
    fetchLeads()
  }, [fetchLeads])

  const updateLeadStatus = async (leadId: string, status: string) => {
    const response = await fetch(`/api/leads/${leadId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to update lead')
    }

    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadId ? { ...lead, status: status as Lead['status'] } : lead
      )
    )
  }

  const exportLeads = async () => {
    const params = new URLSearchParams()
    if (options.botId) params.set('bot_id', options.botId)

    const response = await fetch(`/api/leads/export?${params.toString()}`)
    if (!response.ok) throw new Error('Failed to export leads')

    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return {
    leads,
    total,
    loading,
    error,
    refetch: fetchLeads,
    updateLeadStatus,
    exportLeads,
  }
}
