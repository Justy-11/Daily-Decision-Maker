"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, RotateCcw } from "lucide-react"

const comparisons = [
  { left: "🍕 Pizza", right: "🍔 Burgers" },
  { left: "☕ Coffee", right: "🍵 Tea" },
  { left: "🏖️ Beach", right: "🏔️ Mountains" },
  { left: "🌃 Night Owl", right: "🌅 Early Bird" },
  { left: "📚 Books", right: "🎬 Movies" },
  { left: "🏠 Stay In", right: "🎉 Go Out" },
  { left: "🐶 Dogs", right: "🐱 Cats" },
  { left: "🍦 Ice Cream", right: "🍰 Cake" },
  { left: "🎵 Music", right: "🔇 Silence" },
  { left: "🚗 Drive", right: "🚶 Walk" },
]

interface ThisOrThatProps {
  isActive: boolean
  onDecision: () => void
}

export default function ThisOrThat({ isActive, onDecision }: ThisOrThatProps) {
  const [currentComparison, setCurrentComparison] = useState(comparisons[0])
  const [score, setScore] = useState({ left: 0, right: 0 })
  const [totalChoices, setTotalChoices] = useState(0)

  const makeChoice = (choice: "left" | "right") => {
    setScore((prev) => ({
      ...prev,
      [choice]: prev[choice] + 1,
    }))
    setTotalChoices((prev) => prev + 1)
    nextComparison()
    onDecision()
  }

  const nextComparison = () => {
    const randomComparison = comparisons[Math.floor(Math.random() * comparisons.length)]
    setCurrentComparison(randomComparison)
  }

  return (
    <Card
      className={`transform transition-all duration-300 ${isActive ? "ring-4 ring-pink-400 scale-105" : ""} hover:shadow-xl bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900 dark:to-rose-900`}
    >
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Zap className="h-6 w-6" />
          This or That?
        </CardTitle>
        <p className="text-muted-foreground">Quick decisions, no overthinking!</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            onClick={() => makeChoice("left")}
            className="h-32 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-xl transform hover:scale-105 transition-all duration-200"
          >
            {currentComparison.left}
          </Button>

          <div className="flex items-center justify-center md:hidden">
            <span className="text-2xl font-bold text-gray-500">VS</span>
          </div>

          <Button
            onClick={() => makeChoice("right")}
            className="h-32 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-xl transform hover:scale-105 transition-all duration-200"
          >
            {currentComparison.right}
          </Button>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <span className="text-3xl font-bold text-gray-500">VS</span>
        </div>

        <div className="text-center">
          <Button
            onClick={nextComparison}
            variant="outline"
            className="hover:bg-gray-100 dark:hover:bg-gray-700 bg-transparent"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Skip This One
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-sm text-muted-foreground mb-2">Your Choices</div>
          <div className="flex justify-between text-lg font-semibold">
            <span>Left: {score.left}</span>
            <span>Right: {score.right}</span>
          </div>
          <div className="text-sm text-muted-foreground mt-2">Total decisions: {totalChoices} 🎯</div>
        </div>
      </CardContent>
    </Card>
  )
}
