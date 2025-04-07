import Link from "next/link"
import {
  Trophy,
  FileText,
  Scale,
  Gavel,
  AlertCircle,
  BookOpen,
  RefreshCw,
  Mail
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

export default function TermsOfServicePage() {
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
              <FileText className="h-4 w-4" />
              <span>Legal Information</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using the Anime Fan Choice Awards website.
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">

            <section>
              <h2 className="flex items-center gap-2">
                <Gavel className="h-5 w-5 text-primary" />
                <span>1. Acceptance of Terms</span>
              </h2>
              <p>
                By accessing or using the Anime Fan Choice.com website ("Service", "Site", or "Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree with any part of these Terms, you may not access the Site.
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>2. Eligibility</span>
              </h2>
              <p>
                You must be at least 13 years old to use this Service. If you are under 18, you must have your parent or guardian’s permission to use the Service. By using the Site, you represent and warrant that you meet all eligibility requirements.
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <span>3. User Conduct</span>
              </h2>
              <p>
                You agree not to use the Service to engage in any unlawful, harmful, abusive, harassing, defamatory, vulgar, or otherwise objectionable behavior. You are solely responsible for any content you submit, upload, or display through the Site.
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                <span>4. Intellectual Property</span>
              </h2>
              <p>
                All content on the Site, including text, images, graphics, logos, icons, and software, is the property of Anime Fan Choice or its content creators and is protected by intellectual property laws. You may not use, copy, reproduce, or distribute any content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>5. Third-Party Links</span>
              </h2>
              <p>
                Our Service may contain links to third-party websites or services that are not owned or controlled by Anime Fan Choice. We assume no responsibility for the content, privacy policies, or practices of any third-party sites.
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-2">
                <Gavel className="h-5 w-5 text-primary" />
                <span>6. Disclaimer</span>
              </h2>
              <p>
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties or representations regarding the accuracy, reliability, or availability of the Site. Use it at your own risk.
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                <span>7. Limitation of Liability</span>
              </h2>
              <p>
                In no event shall Anime Fan Choice, its directors, employees, partners, or affiliates be liable for any indirect, incidental, special, or consequential damages resulting from your use of the Site or any content therein.
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <span>8. Termination</span>
              </h2>
              <p>
                We reserve the right to suspend or terminate your access to the Service at our sole discretion, without notice or liability, for any reason, including violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-primary" />
                <span>9. Modifications to Terms</span>
              </h2>
              <p>
                We may update these Terms from time to time. If a revision is material, we will provide notice at least 30 days in advance of the new terms taking effect. Continued use of the Site constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>10. Contact Information</span>
              </h2>
              <p>
                If you have any questions or concerns about these Terms, feel free to contact us:
              </p>
              <ul>
                <li>Email: contact@Anime Fan Choice.com</li>
              </ul>
            </section>

          </div>
        </div>
      </main>
    </div>
  )
}
