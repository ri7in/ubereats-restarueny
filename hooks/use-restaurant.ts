"use client"

import { useState, useEffect } from "react"
import type { Restaurant } from "@/lib/types"
import { mockRestaurant } from "@/data/restaurant"

export function useRestaurant() {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500))
        const stored = localStorage.getItem("restaurant")
        if (stored) {
          setRestaurant(JSON.parse(stored))
        } else {
          setRestaurant(mockRestaurant)
        }
        setIsLoading(false)
      } catch (err) {
        setError("Failed to fetch restaurant data")
        setIsLoading(false)
      }
    }
    fetchRestaurant()
  }, [])

  useEffect(() => {
    if (!isLoading && restaurant) {
      localStorage.setItem("restaurant", JSON.stringify(restaurant))
    }
  }, [restaurant, isLoading])

  const registerRestaurant = async (data: Partial<Restaurant>) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // In a real app, this would send data to an API
      setRestaurant((prev) => prev ? { ...prev, ...data } : { ...mockRestaurant, ...data })
      return true
    } catch (err) {
      throw new Error("Failed to register restaurant")
    }
  }

  const updateRestaurant = async (data: Partial<Restaurant>) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setRestaurant((prev) => (prev ? { ...prev, ...data } : null))
      return true
    } catch (err) {
      throw new Error("Failed to update restaurant")
    }
  }

  return {
    restaurant,
    isLoading,
    error,
    registerRestaurant,
    updateRestaurant,
    useRegisterRestaurant: () => ({ registerRestaurant }),
  }
}

export const useRegisterRestaurant = () => {
  const { registerRestaurant } = useRestaurant()
  return { registerRestaurant }
}
