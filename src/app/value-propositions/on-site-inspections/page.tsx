import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'On-Site Inspections - auto-sell.ai',
  description: 'We come to you anywhere in Australia for convenient on-site inspections.'
}

export default function OnSiteInspectionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      <Header />
      <section className="bg-gradient-to-br from-black via-zinc-900 to-red-900/60 text-white py-12">
        <div className="px-4 sm:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">On-Site Inspections</h1>
          <p className="text-lg text-zinc-300 max-w-3xl">
            We make it easy by coming to you—home or workplace—anywhere in Australia. Our assessor verifies your car, and we complete the paperwork on the spot.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="px-4 sm:px-8 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: 'We Come To You', desc: 'Nationwide coverage for maximum convenience.' },
            { title: 'Fast Appointment', desc: 'Inspections scheduled at a time that suits you.' },
            { title: 'Paperwork Sorted', desc: 'We handle all documents—no stress, no surprises.' },
          ].map((item) => (
            <div key={item.title} className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-zinc-100">{item.title}</h2>
              <p className="text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
