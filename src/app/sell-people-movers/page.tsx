import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My People Mover - auto-sell.ai | Get Cash for Your People Mover",
  description: "Sell your people mover fast with auto-sell.ai. We buy all people mover models including 7-seat and 8-seat vehicles. Get instant quotes and same-day payment.",
  keywords: "sell people mover, people mover buyers, sell my people mover, people mover car buyers, cash for people movers, sell people mover fast, 7 seat car, 8 seat car",
}

export default function SellPeopleMoversPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="text-gray-800 py-20" style={{ background: 'linear-gradient(135deg, #FFC325 0%, #FFD14D 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My People Mover
              <span className="block" style={{ color: '#000' }}>Get Cash for Your People Mover</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              We buy all people mover models including 7-seat and 8-seat vehicles.
              Get an instant quote and same-day payment for your people mover.
            </p>
            <Link
              href="/#sell-form"
              className="inline-block px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              style={{ backgroundColor: '#FFC325', color: '#000' }}
            >
              Get My People Mover Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Popular People Mover Types We Buy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular People Mover Types We Buy
            </h2>
            <p className="text-xl text-gray-600">
              We buy all people mover models in any condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "7-Seat People Movers", description: "Carnival, CX-9, Sorento, Kluger, Pathfinder" },
              { type: "8-Seat People Movers", description: "Tarago, Elgrand, Alphard, Viano" },
              { type: "Luxury People Movers", description: "V-Class, Alphard, Elgrand, Vellfire" },
              { type: "Commercial People Movers", description: "Hiace, Sprinter, Transit, Crafter" },
              { type: "Hybrid People Movers", description: "Alphard Hybrid, Estima Hybrid" },
              { type: "Large SUVs", description: "LandCruiser, Patrol, Discovery, Range Rover" },
              { type: "Van-Based People Movers", description: "Hiace Commuter, Sprinter Passenger" },
              { type: "Minivan People Movers", description: "Odyssey, Sienna, Grand Caravan" },
              { type: "Electric People Movers", description: "ID. Buzz, e-NV200" }
            ].map((peopleMoverType, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{peopleMoverType.type}</h3>
                <p className="text-gray-600">{peopleMoverType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for People Movers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose auto-sell.ai for Your People Mover?
            </h2>
            <p className="text-xl text-gray-600">
              We understand people mover values and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive People Mover Prices",
                description: "We know people mover values and offer market-competitive prices for all models."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "All People Mover Types Accepted",
                description: "From 7-seat to 8-seat vehicles, we buy every type in any condition."
              },
              {
                icon: "🔧",
                title: "People Mover Expertise",
                description: "Our team understands people mover vehicles and their market values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "Australia-Wide Service",
                description: "We come to you anywhere in Australia to inspect and buy your people mover."
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
            Ready to Sell Your People Mover?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Get your free people mover valuation in 30 minutes and receive same-day payment.
          </p>
          <Link
            href="/#sell-form"
            className="inline-block px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#FFC325', color: '#000' }}
          >
            Get My People Mover Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

