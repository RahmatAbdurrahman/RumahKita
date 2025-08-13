"use client"

import { useEffect, useState } from "react"

export default function SplashScreen() {
  const [showContent, setShowContent] = useState(false)
  const [currentTheme, setCurrentTheme] = useState("light")

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/onboarding"
    }, 3000)

    setTimeout(() => setShowContent(true), 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen flex items-center justify-center theme-${currentTheme} transition-all duration-1000`}>
      <div className="text-center space-y-6">
        <div className={`w-32 h-32 mx-auto mb-8 animate-float ${showContent ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <div className="text-white text-4xl font-bold">RK</div>
          </div>
        </div>

        <div
          className={`space-y-2 ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="font-alegreya-sc">Rumah</span> <span className="font-trocchi">Kita</span>
          </h1>
        </div>

        <div className={`${showContent ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <p className="text-xl md:text-2xl opacity-80 font-light">Get your dream home on Rumah Kita</p>
        </div>

        <div className={`mt-12 ${showContent ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setCurrentTheme(currentTheme === "light" ? "dark" : "light")}
        className="fixed top-6 right-6 p-3 rounded-full glass hover:scale-110 transition-all duration-300"
      >
        {currentTheme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  )
}
