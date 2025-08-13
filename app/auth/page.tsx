"use client"

import type React from "react"

import { useState, useEffect } from "react"

export default function AuthPage() {
  const [currentTheme, setCurrentTheme] = useState("light")
  const [authMode, setAuthMode] = useState("signin") // signin, signup, forgot
  const [showContent, setShowContent] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
  })

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle authentication
    // For now, redirect to dashboard
    window.location.href = "/dashboard"
  }

  const renderForm = () => {
    switch (authMode) {
      case "signin":
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-4 rounded-xl text-white font-semibold text-lg btn-hover ${
                currentTheme === "light"
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                  : "bg-gradient-to-r from-cyan-400 to-blue-500"
              }`}
            >
              Sign In
            </button>
          </form>
        )

      case "signup":
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                placeholder="Create a password"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-4 rounded-xl text-white font-semibold text-lg btn-hover ${
                currentTheme === "light"
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                  : "bg-gradient-to-r from-cyan-400 to-blue-500"
              }`}
            >
              Create Account
            </button>
          </form>
        )

      case "forgot":
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-4 rounded-xl text-white font-semibold text-lg btn-hover ${
                currentTheme === "light"
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                  : "bg-gradient-to-r from-cyan-400 to-blue-500"
              }`}
            >
              Reset Password
            </button>
          </form>
        )

      default:
        return null
    }
  }

  const getTitle = () => {
    switch (authMode) {
      case "signin":
        return "Welcome Back"
      case "signup":
        return "Create Account"
      case "forgot":
        return "Reset Password"
      default:
        return ""
    }
  }

  const getSubtitle = () => {
    switch (authMode) {
      case "signin":
        return "Sign in to your Rumah Kita account"
      case "signup":
        return "Join Rumah Kita and find your dream home"
      case "forgot":
        return "Enter your email to reset your password"
      default:
        return ""
    }
  }

  return (
    <div className={`min-h-screen theme-${currentTheme} transition-all duration-1000`}>
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className={`text-center mb-8 ${showContent ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-white text-xl font-bold">RK</div>
            </div>
            <h1 className="text-3xl font-bold font-alegreya-sc mb-2">{getTitle()}</h1>
            <p className="text-gray-600 dark:text-gray-400">{getSubtitle()}</p>
          </div>

          {/* Form */}
          <div
            className={`glass rounded-2xl p-8 shadow-2xl ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {renderForm()}

            {/* Form Navigation */}
            <div className="mt-6 text-center space-y-3">
              {authMode === "signin" && (
                <>
                  <button
                    onClick={() => setAuthMode("forgot")}
                    className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors"
                  >
                    Forgot your password?
                  </button>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{" "}
                    <button
                      onClick={() => setAuthMode("signup")}
                      className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
                    >
                      Sign up
                    </button>
                  </div>
                </>
              )}

              {authMode === "signup" && (
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?{" "}
                  <button
                    onClick={() => setAuthMode("signin")}
                    className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
                  >
                    Sign in
                  </button>
                </div>
              )}

              {authMode === "forgot" && (
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Remember your password?{" "}
                  <button
                    onClick={() => setAuthMode("signin")}
                    className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
                  >
                    Sign in
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Social Login */}
          <div
            className={`mt-6 ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="glass rounded-xl px-4 py-3 flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300">
                <div className="w-5 h-5 bg-blue-600 rounded"></div>
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="glass rounded-xl px-4 py-3 flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300">
                <div className="w-5 h-5 bg-blue-800 rounded"></div>
                <span className="text-sm font-medium">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setCurrentTheme(currentTheme === "light" ? "dark" : "light")}
        className="fixed top-6 right-6 p-3 rounded-full glass hover:scale-110 transition-all duration-300 z-10"
      >
        {currentTheme === "light" ? "🌙" : "☀️"}
      </button>

      {/* Back Button */}
      <button
        onClick={() => (window.location.href = "/onboarding")}
        className="fixed top-6 left-6 p-3 rounded-full glass hover:scale-110 transition-all duration-300 z-10"
      >
        ←
      </button>
    </div>
  )
}
