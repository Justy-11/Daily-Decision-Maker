"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center py-16 px-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 animate-bounce text-center">
          Daily Decision Maker
          <span className="text-2xl sm:text-4xl md:text-6xl ml-2 md:ml-4">🎯</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium text-center">
          Can't decide? We'll help you choose! ✨
        </p>

        {/* Floating Emojis */}
        <div className="mt-8 space-x-4">
          {["🎲", "🎪", "🎨", "🎭", "🎊", "🎈"].map((emoji, i) => (
            <span
              key={i}
              className="inline-block text-3xl animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "2s",
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
