import { NextResponse } from 'next/server'
/* eslint-disable */

interface Review {
  id: number
  name: string
  location: string
  rating: number
  review: string
  date: string
  verified: boolean
  url: string
}
export async function GET() {
  try {

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID

    if (!apiKey || !placeId) {
      return NextResponse.json({
        reviews: [],
        error: 'Google Places API not configured',
        status: 'error',
      })
    }

    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json')
    url.searchParams.set('place_id', placeId)
    url.searchParams.set('fields', 'reviews')
    url.searchParams.set('key', apiKey)

    const response = await fetch(url.toString())
    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const data = await response.json()
    if (data.status !== 'OK') {
      return NextResponse.json({
        reviews: [],
        error: `Google Places API error: ${data.status}${data.error_message ? ' - ' + data.error_message : ''}`,
        status: 'error',
      })
    }

    const googleReviews: any[] = data.result?.reviews || []

    console.log(googleReviews)

    // Map Google’s fields to your UI model
    const mapped: Review[] = googleReviews.map((r, idx) => ({
      id: idx,
      name: r.author_name ?? 'Google User',
      location: '',
      rating: r.rating ?? 0,
      review: r.text ?? '',
      date: r.time ? new Date(r.time * 1000).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10),
      verified: true,
      url: r.author_url ?? '',
    }))

    // Only show 5-star reviews
    const fiveStarReviews = mapped.filter(r => r.rating === 5)

    return NextResponse.json({ reviews: fiveStarReviews, status: 'success' })
  } catch (error) {
    console.error('Google Reviews API Error:', error)
    return NextResponse.json({ reviews: [], error: 'Failed to fetch reviews', status: 'error' })
  }
}
