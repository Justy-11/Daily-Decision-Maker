"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, RefreshCw, Clock } from "lucide-react"

const activities = {
  indoor: [
    { name: "Bake cookies", emoji: "🍪", duration: "2-3 hours" },
    { name: "Movie marathon", emoji: "🎬", duration: "4-6 hours" },
    { name: "Board game night", emoji: "🎲", duration: "2-4 hours" },
    { name: "Learn a new recipe", emoji: "👨‍🍳", duration: "1-2 hours" },
    { name: "Organize your space", emoji: "🧹", duration: "2-4 hours" },
    { name: "Start a puzzle", emoji: "🧩", duration: "3-5 hours" },
  ],
  outdoor: [
    { name: "Go hiking", emoji: "🥾", duration: "3-5 hours" },
    { name: "Visit a park", emoji: "🌳", duration: "2-3 hours" },
    { name: "Have a picnic", emoji: "🧺", duration: "2-4 hours" },
    { name: "Go cycling", emoji: "🚴", duration: "1-3 hours" },
    { name: "Beach day", emoji: "🏖️", duration: "4-6 hours" },
    { name: "Outdoor photography", emoji: "📸", duration: "2-4 hours" },
  ],
  social: [
    { name: "Host a dinner party", emoji: "🍽️", duration: "4-6 hours" },
    { name: "Game night with friends", emoji: "🎮", duration: "3-5 hours" },
    { name: "Go to a concert", emoji: "🎵", duration: "3-4 hours" },
    { name: "Visit a museum", emoji: "🏛️", duration: "2-3 hours" },
    { name: "Try a new restaurant", emoji: "🍴", duration: "2-3 hours" },
    { name: "Attend a workshop", emoji: "🎨", duration: "2-4 hours" },
  ],
  solo: [
    { name: "Read a book", emoji: "📚", duration: "2-4 hours" },
    { name: "Take a long bath", emoji: "🛁", duration: "1-2 hours" },
    { name: "Journal writing", emoji: "📝", duration: "1-2 hours" },
    { name: "Meditation session", emoji: "🧘", duration: "30min-1 hour" },
    { name: "Solo coffee date", emoji: "☕", duration: "1-2 hours" },
    { name: "Nature walk", emoji: "🚶", duration: "1-3 hours" },
  ],
  creative: [
    { name: "Paint or draw", emoji: "🎨", duration: "2-4 hours" },
    { name: "Write a story", emoji: "✍️", duration: "2-5 hours" },
    { name: "Learn an instrument", emoji: "🎸", duration: "1-3 hours" },
    { name: "Photography project", emoji: "📷", duration: "3-5 hours" },
    { name: "Craft something", emoji: "✂️", duration: "2-4 hours" },
    { name: "Design a room", emoji: "🏠", duration: "2-3 hours" },
  ],
  active: [
    { name: "Go for a run", emoji: "🏃", duration: "30min-1 hour" },
    { name: "Try yoga", emoji: "🧘‍♀️", duration: "1-2 hours" },
    { name: "Play sports", emoji: "⚽", duration: "2-3 hours" },
    { name: "Go swimming", emoji: "🏊", duration: "1-2 hours" },
    { name: "Rock climbing", emoji: "🧗", duration: "2-4 hours" },
    { name: "Dance class", emoji: "💃", duration: "1-2 hours" },
  ],
}

interface WeekendActivityProps {
  isActive: boolean
  onDecision: () => void
}

export default function WeekendActivity({ isActive, onDecision }: WeekendActivityProps) {
  const [currentActivity, setCurrentActivity] = useState<any>(null)
  const [currentCategory, setCurrentCategory] = useState<string>("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [savedActivities, setSavedActivities] = useState(0)

  const generateActivity = () => {
    setIsGenerating(true)
    const categories = Object.keys(activities)
    const randomCategory = categories[Math.floor(Math.random() * categories.length)]
    const categoryActivities = activities[randomCategory as keyof typeof activities]
    const randomActivity = categoryActivities[Math.floor(Math.random() * categoryActivities.length)]

    setTimeout(() => {
      setCurrentActivity(randomActivity)
      setCurrentCategory(randomCategory)
      setIsGenerating(false)
      onDecision()
    }, 1000)
  }

  const saveActivity = () => {
    setSavedActivities((prev) => prev + 1)
    onDecision()
  }

  return (
    <Card
      className={`transform transition-all duration-300 ${isActive ? "ring-4 ring-teal-400 scale-105" : ""} hover:shadow-xl bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900 dark:to-cyan-900`}
    >
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-xl md:text-2xl">
          <MapPin className="h-5 w-5 md:h-6 md:w-6" />
          Weekend Activity Generator
        </CardTitle>
        <p className="text-muted-foreground text-sm md:text-base">Make your weekend awesome!</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <Button
            onClick={generateActivity}
            disabled={isGenerating}
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-2 px-3 md:py-3 md:px-6 rounded-full text-sm md:text-lg transform hover:scale-105 transition-all duration-200 w-full max-w-xs md:w-auto"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5 animate-spin" />
                <span className="hidden sm:inline">Finding ideas...</span>
                <span className="sm:hidden">Finding...</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">What Should I Do This Weekend? 🎉</span>
                <span className="sm:hidden">Weekend Ideas? 🎉</span>
              </>
            )}
          </Button>
        </div>

        {currentActivity && (
          <div className="text-center space-y-4 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-lg">
              <div className="flex justify-center gap-2 mb-3 flex-wrap">
                <Badge variant="secondary" className="capitalize text-xs md:text-sm">
                  {currentCategory}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 text-xs md:text-sm">
                  <Clock className="h-3 w-3" />
                  {currentActivity.duration}
                </Badge>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {currentActivity.emoji} {currentActivity.name}
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                Perfect for a {currentCategory} weekend activity!
              </p>
            </div>

            <div className="flex gap-2 md:gap-3 justify-center flex-wrap">
              <Button
                onClick={generateActivity}
                variant="outline"
                className="hover:bg-gray-100 dark:hover:bg-gray-700 bg-transparent text-sm md:text-base px-3 md:px-4"
              >
                <RefreshCw className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                Try Again
              </Button>
              <Button
                onClick={saveActivity}
                className="bg-green-500 hover:bg-green-600 text-white text-sm md:text-base px-3 md:px-4"
              >
                💾 Save This Idea
              </Button>
            </div>
          </div>
        )}

        <div className="text-center text-sm text-muted-foreground">Ideas saved: {savedActivities} 💡</div>
      </CardContent>
    </Card>
  )
}
