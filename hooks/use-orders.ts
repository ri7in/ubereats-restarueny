"use client"

import { useState, useEffect } from "react"
import type { Order } from "@/lib/types"
import { mockOrders } from "@/data/orders"

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500))
        const stored = localStorage.getItem("orders")
        if (stored) {
          setOrders(JSON.parse(stored))
        } else {
          setOrders(mockOrders)
        }
        setIsLoading(false)
      } catch (err) {
        setError("Failed to fetch orders")
        setIsLoading(false)
      }
    }
    fetchOrders()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("orders", JSON.stringify(orders))
    }
  }, [orders, isLoading])

  const updateOrderStatus = async (orderId: string, status: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setOrders((prev) => prev.map((order) => (order.id === orderId ? { ...order, status } : order)))
      return true
    } catch (err) {
      throw new Error("Failed to update order status")
    }
  }

  return {
    orders,
    isLoading,
    error,
    updateOrderStatus,
  }
}
