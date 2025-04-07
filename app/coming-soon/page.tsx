"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trophy, Star, Calendar, Mail, ArrowRight, Twitter, Instagram, Facebook, Youtube, } from "lucide-react"
import { SparkleButton } from "@/components/sparkle-button"
import { Card, CardContent } from "@/components/ui/card"

export default function ComingSoonPage() {
  // Set the launch date to April 10th
  const launchDate = new Date("2025-04-10T00:00:00").getTime()
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [email, setEmail] = useState("")

  // Calculate time left
  function calculateTimeLeft() {
    const now = new Date().getTime()
    const difference = launchDate - now

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    }
  }

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])


  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Trophy className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold">Anime Fan Choice</span>
            <span className="hidden group-hover:inline-block text-primary animate-pulse">✨</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/learn-more"
              className="text-sm font-medium transition-colors hover:text-primary relative group"
            >
              Learn More
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/coming-soon" className="text-sm font-medium text-primary relative group">
              Coming Soon
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Countdown */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background gradient and decorations */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-primary/10 animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  fontSize: `${Math.random() * 2 + 0.5}rem`,
                  animationDuration: `${Math.random() * 5 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                ✦
              </div>
            ))}
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Calendar className="h-4 w-4" />
                <span>Launching April 10, 2025</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="relative">
                  Anime Fan Choice Awards
                  <span className="absolute -top-6 -right-6 text-primary text-2xl animate-pulse">✨</span>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
                The first truly fan-driven anime awards show is coming soon. Get ready to make your voice heard!
              </p>

              {/* Countdown Timer */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
                <CountdownCard value={timeLeft.days} label="Days" />
                <CountdownCard value={timeLeft.hours} label="Hours" />
                <CountdownCard value={timeLeft.minutes} label="Minutes" />
                <CountdownCard value={timeLeft.seconds} label="Seconds" />
              </div>
            </div>
          </div>
        </section>



        {/* Features Preview Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What to Expect</h2>
              <p className="text-lg text-muted-foreground">
                The Anime Fan Choice Awards will revolutionize how anime excellence is recognized.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <FeatureCard
                icon={<Trophy className="h-10 w-10 text-primary" />}
                title="Fan-Driven Voting"
                description="Your votes determine the winners, not industry panels or corporate sponsors."
              />
              <FeatureCard
                icon={<Star className="h-10 w-10 text-primary" />}
                title="Diverse Categories"
                description="From mainstream hits to hidden gems, we celebrate all aspects of anime."
              />
              <FeatureCard
                icon={<Calendar className="h-10 w-10 text-primary" />}
                title="Annual Celebration"
                description="Join us each year to recognize the best (and worst) that anime has to offer."
              />
            </div>

            <div className="text-center mt-12">
              <Link href="/learn-more">
                <Button variant="outline" size="lg" className="group">
                  Learn More About the Awards
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  fontSize: `${Math.random() * 2 + 1}rem`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                ✦
              </div>
            ))}
          </div>

          <div className="container text-center space-y-8 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Follow Our Journey</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Connect with us on social media for exclusive content, behind-the-scenes updates, and community
              discussions.
            </p>

            <div className="flex justify-center gap-6 mt-8">
              <SocialButton icon={<Twitter className="h-5 w-5" />} label="Twitter" />
              <SocialButton icon={<Instagram className="h-5 w-5" />} label="Instagram" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <Trophy className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold">Anime Fan Choice</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The awards show that truly represents what anime fans love, by the fans, for the fans.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/learn-more"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Learn More
                </Link>
              </li>
              <li>
                <Link
                  href="/coming-soon"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/animefanchoice/?utm_source=ig_web_button_share_sheet"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Anime Fan Choice Awards. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

// Countdown Card Component
function CountdownCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="group">
      <div className="bg-background border rounded-xl p-4 shadow-sm relative overflow-hidden group-hover:border-primary/50 transition-colors duration-300">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 text-center">
          <span className="text-4xl md:text-5xl font-bold block">{value.toString().padStart(2, "0")}</span>
          <span className="text-sm text-muted-foreground">{label}</span>
        </div>
      </div>
    </div>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="group overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 duration-300 border-primary/10 hover:border-primary/30">
      <CardContent className="pt-6">
        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

// Social Button Component
function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Button
      variant="outline"
      size="lg"
      className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Button>
  )
}

