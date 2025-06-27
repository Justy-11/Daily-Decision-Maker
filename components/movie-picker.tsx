"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Film, RefreshCw, Star } from "lucide-react"

const movies = [
  {
    title: "The Matrix",
    genre: "Action",
    description: "A computer hacker learns reality is a simulation",
    platform: "Netflix",
  },
  {
    title: "Inception",
    genre: "Action",
    description: "Dreams within dreams in this mind-bending thriller",
    platform: "Netflix",
  },
  { title: "The Office", genre: "Comedy", description: "Mockumentary about office workers", platform: "Netflix" },
  {
    title: "Stranger Things",
    genre: "Horror",
    description: "Kids battle supernatural forces in the 80s",
    platform: "Netflix",
  },
  {
    title: "Planet Earth",
    genre: "Documentary",
    description: "Stunning nature documentary series",
    platform: "Netflix",
  },
  {
    title: "Breaking Bad",
    genre: "Drama",
    description: "Chemistry teacher turns to cooking meth",
    platform: "Netflix",
  },
  { title: "The Avengers", genre: "Action", description: "Superheroes team up to save the world", platform: "Disney+" },
  { title: "Friends", genre: "Comedy", description: "Six friends navigate life in New York", platform: "HBO Max" },
  {
    title: "Game of Thrones",
    genre: "Drama",
    description: "Epic fantasy series with political intrigue",
    platform: "HBO Max",
  },
  {
    title: "The Conjuring",
    genre: "Horror",
    description: "Paranormal investigators face demonic presence",
    platform: "Amazon Prime",
  },
]

interface MoviePickerProps {
  isActive: boolean
  onDecision: () => void
}

export default function MoviePicker({ isActive, onDecision }: MoviePickerProps) {
  const [currentMovie, setCurrentMovie] = useState<(typeof movies)[0] | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [watchlist, setWatchlist] = useState(0)

  const generateMovie = () => {
    setIsSpinning(true)
    const randomMovie = movies[Math.floor(Math.random() * movies.length)]

    setTimeout(() => {
      setCurrentMovie(randomMovie)
      setIsSpinning(false)
      onDecision()
    }, 1000)
  }

  const addToWatchlist = () => {
    setWatchlist((prev) => prev + 1)
    onDecision()
  }

  return (
    <Card
      className={`transform transition-all duration-300 ${isActive ? "ring-4 ring-blue-400 scale-105" : ""} hover:shadow-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900`}
    >
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Film className="h-6 w-6" />
          What Should I Watch?
        </CardTitle>
        <p className="text-muted-foreground">Endless scrolling? Let us pick your next binge!</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <Button
            onClick={generateMovie}
            disabled={isSpinning}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full text-lg transform hover:scale-105 transition-all duration-200"
          >
            {isSpinning ? (
              <>
                <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                Searching...
              </>
            ) : (
              "What Should I Watch? 🎬"
            )}
          </Button>
        </div>

        {currentMovie && (
          <div className="text-center space-y-4 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-center gap-2 mb-3">
                <Badge variant="secondary">{currentMovie.genre}</Badge>
                <Badge variant="outline">{currentMovie.platform}</Badge>
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2">🎭 {currentMovie.title}</div>
              <p className="text-muted-foreground">{currentMovie.description}</p>
            </div>

            <div className="flex gap-3 justify-center">
              <Button
                onClick={generateMovie}
                variant="outline"
                className="hover:bg-gray-100 dark:hover:bg-gray-700 bg-transparent"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              <Button onClick={addToWatchlist} className="bg-green-500 hover:bg-green-600 text-white">
                <Star className="mr-2 h-4 w-4" />
                Add to Watchlist
              </Button>
            </div>
          </div>
        )}

        <div className="text-center text-sm text-muted-foreground">Added to watchlist: {watchlist} 📺</div>
      </CardContent>
    </Card>
  )
}
