import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
import { Suspense } from 'react'

export default function BestPriceGuaranteePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-12">
        <div className="px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best Price Guarantee
                <span className="block text-purple-200">We Beat Like-for-Like Offers</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8">
                Get the best value for your car. We guarantee to beat any like-for-like offer you receive.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-200">✓</span>
                  </div>
                  <span>Beat any comparable offer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-200">✓</span>
                  </div>
                  <span>Real-time market data</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-200">✓</span>
                  </div>
                  <span>Transparent pricing</span>
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

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="px-4 sm:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How Our Price Guarantee Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Analysis</h3>
              <p className="text-gray-600">We use real-time market data and RedBook valuations to ensure competitive pricing.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Price Comparison</h3>
              <p className="text-gray-600">We compare our offer with like-for-like offers to ensure you get the best price.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beat Guarantee</h3>
              <p className="text-gray-600">If you receive a better offer, we'll beat it or match it to ensure you get maximum value.</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get the Best Price?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Get your competitive quote and see why thousands trust us for the best car prices.
            </p>
            <a 
              href="#sell-form" 
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-purple-700 transition-colors"
            >
              Get Your Best Price Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
