import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Eye, Cookie, BarChart3, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - Daily Decision Maker",
  description:
    "Learn how Daily Decision Maker protects your privacy and handles your data. GDPR compliant privacy policy.",
}

export default function PrivacyPolicyPage() {
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
            <Shield className="inline-block mr-4 h-12 w-12 md:h-16 md:w-16" />
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Your privacy matters to us. Learn how we protect your information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <div className="text-sm text-muted-foreground mb-2">Last Updated: December 27, 2024</div>
            <CardTitle className="text-2xl">Privacy Policy for Daily Decision Maker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            {/* Introduction */}
            <section>
              <p className="text-lg">
                At Daily Decision Maker ("we," "our," or "us"), we are committed to protecting your privacy and ensuring
                transparency about how we collect, use, and protect your information. This Privacy Policy explains our
                practices regarding your personal data when you use our website and services.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Eye className="mr-3 h-6 w-6" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact information when you reach out to us (name, email address)</li>
                    <li>Feedback and messages you send through our contact forms</li>
                    <li>Custom wheel options and preferences you create</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Information Automatically Collected</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Decision counters and usage statistics (anonymized)</li>
                    <li>Browser type, device information, and IP address</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website information</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Cookie className="mr-3 h-6 w-6" />
                Cookies and Tracking Technologies
              </h2>
              <div className="space-y-4">
                <p>We use cookies and similar technologies to enhance your experience:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic website functionality and theme preferences
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors use our site (Google Analytics)
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> Used by Google AdSense to display relevant advertisements
                  </li>
                </ul>
                <p>
                  You can control cookies through your browser settings. However, disabling certain cookies may affect
                  website functionality.
                </p>
              </div>
            </section>

            {/* Third-party Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Google AdSense</h3>
                  <p>
                    We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your
                    prior visits to our website or other websites. You can opt out of personalized advertising by
                    visiting Google's Ads Settings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Google Analytics</h3>
                  <p>
                    We use Google Analytics to analyze website traffic and user behavior. This helps us improve our
                    services. Google Analytics uses cookies to collect information anonymously.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <BarChart3 className="mr-3 h-6 w-6" />
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our decision-making tools and services</li>
                <li>Track usage statistics to improve user experience (decision counters, popular features)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send important updates about our services (if you've contacted us)</li>
                <li>Analyze website performance and user engagement</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Protection & Your Rights</h2>
              <div className="space-y-4">
                <p>Under GDPR and other privacy laws, you have the following rights regarding your personal data:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Right to Access:</strong> Request copies of your personal data
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Request correction of inaccurate data
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> Request deletion of your personal data
                  </li>
                  <li>
                    <strong>Right to Restrict Processing:</strong> Request limitation of data processing
                  </li>
                  <li>
                    <strong>Right to Data Portability:</strong> Request transfer of your data
                  </li>
                  <li>
                    <strong>Right to Object:</strong> Object to processing of your personal data
                  </li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided below.</p>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
              <p>
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this
                Privacy Policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Mail className="mr-3 h-6 w-6" />
                Contact Us
              </h2>
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p>
                  <strong>Email:</strong> privacy@dailydecisionmaker.com
                </p>
                <p>
                  <strong>Response Time:</strong> We aim to respond within 48 hours
                </p>
                <p>
                  <strong>Mailing Address:</strong> Daily Decision Maker Privacy Team
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
