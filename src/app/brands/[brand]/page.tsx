import type { Metadata } from 'next'
import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
import { Suspense } from 'react'

interface BrandPageProps {
  params: { brand: string }
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const brand = params.brand
  const titleBrand = brand.charAt(0).toUpperCase() + brand.slice(1)
  return {
    title: `Sell Your ${titleBrand} - auto-sell.ai`,
    description: `We buy all ${titleBrand} models in any condition. Free quote in 30 minutes and same-day OSKO payment.`,
  }
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = params.brand
  const titleBrand = brand.charAt(0).toUpperCase() + brand.slice(1)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100
">
      <Header />

      {/* Hero Section with Form (Toyota layout-inspired) */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sell Your {titleBrand}
                <span className="block text-blue-300">Get Top Dollar Today</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                We buy all {titleBrand} models in any condition. Get your free quote in 30 minutes and same-day payment.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-blue-300">✓</span>
                  </div>
                  <span>All {titleBrand} models accepted</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-blue-300">✓</span>
                  </div>
                  <span>Any condition — running or not</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-blue-300">✓</span>
                  </div>
                  <span>Best price guarantee</span>
                </div>
              </div>
            </div>

            <div id="sell-form">
              <Suspense fallback={<div className="rounded-2xl p-8 border border-blue-200 bg-white/30 animate-pulse h-96"></div>}>
                <CarSellForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Models Section (dark theme) */}
      <section className="py-16 bg-blue-50

">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Popular {titleBrand} Models We Buy
            </h2>
            <p className="text-lg text-gray-600">
              We buy all {titleBrand} vehicles regardless of age, condition, or mileage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { model: 'Popular Model A', year: '2015-2024', price: '$10,000-$50,000' },
              { model: 'Popular Model B', year: '2015-2024', price: '$10,000-$50,000' },
              { model: 'Popular Model C', year: '2015-2024', price: '$10,000-$50,000' },
              { model: 'Popular Model D', year: '2015-2024', price: '$10,000-$50,000' },
              { model: 'Popular Model E', year: '2015-2024', price: '$10,000-$50,000' },
              { model: 'Popular Model F', year: '2015-2024', price: '$10,000-$50,000' },
              { model: 'Popular Model G', year: '2015-2024', price: '$10,000-$50,000' },
              { model: 'Popular Model H', year: '2015-2024', price: '$10,000-$50,000' },
            ].map((vehicle) => (
              <div key={vehicle.model} className="text-center p-6 rounded-xl border border-blue-200 bg-white/40 hover:bg-white/60 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-700/30 flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-xl">{vehicle.model.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{vehicle.model}</h3>
                <p className="text-sm text-gray-600 mb-1">{vehicle.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-blue-100
">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Why Choose auto-sell.ai for Your {titleBrand}?
            </h2>
            <p className="text-lg text-gray-600">
              We understand {titleBrand} vehicles and offer the best prices in Australia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl border border-blue-200 bg-white/40">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-700/30 flex items-center justify-center">
                <span className="text-blue-500 text-2xl font-bold">$</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Prices</h3>
              <p className="text-gray-600">We use real-time market data to ensure you get the best price for your {titleBrand}.</p>
            </div>

            <div className="text-center p-6 rounded-xl border border-blue-200 bg-white/40">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-700/30 flex items-center justify-center">
                <span className="text-blue-500 text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fast Service</h3>
              <p className="text-gray-600">Get your quote in 30 minutes and receive payment the same day.</p>
            </div>

            <div className="text-center p-6 rounded-xl border border-blue-200 bg-white/40">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-700/30 flex items-center justify-center">
                <span className="text-blue-500 text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Any Condition</h3>
              <p className="text-gray-600">We buy {titleBrand}s in any condition — running, damaged, or not running.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/60 via-white
 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Sell Your {titleBrand}?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get your free quote today and join thousands of satisfied owners who chose auto-sell.ai.
          </p>
          <a
            href="#sell-form"
            className="inline-block bg-blue-600 hover:bg-blue-600 text-gray-800 px-8 py-4 rounded-lg text-xl font-bold transition-colors"
          >
            Get My {titleBrand} Quote Now
          </a>
        </div>
      </section>
    </div>
  )
}
