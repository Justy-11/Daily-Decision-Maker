"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UtensilsCrossed, RefreshCw, Heart } from "lucide-react"

const foodData = {
  breakfast: ["🥞 Pancakes", "🍳 Scrambled Eggs", "🥣 Oatmeal", "🧇 Waffles", "🥐 Croissant", "🍌 Smoothie Bowl"],
  lunch: ["🍕 Pizza", "🥗 Caesar Salad", "🌯 Wrap", "🍜 Ramen", "🥪 Sandwich", "🍲 Soup"],
  dinner: ["🍝 Pasta", "🍖 Steak", "🍛 Curry", "🐟 Grilled Fish", "🌮 Tacos", "🍗 Roasted Chicken"],
  snacks: ["🍿 Popcorn", "🥨 Pretzel", "🍎 Apple", "🧀 Cheese & Crackers", "🥜 Mixed Nuts", "🍇 Grapes"],
  desserts: ["🍰 Cake", "🍦 Ice Cream", "🍪 Cookies", "🍫 Chocolate", "🧁 Cupcake", "🍮 Pudding"],
}

interface FoodGeneratorProps {
  isActive: boolean
  onDecision: () => void
}

export default function FoodGenerator({ isActive, onDecision }: FoodGeneratorProps) {
  const [currentFood, setCurrentFood] = useState<string>("")
  const [currentCategory, setCurrentCategory] = useState<string>("")
  const [isSpinning, setIsSpinning] = useState(false)
  const [decisions, setDecisions] = useState(0)

  const generateFood = () => {
    setIsSpinning(true)
    const categories = Object.keys(foodData)
    const randomCategory = categories[Math.floor(Math.random() * categories.length)]
    const foods = foodData[randomCategory as keyof typeof foodData]
    const randomFood = foods[Math.floor(Math.random() * foods.length)]

    setTimeout(() => {
      setCurrentFood(randomFood)
      setCurrentCategory(randomCategory)
      setIsSpinning(false)
      onDecision()
    }, 1000)
  }

  const acceptChoice = () => {
    setDecisions((prev) => prev + 1)
    onDecision()
  }

  return (
    <Card
      className={`transform transition-all duration-300 ${isActive ? "ring-4 ring-yellow-400 scale-105" : ""} hover:shadow-xl bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900`}
    >
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <UtensilsCrossed className="h-6 w-6" />
          What Should I Eat?
        </CardTitle>
        <p className="text-muted-foreground">Hungry but can't decide? Let us pick for you!</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <Button
            onClick={generateFood}
            disabled={isSpinning}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-full text-lg transform hover:scale-105 transition-all duration-200"
          >
            {isSpinning ? (
              <>
                <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                Choosing...
              </>
            ) : (
              "What Should I Eat? 🍽️"
            )}
          </Button>
        </div>

        {currentFood && (
          <div className="text-center space-y-4 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <Badge className="mb-2" variant="secondary">
                {currentCategory}
              </Badge>
              <div className="text-4xl font-bold text-gray-800 dark:text-white">{currentFood}</div>
            </div>

            <div className="flex gap-3 justify-center">
              <Button
                onClick={generateFood}
                variant="outline"
                className="hover:bg-gray-100 dark:hover:bg-gray-700 bg-transparent"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              <Button onClick={acceptChoice} className="bg-green-500 hover:bg-green-600 text-white">
                <Heart className="mr-2 h-4 w-4" />
                I'll Take It!
              </Button>
            </div>
          </div>
        )}

        <div className="text-center text-sm text-muted-foreground">Decisions made: {decisions} 🎯</div>
      </CardContent>
    </Card>
  )
}
