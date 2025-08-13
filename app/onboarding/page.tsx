"use client"

import { useEffect, useState } from "react"

export default function OnboardingPage() {
  const [currentTheme, setCurrentTheme] = useState("light")
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100)
  }, [])

  const handleGetStarted = () => {
    window.location.href = "/auth"
  }

  return (
    <div className={`min-h-screen theme-${currentTheme} transition-all duration-1000`}>
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        <div
          className={`lg:w-1/2 text-center lg:text-left space-y-8 ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="font-alegreya-sc">Welcome to</span>
              <br />
              <span className="font-alegreya-sc">Rumah</span> <span className="font-trocchi text-orange-500">Kita</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-2xl">
              Discover your perfect home with our immersive 3D property experience. Modern living spaces designed for
              your dreams.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🏠</span>
                </div>
                <span className="text-lg">Premium Properties</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <span className="text-lg">3D Visualization</span>
              </div>
            </div>

            <button
              onClick={handleGetStarted}
              className={`btn-hover px-8 py-4 rounded-2xl text-white font-semibold text-lg ${
                currentTheme === "light"
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                  : "bg-gradient-to-r from-cyan-400 to-blue-500"
              }`}
            >
              Get Started
            </button>
          </div>
        </div>

        <div
          className={`lg:w-1/2 flex justify-center ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            <div className="animate-float">
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* House base */}
                <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-orange-200 to-orange-100 rounded-2xl shadow-2xl transform rotate-3 card-3d"></div>

                {/* House roof */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-72 h-32 bg-gradient-to-b from-red-600 to-red-700 rounded-t-3xl shadow-xl transform -rotate-1"></div>

                {/* Windows */}
                <div className="absolute bottom-16 left-8 w-16 h-16 bg-blue-200 rounded-lg shadow-inner"></div>
                <div className="absolute bottom-16 right-8 w-16 h-16 bg-blue-200 rounded-lg shadow-inner"></div>

                {/* Door */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-24 bg-amber-800 rounded-t-lg shadow-lg"></div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>

            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
              <div className="glass rounded-xl p-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-2xl mb-2">🏊‍♂️</div>
                <div className="text-sm font-medium">Waterpark</div>
              </div>
            </div>

            <div className="absolute -right-8 top-1/3">
              <div className="glass rounded-xl p-4 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="text-2xl mb-2">🛍️</div>
                <div className="text-sm font-medium">Mall</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setCurrentTheme(currentTheme === "light" ? "dark" : "light")}
        className="fixed top-6 right-6 p-3 rounded-full glass hover:scale-110 transition-all duration-300 z-10"
      >
        {currentTheme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  )
}
