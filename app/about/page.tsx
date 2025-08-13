"use client"

import { useState, useEffect } from "react"

export default function AboutPage() {
  const [currentTheme, setCurrentTheme] = useState("light")
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100)
  }, [])

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "With over 15 years in real estate development, Sarah leads Rumah Kita with a vision to revolutionize property buying through technology.",
      image: "/team-sarah.png",
      expertise: ["Real Estate Development", "Business Strategy", "Team Leadership"],
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      bio: "Michael brings cutting-edge 3D visualization and virtual reality technologies to create immersive property experiences.",
      image: "/team-michael.png",
      expertise: ["3D Visualization", "VR/AR Technology", "Software Architecture"],
    },
    {
      name: "Amanda Rodriguez",
      role: "Head of Design",
      bio: "Amanda ensures every property meets the highest standards of modern design and sustainable living practices.",
      image: "/team-amanda.png",
      expertise: ["Interior Design", "Sustainable Architecture", "User Experience"],
    },
  ]

  const handleContactUs = () => {
    window.open("https://wa.me/6282311970633", "_blank")
  }

  return (
    <div className={`min-h-screen theme-${currentTheme} transition-all duration-1000`}>
      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                <img src="../public/lib/logo.png" alt="Rumah Kita Logo" />
              </div>
              <h1 className="text-xl font-bold">
                <span className="font-alegreya-sc">Rumah</span> <span className="font-trocchi">Kita</span>
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="/dashboard" className="hover:text-orange-500 transition-colors">
                Dashboard
              </a>
              <a href="/property" className="hover:text-orange-500 transition-colors">
                Property
              </a>
              <a href="/favorite" className="hover:text-orange-500 transition-colors">
                Favorite
              </a>
              <a href="/about" className="text-orange-500 font-medium">
                About
              </a>
              <button
                onClick={handleContactUs}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={() => (window.location.href = "/auth")}
                className="hover:text-orange-500 transition-colors"
              >
                Sign Out
              </button>
            </div>

            <button
              onClick={() => setCurrentTheme(currentTheme === "light" ? "dark" : "light")}
              className="p-2 rounded-lg glass hover:scale-110 transition-all duration-300"
            >
              {currentTheme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className={`text-center mb-16 ${showContent ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-6xl font-bold font-alegreya-sc mb-6">About Rumah Kita</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing the way people find and experience their dream homes through cutting-edge 3D
            technology and personalized service.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div
            className={`glass rounded-3xl p-8 md:p-12 shadow-2xl ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold font-alegreya-sc mb-6">Our Story</h3>
                <div className="space-y-4 text-lg leading-relaxed opacity-90">
                  <p>
                    Founded in 2020, Rumah Kita emerged from a simple belief: finding your perfect home should be an
                    inspiring, not overwhelming experience. We recognized that traditional property viewing had
                    limitations that technology could solve.
                  </p>
                  <p>
                    Our innovative approach combines immersive 3D visualization with personalized service, allowing you
                    to explore every corner of your potential home before making one of life's biggest decisions.
                  </p>
                  <p>
                    Today, we're proud to have helped over 1,000 families find their dream homes through our platform,
                    setting new standards for transparency and innovation in real estate.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex items-center justify-center animate-float">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏡</div>
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-lg opacity-80">Happy Families</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`glass rounded-2xl p-8 shadow-xl text-center ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold font-alegreya-sc mb-4">Our Mission</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To make home buying transparent, accessible, and enjoyable through innovative technology and exceptional
                service, ensuring every family finds their perfect sanctuary.
              </p>
            </div>
            <div
              className={`glass rounded-2xl p-8 shadow-xl text-center ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-5xl mb-6">🌟</div>
              <h3 className="text-2xl font-bold font-alegreya-sc mb-4">Our Vision</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To become the leading platform where technology meets human connection, transforming how people discover
                and experience their future homes worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div
            className={`text-center mb-12 ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="text-3xl md:text-4xl font-bold font-alegreya-sc mb-4">Meet Our Team</h3>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              The passionate individuals behind Rumah Kita's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`glass rounded-2xl overflow-hidden shadow-xl card-3d ${
                  showContent ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover shadow-lg"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-orange-500 font-medium mb-4">{member.role}</p>
                  <p className="text-sm opacity-80 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium opacity-70">Expertise:</div>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-20 text-center">
          <div
            className={`glass rounded-3xl p-12 shadow-2xl ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.9s" }}
          >
            <h3 className="text-3xl font-bold font-alegreya-sc mb-4">Ready to Find Your Dream Home?</h3>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              Let our team help you discover the perfect property with our innovative 3D experience.
            </p>
            <button
              onClick={handleContactUs}
              className={`px-8 py-4 rounded-2xl text-white font-semibold text-lg btn-hover animate-glow ${
                currentTheme === "light"
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                  : "bg-gradient-to-r from-cyan-400 to-blue-500"
              }`}
            >
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
