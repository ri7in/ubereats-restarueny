import type { Review } from "@/lib/types"

export const mockReviews: Review[] = [
  {
    id: "r1",
    customerName: "Dinesh Jayawardena",
    customerAvatar: "/r1.png",
    rating: 5,
    text: "Best kottu in Malabe! The chicken kottu was spicy and flavorful, just how I like it. Delivery was quick too.",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    response:
      "Thank you for your kind words, Dinesh! We're glad you enjoyed our kottu and look forward to serving you again soon.",
  },
  {
    id: "r2",
    customerName: "Priyanka Fernando",
    customerAvatar: "/r8.jpg",
    rating: 4,
    text: "The vegetable rice and curry was delicious and authentic. Curd and treacle was the perfect dessert. Would order again!",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "r3",
    customerName: "Malith Gunasekara",
    customerAvatar: "/r2.jpg",
    rating: 3,
    text: "Food was good but took longer than expected to arrive. The hoppers were a bit cold by the time they reached.",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    response:
      "We apologize for the delay, Malith. We're working on improving our delivery times. Thank you for your feedback!",
  },
  {
    id: "r4",
    customerName: "Kumari Wijesinghe",
    customerAvatar: "/r3.jpg",
    rating: 2,
    text: "Ordered biryani without spices but it was still too spicy for me. The watalappan was good though.",
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "r5",
    customerName: "Roshan Perera",
    customerAvatar: "/r4.jpg",
    rating: 5,
    text: "Amazing kottu! The mutton rolls were crispy and delicious. Wood apple juice was refreshing. Will order again!",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "r6",
    customerName: "Nilmini Silva",
    customerAvatar: "/r5.jpg",
    rating: 4,
    text: "The isso wade was fresh and tasty. Loved the fish ambul thiyal too. Authentic Sri Lankan flavors!",
    date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "r7",
    customerName: "Asanka Bandara",
    customerAvatar: "/r6.jpg",
    rating: 5,
    text: "Best Sri Lankan food in the area! The egg hoppers were perfect and the kottu was spicy and flavorful.",
    date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "r8",
    customerName: "Dilini Rajapakse",
    customerAvatar: "/r7.jpg",
    rating: 3,
    text: "Food was good but portions were a bit small for the price. Delivery was quick though.",
    date: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
  },
]
