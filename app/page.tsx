"use client"

import { useState, useRef } from "react"
import Header from "@/components/header"
import FoodGenerator from "@/components/food-generator"
import MoviePicker from "@/components/movie-picker"
import SpinWheel from "@/components/spin-wheel"
import ThisOrThat from "@/components/this-or-that"
import MagicBall from "@/components/magic-ball"
import DailyChallenge from "@/components/daily-challenge"
import WeekendActivity from "@/components/weekend-activity"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sparkles, Shuffle } from "lucide-react"

const generators = ["food", "movie", "wheel", "thisorthat", "magicball", "challenge", "weekend"]

export default function HomePage() {
  const [activeGenerator, setActiveGenerator] = useState<string | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const foodRef = useRef<HTMLDivElement>(null)
  const movieRef = useRef<HTMLDivElement>(null)
  const wheelRef = useRef<HTMLDivElement>(null)
  const thisOrThatRef = useRef<HTMLDivElement>(null)
  const magicBallRef = useRef<HTMLDivElement>(null)
  const challengeRef = useRef<HTMLDivElement>(null)
  const weekendRef = useRef<HTMLDivElement>(null)

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  const randomGenerator = () => {
    const randomGen = generators[Math.floor(Math.random() * generators.length)]
    setActiveGenerator(randomGen)
    triggerConfetti()

    // Scroll to the activated generator
    setTimeout(() => {
      let targetRef
      switch (randomGen) {
        case "food":
          targetRef = foodRef
          break
        case "movie":
          targetRef = movieRef
          break
        case "wheel":
          targetRef = wheelRef
          break
        case "thisorthat":
          targetRef = thisOrThatRef
          break
        case "magicball":
          targetRef = magicBallRef
          break
        case "challenge":
          targetRef = challengeRef
          break
        case "weekend":
          targetRef = weekendRef
          break
      }

      if (targetRef?.current) {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 dark:from-purple-900 dark:via-pink-900 dark:to-red-900">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            >
              🎉
            </div>
          ))}
        </div>
      )}

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-40">
        <ThemeToggle />
      </div>

      {/* Header */}
      <Header />

      {/* Ad Banner */}
      <div className="mx-auto max-w-6xl px-4 mb-8">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-center text-gray-600 dark:text-gray-300">
          Ad Space - Banner (728x90)
        </div>
      </div>

      {/* Random Everything Button */}
      <div className="text-center mb-8 px-4">
        <Button
          onClick={randomGenerator}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full text-sm md:text-lg shadow-lg transform hover:scale-105 transition-all duration-200 w-full max-w-sm md:w-auto"
        >
          <Shuffle className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
          <span className="hidden sm:inline">Feeling Lucky? Random Generator!</span>
          <span className="sm:hidden">Feeling Lucky?</span>
          <Sparkles className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar Ad */}
          <div className="hidden lg:block">
            <div className="sticky top-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-center text-gray-600 dark:text-gray-300 mb-4">
                Ad Space - Sidebar (300x250)
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-center text-gray-600 dark:text-gray-300">
                Ad Space - Sidebar (300x600)
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div ref={foodRef}>
              <FoodGenerator isActive={activeGenerator === "food"} onDecision={triggerConfetti} />
            </div>

            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-center text-gray-600 dark:text-gray-300">
              Ad Space - Content (728x90)
            </div>

            <div ref={movieRef}>
              <MoviePicker isActive={activeGenerator === "movie"} onDecision={triggerConfetti} />
            </div>

            <div ref={wheelRef}>
              <SpinWheel isActive={activeGenerator === "wheel"} onDecision={triggerConfetti} />
            </div>

            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-center text-gray-600 dark:text-gray-300">
              Ad Space - Content (300x250)
            </div>

            <div ref={thisOrThatRef}>
              <ThisOrThat isActive={activeGenerator === "thisorthat"} onDecision={triggerConfetti} />
            </div>

            <div ref={magicBallRef}>
              <MagicBall isActive={activeGenerator === "magicball"} onDecision={triggerConfetti} />
            </div>

            <div ref={challengeRef}>
              <DailyChallenge isActive={activeGenerator === "challenge"} onDecision={triggerConfetti} />
            </div>

            <div ref={weekendRef}>
              <WeekendActivity isActive={activeGenerator === "weekend"} onDecision={triggerConfetti} />
            </div>
          </div>

          {/* Right Sidebar Ad */}
          <div className="hidden lg:block">
            <div className="sticky top-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-center text-gray-600 dark:text-gray-300 mb-4">
                Ad Space - Sidebar (300x250)
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-center text-gray-600 dark:text-gray-300">
                Ad Space - Sidebar (300x600)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner Ad */}
      <div className="mx-auto max-w-6xl px-4 mb-8">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-center text-gray-600 dark:text-gray-300">
          Ad Space - Bottom Banner (728x90)
        </div>
      </div>

      <Footer />
    </div>
  )
}
