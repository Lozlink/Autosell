'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-200 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">AutoSell.ai</h3>
                <p className="text-sm text-zinc-400">Australia&apos;s #1 Car Buyers</p>
              </div>
            </div>
            <p className="text-zinc-400 mb-4 max-w-md">
              Get your FREE car valuation in 30 minutes. Same-day OSKO payment, 
              on-site inspections, and we come to you anywhere in Australia.
            </p>
            <div className="flex space-x-4">
              <a href="tel:1800AUTOSELL" className="text-red-400 hover:text-red-300 font-semibold flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1800 AUTO SELL
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-zinc-400 hover:text-white transition-colors">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-zinc-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-zinc-400 hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-zinc-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#sell-form" className="text-zinc-400 hover:text-white transition-colors">
                  Free Car Valuation
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-zinc-400 hover:text-white transition-colors">
                  Same-Day Payment
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-zinc-400 hover:text-white transition-colors">
                  On-Site Inspections
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-zinc-400 hover:text-white transition-colors">
                  Australia-Wide Service
                </Link>
              </li>
              <li>
                <Link href="/#sell-form" className="text-zinc-400 hover:text-white transition-colors">
                  Best Price Guarantee
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Brands */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Popular Brands</h4>
            <ul className="space-y-2">
              {['Toyota', 'Ford', 'Holden', 'Mazda', 'Honda', 'Nissan', 'BMW', 'Mercedes'].map((brand) => (
                <li key={brand}>
                  <Link 
                    href={`/brands/${brand.toLowerCase()}?utm_source=footer&utm_medium=brand_link`} 
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicle Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Vehicle Types</h4>
            <ul className="space-y-2">
              {[
                { type: 'Cars', href: '/types/cars' },
                { type: 'SUVs', href: '/types/suvs' },
                { type: 'Utes', href: '/types/utes' },
                { type: 'Trucks', href: '/types/trucks' },
                { type: 'Vans', href: '/types/vans' },
                { type: 'Motorcycles', href: '/types/motorcycles' }
              ].map((item) => (
                <li key={item.type}>
                  <Link 
                    href={`${item.href}?utm_source=footer&utm_medium=type_link`} 
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-500 text-sm mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} AutoSell.ai. All rights reserved.</p>
              <p className="mt-1">ABN: [Your ABN] • Motor Dealer Licence: [Your Licence Number]</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-zinc-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-zinc-500 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/contact" className="text-zinc-500 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}