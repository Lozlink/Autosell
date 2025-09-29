import type { Metadata } from 'next'
import BrandPage from '../brands/[brand]/page'

export const metadata: Metadata = {
  title: 'Sell Your Ford - auto-sell.ai',
  description: 'We buy all Ford models in any condition. Free quote in 30 minutes and same-day OSKO payment.',
}

export default function SellFordPage() {
  // Delegate to the shared dynamic BrandPage template to avoid duplicate layouts
  // and keep styling consistent.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = BrandPage as any
  return <Component params={{ brand: 'ford' }} />
}

