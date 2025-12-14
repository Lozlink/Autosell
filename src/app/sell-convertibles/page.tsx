import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Convertible - Auto-Sell.ai | Get Cash for Your Convertible Car",
  description: "Sell your convertible fast with Auto-Sell.ai. We buy all convertible models including roadsters, cabriolets, and drop-tops. Get instant quotes and same-day payment.",
  keywords: "sell convertible, convertible buyers, sell my convertible, convertible car buyers, cash for convertibles, sell convertible fast, roadster, cabriolet",
}

export default function SellConvertiblesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="text-gray-800 py-20" style={{ background: 'linear-gradient(135deg, #FFC325 0%, #FFD14D 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Convertible
              <span className="block" style={{ color: '#000' }}>Get Cash for Your Convertible Car</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              We buy all convertible models including roadsters, cabriolets, and drop-tops.
              Get an instant quote and same-day payment for your convertible.
            </p>
            <Link
              href="/#sell-form"
              className="inline-block px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              style={{ backgroundColor: '#FFC325', color: '#000' }}
            >
              Get My Convertible Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Convertible Types We Buy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Convertible Types We Buy
            </h2>
            <p className="text-xl text-gray-600">
              We buy all convertible models in any condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Sports Roadsters", description: "MX-5, Z4, TT Roadster, SLK, Boxster" },
              { type: "Luxury Convertibles", description: "SL-Class, 6 Series, A5 Cabriolet, E-Class" },
              { type: "Performance Drop-Tops", description: "M4 Convertible, AMG C63, RS5 Cabriolet" },
              { type: "Classic Convertibles", description: "Mustang Convertible, Camaro, Beetle" },
              { type: "Supercar Convertibles", description: "911 Cabriolet, R8 Spyder, AMG GT Roadster" },
              { type: "Compact Convertibles", description: "Cooper Convertible, 500C, Beetle Cabriolet" },
              { type: "Electric Convertibles", description: "Tesla Roadster, i8 Roadster" },
              { type: "Grand Tourer Convertibles", description: "Bentley Continental, Aston Martin DB11" },
              { type: "Retractable Hardtops", description: "SLK, 3 Series, A3 Cabriolet" }
            ].map((convertibleType, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{convertibleType.type}</h3>
                <p className="text-gray-600">{convertibleType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Convertibles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Auto-Sell.ai for Your Convertible?
            </h2>
            <p className="text-xl text-gray-600">
              We understand convertible values and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Convertible Prices",
                description: "We know convertible values and offer market-competitive prices for all models."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "All Convertible Types Accepted",
                description: "From roadsters to luxury convertibles, we buy every type in any condition."
              },
              {
                icon: "🔧",
                title: "Convertible Expertise",
                description: "Our team understands convertible vehicles and their market values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "Australia-Wide Service",
                description: "We come to you anywhere in Australia to inspect and buy your convertible."
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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #FFC325 0%, #FFD14D 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Sell Your Convertible?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Get your free convertible valuation in 30 minutes and receive same-day payment.
          </p>
          <Link
            href="/#sell-form"
            className="inline-block px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#FFC325', color: '#000' }}
          >
            Get My Convertible Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

