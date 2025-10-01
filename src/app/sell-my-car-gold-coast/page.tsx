import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Car Gold Coast - auto-sell.ai | Get Cash for Your Car on the Gold Coast",
  description: "Sell your car fast on the Gold Coast with auto-sell.ai. We buy all cars on the Gold Coast and surrounding areas. Get instant quotes and same-day payment. Free pickup service.",
  keywords: "sell my car gold coast, car buyers gold coast, sell car gold coast, cash for cars gold coast, sell car fast gold coast, gold coast car buyers",
}

export default function SellMyCarGoldCoastPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Car Gold Coast
              <span className="block text-emerald-400">Get Cash for Your Car on the Gold Coast</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
              We buy all cars on the Gold Coast and surrounding areas. Get an instant quote and same-day payment. 
              Free pickup service across the Gold Coast region.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-emerald-600 text-gray-800 px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get My Gold Coast Car Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Gold Coast Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gold Coast Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              We service all of the Gold Coast and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { area: "Surfers Paradise", description: "The heart of the Gold Coast" },
              { area: "Southport", description: "Central business district" },
              { area: "Broadbeach", description: "Beachside entertainment precinct" },
              { area: "Burleigh Heads", description: "Popular beach and headland" },
              { area: "Robina", description: "Shopping and business hub" },
              { area: "Nerang", description: "Central Gold Coast location" },
              { area: "Coomera", description: "Northern Gold Coast growth area" },
              { area: "Tweed Heads", description: "Border town with NSW" },
              { area: "Tamborine Mountain", description: "Scenic hinterland area" }
            ].map((area, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.area}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us on the Gold Coast */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose auto-sell.ai on the Gold Coast?
            </h2>
            <p className="text-xl text-gray-600">
              We understand the Gold Coast&apos;s car market and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Gold Coast Prices",
                description: "We know the Gold Coast's car market and offer competitive prices for all vehicles."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "Free Gold Coast Pickup",
                description: "We come to you anywhere on the Gold Coast at no extra cost."
              },
              {
                icon: "🔧",
                title: "Gold Coast Market Expertise",
                description: "Our team understands the Gold Coast's unique car market and values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "All Gold Coast Areas",
                description: "We service from Surfers Paradise to the hinterland and everywhere in between."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Sell Your Car on the Gold Coast?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get your free Gold Coast car valuation in 30 minutes and receive same-day payment.
          </p>
          <Link 
            href="/#sell-form" 
            className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Gold Coast Car Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

