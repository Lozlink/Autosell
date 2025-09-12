import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Car Melbourne - AutoSell.ai | Get Cash for Your Car in Melbourne",
  description: "Sell your car fast in Melbourne with AutoSell.ai. We buy all cars in Melbourne and surrounding areas. Get instant quotes and same-day payment. Free pickup service.",
  keywords: "sell my car melbourne, car buyers melbourne, sell car melbourne, cash for cars melbourne, sell car fast melbourne, melbourne car buyers",
}

export default function SellMyCarMelbournePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Car Melbourne
              <span className="block text-emerald-400">Get Cash for Your Car in Melbourne</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              We buy all cars in Melbourne and surrounding areas. Get an instant quote and same-day payment. 
              Free pickup service across Greater Melbourne.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get My Melbourne Car Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Melbourne Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Melbourne Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              We service all of Greater Melbourne and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { area: "Melbourne CBD", description: "Central business district and inner city" },
              { area: "Eastern Suburbs", description: "Box Hill, Ringwood, Doncaster, Croydon" },
              { area: "Western Suburbs", description: "Footscray, Sunshine, Werribee, Altona" },
              { area: "Northern Suburbs", description: "Preston, Epping, Bundoora, Reservoir" },
              { area: "Southern Suburbs", description: "Frankston, Dandenong, Cranbourne, Pakenham" },
              { area: "Inner East", description: "Richmond, Hawthorn, Camberwell, Malvern" },
              { area: "Inner North", description: "Carlton, Fitzroy, Brunswick, Northcote" },
              { area: "Mornington Peninsula", description: "Mornington, Mount Eliza, Rosebud" },
              { area: "Yarra Valley", description: "Lilydale, Healesville, Warburton" }
            ].map((area, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.area}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in Melbourne */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AutoSell.ai in Melbourne?
            </h2>
            <p className="text-xl text-gray-600">
              We understand Melbourne&apos;s car market and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Melbourne Prices",
                description: "We know Melbourne's car market and offer competitive prices for all vehicles."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "Free Melbourne Pickup",
                description: "We come to you anywhere in Greater Melbourne at no extra cost."
              },
              {
                icon: "🔧",
                title: "Melbourne Market Expertise",
                description: "Our team understands Melbourne's unique car market and values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "All Melbourne Areas",
                description: "We service from the CBD to the Yarra Valley and everywhere in between."
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
            Ready to Sell Your Car in Melbourne?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get your free Melbourne car valuation in 30 minutes and receive same-day payment.
          </p>
          <Link 
            href="/#sell-form" 
            className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Melbourne Car Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

