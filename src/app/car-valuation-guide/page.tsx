import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Car Valuation Guide - auto-sell.ai | How to Price Your Car Right",
  description: "Learn how to value your car accurately with our comprehensive guide. Understand factors that affect car prices and get the best value when selling.",
}

export default function CarValuationGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-zinc-900 to-red-900/60 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Car Valuation Guide
              <span className="block text-red-300">How to Price Your Car Right</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Understanding your car&apos;s true value is crucial for getting the best price. 
              Learn what factors affect car values and how to maximize your return.
            </p>
            <Link 
              href="/#sell-form" 
              className="inline-block bg-red-800 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-red-800 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Your Free Valuation
            </Link>
          </div>
        </div>
      </section>

      {/* Key Factors Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Key Factors That Affect Car Value
            </h2>
            <p className="text-xl text-zinc-400">
              Understanding these factors helps you price your car competitively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📅",
                title: "Age & Mileage",
                description: "Older cars with high mileage typically have lower values. However, well-maintained classics can be exceptions."
              },
              {
                icon: "🚗",
                title: "Make & Model",
                description: "Popular brands and models often retain value better. Luxury and sports cars may have different depreciation curves."
              },
              {
                icon: "🔧",
                title: "Condition",
                description: "Mechanical condition, bodywork, and interior quality significantly impact value. Well-maintained cars command higher prices."
              },
              {
                icon: "🎨",
                title: "Color & Features",
                description: "Rare colors and desirable features (leather, sunroof, etc.) can increase value, while unpopular colors may decrease it."
              },
              {
                icon: "📍",
                title: "Location",
                description: "Regional demand, climate, and local market conditions affect pricing. Some cars are worth more in certain areas."
              },
              {
                icon: "📊",
                title: "Market Demand",
                description: "Current market trends, fuel prices, and economic conditions influence what buyers are willing to pay."
              }
            ].map((factor, index) => (
              <div key={index} className="text-center px-2 md:px-4 py-2 transition-colors">
                <div className="text-4xl mb-4">{factor.icon}</div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-3">{factor.title}</h3>
                <p className="text-zinc-400">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuation Methods */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Car Valuation Methods
            </h2>
            <p className="text-xl text-zinc-400">
              Different approaches to determining your car&apos;s worth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                method: "Online Valuation Tools",
                description: "Websites like RedBook, CarsGuide, and Glass's provide instant estimates based on basic information.",
                pros: ["Quick and free", "Good starting point", "Easy to use"],
                cons: ["May not reflect local market", "Limited accuracy", "No condition assessment"],
                icon: "💻"
              },
              {
                method: "Professional Appraisal",
                description: "Expert assessment by qualified mechanics or appraisers who inspect your car in detail.",
                pros: ["Most accurate", "Detailed condition report", "Professional opinion"],
                cons: ["Costs money", "Takes time", "May require travel"],
                icon: "👨‍🔧"
              },
              {
                method: "Market Research",
                description: "Researching similar cars for sale in your area to understand current market prices.",
                pros: ["Real market data", "Local pricing", "Current trends"],
                cons: ["Time-consuming", "May not find exact matches", "Prices can vary widely"],
                icon: "🔍"
              },
              {
                method: "auto-sell.ai Valuation",
                description: "Our AI-powered system combines multiple data sources for accurate, market-based valuations.",
                pros: ["Fast and accurate", "Market-based pricing", "Free service", "Local market data"],
                cons: ["Requires basic information", "Online only"],
                icon: "🤖"
              }
            ].map((method, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{method.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100">{method.method}</h3>
                    <p className="text-zinc-400 text-sm">{method.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-400">✓ Pros</h4>
                    <ul className="space-y-1 text-sm">
                      {method.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">✗ Cons</h4>
                    <ul className="space-y-1 text-sm">
                      {method.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Better Value */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tips to Maximize Your Car&apos;s Value
            </h2>
            <p className="text-xl text-zinc-400">
              Simple steps that can significantly increase what you get for your car
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                tip: "Maintain Service Records",
                description: "Complete service history shows your car has been well-maintained and can increase value by 10-15%.",
                icon: "📋"
              },
              {
                tip: "Fix Minor Issues",
                description: "Small repairs like replacing broken lights, fixing dents, or replacing worn tires can pay for themselves in increased value.",
                icon: "🔧"
              },
              {
                tip: "Clean Thoroughly",
                description: "A clean car appears well-cared for and can increase perceived value. Professional detailing can add 5-10% to your car's value.",
                icon: "🧹"
              },
              {
                tip: "Time Your Sale",
                description: "Consider seasonal demand - convertibles sell better in summer, 4WDs in winter. Also watch for market trends.",
                icon: "📅"
              },
              {
                tip: "Be Honest About Condition",
                description: "Transparency builds trust and can lead to better offers. Hidden problems discovered later can kill deals.",
                icon: "✅"
              }
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-transparent border-l-2 border-red-800/40">
                <div className="text-3xl">{tip.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">{tip.tip}</h3>
                  <p className="text-zinc-400">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Valuation Mistakes */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Common Valuation Mistakes to Avoid
            </h2>
            <p className="text-xl text-zinc-400">
              Don&apos;t let these errors cost you money when selling your car
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-red-600">❌ What Not to Do</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">•</span>
                  <span>Overpricing based on emotional attachment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">•</span>
                  <span>Ignoring market trends and demand</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">•</span>
                  <span>Comparing to asking prices instead of sold prices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">•</span>
                  <span>Not considering seasonal factors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">•</span>
                  <span>Underestimating the impact of condition</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-green-600">✅ What to Do Instead</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">•</span>
                  <span>Research actual sold prices, not asking prices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">•</span>
                  <span>Get multiple valuations from different sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">•</span>
                  <span>Consider local market conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">•</span>
                  <span>Be realistic about your car&apos;s condition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">•</span>
                  <span>Factor in timing and seasonal demand</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Accurate Car Valuation Today
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Our AI-powered system provides market-accurate valuations in minutes. 
            No guesswork, just real market data and expert analysis.
          </p>
          <div className="space-y-4">
            <Link
              href="/#sell-form" 
              className="inline-block bg-white text-emerald-700 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get My Free Valuation
            </Link>
            <p className="text-emerald-200 text-sm">
              ⚡ 30-minute response • 📊 Market-based pricing • 💰 No obligations
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
