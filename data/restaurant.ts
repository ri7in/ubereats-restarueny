import type { Restaurant } from "@/lib/types"

export const mockRestaurant: Restaurant = {
  id: "1",
  restaurantName: "Kamu.LK",
  ownerName: "Chaminda Perera",
  email: "chaminda@kamu.lk",
  phone: "077-123-4567",
  address: "42 Kandy Road, Malabe, Sri Lanka",
  description: "Authentic Sri Lankan cuisine featuring rice and curry, kottu roti, and hoppers.",
  cuisine: "Sri Lankan",
  approved: true,
  createdAt: new Date().toISOString(),
  preparationTime: 25, // Average preparation time in minutes
}
