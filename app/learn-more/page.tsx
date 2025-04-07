import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Award,
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
  Vote,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function LearnMorePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Trophy className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold">Anime Fan Choice</span>
            <span className="hidden group-hover:inline-block text-primary animate-pulse">✨</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#categories"
              className="text-sm font-medium transition-colors hover:text-primary relative group"
            >
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#timeline" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Timeline
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#faq" className="text-sm font-medium transition-colors hover:text-primary relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div>
            <Button className="group">
              Nominate Now
              <Star className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-muted/30">
          <div className="container py-16 md:py-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Trophy className="h-4 w-4" />
                <span>Inaugural Season</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                The First-Ever Anime Fan Choice Awards
              </h1>
              <p className="text-xl text-muted-foreground">
                Be part of history as we launch the most transparent, fan-driven anime awards in the world.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">Join the Inaugural Season</span>
                  <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-primary/10"
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
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
                  <Lightbulb className="h-4 w-4" />
                  <span>Our Mission</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">By Fans, For Fans</h2>
                <p className="text-lg text-muted-foreground">
                  The Anime Fan Choice Awards was born from a simple observation: most anime awards are influenced by
                  industry connections, sponsorships, and corporate interests rather than pure fan appreciation.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that the true measure of an anime's impact is how it resonates with its audience. That's
                  why we've created an award system that is 100% driven by fan votes, with complete transparency in our
                  voting process.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-2 group">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 group-hover:rotate-12 transition-transform duration-300" />
                    <div>
                      <h3 className="font-medium">Transparent Voting</h3>
                      <p className="text-sm text-muted-foreground">Every vote is counted and verified.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 group">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 group-hover:rotate-12 transition-transform duration-300" />
                    <div>
                      <h3 className="font-medium">No Corporate Influence</h3>
                      <p className="text-sm text-muted-foreground">Free from industry bias and sponsorships.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 group">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 group-hover:rotate-12 transition-transform duration-300" />
                    <div>
                      <h3 className="font-medium">Community-Driven</h3>
                      <p className="text-sm text-muted-foreground">Categories shaped by fan feedback.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 group">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 group-hover:rotate-12 transition-transform duration-300" />
                    <div>
                      <h3 className="font-medium">Global Participation</h3>
                      <p className="text-sm text-muted-foreground">Open to anime fans worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src="/animefan.jpg"
                    alt="Anime fans celebrating"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-background rounded-xl p-4 shadow-lg border">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-10 w-10 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Inaugural Season</p>
                      <p className="text-2xl font-bold">2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inaugural Season Section */}
        <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
                <Calendar className="h-4 w-4" />
                <span>First Season</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Be Part of Something Historic</h2>
              <p className="text-lg text-muted-foreground">
                The inaugural Anime Fan Choice Awards marks the beginning of a new era in recognizing anime excellence
                through the lens of true fans.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="group overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 duration-300 border-primary/10 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    New Tradition
                  </Badge>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <span>First of Its Kind</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    This inaugural season establishes a new tradition in anime awards—one that truly represents fan
                    opinions without corporate influence.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 duration-300 border-primary/10 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    Community Building
                  </Badge>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Growing Together</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    As founding participants, you'll help shape the future of these awards and build a community of
                    passionate anime enthusiasts.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 duration-300 border-primary/10 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    Setting Standards
                  </Badge>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    <span>Defining Excellence</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Your participation helps establish the benchmark for what fans truly value in anime, creating a new
                    standard for recognition.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-primary/5"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 3 + 2}rem`,
                  }}
                >
                  ✦
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secure Nomination Process Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-square relative rounded-xl overflow-hidden border shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/50 to-transparent z-10"></div>
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Secure nomination form"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-8">
                    <div className="w-full max-w-md bg-background/80 backdrop-blur-sm p-6 rounded-lg border shadow-lg">
                      <div className="text-center mb-4">
                        <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                        <h3 className="text-lg font-bold">Secure Nomination Form</h3>
                        <p className="text-sm text-muted-foreground">Your data is encrypted and protected</p>
                      </div>
                      <div className="space-y-3">
                        <div className="h-8 w-full rounded bg-muted/70 animate-pulse"></div>
                        <div className="h-8 w-full rounded bg-muted/70 animate-pulse"></div>
                        <div className="h-8 w-full rounded bg-muted/70 animate-pulse"></div>
                        <div className="h-10 w-full rounded bg-primary/70 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-lg border">
                  <div className="flex items-center gap-3">
                    <Shield className="h-10 w-10 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Security Level</p>
                      <p className="text-2xl font-bold">Enterprise</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
                  <Lock className="h-4 w-4" />
                  <span>Secure Nomination Process</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Voice, Securely Counted</h2>
                <p className="text-lg text-muted-foreground">
                  For our inaugural season, we've implemented a state-of-the-art secure nomination system to ensure
                  every fan's voice is heard while maintaining the integrity of the process.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-lg">System-Validated Form</h3>
                      <p className="text-muted-foreground">
                        Our nomination form uses advanced validation techniques to verify submissions in real-time,
                        preventing duplicate entries and ensuring data integrity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-lg">End-to-End Encryption</h3>
                      <p className="text-muted-foreground">
                        All nomination data is encrypted from the moment you submit until it's securely stored in our
                        database, protecting your privacy and preventing tampering.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-lg">Identity Verification</h3>
                      <p className="text-muted-foreground">
                        A simple but effective verification process confirms each voter is a real person without
                        collecting unnecessary personal information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <Info className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-lg">Transparent Audit Trail</h3>
                      <p className="text-muted-foreground">
                        While maintaining voter privacy, we provide a transparent audit trail of all nominations and
                        votes to ensure the integrity of results.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="group mt-4">
                  Access Secure Nomination Form
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Otaku Picks & Rejects Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
                <Award className="h-4 w-4" />
                <span>Award Structure</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Otaku Picks & The Otaku Rejects</h2>
              <p className="text-lg text-muted-foreground">
                The Anime Fan Choice Awards are divided into two major sub-awards, celebrating both excellence and
                disappointment in anime.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              <div className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 bg-primary/10 rounded-full"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                        <h3 className="text-2xl font-bold">The Otaku Picks</h3>
                      </div>
                      <p className="text-muted-foreground">The best of the best, as chosen by the fans.</p>
                    </div>
                    <div className="text-3xl"></div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    These categories celebrate excellence in anime, highlighting the series and moments that truly
                    resonated with fans. From storytelling to animation quality, these awards recognize the pinnacle of
                    anime achievement.
                  </p>

                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 bg-destructive/10 rounded-full"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Skull className="h-6 w-6 text-destructive group-hover:rotate-12 transition-transform duration-300" />
                        <h3 className="text-2xl font-bold">The Otaku Rejects</h3>
                      </div>
                      <p className="text-muted-foreground">The most disappointing anime of the year.</p>
                    </div>
                    <div className="text-3xl"></div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    These categories acknowledge the anime that fell short of expectations. By highlighting
                    disappointments, we encourage the industry to learn from missteps and strive for better quality in
                    future productions.
                  </p>
        
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Award Categories Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
                <Medal className="h-4 w-4" />
                <span>Categories</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Award Categories</h2>
              <p className="text-lg text-muted-foreground">
                Explore the full range of categories in which fans can vote for their favorite (and least favorite)
                anime.
              </p>
            </div>

            <Tabs defaultValue="picks" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="picks" className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  <span>The Otaku Picks</span>
                </TabsTrigger>
                <TabsTrigger value="rejects" className="flex items-center gap-2">
                  <Skull className="h-4 w-4" />
                  <span>The Otaku Rejects</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="picks" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {otakuPicksCategories.map((category, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 duration-300 border-primary/10 hover:border-primary/30"
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          {category.icon}
                          <span>{category.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{category.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="rejects" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {otakuRejectsCategories.map((category, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 duration-300 border-destructive/10 hover:border-destructive/30"
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          {category.icon}
                          <span>{category.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{category.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Voting Process Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
                <Vote className="h-4 w-4" />
                <span>Voting Process</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How Voting Works</h2>
              <p className="text-lg text-muted-foreground">
                We've designed a secure, transparent voting system that ensures every fan's voice is heard while
                preventing manipulation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                <div className="space-y-12">
                  <div className="relative flex gap-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 z-10">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <div className="pt-3 space-y-2">
                      <h3 className="text-xl font-bold">Nomination Phase</h3>
                      <p className="text-muted-foreground">
                        Fans submit their nominations for each category through our secure, system-validated form. The
                        nomination period for our inaugural season runs from January 15 to February 28, 2025.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary mt-2">
                        <Lock className="h-4 w-4" />
                        <span>Secured by end-to-end encryption</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex gap-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 z-10">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div className="pt-3 space-y-2">
                      <h3 className="text-xl font-bold">Finalist Selection</h3>
                      <p className="text-muted-foreground">
                        The top 5 most-nominated titles in each category become the official finalists. These are
                        announced publicly with nomination counts for complete transparency on March 15, 2025.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary mt-2">
                        <Info className="h-4 w-4" />
                        <span>Verified by independent auditors</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex gap-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 z-10">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <div className="pt-3 space-y-2">
                      <h3 className="text-xl font-bold">Final Voting</h3>
                      <p className="text-muted-foreground">
                        Fans vote for their favorite among the finalists in each category from March 20 to April 20,
                        2025. One vote per verified account, with email and CAPTCHA verification to prevent bot voting.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary mt-2">
                        <Shield className="h-4 w-4" />
                        <span>Protected against manipulation</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex gap-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 z-10">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <div className="pt-3 space-y-2">
                      <h3 className="text-xl font-bold">Results Announcement</h3>
                      <p className="text-muted-foreground">
                        Winners of our inaugural season will be announced during our live-streamed awards ceremony on
                        May 15, 2025. Full voting statistics will be published afterward for transparency.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary mt-2">
                        <Trophy className="h-4 w-4" />
                        <span>First-ever fan-chosen winners</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 border rounded-lg bg-background shadow-sm">
                <div className="flex items-start gap-4">
                  <Calendar className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">Inaugural Season Timeline</h3>
                    <p className="text-muted-foreground mb-4">
                      Mark these important dates for the first-ever Anime Fan Choice Awards.
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
                      <div className="p-3 border rounded-lg bg-muted/30">
                        <p className="text-sm text-muted-foreground">Nominations Open</p>
                        <p className="font-medium">TBA</p>
                      </div>
                      <div className="p-3 border rounded-lg bg-muted/30">
                        <p className="text-sm text-muted-foreground">Finalists Announced</p>
                        <p className="font-medium">TBA</p>
                      </div>
                      <div className="p-3 border rounded-lg bg-muted/30">
                        <p className="text-sm text-muted-foreground">Voting Period</p>
                        <p className="font-medium">TBA</p>
                      </div>
                      <div className="p-3 border rounded-lg bg-muted/30">
                        <p className="text-sm text-muted-foreground">Awards Ceremony</p>
                        <p className="font-medium">TBA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
                <FileText className="h-4 w-4" />
                <span>Eligibility</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Eligibility Criteria</h2>
              <p className="text-lg text-muted-foreground">
                Learn which anime qualify for our inaugural season and how we ensure a fair competition.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">Release Date Requirements</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>
                          To be eligible for our inaugural season, anime must have aired at least one full season
                          between January 1, 2024, and December 31, 2024. For ongoing series that began in previous
                          years, only seasons that aired during this period will be considered.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">Format Eligibility</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>
                          TV series, OVAs, ONAs, and theatrical anime films are all eligible for consideration. However,
                          they compete in separate categories to ensure fair comparison between similar formats.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-medium">Regional Availability</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>
                          To ensure global fan participation, eligible anime must have been legally available in at
                          least three major regions (North America, Europe, Asia) through official streaming services,
                          broadcast television, or theatrical release.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-lg font-medium">Episode Count Requirements</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>
                          For TV series, a minimum of 3 episodes must have aired during the eligibility period to
                          qualify. This ensures that there is enough content for fans to make an informed judgment.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-lg font-medium">Definition of "Anime"</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>
                          For our awards, "anime" is defined as animation produced in Japan or as a Japan-led
                          co-production. We recognize that the definition of anime can be subjective, so edge cases are
                          evaluated by our community panel.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-lg font-medium">Special Considerations</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>
                          Remasters or re-releases of older anime are not eligible unless they contain substantial new
                          content. Compilation films that primarily reuse footage from TV series are also ineligible.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <div className="mt-8 p-6 border rounded-lg bg-muted/30">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-lg">Have a question about eligibility?</h3>
                    <p className="text-muted-foreground mb-4">
                      If you're unsure whether a particular anime qualifies for our inaugural season, or have questions
                      about our criteria, please reach out to our community team.
                    </p>
                    <Button variant="outline" size="sm">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Trophy className="h-4 w-4" />
              <span>Inaugural Season</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Be Part of Anime History</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Join the first-ever truly fan-driven anime awards and help establish a new tradition in recognizing anime
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto group relative overflow-hidden">
                <span className="relative z-10">Nominate Your Favorites</span>
                <span className="absolute inset-0 bg-secondary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Spread the Word
              </Button>
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
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
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
            &copy; {new Date().getFullYear()} Anime Fan Choice Awards. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

// Sample data for Otaku Picks categories
const otakuPicksCategories = [
  {
    title: "Peak Fiction Award",
    description: "The anime that defines excellence in storytelling, animation, and overall impact.",
    icon: <Trophy className="h-5 w-5 text-primary" />,
  },
  {
    title: "Most Underrated Anime",
    description: "A hidden gem that deserved more love and recognition from the broader anime community.",
    icon: <Star className="h-5 w-5 text-primary" />,
  },
  {
    title: "Hype Train Award",
    description: "The most electrifying anime that kept fans on the edge of their seats with each episode.",
    icon: <ThumbsUp className="h-5 w-5 text-primary" />,
  },
  {
    title: "The Best OST",
    description: "The music that hit just right in the feels and enhanced the anime experience.",
    icon: <Award className="h-5 w-5 text-primary" />,
  },
  {
    title: "Best Screenplay Adaptation",
    description: "The anime that did justice to its source material, whether manga, light novel, or other media.",
    icon: <FileText className="h-5 w-5 text-primary" />,
  },
  {
    title: "Best Emotional Impact",
    description: "The anime that hit the hardest emotionally, leaving a lasting impression on viewers.",
    icon: <Award className="h-5 w-5 text-primary" />,
  },
]

// Sample data for Otaku Rejects categories
const otakuRejectsCategories = [
  {
    title: "Biggest Letdown",
    description: "The anime that hurt expectations the most, failing to deliver on its promises or potential.",
    icon: <ThumbsDown className="h-5 w-5 text-destructive" />,
  },
  {
    title: "Sequel That Shouldn't Have Existed",
    description: "A follow-up that ruined everything good about its predecessor.",
    icon: <Skull className="h-8 w-8 text-destructive" />,
  },
  {
    title: "Most Wasted Potential",
    description: "Started with promise, ended in disappointment. The anime that squandered its good ideas.",
    icon: <ThumbsDown className="h-5 w-5 text-destructive" />,
  },
  {
    title: "Worst Adaptation",
    description: "A tragic anime adaptation that butchered its beloved source material.",
    icon: <FileText className="h-5 w-5 text-destructive" />,
  },
  {
    title: "Worst Animation",
    description: "The most painful-to-watch animation disaster that failed to meet basic quality standards.",
    icon: <Award className="h-5 w-5 text-destructive" />,
  },
  {
    title: 'The "Tried Too Hard" Award',
    description: "An anime that wanted to be deep but ended up being pretentious or cringe-worthy.",
    icon: <Award className="h-6.5 w-6.5 text-destructive" />,
  },
]

