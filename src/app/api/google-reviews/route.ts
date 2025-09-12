import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // In production, you would use your actual Google Places API key
    const apiKey = process.env.GOOGLE_PLACES_API_KEY
    const placeId = process.env.GOOGLE_PLACE_ID // Your business's Google Place ID
    
    if (!apiKey || !placeId) {
      return NextResponse.json({ 
        reviews: [], 
        error: 'Google Places API not configured' 
      })
    }

    // Fetch reviews from Google Places API
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch Google reviews')
    }

    const data = await response.json()
    
    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`)
    }

    // Return the reviews
    return NextResponse.json({ 
      reviews: data.result?.reviews || [],
      status: 'success'
    })

  } catch (error) {
    console.error('Google Reviews API Error:', error)
    
    // Return empty reviews on error to prevent breaking the UI
    return NextResponse.json({ 
      reviews: [], 
      error: 'Failed to fetch reviews',
      status: 'error'
    })
  }
}
