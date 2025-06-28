"use client"

import { useState } from "react"
import { Wheel } from "react-custom-roulette"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { RotateCcw, Edit, Save, Plus, Trash2 } from "lucide-react"

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
  const [isEditing, setIsEditing] = useState(false)
  const [editOptions, setEditOptions] = useState(defaultOptions)
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)

  const wheelData = options.map((option, index) => ({
    option: option,
    style: {
      backgroundColor: `hsl(${(index * 360) / options.length}, 70%, 60%)`,
      textColor: "white",
    },
  }))

  const spinWheel = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * options.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
      setIsSpinning(true)
    }
  }

  const handleSpinComplete = () => {
    setMustSpin(false)
    setIsSpinning(false)
    setResult(options[prizeNumber])
    onDecision()
  }

  const saveOptions = () => {
    setOptions(editOptions)
    setIsEditing(false)
  }

  const addOption = () => {
    if (editOptions.length < 100) {
      setEditOptions([...editOptions, `Option ${editOptions.length + 1}`])
    }
  }

  const removeOption = (index: number) => {
    if (editOptions.length > 2) {
      const newOptions = editOptions.filter((_, i) => i !== index)
      setEditOptions(newOptions)
    }
  }

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
        <div className="flex justify-center">
          <div className="relative">
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={wheelData}
              onStopSpinning={handleSpinComplete}
              backgroundColors={["#3e3e3e", "#df3428"]}
              textColors={["#ffffff"]}
              outerBorderColor="#333"
              outerBorderWidth={8}
              innerBorderColor="#fff"
              innerBorderWidth={2}
              radiusLineColor="#fff"
              radiusLineWidth={2}
              fontSize={options.length > 12 ? 12 : options.length > 8 ? 14 : 16}
              textDistance={60}
              spinDuration={0.3}
            />
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

        {isEditing && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Edit Options ({editOptions.length}/100)</h3>
              <Button onClick={addOption} disabled={editOptions.length >= 100} variant="outline" size="sm">
                <Plus className="mr-1 h-4 w-4" />
                Add Option
              </Button>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto">
              {editOptions.map((option, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...editOptions]
                      newOptions[index] = e.target.value
                      setEditOptions(newOptions)
                    }}
                    className="flex-1"
                    placeholder={`Option ${index + 1}`}
                  />
                  <Button
                    onClick={() => removeOption(index)}
                    disabled={editOptions.length <= 2}
                    variant="outline"
                    size="sm"
                    className="px-3"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

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
