import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Mazda - AutoSell.ai | Get Cash for Your Mazda Car",
  description: "Sell your Mazda car fast with AutoSell.ai. We buy all Mazda models including CX-5, Mazda3, BT-50, CX-3, and more. Get instant quotes and same-day payment.",
  keywords: "sell mazda, mazda buyers, sell cx-5, sell mazda3, sell bt-50, sell cx-3, mazda car buyers, cash for mazda",
}

export default function SellMazdaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Mazda
              <span className="block text-emerald-400">Get Cash for Your Mazda Car</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              We buy all Mazda models including CX-5, Mazda3, BT-50, CX-3, Mazda6, and more. 
              Get an instant quote and same-day payment for your Mazda.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get My Mazda Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Mazda Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Mazda Models We Buy
            </h2>
            <p className="text-xl text-gray-600">
              We buy all Mazda models in any condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { model: "Mazda CX-5", description: "Australia's most popular SUV" },
              { model: "Mazda3", description: "Stylish hatchback and sedan" },
              { model: "Mazda BT-50", description: "Tough work ute" },
              { model: "Mazda CX-3", description: "Compact SUV" },
              { model: "Mazda6", description: "Premium mid-size sedan" },
              { model: "Mazda CX-9", description: "Large 7-seat SUV" },
              { model: "Mazda2", description: "Compact city car" },
              { model: "Mazda MX-5", description: "Iconic sports car" },
              { model: "Mazda CX-8", description: "Family SUV" }
            ].map((mazda, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{mazda.model}</h3>
                <p className="text-gray-600">{mazda.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Mazda */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AutoSell.ai for Your Mazda?
            </h2>
            <p className="text-xl text-gray-600">
              We understand Mazda values and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Mazda Prices",
                description: "We know Mazda values and offer market-competitive prices for all models."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "All Models Accepted",
                description: "From Mazda2 to CX-9, we buy every Mazda model in any condition."
              },
              {
                icon: "🔧",
                title: "Mazda Expertise",
                description: "Our team understands Mazda vehicles and their market values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "Australia-Wide Service",
                description: "We come to you anywhere in Australia to inspect and buy your Mazda."
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
            Ready to Sell Your Mazda?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get your free Mazda valuation in 30 minutes and receive same-day payment.
          </p>
          <Link 
            href="/#sell-form" 
            className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Mazda Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

