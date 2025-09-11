import {Suspense} from 'react'
import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion } from 'framer-motion'
import type { Metadata } from 'next'

function CarSellFormFallback() {
  return (
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-4">
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Integrated Form */}
      <section id="sell-form" className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sell Your Car Today
                <span className="block text-emerald-400">30-Min Quote, Same-Day OSKO Payment</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Australia&apos;s #1 car buying service. Get a <strong>FREE valuation</strong> in 30 minutes, 
                same-day payment via OSKO, and skip all the hassles of private selling.
              </p>
              
              {/* Trust Strip */}
              <div className="flex flex-wrap gap-4 mb-8 text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-emerald-400">✓</span>
                  <span>We beat like-for-like offers</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-emerald-400">✓</span>
                  <span>We come to you AU-wide</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-emerald-400">✓</span>
                  <span>No fees, no fuss</span>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-2xl">⚡</span>
                  <span className="font-semibold">30min Quote</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-2xl">💰</span>
                  <span className="font-semibold">Same Day OSKO</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-2xl">🚗</span>
                  <span className="font-semibold">Any Condition</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-2xl">🌏</span>
                  <span className="font-semibold">Australia Wide</span>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-300 mb-4">
                  ⭐ 4.9/5 from 5,000+ happy customers • Open 7 days a week
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AutoSell.ai?
            </h2>
            <p className="text-xl text-gray-600">
              The smart way to sell your car with maximum value and minimum hassle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Immediate Payment",
                description: "Get paid instantly via OSKO transfer. No waiting, no delays."
              },
              {
                icon: "🔍",
                title: "On-Site Inspections",
                description: "We come to you anywhere in Australia. No need to travel."
              },
              {
                icon: "🕒",
                title: "Open 7 Days",
                description: "Available when you need us, including weekends and public holidays."
              },
              {
                icon: "📈",
                title: "Best Price Guarantee",
                description: "We beat like-for-like offers. Get the best value for your car."
              },
              {
                icon: "✅",
                title: "100% Satisfaction",
                description: "Thousands of happy customers across Australia trust us."
              },
              {
                icon: "🚗",
                title: "Smooth Sales Process",
                description: "From quote to payment in hours, not days or weeks."
              }
            ].map((proposition, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{proposition.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{proposition.title}</h3>
                <p className="text-gray-600">{proposition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selling your car has never been this easy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Get Your Quote',
                description: 'Fill out our simple form with your car details. Our AI system provides an instant valuation in just 30 minutes.',
                icon: '📝',
                bgColor: 'bg-blue-100',
                stepColor: 'text-blue-700',
                borderColor: 'border-blue-200'
              },
              {
                step: '02',
                title: 'Accept Our Offer',
                description: 'Review your competitive offer. If you\'re happy, accept it and we\'ll arrange a convenient inspection time.',
                icon: '✅',
                bgColor: 'bg-emerald-100',
                stepColor: 'text-emerald-700',
                borderColor: 'border-emerald-200'
              },
              {
                step: '03',
                title: 'Get Paid Instantly',
                description: 'We inspect your car, complete the paperwork, and transfer the money to your account on the same day.',
                icon: '💰',
                bgColor: 'bg-purple-100',
                stepColor: 'text-purple-700',
                borderColor: 'border-purple-200'
              }
            ].map((step, index) => (
                <div key={index} className="relative">
                  <div className={`${step.bgColor} p-8 rounded-xl shadow-lg border ${step.borderColor} text-center`}>
                    <div className="text-6xl mb-4">{step.icon}</div>
                    <div className={`text-4xl font-bold ${step.stepColor} mb-4`}>{step.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-0.5 bg-gray-400"></div>
                      </div>
                  )}
                </div>
            ))}
          </div>
        </div>
      </section>

      {/*incorporate links in the mapping process*/}
      {/* We Buy All Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Buy All Types of Vehicles
            </h2>
            <p className="text-lg text-gray-600">
              From cars to trucks, we buy everything - no matter the condition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { type: 'Cars', icon: '🚗', description: 'All makes and models, any condition' },
              { type: 'SUVs', icon: '🚙', description: '4WDs, crossovers, and family vehicles' },
              { type: 'Utes', icon: '🛻', description: 'Work utes, dual cabs, and pickups' },
              { type: 'Trucks', icon: '🚛', description: 'Commercial trucks and heavy vehicles' },
              { type: 'Vans', icon: '🚐', description: 'Passenger vans and cargo vans' },
              { type: 'Motorcycles', icon: '🏍️', description: 'Bikes, scooters, and ATVs' },
              { type: 'Boats', icon: '🚤', description: 'Motorboats, yachts, and jet skis' },
              { type: 'Caravans', icon: '🏕️', description: 'Caravans, campers, and trailers' }
            ].map((vehicle) => (
              <div key={vehicle.type} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{vehicle.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{vehicle.type}</h3>
                <p className="text-sm text-gray-600">{vehicle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Brands We Buy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Buy All Car Brands
            </h2>
            <p className="text-lg text-gray-600">
              Any make, any model, any condition - we buy them all
            </p>
          </div>

          {/*incorporate links in the mapping proces*/}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {['Toyota', 'Ford', 'Holden', 'Mazda', 'Honda', 'Nissan', 'BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Hyundai', 'Kia'].map((brand) => (
              <div key={brand} className="text-center text-2xl font-bold text-gray-500">
                {brand}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don&apos;t see your brand? We buy all makes and models - 
              <a href="#sell-form" className="text-emerald-600 hover:text-emerald-700 font-semibold"> get your quote anyway!</a>
            </p>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="flex text-yellow-400 text-2xl">★★★★★</div>
              <span className="text-lg text-gray-600">4.9/5 from 2,000+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                location: "Sydney, NSW",
                review: "Absolutely fantastic service! Got my quote in 20 minutes and sold my car the same day. The payment was instant and the process was so smooth.",
                rating: 5
              },
              {
                name: "Mark T.",
                location: "Melbourne, VIC",
                review: "I was skeptical at first but AutoSell.ai delivered exactly what they promised. Fair price, fast service, and professional throughout.",
                rating: 5
              },
              {
                name: "Jenny L.",
                location: "Brisbane, QLD",
                review: "My car wasn't running and I thought it would be worthless. AutoSell.ai still gave me a great offer and handled everything professionally.",
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="flex text-yellow-400 text-lg mb-4">
                  {'★'.repeat(review.rating)}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{review.review}&quot;</p>
                <div>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Australia-Wide Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Australia-Wide Service
            </h2>
            <p className="text-lg text-gray-600">
              We come to you anywhere in Australia - from major cities to remote areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { city: 'Sydney', state: 'NSW', icon: '🏙️' },
              { city: 'Melbourne', state: 'VIC', icon: '🏛️' },
              { city: 'Brisbane', state: 'QLD', icon: '🌞' },
              { city: 'Perth', state: 'WA', icon: '🌊' },
              { city: 'Adelaide', state: 'SA', icon: '🍷' },
              { city: 'Canberra', state: 'ACT', icon: '🏛️' },
              { city: 'Gold Coast', state: 'QLD', icon: '🏖️' },
              { city: 'Darwin', state: 'NT', icon: '🌴' }
            ].map((location) => (
              <div key={location.city} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{location.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{location.city}</h3>
                <p className="text-sm text-gray-600">{location.state}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Plus all regional areas, country towns, and remote locations
            </p>
            <a 
              href="#sell-form" 
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors"
            >
              Get Your Quote - We Come to You!
            </a>
          </div>
        </div>
      </section>

      
     

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
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
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
          
      {/*incorporate links in the mapping process*/}
      

      {/* Process Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Happens After You Submit?
            </h2>
            <p className="text-lg text-gray-600">
              Our streamlined process gets you paid quickly and safely
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Immediate Response</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Quote generated within 30 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Phone call to discuss your offer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Inspection scheduled at your convenience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>All paperwork prepared in advance</span>
                </li>
              </ul>
            </div>
            {/* Value my car now button to auto-scroll to the top  */}
            
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Same-Day Completion</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Professional inspection at your location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Final price confirmed on-site</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>All documents signed and completed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>OSKO payment transferred instantly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your FREE Car Valuation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who chose the fast, easy way to sell their car.
          </p>
          <div className="space-y-4">
            <a 
              href="#sell-form" 
              className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get My FREE Valuation Now
            </a>
            <div className="text-center">
              <p className="text-emerald-100">Or call us directly:</p>
              <a 
                href="tel:1800AUTOSELL" 
                className="text-2xl font-bold text-white hover:text-emerald-200 transition-colors"
              >
                📞 1800 AUTO SELL
              </a>
              <p className="text-emerald-100 text-sm mt-2">Open 7 days a week • 8am-6pm AEST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

