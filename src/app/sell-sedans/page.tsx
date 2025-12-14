import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Sedan - Auto-Sell.ai | Get Cash for Your Sedan Car",
  description: "Sell your sedan fast with Auto-Sell.ai. We buy all sedan models including compact, mid-size, and large sedans. Get instant quotes and same-day payment.",
  keywords: "sell sedan, sedan buyers, sell my sedan, sedan car buyers, cash for sedans, sell sedan fast, compact sedan, large sedan",
}

export default function SellSedansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="text-gray-800 py-20" style={{ background: 'linear-gradient(135deg, #FFC325 0%, #FFD14D 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Sedan
              <span className="block" style={{ color: '#000' }}>Get Cash for Your Sedan Car</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              We buy all sedan models including compact, mid-size, and large sedans.
              Get an instant quote and same-day payment for your sedan.
            </p>
            <Link
              href="/#sell-form"
              className="inline-block px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              style={{ backgroundColor: '#FFC325', color: '#000' }}
            >
              Get My Sedan Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Sedan Types We Buy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Sedan Types We Buy
            </h2>
            <p className="text-xl text-gray-600">
              We buy all sedan models in any condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Compact Sedans", description: "Corolla, Civic, Elantra, Jetta, Mazda3" },
              { type: "Mid-Size Sedans", description: "Camry, Accord, Sonata, Passat, Mazda6" },
              { type: "Large Sedans", description: "Aurion, Commodore, Falcon, Liberty" },
              { type: "Luxury Sedans", description: "BMW 3/5 Series, Mercedes C/E Class, Audi A4/A6" },
              { type: "Performance Sedans", description: "WRX, Stinger, M3, AMG C63, RS4" },
              { type: "Hybrid Sedans", description: "Prius, Camry Hybrid, Accord Hybrid" },
              { type: "Electric Sedans", description: "Tesla Model 3/S, Polestar 2, i4" },
              { type: "Executive Sedans", description: "BMW 7 Series, Mercedes S-Class, Audi A8" },
              { type: "Sports Sedans", description: "M5, AMG E63, RS6, Alpina B5" }
            ].map((sedanType, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{sedanType.type}</h3>
                <p className="text-gray-600">{sedanType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Sedans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Auto-Sell.ai for Your Sedan?
            </h2>
            <p className="text-xl text-gray-600">
              We understand sedan values and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Sedan Prices",
                description: "We know sedan values and offer market-competitive prices for all models."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "All Sedan Types Accepted",
                description: "From compact to luxury sedans, we buy every type in any condition."
              },
              {
                icon: "🔧",
                title: "Sedan Expertise",
                description: "Our team understands sedan vehicles and their market values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "Australia-Wide Service",
                description: "We come to you anywhere in Australia to inspect and buy your sedan."
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
            Ready to Sell Your Sedan?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Get your free sedan valuation in 30 minutes and receive same-day payment.
          </p>
          <Link
            href="/#sell-form"
            className="inline-block px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#FFC325', color: '#000' }}
          >
            Get My Sedan Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

