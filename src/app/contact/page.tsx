import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Contact Us - AutoSell.ai",
  description: "Contact AutoSell.ai for your car valuation. Call, email, text, or chat with us. We're here to help you sell your car fast.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with us for your FREE car valuation. We&apos;re here to help 7 days a week.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Call Us</h3>
                    <a href="tel:1800AUTOSELL" className="text-red-600 hover:text-red-700 font-bold text-lg">
                      1800 AUTO SELL
                    </a>
                    <p className="text-sm text-gray-300">Open 7 days • 8am-6pm AEST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Live Chat</h3>
                    <p className="text-red-600 font-semibold">Available Now</p>
                    <p className="text-sm text-gray-300">Chat with our team instantly</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Text/SMS</h3>
                    <a href="sms:1800AUTOSELL" className="text-red-600 hover:text-red-700 font-semibold">
                      Send us a message
                    </a>
                    <p className="text-sm text-gray-300">We&apos;ll respond within minutes</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email Us</h3>
                    <a href="mailto:info@autosell.ai" className="text-red-600 hover:text-red-700 font-semibold">
                      info@autosell.ai
                    </a>
                    <p className="text-sm text-gray-300">Response within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours & Info */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Business Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-white mb-3">Business Hours</h3>
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
                  <h3 className="font-semibold text-white mb-3">Service Areas</h3>
                  <p className="text-sm text-gray-300">
                    We service all of Australia including major cities, regional areas, and remote locations.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3">Response Times</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
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
          <div className="bg-red-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Your FREE Valuation?</h2>
            <p className="text-red-100 mb-6">
              Don&apos;t wait - get your car valued in 30 minutes and receive same-day payment.
            </p>
            <Link
              href="/#sell-form" 
              className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get My FREE Valuation Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
