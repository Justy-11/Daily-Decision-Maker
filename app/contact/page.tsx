"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare, Clock, CheckCircle, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    inquiryType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        inquiryType: "",
        message: "",
      })
    }, 5000)
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.inquiryType && formData.message

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
            <Mail className="inline-block mr-4 h-12 w-12 md:h-16 md:w-16" />
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            We'd love to hear from you! Get in touch with any questions or feedback.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Thank you for contacting us. We'll respond within 24-48 hours.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      This form will reset automatically in a few seconds.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
                        Type of Inquiry *
                      </label>
                      <Select onValueChange={handleSelectChange} value={formData.inquiryType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Question</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="feature">Feature Request</SelectItem>
                          <SelectItem value="business">Business Inquiry</SelectItem>
                          <SelectItem value="bug">Bug Report</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg text-lg transform hover:scale-105 transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Response Times */}
            <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Clock className="mr-3 h-5 w-5" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold text-green-600 dark:text-green-400">General Inquiries</div>
                  <div className="text-sm text-muted-foreground">24-48 hours</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-600 dark:text-blue-400">Technical Support</div>
                  <div className="text-sm text-muted-foreground">12-24 hours</div>
                </div>
                <div>
                  <div className="font-semibold text-purple-600 dark:text-purple-400">Business Inquiries</div>
                  <div className="text-sm text-muted-foreground">2-3 business days</div>
                </div>
                <div>
                  <div className="font-semibold text-orange-600 dark:text-orange-400">Bug Reports</div>
                  <div className="text-sm text-muted-foreground">6-12 hours</div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Contact */}
            <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">Other Ways to Reach Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold">Email Direct</div>
                  <div className="text-sm text-muted-foreground">hello@dailydecisionmaker.com</div>
                </div>
                <div>
                  <div className="font-semibold">Business Inquiries</div>
                  <div className="text-sm text-muted-foreground">business@dailydecisionmaker.com</div>
                </div>
                <div>
                  <div className="font-semibold">Technical Support</div>
                  <div className="text-sm text-muted-foreground">support@dailydecisionmaker.com</div>
                </div>
                <div>
                  <div className="font-semibold">Press & Media</div>
                  <div className="text-sm text-muted-foreground">press@dailydecisionmaker.com</div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl">
              <CardContent className="text-center py-6">
                <h3 className="text-lg font-bold mb-2">Quick Questions?</h3>
                <p className="text-white/90 text-sm mb-4">
                  Check our FAQ section for instant answers to common questions.
                </p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <Link href="/#faq">View FAQ</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
