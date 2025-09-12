import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Car Sydney - AutoSell.ai | Get Cash for Your Car in Sydney",
  description: "Sell your car fast in Sydney with AutoSell.ai. We buy all cars in Sydney and surrounding areas. Get instant quotes and same-day payment. Free pickup service.",
  keywords: "sell my car sydney, car buyers sydney, sell car sydney, cash for cars sydney, sell car fast sydney, sydney car buyers",
}

export default function SellMyCarSydneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My Car Sydney
              <span className="block text-red-200">Get Cash for Your Car in Sydney</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
              We buy all cars in Sydney and surrounding areas. Get an instant quote and same-day payment. 
              Free pickup service across Greater Sydney.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-white text-red-600 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get My Sydney Car Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Sydney Service Areas */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Sydney Service Areas
            </h2>
            <p className="text-xl text-gray-300">
              We service all of Greater Sydney and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { area: "Sydney CBD", description: "Central business district and inner city" },
              { area: "Eastern Suburbs", description: "Bondi, Coogee, Randwick, Woollahra" },
              { area: "Northern Beaches", description: "Manly, Dee Why, Narrabeen, Avalon" },
              { area: "North Shore", description: "Chatswood, North Sydney, Mosman, Lane Cove" },
              { area: "Western Suburbs", description: "Parramatta, Blacktown, Penrith, Liverpool" },
              { area: "South Sydney", description: "Cronulla, Sutherland, Hurstville, Kogarah" },
              { area: "Inner West", description: "Newtown, Leichhardt, Balmain, Marrickville" },
              { area: "Hills District", description: "Castle Hill, Baulkham Hills, Rouse Hill" },
              { area: "Blue Mountains", description: "Katoomba, Springwood, Wentworth Falls" }
            ].map((area, index) => (
              <div key={index} className="text-center p-6  hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-white mb-3">{area.area}</h3>
                <p className="text-gray-300">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in Sydney */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose AutoSell.ai in Sydney?
            </h2>
            <p className="text-xl text-gray-300">
              We understand Sydney&apos;s car market and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Sydney Prices",
                description: "We know Sydney's car market and offer competitive prices for all vehicles."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "Free Sydney Pickup",
                description: "We come to you anywhere in Greater Sydney at no extra cost."
              },
              {
                icon: "🔧",
                title: "Sydney Market Expertise",
                description: "Our team understands Sydney's unique car market and values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "All Sydney Areas",
                description: "We service from the CBD to the Blue Mountains and everywhere in between."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6  hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Sell Your Car in Sydney?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Get your free Sydney car valuation in 30 minutes and receive same-day payment.
          </p>
          <Link 
            href="/#sell-form" 
            className="inline-block bg-white text-red-600 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Sydney Car Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

