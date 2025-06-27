import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Scale, AlertTriangle, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service - Daily Decision Maker",
  description:
    "Terms of Service and usage guidelines for Daily Decision Maker. Learn about your rights and responsibilities.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 dark:from-purple-900 dark:via-pink-900 dark:to-red-900">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-40">
        <ThemeToggle />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Daily Decision Maker
            </Link>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <FileText className="inline-block mr-4 h-12 w-12 md:h-16 md:w-16" />
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Please read these terms carefully before using our service.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <div className="text-sm text-muted-foreground mb-2">Last Updated: December 27, 2024</div>
            <CardTitle className="text-2xl">Terms of Service for Daily Decision Maker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            {/* Introduction */}
            <section>
              <p className="text-lg">
                Welcome to Daily Decision Maker. These Terms of Service ("Terms") govern your use of our website and
                services. By accessing or using our service, you agree to be bound by these Terms. If you disagree with
                any part of these terms, you may not access the service.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Scale className="mr-3 h-6 w-6" />
                Acceptance of Terms
              </h2>
              <div className="space-y-4">
                <p>
                  By accessing and using Daily Decision Maker, you accept and agree to be bound by the terms and
                  provision of this agreement. Additionally, when using this website's particular services, you shall be
                  subject to any posted guidelines or rules applicable to such services.
                </p>
                <p>These Terms apply to all visitors, users, and others who access or use the service.</p>
              </div>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Description of Service</h2>
              <div className="space-y-4">
                <p>
                  Daily Decision Maker is an entertainment website that provides interactive decision-making tools
                  including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Random food generators and meal suggestions</li>
                  <li>Movie and TV show recommendation tools</li>
                  <li>Interactive spin wheels for decision making</li>
                  <li>"This or That" comparison games</li>
                  <li>Magic decision ball for yes/no questions</li>
                  <li>Daily challenges and weekend activity suggestions</li>
                </ul>
                <p>
                  Our service is intended for entertainment and assistance with everyday decisions. It should not be
                  used for making important life, financial, medical, or legal decisions.
                </p>
              </div>
            </section>

            {/* Age Restrictions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Age Restrictions</h2>
              <div className="space-y-4">
                <p>
                  You must be at least 13 years old to use this service. If you are under 18, you represent that you
                  have your parent's or guardian's permission to use the service.
                </p>
                <p>
                  Users under 13 are not permitted to use our service. If we learn that we have collected personal
                  information from a child under 13, we will delete that information as quickly as possible.
                </p>
              </div>
            </section>

            {/* Use Restrictions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <AlertTriangle className="mr-3 h-6 w-6" />
                Acceptable Use
              </h2>
              <div className="space-y-4">
                <p>You agree not to use the service to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Transmit any harmful, threatening, abusive, or defamatory content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Use automated systems to access the service (bots, scrapers, etc.)</li>
                  <li>Impersonate any person or entity</li>
                  <li>Collect or harvest any personally identifiable information</li>
                  <li>Use the service for any commercial purpose without permission</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Intellectual Property Rights</h2>
              <div className="space-y-4">
                <p>
                  The service and its original content, features, and functionality are and will remain the exclusive
                  property of Daily Decision Maker and its licensors. The service is protected by copyright, trademark,
                  and other laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                  perform, republish, download, store, or transmit any of the material on our service without prior
                  written consent.
                </p>
              </div>
            </section>

            {/* User Content */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">User-Generated Content</h2>
              <div className="space-y-4">
                <p>
                  Our service may allow you to create, submit, or display content such as custom wheel options or
                  feedback. By creating or submitting content, you grant us a non-exclusive, royalty-free, worldwide
                  license to use, modify, and display such content in connection with the service.
                </p>
                <p>
                  You represent and warrant that you own or have the necessary rights to any content you submit and that
                  such content does not violate these Terms.
                </p>
              </div>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Disclaimers</h2>
              <div className="space-y-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="font-semibold">IMPORTANT DISCLAIMER:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Our service is provided for entertainment purposes only</li>
                  <li>Decisions generated by our tools should not be used for important life choices</li>
                  <li>We do not guarantee the accuracy, completeness, or usefulness of any information</li>
                  <li>The service is provided "as is" without warranties of any kind</li>
                  <li>We do not endorse any specific foods, movies, or activities suggested by our tools</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
              <div className="space-y-4">
                <p>
                  In no event shall Daily Decision Maker, its directors, employees, partners, agents, suppliers, or
                  affiliates be liable for any indirect, incidental, special, consequential, or punitive damages,
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                  resulting from your use of the service.
                </p>
                <p>
                  Our total liability to you for all claims arising from or relating to the service shall not exceed the
                  amount you paid us to use the service in the 12 months preceding the claim.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Termination</h2>
              <div className="space-y-4">
                <p>
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason
                  whatsoever, including without limitation if you breach the Terms.
                </p>
                <p>Upon termination, your right to use the service will cease immediately.</p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Shield className="mr-3 h-6 w-6" />
                Governing Law
              </h2>
              <div className="space-y-4">
                <p>
                  These Terms shall be interpreted and governed by the laws of the jurisdiction in which Daily Decision
                  Maker operates, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these Terms or your use of the service shall be resolved through binding
                  arbitration or in the courts of competent jurisdiction.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will try to provide at least 30 days notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p>
                  <strong>Email:</strong> legal@dailydecisionmaker.com
                </p>
                <p>
                  <strong>Subject Line:</strong> Terms of Service Inquiry
                </p>
                <p>
                  <strong>Response Time:</strong> We aim to respond within 5 business days
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
