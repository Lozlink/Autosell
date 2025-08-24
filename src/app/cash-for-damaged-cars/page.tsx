import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: "Cash for Damaged Cars - AutoSell.ai | We Buy Cars in Any Condition",
  description: "Get cash for your damaged car today. We buy cars in any condition - running or not, damaged or perfect. Same-day payment, free pickup across Australia.",
}

export default function CashForDamagedCarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cash for Damaged Cars
              <span className="block text-emerald-400">We Buy Cars in Any Condition</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Running or not, damaged or perfect - we buy all cars and pay cash on the same day. 
              No matter the condition, we'll give you a fair price.
            </p>
            <a 
              href="/#sell-form" 
              className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Cash for Your Damaged Car
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Damaged Cars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AutoSell.ai for Damaged Cars?
            </h2>
            <p className="text-xl text-gray-600">
              We specialize in buying cars in all conditions, no matter how damaged
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚗",
                title: "Any Condition Accepted",
                description: "Running or not, damaged or perfect - we buy them all. No car is too damaged for us."
              },
              {
                icon: "💰",
                title: "Fair Market Value",
                description: "We assess the true value of your car, considering damage, age, and market conditions."
              },
              {
                icon: "⚡",
                title: "Same-Day Payment",
                description: "Get paid instantly via OSKO transfer once we complete the inspection."
              },
              {
                icon: "🔧",
                title: "No Repairs Needed",
                description: "Don't waste money fixing your car. We buy it as-is and handle everything."
              },
              {
                icon: "🚛",
                title: "Free Pickup Service",
                description: "We come to you anywhere in Australia, even if your car can't be driven."
              },
              {
                icon: "📋",
                title: "All Paperwork Handled",
                description: "We take care of all the legal paperwork and transfer processes for you."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Damage We Accept */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Damage We Accept
            </h2>
            <p className="text-xl text-gray-600">
              From minor dents to major accidents - we buy them all
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Minor Damage</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Dents and scratches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Broken mirrors and lights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Interior damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Worn tires and brakes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Major Damage</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Accident damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Engine problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Transmission issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Flood damage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get cash for your damaged car in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Get Your Quote',
                description: 'Tell us about your car and damage. We provide a fair quote within 30 minutes.',
                icon: '📝'
              },
              {
                step: '02',
                title: 'We Come to You',
                description: 'Our team visits your location to inspect the car and finalize the offer.',
                icon: '🚗'
              },
              {
                step: '03',
                title: 'Get Paid Instantly',
                description: 'Accept our offer and receive payment via OSKO transfer on the same day.',
                icon: '💰'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 p-8 rounded-xl border border-emerald-200">
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-4xl font-bold text-emerald-700 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Cash for Your Damaged Car?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Don't let a damaged car sit in your driveway. Get cash today and free up space.
          </p>
          <a 
            href="/#sell-form" 
            className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Quote Now
          </a>
        </div>
      </section>
    </div>
  )
}
