import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Truck - AutoSell.ai | Get Cash for Your Truck Vehicle",
  description: "Sell your truck fast with AutoSell.ai. We buy all truck models including light trucks, heavy trucks, and commercial vehicles. Get instant quotes and same-day payment.",
  keywords: "sell truck, truck buyers, sell my truck, truck car buyers, cash for trucks, sell truck fast, light truck, heavy truck, commercial truck",
}

export default function SellTrucksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Truck
              <span className="block text-emerald-400">Get Cash for Your Truck Vehicle</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              We buy all truck models including light trucks, heavy trucks, and commercial vehicles. 
              Get an instant quote and same-day payment for your truck.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get My Truck Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Truck Types We Buy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Truck Types We Buy
            </h2>
            <p className="text-xl text-gray-600">
              We buy all truck models in any condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Light Trucks", description: "Hilux, Ranger, Triton, BT-50, D-Max" },
              { type: "Heavy Trucks", description: "Isuzu, Hino, Fuso, Iveco, Volvo" },
              { type: "Commercial Trucks", description: "Delivery trucks, box trucks, flatbeds" },
              { type: "Tipper Trucks", description: "Dump trucks, tipper bodies" },
              { type: "Crane Trucks", description: "Mobile cranes, service trucks" },
              { type: "Refrigerated Trucks", description: "Cold storage, freezer trucks" },
              { type: "Tow Trucks", description: "Recovery vehicles, car carriers" },
              { type: "Fire Trucks", description: "Emergency vehicles, fire engines" },
              { type: "Food Trucks", description: "Mobile kitchens, catering trucks" }
            ].map((truckType, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{truckType.type}</h3>
                <p className="text-gray-600">{truckType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Trucks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AutoSell.ai for Your Truck?
            </h2>
            <p className="text-xl text-gray-600">
              We understand truck values and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Truck Prices",
                description: "We know truck values and offer market-competitive prices for all models."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "All Truck Types Accepted",
                description: "From light to heavy trucks, we buy every type in any condition."
              },
              {
                icon: "🔧",
                title: "Truck Expertise",
                description: "Our team understands truck vehicles and their market values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "Australia-Wide Service",
                description: "We come to you anywhere in Australia to inspect and buy your truck."
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
            Ready to Sell Your Truck?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get your free truck valuation in 30 minutes and receive same-day payment.
          </p>
          <Link 
            href="/#sell-form" 
            className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Truck Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

