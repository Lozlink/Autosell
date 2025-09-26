import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '100% Satisfaction - AutoSell.ai',
  description: 'Why thousands of Australians trust AutoSell.ai to sell their car fast.'
}

export default function SatisfactionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      <Header />
      <section className="bg-gradient-to-br from-black via-zinc-900 to-red-900/60 text-white py-12">
        <div className="px-4 sm:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">100% Satisfaction</h1>
          <p className="text-lg text-zinc-300 max-w-3xl">
            We pride ourselves on delivering a seamless, transparent selling experience. From instant quotes to same-day OSKO payments—we make it fast, fair, and frictionless.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="px-4 sm:px-8 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {["Transparent offers","No hidden fees","Australia-wide service"].map((item) => (
            <div key={item} className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-zinc-100">{item}</h2>
              <p className="text-zinc-400">We keep things simple and clear, so you always know where you stand.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
