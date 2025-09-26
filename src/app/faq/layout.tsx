import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "FAQ - AutoSell.ai",
  description: "Frequently asked questions about selling your car with AutoSell.ai. Get answers to common questions about our car buying service.",
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
