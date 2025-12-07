import {Suspense} from 'react'
import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
import BrandMarquee from '@/components/BrandMarquee'
import ReviewsComponent from '@/components/ReviewsComponent'
import MapComponent from '@/components/MapComponent'
import Accordion from '@/components/Accordion'
import Image from 'next/image'
import SmoothSalesProcess from "@/components/SmoothSalesProcess";
import Link from 'next/link'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion } from 'framer-motion'
import type { Metadata } from 'next'

function CarSellFormFallback() {
  return (
      <div className="rounded-2xl p-8 border border-blue-200 bg-white/30">
        <div className="animate-pulse">
          <div className="h-8 bg-zinc-800 rounded mb-6"></div>
          <div className="space-y-4">
            <div className="h-12 bg-zinc-800 rounded"></div>
            <div className="h-12 bg-zinc-800 rounded"></div>
            <div className="h-12 bg-zinc-800 rounded"></div>
            <div className="h-12 bg-zinc-800 rounded"></div>
            <div className="h-12 bg-zinc-800 rounded"></div>
          </div>
        </div>
      </div>
  )
}

export const metadata: Metadata = {
  title: "auto-sell.ai - Sell Your Car Fast for Cash | Australia's #1 Car Buyers",
  description: "Sell your car instantly with auto-sell.ai. Get free quotes in 30 minutes, same-day payment, and hassle-free car selling across Australia. We buy all cars in any condition!",
  keywords: "sell my car, car buyers Australia, cash for cars, sell car fast, instant car quote, same day payment, car valuation, we buy cars, car buying service",
  openGraph: {
    title: "auto-sell.ai - Sell Your Car Fast for Cash | Australia's #1 Car Buyers",
    description: "Get an instant quote for your car. Same-day payment, no hassles, best prices guaranteed. We buy all cars in any condition across Australia.",
    type: "website",
    locale: "en_AU",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <Header />
      
      {/* Hero Section with Integrated Form */}
      <section id="sell-form" className="max-w-7xl mx-auto from-white to-yellow-50 text-gray-800 py-16" style={{ backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #FFF9E6 100%)' }}>
        <div className="px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Sell Your Car Today
                <span className="block mt-2" style={{ color: '#FFC325' }}>Get The Best Price Guaranteed</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 mb-8">
                Get a <strong>FREE valuation</strong> in 30 minutes, same-day OSKO payment, and we come to you Australia-wide. No hassles, no fees.
              </p>
              
              {/* Trust Strip - 3 Key Differentiators */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm border-2" style={{ borderColor: '#FFC325' }}>
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-bold text-lg mb-1">Fast</h3>
                  <p className="text-sm text-gray-600">Quote in 30 minutes, payment same day</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border-2" style={{ borderColor: '#FFC325' }}>
                  <div className="text-3xl mb-2">🤝</div>
                  <h3 className="font-bold text-lg mb-1">Easy</h3>
                  <p className="text-sm text-gray-600">We come to you, handle all paperwork</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border-2" style={{ borderColor: '#FFC325' }}>
                  <div className="text-3xl mb-2">💰</div>
                  <h3 className="font-bold text-lg mb-1">Best Price</h3>
                  <p className="text-sm text-gray-600">We beat like-for-like offers, guaranteed</p>
                </div>
              </div>

            </div>

            {/* Hero Form */}
            <div>
              <Suspense fallback={<CarSellFormFallback />}>
                <CarSellForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process - moved up for better flow */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold" style={{ backgroundColor: '#FFC325', color: '#000' }}>1</div>
              <h3 className="text-2xl font-bold mb-3">Get Your Quote</h3>
              <p className="text-gray-600">Fill out our simple form and receive an instant offer within 30 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold" style={{ backgroundColor: '#FFC325', color: '#000' }}>2</div>
              <h3 className="text-2xl font-bold mb-3">Book Inspection</h3>
              <p className="text-gray-600">Schedule a free on-site inspection at your convenience - we come to you</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold" style={{ backgroundColor: '#FFC325', color: '#000' }}>3</div>
              <h3 className="text-2xl font-bold mb-3">Get Paid Instantly</h3>
              <p className="text-gray-600">Same-day OSKO payment directly to your bank account - it&#39;s that simple</p>
            </div>
          </div>

          <div className="text-center">
            <a href="#sell-form" className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg" style={{ backgroundColor: '#FFC325', color: '#000' }}>
              Get Your FREE Quote Now
            </a>
          </div>
        </div>
      </section>

      {/* Customer Reviews - Moved higher for social proof */}
      <section id="reviews" className="py-16" style={{ backgroundColor: '#FFF9E6' }}>
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Trusted by Thousands of Australians
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers say about selling their cars with us
            </p>
          </div>

          <ReviewsComponent />

          <div className="text-center mt-12">
            <a href="#sell-form" className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg" style={{ backgroundColor: '#FFC325', color: '#000' }}>
              Join Our Happy Customers
            </a>
          </div>
        </div>
      </section>


      {/* Why Choose Section */}
      <section id="why-choose" className="py-16 bg-white">
        <div className="px-4 sm:px-8 max-w-6xl mx-auto z-10">
          <Image src='/brand-guideline/autosell-logo/PNG/1 (1).png' alt='Autosell Logo' width={1000} height={100} className='z-0 '/>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
              <Image src='/brand-guideline/autosell-logo/PNG/1 (1).png' alt='Autosell Logo'
                width={1000}
                height={100}
                className='z-0'
                style={{objectFit: "cover"}}
              />


          </div>

          {[
            {
              title: "Immediate Payment",
              description: "Get paid instantly via OSKO transfer. No waiting, no delays.",
              image: {
                src: "/images/branding/osko-and-payid-icon.jpg",
                alt: "Osko payid icon",
              },
              href: "/value-propositions/immediate-payment",
            },
            {
              title: "On-Site Inspections",
              description: "Available when you need us, including weekends and public holidays.",
              image: {
                src: "/images/branding/on-site.jpg",
                alt: "Instant online quote on a phone screen",
              },
              href: "/value-propositions/on-site-inspections",

            },
            {
              title: "Open 7 Days",
              description: "Available when you need us, including weekends and public holidays.",
              image: {
                src: "/images/branding/7days.jpg",
                alt: "Open 7 days a week",
                fit: "contain" as const, // <— ad
              },
              href: "/value-propositions/open-7-days",

            },
            {
              title: "Smooth Sales Process",
              description: "From quote to payment in hours, not days or weeks.",
              type: "component" as const,
              href: "/value-propositions/smooth-sales-process",

            },
          ].map((item, i) => (
              <div key={i} className="rounded-xl md:rounded-none">
                <div className="grid md:grid-cols-5 items-center gap-6 py-6">

                {/* Left column (text or visual depending on index) */}
                  {i % 2 === 0 ? (
                          <div className="md:col-span-2">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            <div className="mt-4 flex items-center gap-4">
                              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Fast</span>
                              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Reliable</span>
                            </div>
                          </div>
                      ) :
                      (
                      <div className="order-2 md:order-1 md:col-span-3">
                        {item.type === "component" ? (
                            <div className="relative w-full overflow-hidden rounded-lg border border-blue-200 bg-white shadow-md">
                              <div className="relative aspect-[16/10] overflow-hidden">
                                <Link href={item.href}>
                                  <SmoothSalesProcess variant="compact" />
                              </Link>
                                </div>
                              </div>

                        ) : (
                            <div className="relative w-full overflow-hidden rounded-lg border border-blue-200 bg-white shadow-md">
                              <div className="relative aspect-[16/10] overflow-hidden">
                              <div className={item.image?.fit === 'contain' ? 'absolute inset-0 p-2' : 'absolute inset-0'}>
                                  <Link href={item.href}>
                                    <Image
                                        src={item.image!.src}
                                        alt={item.image!.alt}
                                        fill
                                        className={
                                          item.image?.fit === 'contain'
                                              ? 'object-contain object-center'
                                              : 'object-cover object-center'
                                        }
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        priority={i === 0}
                                        placeholder="empty"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                        )}

                      </div>
                  )}

                  {/* Right column (visual or text depending on index) */}
                  {i % 2 === 0 ? (
                      <div className="order-2 md:order-2 md:col-span-3">
                        {/* Image gets 3/5 width */}
                        <div className="relative w-full overflow-hidden rounded-lg border border-blue-200 bg-white shadow-md">
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <div className={item.image?.fit === 'contain' ? 'absolute inset-0 p-2' : 'absolute inset-0'}>
                                  <Link href={item.href}>
                                    <Image
                                        src={item.image!.src}
                                        alt={item.image!.alt}
                                        fill
                                        className={
                                          item.image?.fit === 'contain'
                                              ? 'object-contain'
                                              : 'object-cover object-center'
                                        }
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        priority={i === 0}
                                        placeholder="empty"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                      </div>
                  ) : (
                      <div className="order-1 md:order-2 md:col-span-2">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        <div className="mt-4 flex items-center gap-4">
                          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Secure</span>
                          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Trusted</span>
                        </div>
                      </div>

                  )}
                </div>
              </div>

          ))}
        </div>
      </section>

      {/* Car Models We Buy */}
      <section className="py-16 max-w-7xl mx-auto" style={{ backgroundColor: '#FFF9E6' }} >
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              We Buy All Car Brands
            </h2>
            <p className="text-xl text-gray-600">
              From popular makes to luxury brands - we buy them all
            </p>
          </div>

          <BrandMarquee />

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Don&apos;t see your brand? We buy all makes and models!
            </p>
            <a href="#sell-form" className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg" style={{ backgroundColor: '#FFC325', color: '#000' }}>
              Get Your Quote Anyway
            </a>
          </div>
        </div>
      </section>

      {/* Brands Grid (linked to /brands/[brand]) */}
      <section className="hidden">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Brand</h2>
            <p className="text-lg text-gray-600">We buy all makes. Pick yours to start.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["Toyota","Ford","Holden","Mazda","Honda","Nissan","BMW","Mercedes","Audi","Volkswagen","Hyundai","Kia"].map((brand) => (
              <a
                key={brand}
                href={`/brands/${brand.toLowerCase()}`}
                className="group text-center p-4 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:border-red-300 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-red-50">
                  <span className="text-gray-700 group-hover:text-blue-500 font-bold text-lg">{brand.charAt(0)}</span>
                </div>
                <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-500">{brand}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* We Buy All Types Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              We Buy All Types of Vehicles
            </h2>
            <p className="text-xl text-gray-600">
              From sedans to trucks, we buy everything - any condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: 'Cars', href: '/types/cars', img: '/images/types/bmw.jpg' , desc: 'All makes and models, any condition' },
              { type: 'SUVs', href: '/types/suvs', img: '/images/types/SUV.jpg' , desc: '4WDs, crossovers, and family vehicles' },
              { type: 'Utes', href: '/types/utes', img: '/images/types/ute.jpg' , desc: 'Work utes, dual cabs, and pickups' },
              { type: 'Trucks', href: '/types/trucks', img: '/images/types/truck.jpg' , desc: 'Commercial trucks and heavy vehicles' },
              { type: 'Vans', href: '/types/vans', img: '/images/types/van.jpg' , desc: 'Passenger vans and cargo vans' },
              { type: 'Motorcycles', href: '/types/motorcycles', img: '/images/types/motorcycle.jpg' , desc: 'Bikes, scooters, and ATVs' },
            ].map((t) => (
                <a key={t.type} href={t.href} className="group overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative h-40">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${t.img})` }} />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-0 flex items-end p-5">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-50 mb-1">{t.type}</h3>
                        <p className="text-md text-zinc-100 ">{t.desc}</p>
                      </div>
                    </div>
                  </div>
                </a>
            ))}
          </div>
        </div>
      </section>

      {/* Australia-Wide Coverage */}
      <section className="hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Australia-Wide Service
            </h2>
            <p className="text-lg text-gray-600">
              We come to you anywhere in Australia - from major cities to remote areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { city: 'Sydney', state: 'NSW', color: 'bg-gradient-to-br from-white via-blue-50 to-blue-100-500' },
              { city: 'Melbourne', state: 'VIC', color: 'bg-purple-500' },
              { city: 'Brisbane', state: 'QLD', color: 'bg-orange-500' },
              { city: 'Perth', state: 'WA', color: 'bg-cyan-500' },
              { city: 'Adelaide', state: 'SA', color: 'bg-red-500' },
              { city: 'Canberra', state: 'ACT', color: 'bg-indigo-500' },
              { city: 'Gold Coast', state: 'QLD', color: 'bg-yellow-500' },
              { city: 'Darwin', state: 'NT', color: 'bg-green-500' }
            ].map((location) => (
              <div key={location.city} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${location.color} flex items-center justify-center`}>
                  <span className="text-gray-800 font-bold text-lg">{location.city.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{location.city}</h3>
                <p className="text-sm text-gray-600">{location.state}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-4">
              Plus all regional areas, country towns, and remote locations
            </p>
            <a 
              href="#sell-form" 
              className="inline-block bg-blue-600 text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
            >
              Get Your Quote - We Come to You!
            </a>
          </div>

          {/* Map Component */}
          <div className="max-w-4xl mx-auto">
            <MapComponent />
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section id="faq" className="py-16" style={{ backgroundColor: '#FFF9E6' }}>
        <div className="px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We&#39;ve got answers
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <Accordion
              items={[
                {
                  title: "How quickly can I get a quote?",
                  content: "Our AI-powered system typically provides quotes within 30 minutes of submitting your car details. During business hours, many quotes are available in just 10-15 minutes.",
                },
                {
                  title: "Do you really pay on the same day?",
                  content: "Yes! Once we inspect your vehicle and complete the paperwork, we transfer the money directly to your bank account via OSKO, which typically processes within minutes.",
                },
                {
                  title: "What if my car isn't running?",
                  content: "No problem! We buy cars in all conditions - running or not, damaged or perfect. We'll arrange towing if needed and still provide competitive offers.",
                },
                {
                  title: "Are there any hidden fees?",
                  content: "Absolutely not. Our quote is what you get paid. We don't charge any fees, commissions, or deduct costs for paperwork, towing, or processing.",
                },
                {
                  title: "How do you determine the price?",
                  content: "We use real-time market data, RedBook valuations, and our extensive network of buyers to ensure you get the best possible price for your vehicle.",
                },
                {
                  title: "What areas do you service?",
                  content: "We operate Australia-wide! From major cities to remote areas, we can arrange pickup and payment anywhere in Australia.",
                },
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <a href="#sell-form" className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg" style={{ backgroundColor: '#FFC325', color: '#000' }}>
              Get Started - Sell Your Car Today
            </a>
          </div>
        </div>
      </section>



      {/* Process Details Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Happens After You Submit?
            </h2>
            <p className="text-xl text-gray-600">
              Our streamlined process gets you paid quickly and safely
            </p>
          </div>
          
          <div className="  grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="p-0 md:py-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Immediate Response</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 text-lg">✓</span>
                  <span>Quote generated within 30 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 text-lg">✓</span>
                  <span>Phone call to discuss your offer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 text-lg">✓</span>
                  <span>Inspection scheduled at your convenience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 text-lg">✓</span>
                  <span>All paperwork prepared in advance</span>
                </li>
              </ul>
            </div>
            {/* Flowing image suggestion replacing placeholder CTA */}
            <div className="relative h-96 md:h-full md:row-span-2 md:col-start-2 md:row-start-1 min-h-[220px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop"
                alt="Sleek car silhouette at night, representing a fast, seamless selling journey"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <a href="#sell-form" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors shadow" style={{ backgroundColor: '#FFC325', color: '#000' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  Value my car
                </a>
              </div>
            </div>
            <div className="p-0 md:py-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Same-Day Completion</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 text-lg">✓</span>
                  <span>Professional inspection at your location</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 text-lg">✓</span>
                  <span>Final price confirmed on-site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 text-lg">✓</span>
                  <span>All documents signed and completed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 text-lg">✓</span>
                  <span>OSKO payment transferred instantly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 text-gray-800" style={{ background: 'linear-gradient(135deg, #ffe680 0%, #FFD14D 100%)' }}>
        <div className="px-4 sm:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Ready to Get The Best Price for Your Car?
          </h2>
          <p className="text-2xl mb-10 max-w-3xl mx-auto text-black">
            Join thousands of satisfied customers who chose the fast, easy way to sell their car. Get your FREE quote in minutes!
          </p>
          <div className="space-y-6">
            <a
              href="#sell-form"
              className="inline-block bg-black text-white px-12 py-5 rounded-lg text-2xl font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get My FREE Valuation Now
            </a>
            <div className="text-center">
              <p className="text-black font-semibold text-lg mb-2">Or call us directly:</p>
              <a
                href="tel:1800auto-sell"
                className="text-3xl font-bold text-black hover:text-gray-800 transition-colors flex items-center justify-center gap-3"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden sm:inline">1800 AUTO SELL</span>
              </a>
              <p className="text-black font-medium mt-3">Open 7 days a week • 8am-6pm AEST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

