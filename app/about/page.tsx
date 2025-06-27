import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Heart, Target, Users, Lightbulb, Zap, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us - Daily Decision Maker",
  description:
    "Learn about Daily Decision Maker's mission to help people make everyday decisions through fun, interactive tools. Reduce decision fatigue with our entertaining generators.",
}

export default function AboutPage() {
  const features = [
    {
      icon: "🍽️",
      title: "Food Generator",
      description: "Never wonder 'what should I eat?' again with our smart meal suggestions",
    },
    {
      icon: "🎬",
      title: "Movie Picker",
      description: "End endless scrolling with personalized movie and show recommendations",
    },
    {
      icon: "🎯",
      title: "Spin the Wheel",
      description: "Customizable decision wheel for any choice you need to make",
    },
    {
      icon: "⚡",
      title: "This or That",
      description: "Quick binary decisions made fun with our comparison game",
    },
    {
      icon: "🔮",
      title: "Magic Decision Ball",
      description: "Get mystical guidance for your yes/no questions",
    },
    {
      icon: "📅",
      title: "Daily Challenges",
      description: "Engage with thought-provoking 'Would You Rather' questions",
    },
    {
      icon: "🎉",
      title: "Weekend Planner",
      description: "Discover exciting activities to make your weekends awesome",
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
            <Heart className="inline-block mr-4 h-12 w-12 md:h-16 md:w-16" />
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white/90">Making everyday decisions fun, fast, and stress-free</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16 space-y-8">
        {/* Mission Statement */}
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center">
              <Target className="mr-3 h-8 w-8" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="mb-6">
              At Daily Decision Maker, we believe that life is too short to spend it stuck in decision paralysis. Our
              mission is to help people make everyday decisions through fun, interactive tools that turn choice-making
              into an enjoyable experience.
            </p>
            <p>
              We're here to reduce decision fatigue, spark creativity, and add a little joy to those moments when you
              just can't decide. Whether you're choosing what to eat, what to watch, or what to do this weekend, we've
              got you covered with delightful, randomized suggestions.
            </p>
          </CardContent>
        </Card>

        {/* Why We Built This */}
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center">
              <Lightbulb className="mr-3 h-8 w-8" />
              Why We Built This
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            <p>
              <strong>Decision fatigue is real.</strong> Studies show that the average person makes over 35,000
              decisions per day, and many of these are small, everyday choices that shouldn't consume our mental energy.
            </p>
            <p>
              We noticed that people often spend more time deciding what to eat for lunch than actually eating it, or
              scroll through Netflix for 30 minutes without watching anything. These micro-decisions add up and drain
              our cognitive resources.
            </p>
            <p>
              <strong>Our solution?</strong> Take the stress out of small decisions by making them fun, fast, and
              sometimes delightfully random. By gamifying the decision-making process, we help you save mental energy
              for the choices that truly matter.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="font-semibold text-blue-800 dark:text-blue-200">
                "The best decision is often just making a decision. We're here to help you make it with a smile." -
                Daily Decision Maker Team
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center">
              <Zap className="mr-3 h-8 w-8" />
              Our Decision-Making Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center">
              <Star className="mr-3 h-8 w-8" />
              Our Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">50K+</div>
                <div className="text-gray-600 dark:text-gray-300">Decisions Made Daily</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">95%</div>
                <div className="text-gray-600 dark:text-gray-300">User Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">2 Min</div>
                <div className="text-gray-600 dark:text-gray-300">Average Decision Time</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center">
              <Users className="mr-3 h-8 w-8" />
              Meet the Founder
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg max-w-md">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  J
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Justy</h3>
                <Badge variant="secondary" className="mb-3">
                  Founder & Developer
                </Badge>
                <p className="text-gray-600 dark:text-gray-300">
                  Passionate about solving everyday problems through technology
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">🎯 Simplicity First</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We believe the best solutions are simple ones. Our tools are designed to be intuitive and accessible
                    to everyone.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">🎉 Fun & Engaging</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Decision-making doesn't have to be boring. We add personality, humor, and delight to every
                    interaction.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">🔒 Privacy Focused</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your decisions are personal. We don't store your choices or track your preferences beyond basic
                    analytics.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">🌍 Inclusive Design</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our tools work for everyone, regardless of age, background, or decision-making style.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Make Decisions Fun?</h2>
            <p className="text-xl mb-6 text-white/90">
              Join thousands of users who've already simplified their daily choices
            </p>
            <Link
              href="/"
              className="inline-flex items-center bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              Start Making Decisions
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
