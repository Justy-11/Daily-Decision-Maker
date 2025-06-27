"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SnowflakeIcon as Crystal, Sparkles } from "lucide-react"

const answers = [
  "It is certain ��",
  "Without a doubt 🌟",
  "Yes definitely 💫",
  "You may rely on it 🔮",
  "As I see it, yes 👁️",
  "Most likely 🌙",
  "Outlook good ☀️",
  "Yes 🎯",
  "Signs point to yes 🧭",
  "Reply hazy, try again 🌫️",
  "Ask again later ⏰",
  "Better not tell you now 🤐",
  "Cannot predict now 🔄",
  "Concentrate and ask again 🧘",
  "Don't count on it 🚫",
  "My reply is no ❌",
  "My sources say no 📰",
  "Outlook not so good 🌧️",
  "Very doubtful 🤔",
  "Absolutely not 🛑",
]

interface MagicBallProps {
  isActive: boolean
  onDecision: () => void
}

export default function MagicBall({ isActive, onDecision }: MagicBallProps) {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [isShaking, setIsShaking] = useState(false)
  const [questionsAsked, setQuestionsAsked] = useState(0)

  const askQuestion = () => {
    if (!question.trim()) return

    setIsShaking(true)
    setAnswer("")

    setTimeout(() => {
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
      setAnswer(randomAnswer)
      setIsShaking(false)
      setQuestionsAsked((prev) => prev + 1)
      onDecision()
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      askQuestion()
    }
  }

  return (
    <Card
      className={`transform transition-all duration-300 ${isActive ? "ring-4 ring-purple-400 scale-105" : ""} hover:shadow-xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900`}
    >
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Crystal className="h-6 w-6" />
          Magic Decision Ball
        </CardTitle>
        <p className="text-muted-foreground">Ask a yes/no question and receive mystical guidance</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Magic Ball */}
        <div className="flex justify-center">
          <div
            className={`relative w-48 h-48 rounded-full bg-gradient-to-br from-purple-900 to-black shadow-2xl ${isShaking ? "animate-bounce" : ""}`}
          >
            {/* Ball shine effect */}
            <div className="absolute top-8 left-12 w-16 h-16 rounded-full bg-white/20 blur-xl"></div>

            {/* Answer window */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-blue-900 flex items-center justify-center border-4 border-blue-700">
                {isShaking ? (
                  <Sparkles className="h-8 w-8 text-white animate-spin" />
                ) : answer ? (
                  <div className="text-white text-xs text-center font-bold px-2">{answer.split(" ")[0]}</div>
                ) : (
                  <div className="text-white text-xs text-center">Ask me</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Question Input */}
        <div className="space-y-4">
          <Input
            placeholder="Ask a yes/no question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            className="text-center text-lg"
            disabled={isShaking}
          />

          <Button
            onClick={askQuestion}
            disabled={!question.trim() || isShaking}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-full text-lg transform hover:scale-105 transition-all duration-200"
          >
            {isShaking ? (
              <>
                <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                Consulting the spirits...
              </>
            ) : (
              "Ask the Magic Ball 🔮"
            )}
          </Button>
        </div>

        {/* Answer Display */}
        {answer && !isShaking && (
          <div className="text-center animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-2">The spirits say:</div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">{answer}</div>
            </div>
          </div>
        )}

        <div className="text-center text-sm text-muted-foreground">Questions asked: {questionsAsked} 🔮</div>
      </CardContent>
    </Card>
  )
}
