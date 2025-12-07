import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'
import Image from 'next/image'


export const metadata: Metadata = {
  title: "Cash for Damaged Cars - auto-sell.ai | We Buy Cars in Any Condition",
  description: "Get cash for your damaged car today. We buy cars in any condition - running or not, damaged or perfect. Same-day payment, free pickup across Australia.",
}

export default function CashForDamagedCarsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #FFF9E6 100%)' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="text-gray-800" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #FFF9E6 100%)' }}>
        <div className="relative aspect-[16/10] overflow-hidden">

            <Image
            alt="damaged-car"
            src='/images/damaged-car.jpg'
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover z-0"
            />
          <div className="absolute inset-0 z-10 flex items-center justify-center">

          <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="text-center">
             <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">

              Cash for Damaged Cars
                <span className="block" style={{ color: '#FFC325' }}>We Buy Cars in Any Condition</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 drop-shadow-md">
                Running or not, damaged or perfect - we buy all cars and pay cash on the same day.
                No matter the condition, we&apos;ll give you a fair price.
              </p>
              <Link
                href="/#sell-form"
                className="inline-block px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl focus:outline-none focus:ring-2"
                style={{ backgroundColor: '#FFC325', color: '#000', '--tw-ring-color': '#FFC325' } as React.CSSProperties}
              >
                Get Cash for Your Damaged Car
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
        </div>
      </section>

      {/* Why Choose Us for Damaged Cars */}
      <section className="py-20" style={{ backgroundColor: '#FFF9E6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose auto-sell.ai for Damaged Cars?
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
              <div key={index} className="text-center p-6 rounded-xl bg-white/40 hover:bg-white/60 transition-colors" style={{ borderColor: '#FFE9C0', borderWidth: '1px' }}>
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Damage We Accept */}
      <section className="py-20 text-gray-800" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #FFF3D4 50%, #FFE9C0 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Types of Damage We Accept
            </h2>
            <p className="text-xl text-gray-600">
              From minor dents to major accidents - we buy them all
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/40 p-8 rounded-xl" style={{ borderColor: '#FFE9C0', borderWidth: '1px' }}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Minor Damage</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-lg" style={{ color: '#FFC325' }}>✓</span>
                  <span>Dents and scratches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg" style={{ color: '#FFC325' }}>✓</span>
                  <span>Broken mirrors and lights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg" style={{ color: '#FFC325' }}>✓</span>
                  <span>Interior damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg" style={{ color: '#FFC325' }}>✓</span>
                  <span>Worn tires and brakes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/40 p-8 rounded-xl" style={{ borderColor: '#FFE9C0', borderWidth: '1px' }}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Major Damage</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-lg" style={{ color: '#FFC325' }}>✓</span>
                  <span>Accident damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg" style={{ color: '#FFC325' }}>✓</span>
                  <span>Engine problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg" style={{ color: '#FFC325' }}>✓</span>
                  <span>Transmission issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg" style={{ color: '#FFC325' }}>✓</span>
                  <span>Flood damage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ background: 'linear-gradient(45deg, #ffffff 0%, #FFF3D4 50%, #FFE9C0 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
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
                <div className="bg-white/40 p-8 rounded-xl hover:bg-white/60 transition-colors" style={{ borderColor: '#FFE9C0', borderWidth: '1px' }}>
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-4xl font-bold mb-4" style={{ color: '#FFC325' }}>{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #FFF9E6 50%, #FFE9C0 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Get Cash for Your Damaged Car?
          </h2>
          <p className="text-xl mb-8 text-gray-400">
            Don&apos;t let a damaged car sit in your driveway. Get cash today and free up space.
          </p>
          <Link
            href="/#sell-form"
            className="inline-block px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#FFF9E6', color: '#FFC325' }}
          >
            Get My Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}
