'use client'

import {Suspense} from 'react'
import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
import CarModelsRotation from '@/components/CarModelsRotation'
import ReviewsComponent from '@/components/ReviewsComponent'
import MapComponent from '@/components/MapComponent'
import { motion } from 'framer-motion'

function CarSellFormFallback() {
  return (
      <div className="glass rounded-xl p-8 shadow-lg border border-white/10">
        <div className="animate-pulse">
          <div className="h-8 bg-white/20 rounded mb-6"></div>
          <div className="space-y-4">
            <div className="h-12 bg-white/20 rounded"></div>
            <div className="h-12 bg-white/20 rounded"></div>
            <div className="h-12 bg-white/20 rounded"></div>
            <div className="h-12 bg-white/20 rounded"></div>
            <div className="h-12 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>
  )
}

export default function HomePageClient() {
  return (
    <div className="min-h-screen animated-bg">
      <Header />
      
      {/* Hero Section with Integrated Form */}
      <section id="sell-form" className="relative py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
              >
                Sell Your Car Today
                <span className="block text-gradient-purple">30-Min Quote, Same-Day OSKO Payment</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-200 mb-8"
              >
                Australia&apos;s #1 car buying service. Get a <strong className="text-gradient-purple">FREE valuation</strong> in 30 minutes, 
                same-day payment via OSKO, and skip all the hassles of private selling.
              </motion.p>
              
              {/* Trust Strip */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4 mb-8 text-sm"
              >
                <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                  <span className="text-gradient-purple">✓</span>
                  <span>We beat like-for-like offers</span>
                </div>
                <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                  <span className="text-gradient-purple">✓</span>
                  <span>We come to you AU-wide</span>
                </div>
                <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                  <span className="text-gradient-purple">✓</span>
                  <span>No fees, no fuss</span>
                </div>
              </motion.div>

              {/* Key Benefits */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <div className="flex items-center gap-2 glass rounded-full px-4 py-2 hover-lift">
                  <div className="w-6 h-6 gradient-solana rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">⚡</span>
                  </div>
                  <span className="font-semibold">30min Quote</span>
                </div>
                <div className="flex items-center gap-2 glass rounded-full px-4 py-2 hover-lift">
                  <div className="w-6 h-6 gradient-solana rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">$</span>
                  </div>
                  <span className="font-semibold">Same Day OSKO</span>
                </div>
                <div className="flex items-center gap-2 glass rounded-full px-4 py-2 hover-lift">
                  <div className="w-6 h-6 gradient-solana rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="font-semibold">Any Condition</span>
                </div>
                <div className="flex items-center gap-2 glass rounded-full px-4 py-2 hover-lift">
                  <div className="w-6 h-6 gradient-solana rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">AU</span>
                  </div>
                  <span className="font-semibold">Australia Wide</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center lg:text-left"
              >
                <p className="text-sm text-gray-300 mb-4">
                  ★ 4.9/5 from 5,000+ happy customers • Open 7 days a week
                </p>
              </motion.div>
            </div>

            {/* Hero Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Suspense fallback={<CarSellFormFallback />}>
                <CarSellForm />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="py-20 relative">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-16">
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
              <motion.a
                key={index}
                href={proposition.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-solana p-6 text-center hover-lift group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{proposition.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient-purple transition-colors">{proposition.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{proposition.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative">
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
                <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="card-solana p-8 text-center hover-lift">
                    <div className="text-6xl mb-4 floating">{step.icon}</div>
                    <div className="text-4xl font-bold text-gradient-purple mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-0.5 bg-gradient-solana"></div>
                      </div>
                  )}
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Models We Buy */}
      <section className="py-20 relative">
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
              <a href="#sell-form" className="text-gradient-purple hover:text-gradient-blue font-semibold"> get your quote anyway!</a>
            </p>
          </div>
        </div>
      </section>

      {/* Australia-Wide Coverage */}
      <section className="py-20 relative">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Australia-Wide Service</h2>
            <p className="text-lg text-gray-300">We come to you anywhere in Australia - from major cities to remote areas</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { city: 'Sydney', state: 'NSW', color: 'gradient-blue' },
              { city: 'Melbourne', state: 'VIC', color: 'gradient-purple' },
              { city: 'Brisbane', state: 'QLD', color: 'gradient-orange' },
              { city: 'Perth', state: 'WA', color: 'gradient-pink' },
              { city: 'Adelaide', state: 'SA', color: 'gradient-green' },
              { city: 'Canberra', state: 'ACT', color: 'gradient-blue' },
              { city: 'Gold Coast', state: 'QLD', color: 'gradient-orange' },
              { city: 'Darwin', state: 'NT', color: 'gradient-green' }
            ].map((location) => (
              <motion.div 
                key={location.city} 
                className="card-solana text-center p-6 hover-lift group"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${location.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{location.city.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-gradient-purple transition-colors">{location.city}</h3>
                <p className="text-sm text-gray-400">{location.state}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <p className="text-gray-300 mb-4">
              Plus all regional areas, country towns, and remote locations
            </p>
            <a 
              href="#sell-form" 
              className="btn-solana inline-block px-8 py-3 rounded-lg text-lg font-bold hover-lift"
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
      <section id="reviews" className="py-20 relative">
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

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-solana opacity-10"></div>
        <div className="relative z-10 px-4 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Get Your FREE Car Valuation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join thousands of satisfied customers who chose the fast, easy way to sell their car.
          </p>
          <div className="space-y-4">
            <a 
              href="#sell-form" 
              className="btn-solana inline-block px-12 py-4 rounded-lg text-xl font-bold hover-lift shadow-lg"
            >
              Get My FREE Valuation Now
            </a>
            <div className="text-center">
              <p className="text-gray-300">Or call us directly:</p>
              <a 
                href="tel:1800AUTOSELL" 
                className="text-2xl font-bold text-white hover:text-gradient-purple transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1800 AUTO SELL
              </a>
              <p className="text-gray-400 text-sm mt-2">Open 7 days a week • 8am-6pm AEST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
