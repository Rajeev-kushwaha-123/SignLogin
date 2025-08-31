import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center py-12 bg-gray-50">
      {/* Hero Image */}
      <img
        src={assets.header_img}
        alt="Header"
        className="w-40 h-40 object-contain mb-6"
      />

      {/* Heading with waving hand */}
      <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
        Hey Developer
        <img
          src={assets.hand_wave}
          alt="👋"
          className="w-8 h-8 animate-bounce"
        />
      </h1>

      <p className="mt-4 text-gray-600 max-w-md">
        Welcome to your project — let’s build something amazing with React &
        Tailwind!
      </p>

      {/* Call-to-Action Button */}
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-xl shadow-md hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </header>
  )
}

export default Header
