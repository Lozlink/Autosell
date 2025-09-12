import {Suspense} from 'react'
import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
import CarModelsRotation from '@/components/CarModelsRotation'
import ReviewsComponent from '@/components/ReviewsComponent'
import MapComponent from '@/components/MapComponent'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion } from 'framer-motion'
import type { Metadata } from 'next'

function CarSellFormFallback() {
  return (
      <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded mb-6"></div>
          <div className="space-y-4">
            <div className="h-12 bg-gray-700 rounded"></div>
            <div className="h-12 bg-gray-700 rounded"></div>
            <div className="h-12 bg-gray-700 rounded"></div>
            <div className="h-12 bg-gray-700 rounded"></div>
            <div className="h-12 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
  )
}

export const metadata: Metadata = {
  title: "AutoSell.ai - Sell Your Car Fast for Cash | Australia's #1 Car Buyers",
  description: "Sell your car instantly with AutoSell.ai. Get free quotes in 30 minutes, same-day payment, and hassle-free car selling across Australia. We buy all cars in any condition!",
  keywords: "sell my car, car buyers Australia, cash for cars, sell car fast, instant car quote, same day payment, car valuation, we buy cars, car buying service",
  openGraph: {
    title: "AutoSell.ai - Sell Your Car Fast for Cash | Australia's #1 Car Buyers",
    description: "Get an instant quote for your car. Same-day payment, no hassles, best prices guaranteed. We buy all cars in any condition across Australia.",
    type: "website",
    locale: "en_AU",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      {/* Hero Section with Integrated Form */}
      <section id="sell-form" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Sell Your Car
                <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Fast for Cash</span>
              </h1>
              <p className="text-lg md:text-xl text-red-100 mb-8 leading-relaxed">
                Australia&apos;s #1 car buying service. Get a <strong className="text-red-200">FREE valuation</strong> in 30 minutes, 
                same-day payment via OSKO, and skip all the hassles of private selling.
              </p>
              
              {/* Key Benefits - Minimalist Style */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-400 text-lg">⚡</span>
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">30min Quote</div>
                  <div className="text-red-100 text-sm">Instant valuation</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-400 text-lg">$</span>
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">Same Day OSKO</div>
                  <div className="text-red-100 text-sm">Instant payment</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-400 text-lg">✓</span>
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">Any Condition</div>
                  <div className="text-red-100 text-sm">All cars welcome</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-400 text-lg">AU</span>
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">Australia Wide</div>
                  <div className="text-red-100 text-sm">Nationwide service</div>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-lg text-red-100 mb-8">
                  ★ 4.9/5 from 5,000+ happy customers • Open 7 days a week
                </p>
              </div>
            </div>

            {/* Hero Form */}
            <div>
              <Suspense fallback={<CarSellFormFallback />}>
                <CarSellForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section - Minimalist Style */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AutoSell.ai?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The smart way to sell your car with maximum value and minimum hassle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "Immediate Payment",
                description: "Get paid instantly via OSKO transfer. No waiting, no delays.",
                href: "/value-propositions/immediate-payment"
              },
              {
                icon: "🔍",
                title: "On-Site Inspections",
                description: "We come to you anywhere in Australia. No need to travel.",
                href: "/value-propositions/on-site-inspections"
              },
              {
                icon: "🕒",
                title: "Open 7 Days",
                description: "Available when you need us, including weekends and public holidays.",
                href: "#"
              },
              {
                icon: "📈",
                title: "Best Price Guarantee",
                description: "We beat like-for-like offers. Get the best value for your car.",
                href: "/value-propositions/best-price-guarantee"
              },
              {
                icon: "✅",
                title: "100% Satisfaction",
                description: "Thousands of happy customers across Australia trust us.",
                href: "#"
              },
              {
                icon: "🚗",
                title: "Smooth Sales Process",
                description: "From quote to payment in hours, not days or weeks.",
                href: "#"
              }
            ].map((proposition, index) => (
              <a
                key={index}
                href={proposition.href}
                className="group text-center p-6 transition-colors"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                  <span className="text-2xl group-hover:text-white transition-colors">{proposition.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">{proposition.title}</h3>
                <p className="text-gray-300 leading-relaxed">{proposition.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Minimalist Style */}
      <section id="how-it-works" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Selling your car has never been this easy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Get Your Quote',
                description: 'Fill out our simple form with your car details. Our AI system provides an instant valuation in just 30 minutes.',
                icon: '📝'
              },
              {
                step: '02',
                title: 'Accept Our Offer',
                description: 'Review your competitive offer. If you\'re happy, accept it and we\'ll arrange a convenient inspection time.',
                icon: '✅'
              },
              {
                step: '03',
                title: 'Get Paid Instantly',
                description: 'We inspect your car, complete the paperwork, and transfer the money to your account on the same day.',
                icon: '💰'
              }
            ].map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="text-2xl font-bold text-red-500 mb-3">{step.step}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                  {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-0.5 bg-red-200"></div>
                      </div>
                  )}
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Models We Buy - Minimalist Style */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Car Models We Buy
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Any make, any model, any condition - we buy them all
            </p>
          </div>
          
          <CarModelsRotation />
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 mb-6">
              Don&apos;t see your model? We buy all makes and models - 
              <a href="#sell-form" className="text-red-400 hover:text-red-300 font-semibold"> get your quote anyway!</a>
            </p>
          </div>
        </div>
      </section>

      {/* Brands Grid - Minimalist Style */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Browse by Brand</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">We buy all makes</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["Toyota","Ford","Holden","Mazda","Honda","Nissan","BMW","Mercedes","Audi","Volkswagen","Hyundai","Kia"].map((brand) => (
              <a
                key={brand}
                href={`/brands/${brand.toLowerCase()}`}
                className="group text-center"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors">
                  <span className="text-lg font-bold text-red-500 group-hover:text-white transition-colors">
                    {brand.charAt(0)}
                  </span>
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors">{brand}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Australia-Wide Coverage - Minimalist Style */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Australia-Wide Service
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We come to you anywhere in Australia
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { city: 'Sydney', state: 'NSW' },
              { city: 'Melbourne', state: 'VIC' },
              { city: 'Brisbane', state: 'QLD' },
              { city: 'Perth', state: 'WA' },
              { city: 'Adelaide', state: 'SA' },
              { city: 'Canberra', state: 'ACT' },
              { city: 'Gold Coast', state: 'QLD' },
              { city: 'Darwin', state: 'NT' }
            ].map((location) => (
              <div key={location.city} className="text-center group bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-700 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors">
                  <span className="text-lg font-bold text-red-500 group-hover:text-white transition-colors">
                    {location.city.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">{location.city}</h3>
                <p className="text-gray-300 text-sm">{location.state}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-12">
            <p className="text-lg text-gray-300 mb-6">
              Plus all regional areas, country towns, and remote locations
            </p>
            <a 
              href="#sell-form" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Get Your Quote - We Come to You!
            </a>
          </div>

          {/* Map Component */}
          <div className="max-w-5xl mx-auto">
            <MapComponent />
          </div>
        </div>
      </section>

      {/* Customer Reviews - Minimalist Style */}
      <section id="reviews" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="flex text-yellow-400 text-2xl">★★★★★</div>
              <span className="text-lg text-gray-300">4.9/5 from 2,000+ reviews</span>
            </div>
          </div>

          <ReviewsComponent />
        </div>
      </section>

      {/* FAQ Section - Minimalist Style */}
      <section id="faq" className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about selling your car
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can I get a quote?",
                answer: "Our AI-powered system typically provides quotes within 30 minutes of submitting your car details. During business hours, many quotes are available in just 10-15 minutes."
              },
              {
                question: "Do you really pay on the same day?",
                answer: "Yes! Once we inspect your vehicle and complete the paperwork, we transfer the money directly to your bank account via OSKO, which typically processes within minutes."
              },
              {
                question: "What if my car isn't running?",
                answer: "No problem! We buy cars in all conditions - running or not, damaged or perfect. We'll arrange towing if needed and still provide competitive offers."
              },
              {
                question: "Are there any hidden fees?",
                answer: "Absolutely not. Our quote is what you get paid. We don't charge any fees, commissions, or deduct costs for paperwork, towing, or processing."
              },
              {
                question: "How do you determine the price?",
                answer: "We use real-time market data, RedBook valuations, and our extensive network of buyers to ensure you get the best possible price for your vehicle."
              },
              {
                question: "What areas do you service?",
                answer: "We operate Australia-wide! From major cities to remote areas, we can arrange pickup and payment anywhere in Australia."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Buy All Types Section - Minimalist Style */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We Buy All Types of Vehicles
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From cars to trucks, we buy everything - no matter the condition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: 'Cars', href: '/types/cars', desc: 'All makes and models, any condition' },
              { type: 'SUVs', href: '/types/suvs', desc: '4WDs, crossovers, and family vehicles' },
              { type: 'Utes', href: '/types/utes', desc: 'Work utes, dual cabs, and pickups' },
              { type: 'Trucks', href: '/types/trucks', desc: 'Commercial trucks and heavy vehicles' },
              { type: 'Vans', href: '/types/vans', desc: 'Passenger vans and cargo vans' },
              { type: 'Motorcycles', href: '/types/motorcycles', desc: 'Bikes, scooters, and ATVs' },
              { type: 'Boats', href: '/types/boats', desc: 'Motorboats, yachts, and jet skis' },
              { type: 'Caravans', href: '/types/caravans', desc: 'Caravans, campers, and trailers' }
            ].map((t) => (
              <a key={t.type} href={t.href} className="group bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-700 hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                  <span className="text-lg font-bold text-red-500 group-hover:text-white transition-colors">
                    {t.type.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">{t.type}</h3>
                <p className="text-gray-300 text-sm">{t.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process Details Section - Minimalist Style */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Happens After You Submit?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our streamlined process gets you paid quickly and safely
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Immediate Response</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✓</span>
                  <span className="text-gray-300">Quote generated within 30 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✓</span>
                  <span className="text-gray-300">Phone call to discuss your offer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✓</span>
                  <span className="text-gray-300">Inspection scheduled at your convenience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✓</span>
                  <span className="text-gray-300">All paperwork prepared in advance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Same-Day Completion</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✓</span>
                  <span className="text-gray-300">Professional inspection at your location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✓</span>
                  <span className="text-gray-300">Final price confirmed on-site</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✓</span>
                  <span className="text-gray-300">All documents signed and completed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✓</span>
                  <span className="text-gray-300">OSKO payment transferred instantly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Minimalist Style */}
      <section className="py-16 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your FREE Car Valuation?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of satisfied customers who chose the fast, easy way to sell their car.
          </p>
          <div className="space-y-6">
            <a 
              href="#sell-form" 
              className="inline-block bg-white text-red-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get My FREE Valuation Now
            </a>
            <div className="text-center">
              <p className="text-red-100 text-lg mb-4">Or call us directly:</p>
              <a 
                href="tel:1800AUTOSELL" 
                className="text-2xl font-bold text-white hover:text-red-200 transition-colors flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1800 AUTO SELL
              </a>
              <p className="text-red-100 text-sm mt-4">Open 7 days a week • 8am-6pm AEST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

