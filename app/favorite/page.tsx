"use client"

import { useState, useEffect } from "react"

export default function FavoritePage() {
  const [currentTheme, setCurrentTheme] = useState("light")
  const [showContent, setShowContent] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])

  const allProperties = [
    {
      id: 1,
      name: "Modern Villa",
      price: "$450,000",
      sqft: "2,500",
      bedrooms: 4,
      bathrooms: 3,
      image: "/modern-villa-exterior.png",
    },
    {
      id: 2,
      name: "Family House",
      price: "$320,000",
      sqft: "1,800",
      bedrooms: 3,
      bathrooms: 2,
      image: "/modern-family-house.png",
    },
    {
      id: 3,
      name: "Luxury Mansion",
      price: "$850,000",
      sqft: "4,200",
      bedrooms: 6,
      bathrooms: 5,
      image: "/luxury-mansion-exterior.png",
    },
    {
      id: 4,
      name: "Cozy Cottage",
      price: "$280,000",
      sqft: "1,200",
      bedrooms: 2,
      bathrooms: 2,
      image: "/cozy-cottage-exterior.png",
    },
    {
      id: 5,
      name: "Sky Apartments",
      price: "$380,000",
      sqft: "1,500",
      bedrooms: 2,
      bathrooms: 2,
      image: "/modern-apartment-building.png",
    },
    {
      id: 6,
      name: "Garden Villas",
      price: "$520,000",
      sqft: "2,200",
      bedrooms: 4,
      bathrooms: 3,
      image: "/garden-villa-complex.png",
    },
  ]

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100)
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem("rumah-kita-favorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const favoriteProperties = allProperties.filter((property) => favorites.includes(property.id))

  const removeFavorite = (id: number) => {
    const newFavorites = favorites.filter((fav) => fav !== id)
    setFavorites(newFavorites)
    localStorage.setItem("rumah-kita-favorites", JSON.stringify(newFavorites))
  }

  const handlePropertyClick = (id: number) => {
    window.location.href = `/property/${id}`
  }

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
                <div className="text-white text-sm font-bold">RK</div>
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
              <a href="/favorite" className="text-orange-500 font-medium">
                Favorite
              </a>
              <a href="/about" className="hover:text-orange-500 transition-colors">
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
        <div className={`text-center mb-12 ${showContent ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-6xl font-bold font-alegreya-sc mb-4">Your Favorites</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">Properties you've saved for future consideration</p>
        </div>

        {favoriteProperties.length > 0 ? (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
              showContent ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            {favoriteProperties.map((property) => (
              <div
                key={property.id}
                className="glass rounded-2xl overflow-hidden shadow-xl card-3d cursor-pointer group"
                onClick={() => handlePropertyClick(property.id)}
              >
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFavorite(property.id)
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full glass hover:scale-110 transition-all duration-300"
                  >
                    ❤️
                  </button>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{property.name}</h4>
                  <p className="text-2xl font-bold text-orange-500 mb-4">{property.price}</p>
                  <div className="space-y-2 text-sm opacity-80">
                    <div className="flex justify-between">
                      <span>Size:</span>
                      <span>{property.sqft} SQFT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bedrooms:</span>
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bathrooms:</span>
                      <span>{property.bathrooms}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`text-center py-16 ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-8xl mb-6">💔</div>
            <h3 className="text-3xl font-bold mb-4">No Favorites Yet</h3>
            <p className="text-xl opacity-80 mb-8 max-w-md mx-auto">
              Start exploring our properties and save the ones you love by clicking the heart icon.
            </p>
            <button
              onClick={() => (window.location.href = "/property")}
              className={`px-8 py-4 rounded-2xl text-white font-semibold text-lg btn-hover ${
                currentTheme === "light"
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                  : "bg-gradient-to-r from-cyan-400 to-blue-500"
              }`}
            >
              Browse Properties
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
