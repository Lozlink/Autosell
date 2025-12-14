import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "FAQ - Auto-Sell.ai",
  description: "Frequently asked questions about selling your car with Auto-Sell.ai. Get answers to common questions about our car buying service.",
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
