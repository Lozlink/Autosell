
"use client"

import Header from '@/components/Header'
import { useState } from 'react'


const faqs = [
  {
    question: "How quickly can I get a quote?",
    answer: "Our AI-powered system typically provides quotes within 30 minutes of submitting your car details. During business hours, many quotes are available in just 10-15 minutes."
  },
  {
    question: "Do you really pay on the same day?",
    answer: "Yes! Once we inspect your vehicle and complete the paperwork, we transfer the money directly to your bank account via OSKO, which typically processes within minutes."
  },
  {
    question: "What if my car isn't running?",
    answer: "No problem! We buy cars in all conditions - running or not, damaged or perfect. We'll arrange towing if needed and still provide competitive offers."
  },
  {
    question: "Are there any hidden fees?",
    answer: "Absolutely not. Our quote is what you get paid. We don't charge any fees, commissions, or deduct costs for paperwork, towing, or processing."
  },
  {
    question: "How do you determine the price?",
    answer: "We use real-time market data, RedBook valuations, and our extensive network of buyers to ensure you get the best possible price for your vehicle."
  },
  {
    question: "What areas do you service?",
    answer: "We operate Australia-wide! From major cities to remote areas, we can arrange pickup and payment anywhere in Australia."
  },
  {
    question: "What documents do I need?",
    answer: "You'll need your vehicle registration, driver's license, and proof of ownership. We'll help you with all the paperwork during the inspection."
  },
  {
    question: "Can I change my mind after accepting an offer?",
    answer: "Yes, you can change your mind up until we complete the final paperwork and payment. However, once payment is made, the sale is final."
  },
  {
    question: "Do you buy all car brands?",
    answer: "Yes! We buy all makes and models - Toyota, Ford, Holden, BMW, Mercedes, and everything in between. No car is too old or too new."
  },
  {
    question: "What if I still owe money on my car?",
    answer: "We can still buy your car even if you have a loan. We'll work with your lender to pay off the loan and give you any remaining equity."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-12">
        <div className="px-4 sm:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get answers to common questions about selling your car with AutoSell.ai.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="px-4 sm:px-8 max-w-5xl">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-emerald-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-emerald-100 mb-6">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1800AUTOSELL"
                className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Call 1800 AUTO SELL
              </a>
              <a
                href="/contact"
                className="bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
