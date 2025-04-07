import Link from "next/link"
import { Trophy, ExternalLink, AlertTriangle, ShieldAlert } from 'lucide-react'

export default function DisclaimerPage() {
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
            <Link href="/learn-more" className="text-sm font-medium transition-colors hover:text-primary relative group">
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
              <AlertTriangle className="h-4 w-4" />
              <span>Legal Information</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Disclaimer</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read this disclaimer carefully before using the Anime Fan Choice Awards website.
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-primary" />
                  <span>General Disclaimer</span>
                </h2>
                <p>
                Anime Fan Choice Awards is a completely fan-run, non-profit initiative created purely for entertainment, community engagement, and celebrating anime as a medium. This project is hosted exclusively online via our official website (Anime Fan Choice.com) and does not involve any commercial activity, physical events, merchandise, or financial gain of any kind.
                </p>
                <p>
                All anime titles, characters, images, and intellectual property referenced on this platform are the rightful property of their respective copyright holders. We do not claim ownership over any IP used or mentioned. The usage is strictly non-commercial and falls under fair use for commentary, parody, and fan expression (under Section 107 of the U.S. Copyright Act, for example).
                 <p>
              Categories such as "Otaku Rejects" are presented in a lighthearted, meme-spirited tone, and do not reflect the views of the organizers. All nominations are submitted anonymously by users, and we do not intend to harm, defame, or devalue any anime title, creator, or studio. The purpose is to foster open community interaction and fun through playful fan discussions.
                </p>
If you're a copyright holder or legal representative and believe anything on this site infringes your rights, please contact us immediately. We’re just a bunch of sleep-deprived anime fans — we’ll fix it faster than a recap episode.
                </p>

                <p>
                <i>No sponsors, no budget, just vibes. Please don’t sue us. We spent our last yen on domain hosting.</i>
                </p>

                <h2>
                    <b><li>Contact Us</li></b>
                    <p>contact@Anime Fan Choice.com</p>
                </h2>
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
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/learn-more" className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300">
                  Learn More
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/disclaimer" className="text-sm text-primary hover:text-primary/80 hover:translate-x-1 inline-block transition-transform duration-300">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/animefanchoice/?utm_source=ig_web_button_share_sheet" className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-transform duration-300">
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
