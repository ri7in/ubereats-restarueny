"use client"

import { useState, useEffect } from "react"
import type { Review } from "@/lib/types"
import { mockReviews } from "@/data/reviews"

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500))
        const stored = localStorage.getItem("reviews")
        if (stored) {
          setReviews(JSON.parse(stored))
        } else {
          setReviews(mockReviews)
        }
        setIsLoading(false)
      } catch (err) {
        setError("Failed to fetch reviews")
        setIsLoading(false)
      }
    }
    fetchReviews()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("reviews", JSON.stringify(reviews))
    }
  }, [reviews, isLoading])

  const respondToReview = async (reviewId: string, response: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setReviews((prev) => prev.map((review) => (review.id === reviewId ? { ...review, response } : review)))
      return true
    } catch (err) {
      throw new Error("Failed to respond to review")
    }
  }

  return {
    reviews,
    isLoading,
    error,
    respondToReview,
  }
}
