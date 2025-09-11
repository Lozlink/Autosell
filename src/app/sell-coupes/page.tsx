import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Coupe - AutoSell.ai | Get Cash for Your Coupe Car",
  description: "Sell your coupe fast with AutoSell.ai. We buy all coupe models including sports coupes, luxury coupes, and performance coupes. Get instant quotes and same-day payment.",
  keywords: "sell coupe, coupe buyers, sell my coupe, coupe car buyers, cash for coupes, sell coupe fast, sports coupe, luxury coupe",
}

export default function SellCoupesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Coupe
              <span className="block text-emerald-400">Get Cash for Your Coupe Car</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              We buy all coupe models including sports coupes, luxury coupes, and performance coupes. 
              Get an instant quote and same-day payment for your coupe.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get My Coupe Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Coupe Types We Buy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Coupe Types We Buy
            </h2>
            <p className="text-xl text-gray-600">
              We buy all coupe models in any condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Sports Coupes", description: "MX-5, BRZ, 370Z, TT, Z4" },
              { type: "Luxury Coupes", description: "BMW 4 Series, Mercedes C-Class, Audi A5" },
              { type: "Performance Coupes", description: "M4, AMG C63, RS5, M2" },
              { type: "Grand Tourers", description: "6 Series, CLS, A7, Panamera" },
              { type: "Supercars", description: "911, R8, AMG GT, i8" },
              { type: "Classic Coupes", description: "Mustang, Camaro, Challenger" },
              { type: "Electric Coupes", description: "Taycan, e-tron GT, Model S" },
              { type: "Convertible Coupes", description: "Cabriolet, Roadster, Spider" },
              { type: "Compact Coupes", description: "Veloster, RC, 2 Series" }
            ].map((coupeType, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{coupeType.type}</h3>
                <p className="text-gray-600">{coupeType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Coupes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AutoSell.ai for Your Coupe?
            </h2>
            <p className="text-xl text-gray-600">
              We understand coupe values and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Coupe Prices",
                description: "We know coupe values and offer market-competitive prices for all models."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "All Coupe Types Accepted",
                description: "From sports to luxury coupes, we buy every type in any condition."
              },
              {
                icon: "🔧",
                title: "Coupe Expertise",
                description: "Our team understands coupe vehicles and their market values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "Australia-Wide Service",
                description: "We come to you anywhere in Australia to inspect and buy your coupe."
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
            Ready to Sell Your Coupe?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get your free coupe valuation in 30 minutes and receive same-day payment.
          </p>
          <Link 
            href="/#sell-form" 
            className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Coupe Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

