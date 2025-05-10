"use client"

import { useState, useEffect } from "react"
import type { MenuItem } from "@/lib/types"
import { mockMenuItems } from "@/data/menu-items"

export function useMenuItems() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load from localStorage or fallback to mock data
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500))
        const stored = localStorage.getItem("menuItems")
        if (stored) {
          setMenuItems(JSON.parse(stored))
        } else {
          setMenuItems(mockMenuItems)
        }
        setIsLoading(false)
      } catch (err) {
        setError("Failed to fetch menu items")
        setIsLoading(false)
      }
    }
    fetchMenuItems()
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("menuItems", JSON.stringify(menuItems))
    }
  }, [menuItems, isLoading])

  const addMenuItem = async (item: MenuItem) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setMenuItems((prev) => [...prev, item])
      return true
    } catch (err) {
      throw new Error("Failed to add menu item")
    }
  }

  const updateMenuItem = async (item: MenuItem) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setMenuItems((prev) => prev.map((i) => (i.id === item.id ? item : i)))
      return true
    } catch (err) {
      throw new Error("Failed to update menu item")
    }
  }

  const deleteMenuItem = async (id: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setMenuItems((prev) => prev.filter((i) => i.id !== id))
      return true
    } catch (err) {
      throw new Error("Failed to delete menu item")
    }
  }

  return {
    menuItems,
    isLoading,
    error,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
  }
}
