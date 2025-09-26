import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Car Adelaide - AutoSell.ai | Get Cash for Your Car in Adelaide",
  description: "Sell your car fast in Adelaide with AutoSell.ai. We buy all cars in Adelaide and surrounding areas. Get instant quotes and same-day payment. Free pickup service.",
  keywords: "sell my car adelaide, car buyers adelaide, sell car adelaide, cash for cars adelaide, sell car fast adelaide, adelaide car buyers",
}

export default function SellMyCarAdelaidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Car Adelaide
              <span className="block text-emerald-400">Get Cash for Your Car in Adelaide</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              We buy all cars in Adelaide and surrounding areas. Get an instant quote and same-day payment. 
              Free pickup service across Greater Adelaide.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get My Adelaide Car Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Adelaide Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Adelaide Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              We service all of Greater Adelaide and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { area: "Adelaide CBD", description: "Central business district and inner city" },
              { area: "Northern Suburbs", description: "Salisbury, Elizabeth, Gawler, Playford" },
              { area: "Southern Suburbs", description: "Noarlunga, Christies Beach, Seaford, Aldinga" },
              { area: "Eastern Suburbs", description: "Tea Tree Gully, Modbury, Golden Grove, TTG" },
              { area: "Western Suburbs", description: "Port Adelaide, Semaphore, Henley Beach, Glenelg" },
              { area: "Inner Adelaide", description: "North Adelaide, Unley, Norwood, Burnside" },
              { area: "Hills Areas", description: "Mount Barker, Stirling, Hahndorf, Aldgate" },
              { area: "Barossa Valley", description: "Nuriootpa, Tanunda, Angaston, Lyndoch" },
              { area: "Fleurieu Peninsula", description: "Victor Harbor, Goolwa, McLaren Vale" }
            ].map((area, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.area}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in Adelaide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AutoSell.ai in Adelaide?
            </h2>
            <p className="text-xl text-gray-600">
              We understand Adelaide&apos;s car market and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Adelaide Prices",
                description: "We know Adelaide's car market and offer competitive prices for all vehicles."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "Free Adelaide Pickup",
                description: "We come to you anywhere in Greater Adelaide at no extra cost."
              },
              {
                icon: "🔧",
                title: "Adelaide Market Expertise",
                description: "Our team understands Adelaide's unique car market and values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "All Adelaide Areas",
                description: "We service from the CBD to the Barossa and everywhere in between."
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
            Ready to Sell Your Car in Adelaide?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get your free Adelaide car valuation in 30 minutes and receive same-day payment.
          </p>
          <Link 
            href="/#sell-form" 
            className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Adelaide Car Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

