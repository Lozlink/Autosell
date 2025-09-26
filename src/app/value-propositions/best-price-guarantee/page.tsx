import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Price Guarantee - AutoSell.ai',
  description: 'We beat like-for-like offers so you get the best price for your car.'
}

export default function BestPriceGuaranteePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      <Header />
      <section className="bg-gradient-to-br from-black via-zinc-900 to-red-900/60 text-white py-12">
        <div className="px-4 sm:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Price Guarantee</h1>
          <p className="text-lg text-zinc-300 max-w-3xl">
            If you have a written like-for-like offer, we’ll beat it. Our national buyer network and data-driven valuations ensure you get top dollar—fast.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="px-4 sm:px-8 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: 'We Beat Offers', desc: 'Bring a comparable written offer and we’ll do better.' },
            { title: 'Transparent Valuations', desc: 'Clear, data-backed pricing with no hidden fees.' },
            { title: 'Fast Turnaround', desc: 'From quote to cash in hours, not weeks.' },
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
