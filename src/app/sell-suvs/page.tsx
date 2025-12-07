import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My SUV - auto-sell.ai | Get Cash for Your SUV Vehicle",
  description: "Sell your SUV fast with auto-sell.ai. We buy all SUV models including compact, mid-size, and large SUVs. Get instant quotes and same-day payment.",
  keywords: "sell suv, suv buyers, sell my suv, suv car buyers, cash for suvs, sell suv fast, compact suv, large suv",
}

export default function SellSUVsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="text-gray-800 py-20" style={{ background: 'linear-gradient(135deg, #FFC325 0%, #FFD14D 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My SUV
              <span className="block" style={{ color: '#000' }}>Get Cash for Your SUV Vehicle</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              We buy all SUV models including compact, mid-size, and large SUVs.
              Get an instant quote and same-day payment for your SUV.
            </p>
            <Link
              href="/#sell-form"
              className="inline-block px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              style={{ backgroundColor: '#FFC325', color: '#000' }}
            >
              Get My SUV Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Popular SUV Types We Buy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular SUV Types We Buy
            </h2>
            <p className="text-xl text-gray-600">
              We buy all SUV models in any condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Compact SUVs", description: "CX-5, RAV4, CR-V, Tiguan, Sportage" },
              { type: "Mid-Size SUVs", description: "Outback, Forester, Santa Fe, Territory" },
              { type: "Large SUVs", description: "LandCruiser, Prado, Kluger, Sorento" },
              { type: "Luxury SUVs", description: "BMW X5, Mercedes GLE, Audi Q7" },
              { type: "7-Seat SUVs", description: "Carnival, CX-9, Sorento, Kluger" },
              { type: "4WD SUVs", description: "LandCruiser, Pajero, Patrol, Defender" },
              { type: "Hybrid SUVs", description: "RAV4 Hybrid, Niro, Outlander PHEV" },
              { type: "Electric SUVs", description: "Tesla Model Y, Ioniq 5, EV6" },
              { type: "Performance SUVs", description: "Porsche Cayenne, BMW X6, Range Rover" }
            ].map((suvType, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{suvType.type}</h3>
                <p className="text-gray-600">{suvType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for SUVs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose auto-sell.ai for Your SUV?
            </h2>
            <p className="text-xl text-gray-600">
              We understand SUV values and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive SUV Prices",
                description: "We know SUV values and offer market-competitive prices for all models."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "All SUV Types Accepted",
                description: "From compact to large SUVs, we buy every type in any condition."
              },
              {
                icon: "🔧",
                title: "SUV Expertise",
                description: "Our team understands SUV vehicles and their market values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "Australia-Wide Service",
                description: "We come to you anywhere in Australia to inspect and buy your SUV."
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
            Ready to Sell Your SUV?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Get your free SUV valuation in 30 minutes and receive same-day payment.
          </p>
          <Link
            href="/#sell-form"
            className="inline-block px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#FFC325', color: '#000' }}
          >
            Get My SUV Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

