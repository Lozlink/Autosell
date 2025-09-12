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
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      
      {/* Hero Section with Integrated Form */}
      <section id="sell-form" className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-12">
        <div className="px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sell Your Car Today
                <span className="block text-red-400">30-Min Quote, Same-Day OSKO Payment</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Australia&apos;s #1 car buying service. Get a <strong>FREE valuation</strong> in 30 minutes, 
                same-day payment via OSKO, and skip all the hassles of private selling.
              </p>
              
              {/* Trust Strip */}
              <div className="flex flex-wrap gap-4 mb-8 text-sm">
                <div className="flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2">
                  <span className="text-red-400">✓</span>
                  <span>We beat like-for-like offers</span>
                </div>
                <div className="flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2">
                  <span className="text-red-400">✓</span>
                  <span>We come to you AU-wide</span>
                </div>
                <div className="flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2">
                  <span className="text-red-400">✓</span>
                  <span>No fees, no fuss</span>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">⚡</span>
                  </div>
                  <span className="font-semibold">30min Quote</span>
                </div>
                <div className="flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">$</span>
                  </div>
                  <span className="font-semibold">Same Day OSKO</span>
                </div>
                <div className="flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="font-semibold">Any Condition</span>
                </div>
                <div className="flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">AU</span>
                  </div>
                  <span className="font-semibold">Australia Wide</span>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-300 mb-4">
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

      {/* Value Propositions Section */}
      <section className="py-10 bg-gray-900">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose AutoSell.ai?
            </h2>
            <p className="text-xl text-gray-300">
              The smart way to sell your car with maximum value and minimum hassle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="text-center p-6 rounded-xl border border-gray-700 bg-gray-800 hover:shadow-lg transition-all duration-300 hover:border-red-500 hover:bg-gray-700 group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{proposition.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">{proposition.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{proposition.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 bg-gray-800">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                <div key={index} className="relative">
                  <div className="p-8 rounded-xl shadow-lg border border-gray-700 bg-gray-900 text-center">
                    <div className="text-6xl mb-4">{step.icon}</div>
                    <div className="text-4xl font-bold text-red-500 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-0.5 bg-gray-500"></div>
                      </div>
                  )}
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Models We Buy */}
      <section className="py-12 bg-gray-900">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Popular Car Models We Buy
            </h2>
            <p className="text-lg text-gray-300">
              Any make, any model, any condition - we buy them all
            </p>
          </div>
          
          <CarModelsRotation />
          
          <div className="text-center mt-8">
            <p className="text-gray-300">
              Don&apos;t see your model? We buy all makes and models - 
              <a href="#sell-form" className="text-red-400 hover:text-red-300 font-semibold"> get your quote anyway!</a>
            </p>
          </div>
        </div>
      </section>

      {/* Brands Grid (linked to /brands/[brand]) */}
      <section className="py-12 bg-gray-800">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Browse by Brand</h2>
            <p className="text-lg text-gray-300">We buy all makes. Pick yours to start.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["Toyota","Ford","Holden","Mazda","Honda","Nissan","BMW","Mercedes","Audi","Volkswagen","Hyundai","Kia"].map((brand) => (
              <a
                key={brand}
                href={`/brands/${brand.toLowerCase()}`}
                className="group text-center p-4 rounded-xl border border-gray-700 bg-gray-900 hover:shadow-lg transition-all duration-300 hover:border-red-500 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-red-500/20">
                  <span className="text-gray-300 group-hover:text-red-400 font-bold text-lg">{brand.charAt(0)}</span>
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-red-400">{brand}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Australia-Wide Coverage */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Australia-Wide Service
            </h2>
            <p className="text-lg text-gray-300">
              We come to you anywhere in Australia - from major cities to remote areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { city: 'Sydney', state: 'NSW', color: 'bg-blue-500' },
              { city: 'Melbourne', state: 'VIC', color: 'bg-purple-500' },
              { city: 'Brisbane', state: 'QLD', color: 'bg-orange-500' },
              { city: 'Perth', state: 'WA', color: 'bg-cyan-500' },
              { city: 'Adelaide', state: 'SA', color: 'bg-red-500' },
              { city: 'Canberra', state: 'ACT', color: 'bg-indigo-500' },
              { city: 'Gold Coast', state: 'QLD', color: 'bg-yellow-500' },
              { city: 'Darwin', state: 'NT', color: 'bg-green-500' }
            ].map((location) => (
              <div key={location.city} className="text-center p-6 rounded-xl border border-gray-700 bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${location.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{location.city.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">{location.city}</h3>
                <p className="text-sm text-gray-300">{location.state}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <p className="text-gray-300 mb-4">
              Plus all regional areas, country towns, and remote locations
            </p>
            <a 
              href="#sell-form" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              Get Your Quote - We Come to You!
            </a>
          </div>

          {/* Map Component */}
          <div className="max-w-4xl mx-auto">
            <MapComponent />
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-12 bg-gray-800">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="flex text-yellow-400 text-2xl">★★★★★</div>
              <span className="text-lg text-gray-300">4.9/5 from 2,000+ reviews</span>
            </div>
          </div>

          <ReviewsComponent />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 bg-gray-900">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about selling your car
            </p>
          </div>

          <div className="space-y-8">
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
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Buy All Types Section */}
      <section className="py-12 bg-gray-800">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              We Buy All Types of Vehicles
            </h2>
            <p className="text-lg text-gray-300">
              From cars to trucks, we buy everything - no matter the condition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { type: 'Cars', href: '/types/cars', bg: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', desc: 'All makes and models, any condition' },
              { type: 'SUVs', href: '/types/suvs', bg: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', desc: '4WDs, crossovers, and family vehicles' },
              { type: 'Utes', href: '/types/utes', bg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', desc: 'Work utes, dual cabs, and pickups' },
              { type: 'Trucks', href: '/types/trucks', bg: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', desc: 'Commercial trucks and heavy vehicles' },
              { type: 'Vans', href: '/types/vans', bg: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', desc: 'Passenger vans and cargo vans' },
              { type: 'Motorcycles', href: '/types/motorcycles', bg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', desc: 'Bikes, scooters, and ATVs' },
              { type: 'Boats', href: '/types/boats', bg: 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)', desc: 'Motorboats, yachts, and jet skis' },
              { type: 'Caravans', href: '/types/caravans', bg: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', desc: 'Caravans, campers, and trailers' }
            ].map((t) => (
              <a key={t.type} href={t.href} className="text-center p-6 rounded-xl border border-gray-700 bg-gray-900 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ background: t.bg }}>
                  {t.type.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">{t.type}</h3>
                <p className="text-sm text-gray-300">{t.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process Details Section */}
      <section className="py-12 bg-gray-900">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Happens After You Submit?
            </h2>
            <p className="text-lg text-gray-300">
              Our streamlined process gets you paid quickly and safely
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Immediate Response</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">✓</span>
                  <span>Quote generated within 30 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">✓</span>
                  <span>Phone call to discuss your offer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">✓</span>
                  <span>Inspection scheduled at your convenience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">✓</span>
                  <span>All paperwork prepared in advance</span>
                </li>
              </ul>
            </div>
            {/* Value my car now button to auto-scroll to the top  */}
            
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Same-Day Completion</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">✓</span>
                  <span>Professional inspection at your location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">✓</span>
                  <span>Final price confirmed on-site</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">✓</span>
                  <span>All documents signed and completed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">✓</span>
                  <span>OSKO payment transferred instantly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="px-4 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your FREE Car Valuation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who chose the fast, easy way to sell their car.
          </p>
          <div className="space-y-4">
            <a 
              href="#sell-form" 
              className="inline-block bg-white text-red-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get My FREE Valuation Now
            </a>
            <div className="text-center">
              <p className="text-red-100">Or call us directly:</p>
              <a 
                href="tel:1800AUTOSELL" 
                className="text-2xl font-bold text-white hover:text-red-200 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1800 AUTO SELL
              </a>
              <p className="text-red-100 text-sm mt-2">Open 7 days a week • 8am-6pm AEST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

