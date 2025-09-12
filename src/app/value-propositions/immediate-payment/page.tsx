import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
import { Suspense } from 'react'

export default function ImmediatePaymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-12">
        <div className="px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Immediate Payment
                <span className="block text-red-200">Get Paid Instantly</span>
              </h1>
              <p className="text-xl md:text-2xl text-red-100 mb-8">
                No waiting, no delays. Get paid instantly via OSKO transfer when you sell your car with AutoSell.ai.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-red-200">✓</span>
                  </div>
                  <span>OSKO transfer within minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-red-200">✓</span>
                  </div>
                  <span>No bank delays or processing fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-red-200">✓</span>
                  </div>
                  <span>Secure and guaranteed payment</span>
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
      <section className="py-12 bg-gray-800">
        <div className="px-4 sm:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Immediate Payment Matters
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Traditional Car Selling</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Wait days or weeks for payment</li>
                <li>• Bank processing delays</li>
                <li>• Risk of payment issues</li>
                <li>• Uncertainty about when you&apos;ll get paid</li>
              </ul>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">AutoSell.ai Process</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• OSKO transfer within minutes</li>
                <li>• No bank delays or fees</li>
                <li>• Guaranteed secure payment</li>
                <li>• Money in your account immediately</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Paid Instantly?</h3>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of customers who chose the fast, secure way to sell their car.
            </p>
            <a 
              href="#sell-form" 
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors"
            >
              Get Your Instant Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
