"use client"

import { useEffect, useState } from "react"

export default function SplashScreen() {
  const [showContent, setShowContent] = useState(false)
  // Set tema default dari sistem pengguna jika tersedia
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setCurrentTheme(prefersDark ? "dark" : "light");
  }, []);

  const [currentTheme, setCurrentTheme] = useState("light")

  useEffect(() => {
    const timer = setTimeout(() => {
      // Ganti dengan router Next.js untuk transisi yang lebih mulus
      // window.location.href = "/onboarding" 
      // Contoh penggunaan router akan bergantung pada versi Next.js Anda (app atau pages router)
    }, 3000)

    const showTimer = setTimeout(() => setShowContent(true), 100)

    return () => {
      clearTimeout(timer)
      clearTimeout(showTimer)
    }
  }, [])

  return (
    // 1. Tambahkan Fragment (<>) sebagai pembungkus utama
    <>
      {/* 2. Tambahkan 'flex-col' untuk layout vertikal */}
      <div className={`min-h-screen flex flex-col items-center justify-center theme-${currentTheme} transition-all duration-1000 p-4 text-center`}>
        
        {/* Logo */}
        <div className={`w-32 h-32 mb-8 animate-float ${showContent ? "animate-fade-in-up" : "opacity-0"}`}>
          <img 
            // 3. Perbaiki path gambar
            src="/logo.png" 
            alt="Logo Rumah Kita" 
            className="w-full h-full rounded-2xl shadow-2xl object-cover" 
          />
        </div>

        {/* Judul */}
        <div
          className={`space-y-2 ${showContent ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="font-alegreya-sc">Rumah</span> <span className="font-trocchi">Kita</span>
          </h1>
        </div>

        {/* Subjudul */}
        <div className={`${showContent ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <p className="text-xl md:text-2xl opacity-80 font-light mt-4">
            Get your dream home on Rumah Kita
          </p>
        </div>

        {/* Indikator Loading */}
        <div className={`mt-12 ${showContent ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>

      </div>

      {/* Tombol Theme Switcher */}
      <button
        onClick={() => setCurrentTheme(currentTheme === "light" ? "dark" : "light")}
        className="fixed top-6 right-6 p-3 rounded-full glass hover:scale-110 transition-all duration-300"
      >
        {currentTheme === "light" ? "🌙" : "☀️"}
      </button>
    </> // 1. Tutup Fragment
  )
}