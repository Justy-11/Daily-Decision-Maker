"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { RotateCcw, Edit, Save } from "lucide-react"

const defaultOptions = [
  "Go Out 🚗",
  "Stay In 🏠",
  "Exercise 💪",
  "Read 📚",
  "Cook 👨‍🍳",
  "Call a Friend ☎️",
  "Watch Movie 🎬",
  "Take a Walk 🚶",
]

interface SpinWheelProps {
  isActive: boolean
  onDecision: () => void
}

export default function SpinWheel({ isActive, onDecision }: SpinWheelProps) {
  const [options, setOptions] = useState(defaultOptions)
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<string>("")
  const [rotation, setRotation] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const [editOptions, setEditOptions] = useState(defaultOptions)

  const spinWheel = () => {
    setIsSpinning(true)
    const spins = 5 + Math.random() * 5 // 5-10 full rotations
    const finalRotation = rotation + spins * 360 + Math.random() * 360
    setRotation(finalRotation)

    setTimeout(() => {
      const selectedIndex = Math.floor(Math.random() * options.length)
      setResult(options[selectedIndex])
      setIsSpinning(false)
      onDecision()
    }, 3000)
  }

  const saveOptions = () => {
    setOptions(editOptions)
    setIsEditing(false)
  }

  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-indigo-400",
    "bg-orange-400",
  ]

  return (
    <Card
      className={`transform transition-all duration-300 ${isActive ? "ring-4 ring-green-400 scale-105" : ""} hover:shadow-xl bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900`}
    >
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <RotateCcw className="h-6 w-6" />
          Spin the Wheel
        </CardTitle>
        <p className="text-muted-foreground">Let fate decide your next move!</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Wheel */}
        <div className="flex justify-center">
          <div className="relative">
            <div
              className={`w-64 h-64 rounded-full border-8 border-gray-800 relative overflow-hidden transition-transform duration-3000 ease-out ${isSpinning ? "animate-spin" : ""}`}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full ${colors[index % colors.length]} flex items-center justify-center text-white font-bold text-sm`}
                  style={{
                    clipPath: `polygon(50% 50%, ${50 + 40 * Math.cos((((index * 360) / options.length - 90) * Math.PI) / 180)}% ${50 + 40 * Math.sin((((index * 360) / options.length - 90) * Math.PI) / 180)}%, ${50 + 40 * Math.cos(((((index + 1) * 360) / options.length - 90) * Math.PI) / 180)}% ${50 + 40 * Math.sin(((((index + 1) * 360) / options.length - 90) * Math.PI) / 180)}%)`,
                    transform: `rotate(${(index * 360) / options.length}deg)`,
                  }}
                >
                  <span className="transform -rotate-45 text-xs text-center">{option.split(" ")[0]}</span>
                </div>
              ))}
            </div>
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-600"></div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="text-center space-y-4">
          <Button
            onClick={spinWheel}
            disabled={isSpinning}
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-full text-lg transform hover:scale-105 transition-all duration-200"
          >
            {isSpinning ? "Spinning... 🌪️" : "Spin the Wheel! 🎯"}
          </Button>

          <Button onClick={() => setIsEditing(!isEditing)} variant="outline" className="ml-2">
            <Edit className="mr-2 h-4 w-4" />
            {isEditing ? "Cancel" : "Edit Options"}
          </Button>
        </div>

        {/* Edit Mode */}
        {isEditing && (
          <div className="space-y-2">
            {editOptions.map((option, index) => (
              <Input
                key={index}
                value={option}
                onChange={(e) => {
                  const newOptions = [...editOptions]
                  newOptions[index] = e.target.value
                  setEditOptions(newOptions)
                }}
                className="text-center"
              />
            ))}
            <Button onClick={saveOptions} className="w-full">
              <Save className="mr-2 h-4 w-4" />
              Save Options
            </Button>
          </div>
        )}

        {/* Result */}
        {result && !isSpinning && (
          <div className="text-center animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-gray-800 dark:text-white">🎉 {result}</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
