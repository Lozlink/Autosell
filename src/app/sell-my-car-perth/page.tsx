import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sell My Car Perth - auto-sell.ai | Get Cash for Your Car in Perth",
  description: "Sell your car fast in Perth with auto-sell.ai. We buy all cars in Perth and surrounding areas. Get instant quotes and same-day payment. Free pickup service.",
  keywords: "sell my car perth, car buyers perth, sell car perth, cash for cars perth, sell car fast perth, perth car buyers",
}

export default function SellMyCarPerthPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="text-white py-20" style={{ background: 'linear-gradient(135deg, #FFC325 0%, #FFD14D 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#000' }}>
              Sell My Car Perth
              <span className="block" style={{ color: '#000' }}>Get Cash for Your Car in Perth</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8" style={{ color: '#1f2937' }}>
              We buy all cars in Perth and surrounding areas. Get an instant quote and same-day payment.
              Free pickup service across Greater Perth.
            </p>
            <Link
              href="/#sell-form"
              className="inline-block px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              style={{ backgroundColor: '#000', color: '#FFC325' }}
            >
              Get My Perth Car Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Perth Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perth Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              We service all of Greater Perth and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { area: "Perth CBD", description: "Central business district and inner city" },
              { area: "Northern Suburbs", description: "Joondalup, Wanneroo, Stirling, Mindarie" },
              { area: "Southern Suburbs", description: "Mandurah, Rockingham, Kwinana, Baldivis" },
              { area: "Eastern Suburbs", description: "Midland, Swan, Kalamunda, Mundaring" },
              { area: "Western Suburbs", description: "Cottesloe, Claremont, Nedlands, Subiaco" },
              { area: "Inner Perth", description: "Northbridge, East Perth, West Perth, South Perth" },
              { area: "Fremantle", description: "Fremantle, Cockburn, Melville, East Fremantle" },
              { area: "Hills District", description: "Kalamunda, Mundaring, Chidlow, Gidgegannup" },
              { area: "Coastal Areas", description: "Scarborough, Trigg, Hillarys, Mullaloo" }
            ].map((area, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.area}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in Perth */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose auto-sell.ai in Perth?
            </h2>
            <p className="text-xl text-gray-600">
              We understand Perth&apos;s car market and offer competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Competitive Perth Prices",
                description: "We know Perth's car market and offer competitive prices for all vehicles."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🚗",
                title: "Free Perth Pickup",
                description: "We come to you anywhere in Greater Perth at no extra cost."
              },
              {
                icon: "🔧",
                title: "Perth Market Expertise",
                description: "Our team understands Perth's unique car market and values."
              },
              {
                icon: "📋",
                title: "No Hidden Fees",
                description: "What we quote is what you get paid. No deductions or hidden costs."
              },
              {
                icon: "🌏",
                title: "All Perth Areas",
                description: "We service from the CBD to the hills and everywhere in between."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#000' }}>
            Ready to Sell Your Car in Perth?
          </h2>
          <p className="text-xl mb-8" style={{ color: '#1f2937' }}>
            Get your free Perth car valuation in 30 minutes and receive same-day payment.
          </p>
          <Link
            href="/#sell-form"
            className="inline-block px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#000', color: '#FFC325' }}
          >
            Get My Perth Car Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

