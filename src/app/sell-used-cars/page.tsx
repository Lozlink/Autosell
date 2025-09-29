import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Used Car - auto-sell.ai | Get Cash for Your Used Vehicle",
  description: "Sell your used car fast with auto-sell.ai. We buy all used cars in any condition. Get instant quotes and same-day payment for your used vehicle.",
  keywords: "sell used car, used car buyers, sell my car, used vehicle buyers, cash for used cars, sell car fast",
}

export default function SellUsedCarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Used Car
              <span className="block text-emerald-400">Get Cash for Your Used Vehicle</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              We buy all used cars in any condition - from daily drivers to project cars. 
              Get an instant quote and same-day payment for your used vehicle.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get My Used Car Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Types of Used Cars We Buy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Used Cars We Buy
            </h2>
            <p className="text-xl text-gray-600">
              We buy all used cars regardless of age, condition, or mileage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Daily Drivers", description: "Well-maintained cars for everyday use" },
              { type: "High Mileage Cars", description: "Cars with high kilometers but still running" },
              { type: "Older Vehicles", description: "Classic cars and vintage vehicles" },
              { type: "Project Cars", description: "Cars needing work or restoration" },
              { type: "Accident Damaged", description: "Cars with accident damage or repairs" },
              { type: "Mechanical Issues", description: "Cars with engine or transmission problems" },
              { type: "Non-Running Cars", description: "Cars that don't start or drive" },
              { type: "Flood Damaged", description: "Cars affected by water damage" },
              { type: "Written Off", description: "Cars with write-off status" }
            ].map((carType, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{carType.type}</h3>
                <p className="text-gray-600">{carType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Used Cars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose auto-sell.ai for Your Used Car?
            </h2>
            <p className="text-xl text-gray-600">
              We understand used car values and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Fair Used Car Prices",
                description: "We assess each car individually and offer fair market prices based on condition."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "Any Condition Accepted",
                description: "From perfect to non-running, we buy used cars in any condition."
              },
              {
                icon: "🔧",
                title: "Used Car Expertise",
                description: "Our team understands used car values and market conditions."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "Australia-Wide Service",
                description: "We come to you anywhere in Australia to inspect and buy your used car."
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
            Ready to Sell Your Used Car?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get your free used car valuation in 30 minutes and receive same-day payment.
          </p>
          <Link 
            href="/#sell-form" 
            className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Used Car Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

