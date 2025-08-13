"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"

export default function PropertyDetailPage() {
  const params = useParams()
  const propertyId = params.id as string
  const [currentTheme, setCurrentTheme] = useState("light")
  const [showContent, setShowContent] = useState(false)
  const [activeView, setActiveView] = useState("exterior")
  const [selectedRoom, setSelectedRoom] = useState("living-room")
  const [currentAngle, setCurrentAngle] = useState(0)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100)
  }, [])

  // Property data based on ID
  const getPropertyData = (id: string) => {
    const properties = {
      "1": {
        name: "Modern Villa",
        price: "$450,000",
        sqft: "2,500",
        bedrooms: 4,
        bathrooms: 3,
        description: "A stunning modern villa with contemporary design and premium finishes throughout.",
        features: ["Swimming Pool", "Garden", "Garage", "Security System", "Smart Home"],
        exteriorImages: [
          "/modern-villa-exterior.png",
          "/modern-villa-side.png",
          "/modern-villa-back.png",
          "/modern-villa-aerial.png",
        ],
        rooms: {
          "living-room": { name: "Living Room", image: "/modern-villa-living.png" },
          "master-bedroom": { name: "Master Bedroom", image: "/modern-villa-master.png" },
          kitchen: { name: "Kitchen", image: "/modern-villa-kitchen.png" },
          bathroom: { name: "Bathroom", image: "/modern-villa-bathroom.png" },
        },
      },
      "2": {
        name: "Family House",
        price: "$320,000",
        sqft: "1,800",
        bedrooms: 3,
        bathrooms: 2,
        description: "Perfect family home with spacious rooms and a cozy atmosphere.",
        features: ["Backyard", "Garage", "Storage", "Family Room"],
        exteriorImages: [
          "/modern-family-house.png",
          "/family-house-side.png",
          "/family-house-back.png",
          "/family-house-garden.png",
        ],
        rooms: {
          "living-room": { name: "Living Room", image: "/family-house-living.png" },
          bedroom: { name: "Bedroom", image: "/family-house-bedroom.png" },
          kitchen: { name: "Kitchen", image: "/family-house-kitchen.png" },
          bathroom: { name: "Bathroom", image: "/family-house-bathroom.png" },
        },
      },
      "3": {
        name: "Luxury Mansion",
        price: "$850,000",
        sqft: "4,200",
        bedrooms: 6,
        bathrooms: 5,
        description: "Luxurious mansion with premium amenities and elegant design.",
        features: ["Wine Cellar", "Home Theater", "Gym", "Library", "Pool", "Tennis Court"],
        exteriorImages: [
          "/luxury-mansion-exterior.png",
          "/luxury-mansion-side.png",
          "/luxury-mansion-back.png",
          "/luxury-mansion-pool.png",
        ],
        rooms: {
          "living-room": { name: "Grand Living Room", image: "/luxury-mansion-living.png" },
          "master-suite": { name: "Master Suite", image: "/luxury-mansion-master.png" },
          kitchen: { name: "Gourmet Kitchen", image: "/luxury-mansion-kitchen.png" },
          bathroom: { name: "Spa Bathroom", image: "/luxury-mansion-bathroom.png" },
        },
      },
      "4": {
        name: "Cozy Cottage",
        price: "$280,000",
        sqft: "1,200",
        bedrooms: 2,
        bathrooms: 2,
        description: "Charming cottage perfect for a peaceful lifestyle.",
        features: ["Fireplace", "Garden", "Porch", "Storage"],
        exteriorImages: [
          "/cozy-cottage-exterior.png",
          "/cozy-cottage-side.png",
          "/cozy-cottage-back.png",
          "/cozy-cottage-garden.png",
        ],
        rooms: {
          "living-room": { name: "Cozy Living Room", image: "/cozy-cottage-living.png" },
          bedroom: { name: "Bedroom", image: "/cozy-cottage-bedroom.png" },
          kitchen: { name: "Country Kitchen", image: "/cozy-cottage-kitchen.png" },
          bathroom: { name: "Bathroom", image: "/cozy-cottage-bathroom.png" },
        },
      },
    }
    return properties[id as keyof typeof properties] || properties["1"]
  }

  const property = getPropertyData(propertyId)

  const handleContactUs = () => {
    const message = `Hi! I'm interested in the ${property.name} priced at ${property.price}. Can you provide more information?`
    window.open(`https://wa.me/6282311970633?text=${encodeURIComponent(message)}`, "_blank")
  }

  const rotateView = (direction: "left" | "right") => {
    setCurrentAngle((prev) => {
      const newAngle = direction === "left" ? prev - 90 : prev + 90
      return newAngle >= 360 ? 0 : newAngle < 0 ? 270 : newAngle
    })
  }

  return (
    <div className={`min-h-screen theme-${currentTheme} transition-all duration-1000`}>
      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => (window.location.href = "/dashboard")}
                className="p-2 rounded-lg glass hover:scale-110 transition-all duration-300"
              >
                ←
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                <div className="text-white text-sm font-bold">RK</div>
              </div>
              <h1 className="text-xl font-bold">
                <span className="font-alegreya-sc">Rumah</span> <span className="font-trocchi">Kita</span>
              </h1>
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
        {/* Property Header */}
        <div className={`text-center mb-8 ${showContent ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-4xl md:text-6xl font-bold font-alegreya-sc mb-4">{property.name}</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">{property.description}</p>
        </div>

        {/* View Toggle */}
        <div
          className={`flex justify-center mb-8 ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="glass rounded-2xl p-2 flex space-x-2">
            <button
              onClick={() => setActiveView("exterior")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeView === "exterior"
                  ? currentTheme === "light"
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                    : "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                  : "hover:bg-white/10"
              }`}
            >
              Exterior View
            </button>
            <button
              onClick={() => setActiveView("interior")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeView === "interior"
                  ? currentTheme === "light"
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                    : "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                  : "hover:bg-white/10"
              }`}
            >
              Interior Tour
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3D Visualization */}
          <div className="lg:col-span-2">
            <div
              className={`glass rounded-2xl overflow-hidden shadow-2xl ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              {activeView === "exterior" ? (
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div
                      className="relative w-full h-full flex items-center justify-center"
                      style={{ transform: `rotateY(${currentAngle}deg)`, transformStyle: "preserve-3d" }}
                    >
                      <img
                        src={property.exteriorImages[Math.floor(currentAngle / 90)] || "/placeholder.svg"}
                        alt={`${property.name} exterior`}
                        className="max-w-full max-h-full object-contain animate-float"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button
                      onClick={() => rotateView("left")}
                      className="glass p-3 rounded-full hover:scale-110 transition-all duration-300"
                    >
                      ↺
                    </button>
                    <button
                      onClick={() => rotateView("right")}
                      className="glass p-3 rounded-full hover:scale-110 transition-all duration-300"
                    >
                      ↻
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-sm font-medium">
                    360° View
                  </div>
                </div>
              ) : (
                <div>
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <img
                      src={property.rooms[selectedRoom as keyof typeof property.rooms]?.image || "/placeholder.svg"}
                      alt={property.rooms[selectedRoom as keyof typeof property.rooms]?.name}
                      className="max-w-full max-h-full object-contain animate-float"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(property.rooms).map(([key, room]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedRoom(key)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            selectedRoom === key
                              ? currentTheme === "light"
                                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                                : "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                              : "glass hover:scale-105"
                          }`}
                        >
                          {room.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Property Information */}
          <div className="space-y-6">
            {/* Price & Basic Info */}
            <div
              className={`glass rounded-2xl p-6 shadow-xl ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-3xl font-bold text-orange-500 mb-4">{property.price}</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Building Area</span>
                  <span className="font-semibold">{property.sqft} SQFT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Bedrooms</span>
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Bathrooms</span>
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div
              className={`glass rounded-2xl p-6 shadow-xl ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.5s" }}
            >
              <h3 className="text-xl font-bold mb-4">Features</h3>
              <div className="space-y-2">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className={`${showContent ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
              <button
                onClick={handleContactUs}
                className={`w-full py-4 rounded-2xl text-white font-semibold text-lg btn-hover ${
                  currentTheme === "light"
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                    : "bg-gradient-to-r from-cyan-400 to-blue-500"
                } animate-glow`}
              >
                Contact Us on WhatsApp
              </button>
            </div>

            {/* Virtual Tour Info */}
            <div
              className={`glass rounded-2xl p-6 shadow-xl text-center ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.7s" }}
            >
              <div className="text-4xl mb-3">🏠</div>
              <h4 className="font-bold mb-2">Virtual 3D Tour</h4>
              <p className="text-sm opacity-80">
                Experience every corner of your future home with our immersive 3D visualization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
