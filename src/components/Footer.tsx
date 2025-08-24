'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">AutoSell.ai</h3>
                <p className="text-sm text-gray-300">Australia&apos;s #1 Car Buyers</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Get your FREE car valuation in 30 minutes. Same-day OSKO payment, 
              on-site inspections, and we come to you anywhere in Australia.
            </p>
            <div className="flex space-x-4">
              <a href="tel:1800AUTOSELL" className="text-emerald-400 hover:text-emerald-300 font-semibold">
                📞 1800 AUTO SELL
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-gray-300 hover:text-white transition-colors">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-gray-300 hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#sell-form" className="text-gray-300 hover:text-white transition-colors">
                  Free Car Valuation
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-gray-300 hover:text-white transition-colors">
                  Same-Day Payment
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-gray-300 hover:text-white transition-colors">
                  On-Site Inspections
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-gray-300 hover:text-white transition-colors">
                  Australia-Wide Service
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-gray-300 hover:text-white transition-colors">
                  Best Price Guarantee
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} AutoSell.ai. All rights reserved.</p>
              <p className="mt-1">ABN: [Your ABN] • Motor Dealer Licence: [Your Licence Number]</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}