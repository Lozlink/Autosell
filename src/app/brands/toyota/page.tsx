import type { Metadata } from 'next'
import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: "Sell Your Toyota - AutoSell.ai",
  description: "Get the best price for your Toyota car. We buy all Toyota models including Camry, Corolla, Hilux, RAV4, and more. Free quote in 30 minutes.",
}

export default function ToyotaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Form */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sell Your Toyota
                <span className="block text-red-200">Get Top Dollar Today</span>
              </h1>
              <p className="text-xl md:text-2xl text-red-100 mb-8">
                We buy all Toyota models - Camry, Corolla, Hilux, RAV4, LandCruiser, and more. 
                Get your free quote in 30 minutes and same-day payment.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-red-200">✓</span>
                  </div>
                  <span>All Toyota models accepted</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-red-200">✓</span>
                  </div>
                  <span>Any condition - running or not</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-red-200">✓</span>
                  </div>
                  <span>Best price guarantee</span>
                </div>
              </div>
            </div>

            <div>
              <Suspense fallback={<div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 animate-pulse h-96"></div>}>
                <CarSellForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Toyota Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Toyota Models We Buy
            </h2>
            <p className="text-lg text-gray-600">
              We buy all Toyota vehicles regardless of age, condition, or mileage
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { model: 'Camry', year: '2015-2024', price: '$15,000-$35,000' },
              { model: 'Corolla', year: '2015-2024', price: '$12,000-$28,000' },
              { model: 'Hilux', year: '2015-2024', price: '$25,000-$65,000' },
              { model: 'RAV4', year: '2015-2024', price: '$18,000-$45,000' },
              { model: 'LandCruiser', year: '2015-2024', price: '$40,000-$120,000' },
              { model: 'Prius', year: '2015-2024', price: '$15,000-$35,000' },
              { model: 'Kluger', year: '2015-2024', price: '$20,000-$50,000' },
              { model: 'Prado', year: '2015-2024', price: '$30,000-$80,000' }
            ].map((vehicle) => (
              <div key={vehicle.model} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <span className="text-red-600 font-bold text-xl">{vehicle.model.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{vehicle.model}</h3>
                <p className="text-sm text-gray-600 mb-1">{vehicle.year}</p>
                <p className="text-sm font-semibold text-red-600">{vehicle.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Toyota */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AutoSell.ai for Your Toyota?
            </h2>
            <p className="text-lg text-gray-600">
              We understand Toyota vehicles and offer the best prices in Australia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-2xl font-bold">$</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Prices</h3>
              <p className="text-gray-600">We use real-time market data to ensure you get the best price for your Toyota.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600">Get your quote in 30 minutes and receive payment the same day.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Any Condition</h3>
              <p className="text-gray-600">We buy Toyotas in any condition - running, damaged, or not running.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Sell Your Toyota?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get your free quote today and join thousands of satisfied Toyota owners who chose AutoSell.ai.
          </p>
          <a 
            href="#sell-form" 
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
          >
            Get My Toyota Quote Now
          </a>
        </div>
      </section>
    </div>
  )
}
