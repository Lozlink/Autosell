import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smooth Sales Process - AutoSell.ai',
  description: 'From quote to cash, our process is streamlined for speed and simplicity.'
}

export default function SmoothSalesProcessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      <Header />
      <section className="bg-gradient-to-br from-black via-zinc-900 to-red-900/60 text-white py-12">
        <div className="px-4 sm:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Smooth Sales Process</h1>
          <p className="text-lg text-zinc-300 max-w-3xl">
            We remove the friction from selling a car. Instant quotes, on-site inspections, and same-day OSKO payments mean you can sell your car in hours, not weeks.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="px-4 sm:px-8 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {title: 'Instant Quote', desc: 'Submit your details and get a quote in ~30 minutes.'},
            {title: 'We Come To You', desc: 'On-site inspections anywhere in Australia.'},
            {title: 'Same-Day Payment', desc: 'OSKO transfer straight into your bank account.'}
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
