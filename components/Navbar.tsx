'use client'

import { useState } from 'react'
import DonationButton from './DonationButton'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-primary-600">
            Un Mar de Colores
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-primary-600 transition">
              Home
            </a>
            <a href="/about-us" className="text-gray-700 hover:text-primary-600 transition">
              About Us
            </a>
            <a href="/youth-programs" className="text-gray-700 hover:text-primary-600 transition">
              Youth Programs
            </a>
            <a href="/community-initiatives" className="text-gray-700 hover:text-primary-600 transition">
              Community
            </a>
            <a href="/volunteer" className="text-gray-700 hover:text-primary-600 transition">
              Volunteer
            </a>
            <DonationButton size="small" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="/"
              className="block text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about-us"
              className="block text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="/youth-programs"
              className="block text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Youth Programs
            </a>
            <a
              href="/community-initiatives"
              className="block text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a
              href="/volunteer"
              className="block text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Volunteer
            </a>
            <div className="pt-4">
              <DonationButton size="small" />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
