import type { Metadata } from 'next'
import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
import { Suspense } from 'react'

interface TypePageProps {
	params: Promise<{ type: string }>
}

export async function generateMetadata({ params }: TypePageProps): Promise<Metadata> {
	const { type: typeParam } = await params
	const titleType = typeParam.charAt(0).toUpperCase() + typeParam.slice(1)
	return {
		title: `Sell ${titleType} - auto-sell.ai`,
		description: `We buy all ${titleType} in any condition. Free quote in 30 minutes and same-day OSKO payment.`,
	}
}

export default async function TypePage({ params }: TypePageProps) {
	const { type: typeParam } = await params
	const titleType = typeParam.charAt(0).toUpperCase() + typeParam.slice(1)

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />
			<section className="bg-gradient-to-br from-black via-zinc-900 to-red-900/60 text-white py-12">
				<div className="px-4 sm:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								Sell {titleType}
								<span className="block text-blue-200">Fast, Easy, Same-Day Payment</span>
							</h1>
							<p className="text-xl md:text-2xl text-blue-100 mb-8">
								We buy all {titleType} in any condition. Get your free quote in 30 minutes and same-day payment.
							</p>
						</div>

						<div>
							<Suspense fallback={<div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 animate-pulse h-96"></div>}>
								<CarSellForm />
							</Suspense>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
