import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Car Brisbane - AutoSell.ai | Get Cash for Your Car in Brisbane",
  description: "Sell your car fast in Brisbane with AutoSell.ai. We buy all cars in Brisbane and surrounding areas. Get instant quotes and same-day payment. Free pickup service.",
  keywords: "sell my car brisbane, car buyers brisbane, sell car brisbane, cash for cars brisbane, sell car fast brisbane, brisbane car buyers",
}

export default function SellMyCarBrisbanePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Car Brisbane
              <span className="block text-emerald-400">Get Cash for Your Car in Brisbane</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              We buy all cars in Brisbane and surrounding areas. Get an instant quote and same-day payment. 
              Free pickup service across Greater Brisbane.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get My Brisbane Car Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Brisbane Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Brisbane Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              We service all of Greater Brisbane and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { area: "Brisbane CBD", description: "Central business district and inner city" },
              { area: "North Brisbane", description: "Chermside, Aspley, Nundah, Sandgate" },
              { area: "South Brisbane", description: "Logan, Beenleigh, Browns Plains, Springwood" },
              { area: "East Brisbane", description: "Cleveland, Capalaba, Wynnum, Manly" },
              { area: "West Brisbane", description: "Ipswich, Goodna, Redbank, Springfield" },
              { area: "Inner Brisbane", description: "New Farm, Teneriffe, West End, South Bank" },
              { area: "Gold Coast", description: "Surfers Paradise, Southport, Robina, Burleigh" },
              { area: "Sunshine Coast", description: "Maroochydore, Caloundra, Noosa, Mooloolaba" },
              { area: "Moreton Bay", description: "Redcliffe, Caboolture, North Lakes, Morayfield" }
            ].map((area, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.area}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in Brisbane */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AutoSell.ai in Brisbane?
            </h2>
            <p className="text-xl text-gray-600">
              We understand Brisbane&apos;s car market and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Brisbane Prices",
                description: "We know Brisbane's car market and offer competitive prices for all vehicles."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "Free Brisbane Pickup",
                description: "We come to you anywhere in Greater Brisbane at no extra cost."
              },
              {
                icon: "🔧",
                title: "Brisbane Market Expertise",
                description: "Our team understands Brisbane's unique car market and values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "All Brisbane Areas",
                description: "We service from the CBD to the Gold Coast and everywhere in between."
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
            Ready to Sell Your Car in Brisbane?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get your free Brisbane car valuation in 30 minutes and receive same-day payment.
          </p>
          <Link 
            href="/#sell-form" 
            className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Brisbane Car Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

