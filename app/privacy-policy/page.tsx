import Link from "next/link"
import { Trophy, Lock, Shield, Eye, UserCheck, Database, Globe } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PrivacyPolicyPage() {
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
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-12 md:py-16 max-w-4xl">
          <div className="space-y-4 text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
              <Lock className="h-4 w-4" />
              <span>Legal Information</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Introduction</span>
                </h2>
                <p>
                  At Anime Fan Choice Awards ("we," "our," or "us"), we respect your privacy and are committed to
                  protecting your personal data. This privacy policy will inform you about how we look after your
                  personal data when you visit our website (regardless of where you visit it from) and tell you about
                  your privacy rights and how the law protects you.
                </p>
                <p>
                  This privacy policy applies to all information collected through our website (Anime Fan Choice.com), as
                  well as any related services, sales, marketing, or events (collectively, the "Services").
                </p>
                <p>
                  Please read this privacy policy carefully as it will help you understand what we do with the
                  information that we collect.
                </p>
              </section>

              <section>
                <h2 className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Privacy Policy</span>
                </h2>
                <p>
                  <li>We do not collect any personal information like names, adresses, or phone numbers unless explicitly provided by you through forms (like nominations).</li>
                  <li>We only collect email addresses during the voting period to keep the voting genuine and to provide updates.</li>
                  <li>Any data submitted (like anime titles or votes) is used solely for the purpose of displaying results and creating a fun, community-driven event.</li>
                  <li>We do not sell, rent, or share any user data with third parties. Ever.</li>
                  <li>Google services like reCAPTCHA or Google Sheets may be used to manage spam and store entries, which are subject to Google’s Privacy Policy.</li>
                  <li>Cookies? Just the digital kind. We might use basic cookies to improve your experience, but nothing creepy.</li>
                </p>
                <p><i>Trust us, we don’t even have enough brain cells to track people. </i></p>
                 </section>
              <section>
                <h2><b>Contact Us</b></h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                  <li>By email: contact@Anime Fan Choice.com</li>
                </ul>
              </section>

              <div className="text-sm text-muted-foreground border-t pt-6 mt-8">
                <p>Last updated: April 7, 2025</p>
              </div>
            </div>
          </div>
        </div>
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
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-primary hover:text-primary/80 hover:translate-x-1 inline-block transition-transform duration-300"
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

