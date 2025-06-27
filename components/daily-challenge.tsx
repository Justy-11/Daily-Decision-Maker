"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, TrendingUp } from "lucide-react"

const challenges = [
  {
    question: "Would you rather have the ability to fly or be invisible?",
    optionA: "Fly ✈️",
    optionB: "Be Invisible 👻",
    percentA: 65,
    percentB: 35,
  },
  {
    question: "Would you rather always be 10 minutes late or 20 minutes early?",
    optionA: "10 min late ⏰",
    optionB: "20 min early 🕐",
    percentA: 30,
    percentB: 70,
  },
  {
    question: "Would you rather have unlimited money or unlimited time?",
    optionA: "Unlimited money 💰",
    optionB: "Unlimited time ⏳",
    percentA: 45,
    percentB: 55,
  },
  {
    question: "Would you rather live in the past or the future?",
    optionA: "The past 🏛️",
    optionB: "The future 🚀",
    percentA: 25,
    percentB: 75,
  },
  {
    question: "Would you rather be able to read minds or predict the future?",
    optionA: "Read minds 🧠",
    optionB: "Predict future 🔮",
    percentA: 60,
    percentB: 40,
  },
]

interface DailyChallengeProps {
  isActive: boolean
  onDecision: () => void
}

export default function DailyChallenge({ isActive, onDecision }: DailyChallengeProps) {
  const [currentChallenge, setCurrentChallenge] = useState(challenges[0])
  const [hasVoted, setHasVoted] = useState(false)
  const [userChoice, setUserChoice] = useState<"A" | "B" | null>(null)
  const [totalVotes, setTotalVotes] = useState(0)

  useEffect(() => {
    // Simulate daily challenge rotation
    const today = new Date().getDate()
    const challengeIndex = today % challenges.length
    setCurrentChallenge(challenges[challengeIndex])
    setTotalVotes(Math.floor(Math.random() * 10000) + 1000)
  }, [])

  const vote = (choice: "A" | "B") => {
    setUserChoice(choice)
    setHasVoted(true)
    setTotalVotes((prev) => prev + 1)
    onDecision()
  }

  const newChallenge = () => {
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)]
    setCurrentChallenge(randomChallenge)
    setHasVoted(false)
    setUserChoice(null)
    setTotalVotes(Math.floor(Math.random() * 10000) + 1000)
  }

  return (
    <Card
      className={`transform transition-all duration-300 ${isActive ? "ring-4 ring-indigo-400 scale-105" : ""} hover:shadow-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-900`}
    >
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Calendar className="h-6 w-6" />
          Daily Challenge
        </CardTitle>
        <p className="text-muted-foreground">Today's "Would You Rather" question</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="text-lg font-semibold text-center mb-6 text-gray-800 dark:text-white">
            {currentChallenge.question}
          </div>

          {!hasVoted ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={() => vote("A")}
                className="h-20 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg transform hover:scale-105 transition-all duration-200"
              >
                {currentChallenge.optionA}
              </Button>
              <Button
                onClick={() => vote("B")}
                className="h-20 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg transform hover:scale-105 transition-all duration-200"
              >
                {currentChallenge.optionB}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
                You chose: {userChoice === "A" ? currentChallenge.optionA : currentChallenge.optionB}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{currentChallenge.optionA}</span>
                  <span className="font-bold">{currentChallenge.percentA}%</span>
                </div>
                <Progress value={currentChallenge.percentA} className="h-3" />

                <div className="flex justify-between items-center">
                  <span className="font-medium">{currentChallenge.optionB}</span>
                  <span className="font-bold">{currentChallenge.percentB}%</span>
                </div>
                <Progress value={currentChallenge.percentB} className="h-3" />
              </div>

              <div className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
                <TrendingUp className="h-4 w-4" />
                {totalVotes.toLocaleString()} people have voted
              </div>
            </div>
          )}
        </div>

        <div className="text-center">
          <Button
            onClick={newChallenge}
            variant="outline"
            className="hover:bg-gray-100 dark:hover:bg-gray-700 bg-transparent"
          >
            Try Another Challenge
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
