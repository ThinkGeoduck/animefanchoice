"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {   Award,
  Calendar,
  CheckCircle,
  ChevronRight,
  FileText,
  HelpCircle,
  Info,
  Lightbulb,
  Lock,
  Medal,
  Shield,
  Skull,
  Star,
  ThumbsDown,
  ThumbsUp,
  Trophy,
  Users,
  Vote, } from "lucide-react"
import { Sparkles, StarIcon } from "lucide-react"
import { useRouter } from 'next/router'


// Replace the entire export default function with this updated version
export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 group">
            <Trophy className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold">Anime Fan Choice</span>
            <span className="hidden group-hover:inline-block text-primary animate-pulse"></span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#categories"
              className="text-sm font-medium transition-colors hover:text-primary relative group"
            >
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#timeline" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Timeline
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div>
            <Button className="group">
              Coming Soon
              <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10" />
          <div className="relative h-[70vh] overflow-hidden">
            <Image
              src="/placeholder.avif?height=1080&width=1920"
              alt="Anime collage background"
              fill
              className="object-cover"
              priority
            />
            {/* Floating stars decoration */}
            <div className="absolute inset-0 z-5 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-primary/20"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 1.5 + 0.5}rem`,
                    animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                >
                  ✦
                </div>
              ))}
            </div>
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col justify-center">
            <div className="max-w-2xl space-y-4">
              <div className="relative inline-block">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Anime Fan Choice Awards
                </h1>
                <span className="absolute -top-6 -right-6 text-primary text-2xl animate-pulse"></span>
              </div>
              <p className="text-xl text-muted-foreground md:text-2xl">
                The awards show that truly represents what anime fans love, by the fans, for the fans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden">
                  <Link href="/coming-soon">
                  <span className="relative z-10">Vote Now</span>
                  </Link>
                  <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
                <Link href="/learn-more">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
                <Users className="h-4 w-4" />
                <span>Fan-Driven</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">By Fans, For Fans</h2>
              <p className="text-lg text-muted-foreground">
                Unlike corporate awards that often reflect industry bias, the Anime Fan Choice Awards is a true
                representation of what anime enthusiasts love. Every vote counts, and every fan has a voice.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2 group">
                  <StarIcon className="h-5 w-5 text-primary mt-0.5 group-hover:rotate-12 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium">100% Fan Votes</h3>
                    <p className="text-muted-foreground">
                      No industry panels or corporate influence, just pure fan passion.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2 group">
                  <StarIcon className="h-5 w-5 text-primary mt-0.5 group-hover:rotate-12 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium">Transparent Process</h3>
                    <p className="text-muted-foreground">Clear voting procedures and publicly verifiable results.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 group">
                  <StarIcon className="h-5 w-5 text-primary mt-0.5 group-hover:rotate-12 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium">Community-First</h3>
                    <p className="text-muted-foreground">
                      Categories and nominees selected based on community feedback.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl group">
              <Image
                src="/placeholder.avif?height=800&width=800"
                alt="Anime fans celebrating"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-20 bg-muted/50">
          <div className="container space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
                <Award className="h-4 w-4" />
                <span>Awards</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Otaku Picks
              </h2>
              <p className="text-lg text-muted-foreground">
                Vote for the best.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                  
                  </div>
                  <Link href="#" className="absolute inset-0 z-10">
                    <span className="sr-only">View {category.title}</span>
                  </Link>
                </div>   
              ))}
            </div>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-12">
            The Otaku Rejects
          </h2>
          <p className="text-lg text-muted-foreground">
            Vote for the worst.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoriesW.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
              </div>
              <Link href="#" className="absolute inset-0 z-10">
                <span className="sr-only">View {category.title}</span>
              </Link>
            </div>
          ))}
            </div>
          
  
            <div className="flex justify-center">
              <Button variant="outline" size="lg" className="gap-2 group">
                View All Categories
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20 container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
              <Calendar className="h-4 w-4" />
              <span>Timeline</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Awards Schedule</h2>
            <p className="text-lg text-muted-foreground">
              Mark your calendar for these important dates in the Anime Fan Choice Awards.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-border" />
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex-1" />
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="h-4 w-4 rounded-full bg-primary relative">
                      <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping"></span>
                    </div>
                  </div>
                  <div
                    className={`flex-1 rounded-lg border bg-background p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50 ${index % 2 === 0 ? "text-right" : ""}`}
                  >
                    <time className="text-sm font-medium text-muted-foreground">{event.date}</time>
                    <h3 className="mt-1 text-xl font-bold">{event.title}</h3>
                    <p className="mt-2 text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Make Your Voice Heard</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Join thousands of anime fans and vote for your favorites in the Anime Fan Choice Awards.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto group relative overflow-hidden">
                <Link href="/coming-soon">
                <span className="relative z-10">Vote Now</span>
                </Link>
                <span className="absolute inset-0 bg-secondary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Share with Friends
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about the Anime Fan Choice Awards.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="space-y-2 p-6 border rounded-lg hover:border-primary/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span>{faq.question}</span>
                  {index === 0 && <span className="text-primary text-sm animate-pulse">New</span>}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
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
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#categories"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="#timeline"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Timeline
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
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Rules
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
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
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.reddit.com/r/animefanchoiceawards/"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Reddit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Hypern Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const categories = [
  {
    title: "Best Screenplay Adaptation",
    description: "For anime that did justice to its source material.",
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Peak Fiction Award",
    description: "The anime that defines excellence.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Most Underrated Anime",
    description: "A hidden gem that deserved more love.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Best Emotional Impact",
    description: "For anime that hit the hardest emotionally.",
    icon: <Star className="h-6 w-6" />,
  },
  {
    title: "Hype Train Award",
    description: "The most electrifying anime that kept fans on the edge.",
    icon: <Vote className="h-6 w-6" />,
  },
  {
    title: "Best Soundtrack",
    description: "The music that enhanced the anime experience.",
    icon: <Award className="h-6 w-6" />,
  },
]

const categoriesW= [
  { title: "Biggest Letdown",
    description: "The anime that hurt expectations the most.",
    icon: <ThumbsDown className="h-5 w-5 text-destructive" />,
  },
  {
    title: "Worst Sequel",
    description: "A follow-up that ruined everything.",
    icon: <Skull className="h-5 w-5 text-destructive" />,
  },
  {
    title: "Most Wasted Potential",
    description: "Shows that had a great premise but failed to deliver.",
    icon: <ThumbsDown className="h-5 w-5 text-destructive" />,
  },
  {
    title: "Worst Adaptation (Source Material Massacre Award)",
    description: "A tragic anime adaptation of a beloved manga/LN.",
    icon: <FileText className="h-5 w-5 text-destructive" />,
  },
  {
    title: "Worst Animation",
    description: "The most painful-to-watch animation disaster",
    icon: <Award className="h-5 w-5 text-destructive" />,
  },
  {
    title: `The "Tried Too Hard" Award`,
    description: "An anime that wanted to be deep but ended up cringe.",
   icon: <Award className="h-6.5 w-6.5 text-destructive" />,
  },
]

const timelineEvents = [
  {
    date: "TBA",
    title: "Nominations Open",
    description: "Fans can submit their nominations for each category.",
  },
  {
    date: "TBA",
    title: "Nominations Close",
    description: "Final nominees are tallied and announced.",
  },
  {
    date: "TBA",
    title: "Voting Begins",
    description: "Fans can vote for their favorites among the nominees.",
  },
  {
    date: "TBA",
    title: "Voting Ends",
    description: "Final votes are counted and verified.",
  },
  {
    date: "TBA",
    title: "Results Announced",
    description: "Winners are announced on our Website",
  },
]

const faqs = [
  {
    question: `What are the "The Otaku Picks" and "The Otaku Rejects"?`,
    answer:
      "The Anime Fan Choice Awards are further divided into two major sub-awards: The Otaku Picks and The Otaku Rejects. The Otaku Picks are the best of the best, while The Otaku Rejects are the most disappointing anime of the year. This allows fans to celebrate both their favorites and the ones that didn't meet expectations.",
  },
  {
    question: "How are nominees selected?",
    answer:
      "Nominees are selected through an open nomination process where fans can submit their choices. The most-nominated titles in each category become the official nominees.",
  },
  {
    question: "How does voting work?",
    answer:
      "Each fan gets one vote per category. We use email verification to ensure voting integrity. Results are tabulated and independently verified.",
  },
  {
    question: "Who can participate?",
    answer: "Anyone who loves anime can participate! The Anime Fan Choice Awards is open to fans worldwide.",
  },
  {
    question: "How can I watch the awards ceremony?",
    answer:
      "This being the first season of the Anime Fan Choice Awards, we will be directly announcing the winners on our website. We may consider a live ceremony in the future based on fan feedback.",
  },
]

