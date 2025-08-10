import {Suspense} from 'react'
import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
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
            <div className="h-32 bg-gray-200 rounded"></div>
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell Your Car
              <span className="block text-emerald-400">Fast for Cash</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Australia&apos;s #1 car buying service. Get an instant quote in 30 minutes, 
              same-day payment, and skip all the hassles of private selling.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-2xl">⚡</span>
                <span className="font-semibold">30min Quote</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-2xl">💰</span>
                <span className="font-semibold">Same Day Payment</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-2xl">🚗</span>
                <span className="font-semibold">Any Condition</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-2xl">🌏</span>
                <span className="font-semibold">Australia Wide</span>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="#sell-form" 
                className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Get My Free Quote Now
              </a>
              <p className="text-sm text-gray-300 mt-4">
                ⭐ 4.9/5 from 5,000+ happy customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section id="sell-form" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Car Sell Form */}
            <div>
              <Suspense fallback={<CarSellFormFallback />}>
                <CarSellForm />
              </Suspense>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose AutoSell.ai?
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">⚡</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Lightning Fast</h3>
                      <p className="text-gray-600">Get your quote in 30 minutes, not days. Our AI-powered system provides instant valuations.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Best Prices Guaranteed</h3>
                      <p className="text-gray-600">We pay more than dealers and beat most private sale prices. No hidden fees, no commissions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🔒</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Safe & Secure</h3>
                      <p className="text-gray-600">Licensed, insured, and trusted. Instant bank transfers and professional service.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🚗</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Any Car, Any Condition</h3>
                      <p className="text-gray-600">Running or not, new or old, damaged or perfect. We buy all makes and models.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌏</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Australia Wide Service</h3>
                      <p className="text-gray-600">From Sydney to Perth, Darwin to Hobart. We come to you anywhere in Australia.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-emerald-100 rounded-xl p-8 border border-emerald-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Trusted by Thousands
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-emerald-700">5,000+</div>
                    <div className="text-sm text-gray-600">Cars Purchased</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-700">4.9★</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-700">30min</div>
                    <div className="text-sm text-gray-600">Average Quote Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-700">Same Day</div>
                    <div className="text-sm text-gray-600">Payment Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
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

      {/* Car Brands We Buy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Buy All Car Brands
            </h2>
            <p className="text-lg text-gray-600">
              Any make, any model, any condition - we buy them all
            </p>
          </div>
          
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

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Sell Your Car?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who chose the fast, easy way to sell their car.
          </p>
          <div className="space-y-4">
            <a 
              href="#sell-form" 
              className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get My Quote Now
            </a>
            <div className="text-center">
              <p className="text-emerald-100">Or call us directly:</p>
              <a 
                href="tel:1800AUTOSELL" 
                className="text-2xl font-bold text-white hover:text-emerald-200 transition-colors"
              >
                📞 1800 AUTO SELL
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}