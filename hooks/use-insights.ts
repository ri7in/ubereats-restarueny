"use client"

import { useState, useEffect } from "react"
import type { InsightsData } from "@/lib/types"
import { mockInsightsData } from "@/data/insights"

export function useInsights() {
  const [insights, setInsights] = useState<InsightsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500))
        const stored = localStorage.getItem("insights")
        if (stored) {
          setInsights(JSON.parse(stored))
        } else {
          setInsights(mockInsightsData)
        }
        setIsLoading(false)
      } catch (err) {
        setError("Failed to fetch insights data")
        setIsLoading(false)
      }
    }
    fetchInsights()
  }, [])

  useEffect(() => {
    if (!isLoading && insights) {
      localStorage.setItem("insights", JSON.stringify(insights))
    }
  }, [insights, isLoading])

  return {
    ...insights!,
    isLoading,
    error,
  }
}
