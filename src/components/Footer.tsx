'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-400
 via-blue-100 to-white
 text-gray-700 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top grid: Company, Quick Links, Services (exactly like screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 xl:gap-24">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-800 font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">auto-sell.ai</h3>
                <p className="text-sm text-blue-600">Australia&apos;s #1 Car Buyers</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Get your FREE car valuation in 30 minutes. Same-day OSKO payment, 
              on-site inspections, and we come to you anywhere in Australia.
            </p>
            <div className="flex space-x-4">
              <a href="tel:1800auto-sell" className="text-blue-600 hover:text-blue-500 font-semibold flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1800 AUTO SELL
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-600 hover:text-gray-800 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-600 hover:text-gray-800 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#sell-form" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Free Car Valuation
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Same-Day Payment
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-gray-600 hover:text-gray-800 transition-colors">
                  On-Site Inspections
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Australia-Wide Service
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Best Price Guarantee
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-500 text-sm mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} auto-sell.ai. All rights reserved.</p>
              <p className="mt-1">ABN: [Your ABN] • Motor Dealer Licence: [Your Licence Number]</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-zinc-500 hover:text-gray-800 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-zinc-500 hover:text-gray-800 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/contact" className="text-zinc-500 hover:text-gray-800 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}