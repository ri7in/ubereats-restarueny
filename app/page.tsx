import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
<div className="flex min-h-screen flex-col" style={{ background: "#f8f8f8" }}>
<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo" width={52} height={52} />
              <span className="font-bold">Kamu.LK</span>
            </Link>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register Restaurant</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" style={{ background: "#1e402f" }}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                    Grow your restaurant business with Kamu.LK
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
                    Join thousands of restaurants already delivering with Kamu.LK. Reach more customers and grow your
                    business.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg"     className="bg-[#e6ffe6] text-black hover:bg-[#d2ffd2]"                  >
                    <Link href="/register ">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/login">Login to Dashboard</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mr-0">
                <Image
                  src="/shang.jpg"
                  alt="Restaurant Dashboard"
                  width={850}
                  height={850}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started with Kamu.LK in three simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Register</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Create an account and provide your restaurant details</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. Get Approved</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our team will review your application and approve your restaurant</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>3. Start Selling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Add your menu, receive orders, and grow your business</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Kamu.LK . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
