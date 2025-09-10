import type { Metadata } from 'next'
import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: "Sell Your Car - AutoSell.ai",
  description: "Sell any car with AutoSell.ai. We buy all car makes and models in any condition. Get your free quote in 30 minutes and same-day payment.",
}

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Form */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sell Your Car
                <span className="block text-blue-200">Any Make, Any Model</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                We buy all car makes and models - Toyota, Ford, Holden, BMW, Mercedes, and more. 
                Any condition, any age. Get your free quote in 30 minutes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-200">✓</span>
                  </div>
                  <span>All car makes and models</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-200">✓</span>
                  </div>
                  <span>Any condition - running or not</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-200">✓</span>
                  </div>
                  <span>Same-day payment guaranteed</span>
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

      {/* Car Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Buy All Types of Cars
            </h2>
            <p className="text-lg text-gray-600">
              From sedans to hatchbacks, we buy every type of car
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { type: 'Sedans', description: 'Camry, Commodore, Falcon, Accord', icon: '🚗' },
              { type: 'Hatchbacks', description: 'Corolla, Focus, Golf, i30', icon: '🚙' },
              { type: 'Coupes', description: 'Mustang, 86, BRZ, TT', icon: '🏎️' },
              { type: 'Convertibles', description: 'MX-5, SLK, TT Roadster', icon: '🌞' },
              { type: 'Wagons', description: 'Commodore, Falcon, Liberty', icon: '🚐' },
              { type: 'Luxury Cars', description: 'BMW, Mercedes, Audi, Lexus', icon: '💎' },
              { type: 'Sports Cars', description: 'Porsche, Ferrari, Lamborghini', icon: '🏁' },
              { type: 'Classic Cars', description: 'Vintage and classic vehicles', icon: '🕰️' }
            ].map((category) => (
              <div key={category.type} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{category.type}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Car Brands */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Car Brands We Buy
            </h2>
            <p className="text-lg text-gray-600">
              We buy cars from all major manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Toyota', 'Ford', 'Holden', 'Mazda', 'Honda', 'Nissan', 'BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Hyundai', 'Kia'].map((brand) => (
              <div key={brand} className="text-center p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 font-bold text-lg">{brand.charAt(0)}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AutoSell.ai for Your Car?
            </h2>
            <p className="text-lg text-gray-600">
              We make selling your car simple, fast, and profitable
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">$</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Prices</h3>
              <p className="text-gray-600">We guarantee the best price for your car using real-time market data.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600">Get your quote in 30 minutes and receive payment the same day.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Hassle</h3>
              <p className="text-gray-600">We handle all the paperwork and come to you for inspection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Sell Your Car?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get your free quote today and join thousands of satisfied car owners who chose AutoSell.ai.
          </p>
          <a 
            href="#sell-form" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
          >
            Get My Car Quote Now
          </a>
        </div>
      </section>
    </div>
  )
}
