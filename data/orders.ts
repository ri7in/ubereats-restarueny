import type { Order } from "@/lib/types"

export const mockOrders: Order[] = [
  {
    id: "1001",
    items: [
      { id: "1", name: "Chicken Kottu", price: 650, quantity: 2 },
      { id: "6", name: "Isso Wade", price: 200, quantity: 1 },
      { id: "10", name: "Ginger Tea", price: 150, quantity: 2 },
    ],
    customer: {
      id: "c1",
      name: "Dinesh Jayawardena",
      email: "dinesh@gmail.com",
      phone: "071-555-1234",
      address: "24 Flower Road, Malabe, Sri Lanka",
    },
    status: "pending",
    subtotal: 1800,
    deliveryFee: 200,
    orderTime: new Date().toISOString(),
    notes: "Extra spicy kottu please",
  },
  {
    id: "1002",
    items: [
      { id: "2", name: "Vegetable Rice and Curry", price: 450, quantity: 1 },
      { id: "8", name: "Curd and Treacle", price: 250, quantity: 1 },
    ],
    customer: {
      id: "c2",
      name: "Priyanka Fernando",
      email: "priyanka@yahoo.com",
      phone: "077-123-4567",
      address: "15 Temple Road, Kaduwela, Sri Lanka",
    },
    status: "preparing",
    subtotal: 700,
    deliveryFee: 200,
    orderTime: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
  },
  {
    id: "1003",
    items: [
      { id: "3", name: "Fish Ambul Thiyal", price: 750, quantity: 1 },
      { id: "4", name: "Egg Hoppers", price: 120, quantity: 3 },
      { id: "9", name: "Faluda", price: 350, quantity: 2 },
    ],
    customer: {
      id: "c3",
      name: "Malith Gunasekara",
      email: "malith@hotmail.com",
      phone: "076-987-6543",
      address: "78 Lake Drive, Athurugiriya, Sri Lanka",
    },
    status: "completed",
    subtotal: 1690,
    deliveryFee: 200,
    orderTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "1004",
    items: [
      { id: "12", name: "Chicken Biryani", price: 850, quantity: 2 },
      { id: "7", name: "Watalappan", price: 300, quantity: 2 },
    ],
    customer: {
      id: "c4",
      name: "Kumari Wijesinghe",
      email: "kumari@gmail.com",
      phone: "070-456-7890",
      address: "32 Hill Street, Malabe, Sri Lanka",
    },
    status: "cancelled",
    subtotal: 2000,
    deliveryFee: 200,
    orderTime: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    notes: "No spices in the biryani please",
  },
  {
    id: "1005",
    items: [
      { id: "1", name: "Chicken Kottu", price: 650, quantity: 3 },
      { id: "5", name: "Mutton Rolls", price: 180, quantity: 4 },
      { id: "11", name: "Wood Apple Juice", price: 200, quantity: 3 },
    ],
    customer: {
      id: "c5",
      name: "Roshan Perera",
      email: "roshan@outlook.com",
      phone: "075-123-9876",
      address: "56 Main Street, Battaramulla, Sri Lanka",
    },
    status: "completed",
    subtotal: 2670,
    deliveryFee: 200,
    orderTime: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
  },
]
