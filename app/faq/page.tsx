import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, HelpCircle, Search, MessageCircle, Shield, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ThemeToggle } from "@/components/theme-toggle"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "FAQ - Daily Decision Maker",
  description:
    "Frequently asked questions about Daily Decision Maker. Get instant answers about our decision-making tools, privacy, and how to use our generators.",
}

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      questions: [
        {
          question: "What is Daily Decision Maker?",
          answer:
            "Daily Decision Maker is a free web application that helps you make everyday decisions through fun, interactive tools. We offer various generators for food choices, movie recommendations, weekend activities, and more to help reduce decision fatigue and make choosing enjoyable.",
        },
        {
          question: "Do I need to create an account to use the tools?",
          answer:
            "No account required! All our decision-making tools are completely free and accessible without registration. Simply visit our website and start using any generator immediately. Your privacy is important to us, so we don't require personal information to help you make decisions.",
        },
        {
          question: "How do the generators work?",
          answer:
            "Our generators use carefully curated databases of options combined with randomization algorithms. For example, our food generator has categories like breakfast, lunch, dinner, snacks, and desserts, each with multiple options. When you click generate, we randomly select from these curated lists to give you a suggestion.",
        },
        {
          question: "Is Daily Decision Maker really free?",
          answer:
            "Yes, absolutely! All our core decision-making tools are completely free to use. We support the site through non-intrusive advertisements, but all generators and features remain free for everyone. There are no hidden fees, premium tiers, or subscription requirements.",
        },
      ],
    },
    {
      title: "Using the Tools",
      icon: "🛠️",
      questions: [
        {
          question: "Can I customize the options in the generators?",
          answer:
            "Yes! Several of our tools allow customization. The Spin the Wheel generator lets you edit all options to create your own custom decision wheel. Other generators use our curated databases, but we're always adding new options based on user feedback.",
        },
        {
          question: "What should I do if I don't like the suggestion?",
          answer:
            "Simply click 'Try Again' or the refresh button! Our generators are designed for multiple uses. Keep generating until you find something that appeals to you, or use it as inspiration to think of similar alternatives. Remember, these are suggestions to help spark ideas, not final decisions.",
        },
        {
          question: "How accurate are the movie and show recommendations?",
          answer:
            "Our movie picker includes popular titles across various genres and platforms. While we can't guarantee you'll love every suggestion, we've curated a diverse selection of well-regarded content. The recommendations are meant to help you discover something new or remind you of something you wanted to watch.",
        },
        {
          question: "Can I use these tools for important life decisions?",
          answer:
            "Our tools are designed for everyday, low-stakes decisions like what to eat, watch, or do for fun. We strongly recommend against using them for important life, financial, medical, or legal decisions. For significant choices, please consult with appropriate professionals or trusted advisors.",
        },
      ],
    },
    {
      title: "Privacy & Data",
      icon: "🔒",
      questions: [
        {
          question: "Do you track my decisions or choices?",
          answer:
            "We only track basic, anonymized usage statistics like how many times generators are used and which features are most popular. We do NOT store your individual choices, decisions, or personal preferences. Your specific food choices, movie picks, or wheel spins are not recorded or tracked.",
        },
        {
          question: "What information do you collect about me?",
          answer:
            "We collect minimal information: basic analytics data (page views, device type), any feedback you voluntarily provide, and standard web server logs. We use cookies for essential site functionality and analytics. No personal identification is required or collected during normal use of our tools.",
        },
        {
          question: "Do you share my data with third parties?",
          answer:
            "We do not sell or share personal data. We use Google Analytics for website statistics and Google AdSense for advertisements. These services may use cookies according to their privacy policies. We encourage you to review our full Privacy Policy for complete details about data handling.",
        },
        {
          question: "How can I delete my data?",
          answer:
            "Since we don't store personal decision data, there's typically nothing to delete from normal tool usage. If you've contacted us via email, you can request deletion of that correspondence. For any data concerns, please contact us at privacy@dailydecisionmaker.com.",
        },
      ],
    },
    {
      title: "Technical Support",
      icon: "⚙️",
      questions: [
        {
          question: "The generators aren't working properly. What should I do?",
          answer:
            "First, try refreshing your browser page. If issues persist, check that JavaScript is enabled in your browser. Clear your browser cache and cookies for our site. If you're still experiencing problems, please contact us with details about your device, browser, and the specific issue you're encountering.",
        },
        {
          question: "Does the site work on mobile devices?",
          answer:
            "Yes! Our website is fully responsive and optimized for mobile phones and tablets. All generators and features work seamlessly across devices. If you experience any mobile-specific issues, please let us know so we can address them quickly.",
        },
        {
          question: "Which browsers are supported?",
          answer:
            "Daily Decision Maker works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience. Internet Explorer is not supported due to its outdated technology.",
        },
        {
          question: "Why are the ads not loading or appearing incorrectly?",
          answer:
            "Ad display can be affected by ad blockers, browser settings, or network issues. While we respect your choice to use ad blockers, ads help us keep the site free. If ads are displaying incorrectly without an ad blocker, please contact our technical support team.",
        },
      ],
    },
    {
      title: "Features & Suggestions",
      icon: "💡",
      questions: [
        {
          question: "Can you add more options to the food generator?",
          answer:
            "We're always expanding our databases! We regularly add new food options, restaurants types, and cuisines based on user feedback and trending preferences. If you have specific suggestions for foods or categories we're missing, please contact us with your ideas.",
        },
        {
          question: "Will you add more decision-making tools?",
          answer:
            "We're constantly developing new generators and tools. Some ideas we're exploring include outfit choosers, gift idea generators, and travel destination pickers. Follow us on social media or check back regularly for new features and announcements.",
        },
        {
          question: "How can I suggest improvements or report bugs?",
          answer:
            "We love hearing from our users! You can contact us through our Contact page, email us directly, or reach out via social media. For bug reports, please include details about what happened, what browser you're using, and any error messages you saw.",
        },
        {
          question: "Do you have an API for developers?",
          answer:
            "Currently, we don't offer a public API, but it's something we're considering for the future. If you're a developer interested in integrating our decision-making tools, please contact us to discuss potential partnerships or collaboration opportunities.",
        },
      ],
    },
  ]

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
            <HelpCircle className="inline-block mr-4 h-12 w-12 md:h-16 md:w-16" />
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Find quick answers to common questions about our decision-making tools
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-xl text-center">
            <CardContent className="py-6">
              <Search className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">25+</div>
              <div className="text-sm text-muted-foreground">Common Questions Answered</div>
            </CardContent>
          </Card>
          <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-xl text-center">
            <CardContent className="py-6">
              <Clock className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
              <div className="text-sm text-muted-foreground">Instant Access to Answers</div>
            </CardContent>
          </Card>
          <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-xl text-center">
            <CardContent className="py-6">
              <MessageCircle className="h-8 w-8 mx-auto mb-2 text-purple-500" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">Fast</div>
              <div className="text-sm text-muted-foreground">Support Response Times</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left hover:text-purple-600 dark:hover:text-purple-400">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Have Questions */}
        <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl mt-8">
          <CardContent className="text-center py-12">
            <MessageCircle className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-6 text-white/90">Can't find what you're looking for? We're here to help!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
              >
                Contact Support
                <MessageCircle className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center bg-white/20 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white/30 transition-colors border border-white/30"
              >
                Try Our Tools
                <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl mt-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Shield className="mr-3 h-6 w-6" />
              Quick Tips for Best Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">🎯 For Best Results</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Use our generators when you're genuinely open to suggestions. The more flexible you are, the more
                    helpful our tools become!
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">🔄 Try Multiple Times</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Don't settle for the first suggestion if it doesn't appeal to you. Keep generating until something
                    sparks your interest.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">📱 Mobile Friendly</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    All our tools work perfectly on phones and tablets. Make decisions on the go, wherever you are!
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">💡 Share Ideas</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Have suggestions for new features or improvements? We love hearing from our users and regularly
                    implement great ideas.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
