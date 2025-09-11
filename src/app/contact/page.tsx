import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Contact Us - AutoSell.ai",
  description: "Contact AutoSell.ai for your car valuation. Call, email, text, or chat with us. We're here to help you sell your car fast.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Get in touch with us for your FREE car valuation. We&apos;re here to help 7 days a week.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <a href="tel:1800AUTOSELL" className="text-emerald-600 hover:text-emerald-700 font-bold text-lg">
                      1800 AUTO SELL
                    </a>
                    <p className="text-sm text-gray-600">Open 7 days • 8am-6pm AEST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Live Chat</h3>
                    <p className="text-emerald-600 font-semibold">Available Now</p>
                    <p className="text-sm text-gray-600">Chat with our team instantly</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Text/SMS</h3>
                    <a href="sms:1800AUTOSELL" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                      Send us a message
                    </a>
                    <p className="text-sm text-gray-600">We&apos;ll respond within minutes</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <a href="mailto:info@autosell.ai" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                      info@autosell.ai
                    </a>
                    <p className="text-sm text-gray-600">Response within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours & Info */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Service Areas</h3>
                  <p className="text-sm text-gray-600">
                    We service all of Australia including major cities, regional areas, and remote locations.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Response Times</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Phone calls: Immediate</li>
                    <li>• Live chat: Instant</li>
                    <li>• SMS: Within 5 minutes</li>
                    <li>• Email: Within 2 hours</li>
                    <li>• Quote requests: Within 30 minutes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div className="bg-emerald-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Your FREE Valuation?</h2>
            <p className="text-emerald-100 mb-6">
              Don&apos;t wait - get your car valued in 30 minutes and receive same-day payment.
            </p>
            <Link
              href="/#sell-form" 
              className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get My FREE Valuation Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
