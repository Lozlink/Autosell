'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBrandsOpen, setIsBrandsOpen] = useState(false)
  const [isTypesOpen, setIsTypesOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  
  const brandsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const typesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const contactTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleBrandsMouseEnter = () => {
    if (brandsTimeoutRef.current) {
      clearTimeout(brandsTimeoutRef.current)
      brandsTimeoutRef.current = null
    }
    setIsBrandsOpen(true)
  }

  const handleBrandsMouseLeave = () => {
    brandsTimeoutRef.current = setTimeout(() => {
      setIsBrandsOpen(false)
    }, 150)
  }

  const handleTypesMouseEnter = () => {
    if (typesTimeoutRef.current) {
      clearTimeout(typesTimeoutRef.current)
      typesTimeoutRef.current = null
    }
    setIsTypesOpen(true)
  }

  const handleTypesMouseLeave = () => {
    typesTimeoutRef.current = setTimeout(() => {
      setIsTypesOpen(false)
    }, 150)
  }

  const handleContactMouseEnter = () => {
    if (contactTimeoutRef.current) {
      clearTimeout(contactTimeoutRef.current)
      contactTimeoutRef.current = null
    }
    setIsContactOpen(true)
  }

  const handleContactMouseLeave = () => {
    contactTimeoutRef.current = setTimeout(() => {
      setIsContactOpen(false)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (brandsTimeoutRef.current) clearTimeout(brandsTimeoutRef.current)
      if (typesTimeoutRef.current) clearTimeout(typesTimeoutRef.current)
      if (contactTimeoutRef.current) clearTimeout(contactTimeoutRef.current)
    }
  }, [])

  return (
    <header className="bg-gradient-to-b from-black via-zinc-900 to-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80 shadow-lg sticky top-0 z-50 text-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">AutoSell.ai</h1>
                <p className="text-xs text-red-400 font-medium">Australia&apos;s #1 Car Buyers</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#how-it-works" className="text-zinc-200 hover:text-red-400 font-medium transition-colors text-sm">
              How It Works
            </Link>
            
            {/* Brands Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={handleBrandsMouseEnter}
                onMouseLeave={handleBrandsMouseLeave}
                className="text-zinc-200 hover:text-red-400 font-medium transition-colors text-sm flex items-center gap-1"
              >
                Brands
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isBrandsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseEnter={handleBrandsMouseEnter}
                  onMouseLeave={handleBrandsMouseLeave}
                  className="absolute top-full left-0 mt-1 w-56 bg-zinc-900 text-zinc-100 rounded-lg shadow-2xl border border-zinc-700/60 py-2 z-50"
                >
                  {['Toyota', 'Ford', 'Holden', 'Mazda', 'Honda', 'Nissan', 'BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Hyundai', 'Kia'].map((brand) => (
                    <Link
                      key={brand}
                      href={`/brands/${brand.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 hover:text-red-400 transition-colors"
                    >
                      {brand}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Types Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={handleTypesMouseEnter}
                onMouseLeave={handleTypesMouseLeave}
                className="text-zinc-200 hover:text-red-400 font-medium transition-colors text-sm flex items-center gap-1"
              >
                Types
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isTypesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseEnter={handleTypesMouseEnter}
                  onMouseLeave={handleTypesMouseLeave}
                  className="absolute top-full left-0 mt-1 w-56 bg-zinc-900 text-zinc-100 rounded-lg shadow-2xl border border-zinc-700/60 py-2 z-50"
                >
                  {[
                    { type: 'Cars', href: '/types/cars' },
                    { type: 'SUVs', href: '/types/suvs' },
                    { type: 'Utes', href: '/types/utes' },
                    { type: 'Trucks', href: '/types/trucks' },
                    { type: 'Vans', href: '/types/vans' },
                    { type: 'Motorcycles', href: '/types/motorcycles' },
                    { type: 'Boats', href: '/types/boats' },
                    { type: 'Caravans', href: '/types/caravans' }
                  ].map((item) => (
                    <Link
                      key={item.type}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 hover:text-red-400 transition-colors"
                    >
                      {item.type}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link href='/how-to-sell-car-fast' className="text-zinc-200 hover:text-red-400 font-medium transition-colors text-sm">
              Sell Fast
            </Link>
            <Link href='/car-valuation-guide' className="text-zinc-200 hover:text-red-400 font-medium transition-colors text-sm">
              Valuation Guide
            </Link>
            
            {/* Contact Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={handleContactMouseEnter}
                onMouseLeave={handleContactMouseLeave}
                className="text-zinc-200 hover:text-red-400 font-medium transition-colors text-sm flex items-center gap-1"
              >
                Contact
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isContactOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseEnter={handleContactMouseEnter}
                  onMouseLeave={handleContactMouseLeave}
                  className="absolute top-full left-0 mt-1 w-56 bg-zinc-900 text-zinc-100 rounded-lg shadow-2xl border border-zinc-700/60 py-2 z-50"
                >
                  <Link href="/contact" className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 hover:text-red-400 transition-colors">
                    Contact Us
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 hover:text-red-400 transition-colors">
                    Blog
                  </Link>
                  <Link href="/#reviews" className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 hover:text-red-400 transition-colors">
                    Reviews
                  </Link>
                  <Link href="/faq" className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 hover:text-red-400 transition-colors">
                    FAQ
                  </Link>
                </motion.div>
              )}
            </div>

            <a 
              href="tel:1800AUTOSELL" 
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              1800 AUTO SELL
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4 text-zinc-200">
              <Link 
                href="/#how-it-works" 
                className="text-zinc-200 hover:text-red-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              
              {/* Mobile Brands */}
              <div>
                <div className="text-zinc-200 font-medium mb-2">Brands</div>
                <div className="ml-4 grid grid-cols-2 gap-2">
                  {['Toyota', 'Ford', 'Holden', 'Mazda', 'Honda', 'Nissan', 'BMW', 'Mercedes'].map((brand) => (
                    <Link
                      key={brand}
                      href={`/brands/${brand.toLowerCase()}`}
                      className="text-sm text-zinc-300 hover:text-red-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Types */}
              <div>
                <div className="text-zinc-200 font-medium mb-2">Types</div>
                <div className="ml-4 grid grid-cols-2 gap-2">
                  {[
                    { type: 'Cars', href: '/types/cars' },
                    { type: 'SUVs', href: '/types/suvs' },
                    { type: 'Utes', href: '/types/utes' },
                    { type: 'Trucks', href: '/types/trucks' },
                    { type: 'Vans', href: '/types/vans' },
                    { type: 'Motorcycles', href: '/types/motorcycles' }
                  ].map((item) => (
                    <Link
                      key={item.type}
                      href={item.href}
                      className="text-sm text-zinc-300 hover:text-red-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.type}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/how-to-sell-car-fast" 
                className="text-zinc-200 hover:text-red-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell Fast
              </Link>
              <Link 
                href="/car-valuation-guide" 
                className="text-zinc-200 hover:text-red-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Valuation Guide
              </Link>
              <Link 
                href="/contact" 
                className="text-zinc-200 hover:text-red-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                href="/blog" 
                className="text-zinc-200 hover:text-red-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/#reviews" 
                className="text-zinc-200 hover:text-red-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                href="/faq" 
                className="text-zinc-200 hover:text-red-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <a 
                href="tel:1800AUTOSELL" 
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 1800 AUTO SELL
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}