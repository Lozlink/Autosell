import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Hyundai - AutoSell.ai | Get Cash for Your Hyundai Car",
  description: "Sell your Hyundai car fast with AutoSell.ai. We buy all Hyundai models including i30, Tucson, Santa Fe, Elantra, and more. Get instant quotes and same-day payment.",
  keywords: "sell hyundai, hyundai buyers, sell i30, sell tucson, sell santa fe, sell elantra, hyundai car buyers, cash for hyundai",
}

export default function SellHyundaiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Hyundai
              <span className="block text-emerald-400">Get Cash for Your Hyundai Car</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              We buy all Hyundai models including i30, Tucson, Santa Fe, Elantra, Accent, and more. 
              Get an instant quote and same-day payment for your Hyundai.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get My Hyundai Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Hyundai Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Hyundai Models We Buy
            </h2>
            <p className="text-xl text-gray-600">
              We buy all Hyundai models in any condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { model: "Hyundai i30", description: "Popular hatchback and sedan" },
              { model: "Hyundai Tucson", description: "Compact SUV with great value" },
              { model: "Hyundai Santa Fe", description: "Large 7-seat SUV" },
              { model: "Hyundai Elantra", description: "Stylish mid-size sedan" },
              { model: "Hyundai Accent", description: "Affordable compact car" },
              { model: "Hyundai Kona", description: "Small SUV with personality" },
              { model: "Hyundai Sonata", description: "Premium mid-size sedan" },
              { model: "Hyundai Veloster", description: "Sporty coupe" },
              { model: "Hyundai Genesis", description: "Luxury sedan" }
            ].map((hyundai, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{hyundai.model}</h3>
                <p className="text-gray-600">{hyundai.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Hyundai */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AutoSell.ai for Your Hyundai?
            </h2>
            <p className="text-xl text-gray-600">
              We understand Hyundai values and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Hyundai Prices",
                description: "We know Hyundai values and offer market-competitive prices for all models."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "All Models Accepted",
                description: "From Accent to Genesis, we buy every Hyundai model in any condition."
              },
              {
                icon: "🔧",
                title: "Hyundai Expertise",
                description: "Our team understands Hyundai vehicles and their market values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "Australia-Wide Service",
                description: "We come to you anywhere in Australia to inspect and buy your Hyundai."
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
            Ready to Sell Your Hyundai?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get your free Hyundai valuation in 30 minutes and receive same-day payment.
          </p>
          <Link 
            href="/#sell-form" 
            className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Hyundai Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

