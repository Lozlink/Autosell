import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Ute - auto-sell.ai | Get Cash for Your Ute Vehicle",
  description: "Sell your ute fast with auto-sell.ai. We buy all ute models including work utes, dual cabs, and pickups. Get instant quotes and same-day payment.",
  keywords: "sell ute, ute buyers, sell my ute, ute car buyers, cash for utes, sell ute fast, work ute, dual cab ute",
}

export default function SellUtesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Ute
              <span className="block text-emerald-400">Get Cash for Your Ute Vehicle</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              We buy all ute models including work utes, dual cabs, and pickups. 
              Get an instant quote and same-day payment for your ute.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get My Ute Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Ute Types We Buy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Ute Types We Buy
            </h2>
            <p className="text-xl text-gray-600">
              We buy all ute models in any condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Work Utes", description: "Hilux, Ranger, Triton, BT-50, D-Max" },
              { type: "Dual Cab Utes", description: "Amarok, Colorado, Navara, Triton" },
              { type: "Single Cab Utes", description: "Hilux Workmate, Ranger XL, Triton GL" },
              { type: "Extra Cab Utes", description: "Hilux SR, Ranger XLT, Triton GLS" },
              { type: "Luxury Utes", description: "Ranger Wildtrak, Hilux SR5, Amarok V6" },
              { type: "4WD Utes", description: "LandCruiser 79, Patrol, Defender 130" },
              { type: "Electric Utes", description: "F-150 Lightning, Rivian R1T" },
              { type: "Modified Utes", description: "Lifted, chipped, or custom utes" },
              { type: "Commercial Utes", description: "Trade utes, fleet vehicles" }
            ].map((uteType, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{uteType.type}</h3>
                <p className="text-gray-600">{uteType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Utes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose auto-sell.ai for Your Ute?
            </h2>
            <p className="text-xl text-gray-600">
              We understand ute values and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Ute Prices",
                description: "We know ute values and offer market-competitive prices for all models."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "All Ute Types Accepted",
                description: "From work utes to luxury models, we buy every type in any condition."
              },
              {
                icon: "🔧",
                title: "Ute Expertise",
                description: "Our team understands ute vehicles and their market values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "Australia-Wide Service",
                description: "We come to you anywhere in Australia to inspect and buy your ute."
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Sell Your Ute?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get your free ute valuation in 30 minutes and receive same-day payment.
          </p>
          <Link 
            href="/#sell-form" 
            className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Ute Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

