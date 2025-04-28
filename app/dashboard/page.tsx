"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Download, ShoppingBag, Star, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link href="/dashboard/settings">Settings</Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              // In a real app, this would generate and download a PDF report
              alert("Downloading report...")
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="overflow-hidden border-2 hover:border-[#00A082] transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-[#00A082]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">LKR 325,000.25</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-2 hover:border-[#00A082] transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-[#00A082]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+12.2% from last month</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card className="overflow-hidden border-2 hover:border-[#00A082] transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customers</CardTitle>
                <Users className="h-4 w-4 text-[#00A082]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">+10.1% from last month</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Card className="overflow-hidden border-2 hover:border-[#00A082] transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rating</CardTitle>
                <Star className="h-4 w-4 text-[#00A082]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8</div>
                <p className="text-xs text-muted-foreground">+0.2 from last month</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="col-span-4"
          >
            <Card className="border-2 hover:border-[#00A082] transition-all duration-300">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>You have received 12 orders today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "1001",
                      time: "10:45 AM",
                      amount: "LKR 1,800.00",
                      customer: "Dinesh Jayawardena",
                      prepTime: "25 mins",
                    },
                    {
                      id: "1002",
                      time: "12:30 PM",
                      amount: "LKR 700.00",
                      customer: "Priyanka Fernando",
                      prepTime: "20 mins",
                    },
                    {
                      id: "1005",
                      time: "2:15 PM",
                      amount: "LKR 2,670.00",
                      customer: "Roshan Perera",
                      prepTime: "30 mins",
                    },
                  ].map((order) => (
                    <div key={order.id} className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="font-medium">Order #{order.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.time} - {order.amount} - {order.customer}
                        </p>
                        <p className="text-xs text-[#00A082]">Prep time: {order.prepTime}</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/dashboard/orders">View</Link>
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Button
                    variant="outline"
                    asChild
                    className="hover:bg-[#00A082] hover:text-white transition-colors duration-200"
                  >
                    <Link href="/dashboard/orders">View All Orders</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="col-span-3"
          >
            <Card className="border-2 hover:border-[#00A082] transition-all duration-300">
              <CardHeader>
                <CardTitle>Popular Items</CardTitle>
                <CardDescription>Your top selling menu items</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Chicken Kottu", price: "LKR 650.00", orders: 120, prepTime: "20 mins" },
                    { name: "Egg Hoppers", price: "LKR 120.00", orders: 100, prepTime: "15 mins" },
                    { name: "Mutton Rolls", price: "LKR 180.00", orders: 90, prepTime: "10 mins" },
                    { name: "Vegetable Rice and Curry", price: "LKR 450.00", orders: 85, prepTime: "25 mins" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.price} - Ordered {item.orders} times
                        </p>
                        <p className="text-xs text-[#00A082]">Prep time: {item.prepTime}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:text-[#00A082] transition-colors duration-200"
                      >
                        <Link href="/dashboard/menu">Edit</Link>
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Button
                    variant="outline"
                    asChild
                    className="hover:bg-[#00A082] hover:text-white transition-colors duration-200"
                  >
                    <Link href="/dashboard/menu">Manage Menu</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
