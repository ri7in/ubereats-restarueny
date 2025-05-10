"use client"

import React, { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Save } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useRestaurant } from "@/hooks/use-restaurant"
import { motion } from "framer-motion"

export default function SettingsPage() {
  const { toast } = useToast()
  const { restaurant, updateRestaurant } = useRestaurant()
  const [isLoading, setIsLoading] = useState(false)
  // Load initial values from restaurant context if available
  const [formData, setFormData] = useState(() => ({
    restaurantName: restaurant?.restaurantName || "Kamu.LK",
    email: restaurant?.email || "info@kamu.lk",
    phone: restaurant?.phone || "077-123-4567",
    address: restaurant?.address || "42 Kandy Road, Malabe, Sri Lanka",
    description: restaurant?.description || "Authentic Sri Lankan cuisine featuring rice and curry, kottu roti, and hoppers.",
    cuisine: restaurant?.cuisine || "Sri Lankan",
    preparationTime: restaurant?.preparationTime || 25,
    autoAcceptOrders: true,
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
  }))
  const [isOpen, setIsOpen] = useState(true)
  const [openingHoursExpanded, setOpeningHoursExpanded] = useState(false)
  const [weeklyHours, setWeeklyHours] = useState([
    { day: "Monday", open: "09:00", close: "22:00", closed: false },
    { day: "Tuesday", open: "09:00", close: "22:00", closed: false },
    { day: "Wednesday", open: "09:00", close: "22:00", closed: false },
    { day: "Thursday", open: "09:00", close: "22:00", closed: false },
    { day: "Friday", open: "09:00", close: "22:00", closed: false },
    { day: "Saturday", open: "09:00", close: "22:00", closed: false },
    { day: "Sunday", open: "09:00", close: "22:00", closed: false },
  ])

  // Update formData if restaurant changes (e.g. after reload)
  useEffect(() => {
    if (restaurant) {
      setFormData((prev) => ({
        ...prev,
        restaurantName: restaurant.restaurantName,
        email: restaurant.email,
        phone: restaurant.phone,
        address: restaurant.address,
        description: restaurant.description,
        cuisine: restaurant.cuisine,
        preparationTime: restaurant.preparationTime || 25,
      }))
    }
  }, [restaurant])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "preparationTime" ? Number(value) : value,
    }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleWeeklyHourChange = (idx: number, field: string, value: string | boolean) => {
    setWeeklyHours((prev) => prev.map((h, i) => i === idx ? { ...h, [field]: value } : h))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      await updateRestaurant(formData)

      toast({
        title: "Settings updated",
        description: "Your restaurant settings have been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update settings. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="border-2 hover:border-[#00A082] transition-all duration-300">
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>General Information</CardTitle>
                  <CardDescription>Update your restaurant's basic information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="restaurantName">Restaurant Name</Label>
                      <Input
                        id="restaurantName"
                        name="restaurantName"
                        value={formData.restaurantName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cuisine">Cuisine Type</Label>
                      <Input id="cuisine" name="cuisine" value={formData.cuisine} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" name="address" value={formData.address} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  {/* Removed old opening hours field and replaced with themed weekly hours UI */}
                  <div className="space-y-2">
                    <Label htmlFor="preparationTime">Average Preparation Time (minutes)</Label>
                    <Input
                      id="preparationTime"
                      name="preparationTime"
                      type="number"
                      value={formData.preparationTime}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="isOpen">Restaurant Status</Label>
                      <p className="text-sm text-muted-foreground">Set your restaurant as open or closed</p>
                    </div>
                    <Switch
                      id="isOpen"
                      checked={isOpen}
                      onCheckedChange={setIsOpen}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Opening Hours</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setOpeningHoursExpanded((v) => !v)}
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      {openingHoursExpanded ? "Hide Details" : "Edit Weekly Hours"}
                    </Button>
                    {openingHoursExpanded && (
                      <div className="mt-2 rounded-md p-3 space-y-3 bg-white border-2 border-[#f1f1f1]">
                        {weeklyHours.map((h, idx) => (
                          <div key={h.day} className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
                            <span className="w-24 font-medium text-primary">{h.day}</span>
                            <input
                              type="time"
                              className="border border-primary rounded px-2 py-1 bg-background text-foreground disabled:bg-muted"
                              value={h.open}
                              disabled={h.closed}
                              onChange={e => handleWeeklyHourChange(idx, 'open', e.target.value)}
                            />
                            <span className="mx-2 text-muted-foreground">to</span>
                            <input
                              type="time"
                              className="border border-primary rounded px-2 py-1 bg-background text-foreground disabled:bg-muted"
                              value={h.close}
                              disabled={h.closed}
                              onChange={e => handleWeeklyHourChange(idx, 'close', e.target.value)}
                            />
                            <label className="flex items-center ml-4 text-muted-foreground">
                              <input
                                type="checkbox"
                                className="mr-1 accent-primary"
                                checked={h.closed}
                                onChange={e => handleWeeklyHourChange(idx, 'closed', e.target.checked)}
                              />
                              Closed
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#00A082] hover:bg-[#008a6e] transition-colors duration-200"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="border-2 hover:border-[#00A082] transition-all duration-300">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive order and review notifications via email</p>
                  </div>
                  <Switch
                    id="emailNotifications"
                    checked={formData.emailNotifications}
                    onCheckedChange={(checked) => handleSwitchChange("emailNotifications", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="smsNotifications">SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive order notifications via SMS</p>
                  </div>
                  <Switch
                    id="smsNotifications"
                    checked={formData.smsNotifications}
                    onCheckedChange={(checked) => handleSwitchChange("smsNotifications", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="pushNotifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications in the browser or mobile app</p>
                  </div>
                  <Switch
                    id="pushNotifications"
                    checked={formData.pushNotifications}
                    onCheckedChange={(checked) => handleSwitchChange("pushNotifications", checked)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => {
                    toast({
                      title: "Notification settings saved",
                      description: "Your notification preferences have been updated.",
                    })
                  }}
                  className="bg-[#00A082] hover:bg-[#008a6e] transition-colors duration-200"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="border-2 hover:border-[#00A082] transition-all duration-300">
              <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
                <CardDescription>Manage your payment methods and bank details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Input id="bankName" defaultValue="Commercial Bank" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input id="accountNumber" defaultValue="1234567890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accountName">Account Holder Name</Label>
                  <Input id="accountName" defaultValue="Chaminda Perera" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branchCode">Branch Code</Label>
                  <Input id="branchCode" defaultValue="001" />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => {
                    toast({
                      title: "Payment settings saved",
                      description: "Your payment settings have been updated.",
                    })
                  }}
                  className="bg-[#00A082] hover:bg-[#008a6e] transition-colors duration-200"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Payment Details
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
