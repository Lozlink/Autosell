import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "How to Sell Your Car Fast - AutoSell.ai | Expert Tips & Guide",
  description: "Learn how to sell your car fast with our expert guide. Get tips on preparation, pricing, and choosing the best selling method for maximum speed and value.",
}

export default function HowToSellCarFastPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How to Sell Your Car Fast
              <span className="block text-emerald-400">Expert Tips & Complete Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Want to sell your car quickly? Learn the best strategies, avoid common mistakes, 
              and discover the fastest way to get cash for your vehicle.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Your Fast Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Tips to Sell Your Car Fast
            </h2>
            <p className="text-xl text-gray-600">
              Follow these proven strategies to maximize your car&apos;s value and speed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧹",
                title: "Clean Your Car",
                description: "A clean car sells faster and for more money. Wash, vacuum, and detail both inside and out."
              },
              {
                icon: "📸",
                title: "Take Great Photos",
                description: "High-quality photos from multiple angles showcase your car's best features and attract buyers."
              },
              {
                icon: "📋",
                title: "Gather Documentation",
                description: "Have service records, registration, and any receipts ready to build buyer confidence."
              },
              {
                icon: "💰",
                title: "Price It Right",
                description: "Research market values and price competitively. Overpricing will slow down your sale."
              },
              {
                icon: "📱",
                title: "Use Multiple Platforms",
                description: "List on multiple websites and social media to reach more potential buyers."
              },
              {
                icon: "⏰",
                title: "Be Available",
                description: "Respond quickly to inquiries and be flexible with viewing times to close deals faster."
              }
            ].map((tip, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling Methods Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Selling Methods Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right method for your needs and timeline
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                method: "Private Sale",
                pros: ["Highest potential price", "Full control over sale", "No fees"],
                cons: ["Takes longest", "Requires effort", "Safety concerns", "Negotiation needed"],
                time: "2-8 weeks",
                icon: "🏠"
              },
              {
                method: "Dealer Trade-In",
                pros: ["Fast and convenient", "No safety concerns", "Immediate credit"],
                cons: ["Lowest price", "Limited to new car purchase", "Less control"],
                time: "Same day",
                icon: "🏢"
              },
              {
                method: "AutoSell.ai",
                pros: ["Fast (same day)", "Fair market price", "Safe and convenient", "No fees"],
                cons: ["May be slightly less than private sale", "Limited to cash buyers"],
                time: "Same day",
                icon: "⚡"
              }
            ].map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{option.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.method}</h3>
                  <div className="text-2xl font-bold text-emerald-600">{option.time}</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-green-600">✓ Pros</h4>
                  <ul className="space-y-2 text-sm">
                    {option.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-red-600">✗ Cons</h4>
                  <ul className="space-y-2 text-sm">
                    {option.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pre-Sale Preparation Checklist
            </h2>
            <p className="text-xl text-gray-600">
              Complete these tasks to maximize your car&apos;s value and selling speed
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Exterior Preparation</h3>
                <ul className="space-y-3">
                  {[
                    "Wash and wax the car",
                    "Clean wheels and tires",
                    "Fix minor dents and scratches",
                    "Replace broken lights/mirrors",
                    "Clean windows thoroughly",
                    "Check tire pressure and condition"
                  ].map((task, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Interior & Documentation</h3>
                <ul className="space-y-3">
                  {[
                    "Vacuum and clean interior",
                    "Remove personal items",
                    "Clean dashboard and controls",
                    "Gather service records",
                    "Prepare registration papers",
                    "Get recent photos of the car"
                  ].map((task, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AutoSell.ai */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Fastest Way to Sell Your Car
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Skip the hassle of private sales and get cash for your car today. 
            Our service is designed for speed, convenience, and fair pricing.
          </p>
          <div className="space-y-4">
            <Link
              href="/#sell-form" 
              className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get My Fast Quote Now
            </Link>
            <p className="text-emerald-200 text-sm">
              ⚡ Same-day payment • 🚗 We come to you • 💰 No fees or commissions
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
