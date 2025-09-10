import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
import { Suspense } from 'react'

export default function OnSiteInspectionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-12">
        <div className="px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                On-Site Inspections
                <span className="block text-blue-200">We Come to You</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                No need to travel anywhere. We come to you anywhere in Australia for a convenient inspection.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-200">✓</span>
                  </div>
                  <span>We come to your location</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-200">✓</span>
                  </div>
                  <span>Australia-wide coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-200">✓</span>
                  </div>
                  <span>Flexible scheduling</span>
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
            Convenience at Your Doorstep
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Traditional Car Selling</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Drive to multiple locations</li>
                <li>• Waste time and fuel</li>
                <li>• Limited to local buyers</li>
                <li>• Inconvenient scheduling</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AutoSell.ai Process</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• We come to you</li>
                <li>• No travel required</li>
                <li>• Australia-wide service</li>
                <li>• Schedule at your convenience</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for a Convenient Sale?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Let us come to you for a hassle-free car selling experience.
            </p>
            <a 
              href="#sell-form" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Schedule Your Inspection
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
