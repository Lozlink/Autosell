import type { Metadata } from 'next'
import Header from '@/components/Header'
import CarSellForm from '@/components/CarSellForm'
import { Suspense } from 'react'

interface BrandPageProps {
	params: Promise<{ brand: string }>
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
	const { brand } = await params
	const titleBrand = brand.charAt(0).toUpperCase() + brand.slice(1)
	return {
		title: `Sell Your ${titleBrand} - AutoSell.ai`,
		description: `We buy all ${titleBrand} models in any condition. Free quote in 30 minutes and same-day OSKO payment.`,
	}
}

export default async function BrandPage({ params }: BrandPageProps) {
	const { brand } = await params
	const titleBrand = brand.charAt(0).toUpperCase() + brand.slice(1)

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />
			<section className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white py-12">
				<div className="px-4 sm:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								Sell Your {titleBrand}
								<span className="block text-emerald-200">Get Top Dollar Today</span>
							</h1>
							<p className="text-xl md:text-2xl text-emerald-100 mb-8">
								We buy all {titleBrand} models in any condition. Get your free quote in 30 minutes and same-day payment.
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
