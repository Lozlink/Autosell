'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GoogleReview {
  author_name: string
  author_url?: string
  language: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

interface Review {
  id: number
  name: string
  location: string
  rating: number
  review: string
  date: string
  verified: boolean
  profile_photo?: string
}

const mockReviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Sydney, NSW",
    rating: 5,
    review: "Absolutely fantastic service! Got my quote in 20 minutes and sold my car the same day. The payment was instant and the process was so smooth.",
    date: "2024-01-15",
    verified: true
  },
  {
    id: 2,
    name: "Mark T.",
    location: "Melbourne, VIC",
    rating: 5,
    review: "I was skeptical at first but AutoSell.ai delivered exactly what they promised. Fair price, fast service, and professional throughout.",
    date: "2024-01-10",
    verified: true
  },
  {
    id: 3,
    name: "Jenny L.",
    location: "Brisbane, QLD",
    rating: 5,
    review: "My car wasn't running and I thought it would be worthless. AutoSell.ai still gave me a great offer and handled everything professionally.",
    date: "2024-01-05",
    verified: true
  },
  {
    id: 4,
    name: "David K.",
    location: "Perth, WA",
    rating: 5,
    review: "Best car buying experience I've had. They came to my house, inspected the car, and transferred the money within an hour.",
    date: "2024-01-01",
    verified: true
  },
  {
    id: 5,
    name: "Lisa R.",
    location: "Adelaide, SA",
    rating: 5,
    review: "No hassle, no hidden fees, just a straightforward process. Would definitely recommend to anyone looking to sell their car.",
    date: "2023-12-28",
    verified: true
  },
  {
    id: 6,
    name: "Michael P.",
    location: "Gold Coast, QLD",
    rating: 5,
    review: "Excellent service from start to finish. The team was professional and the price was better than what the dealership offered.",
    date: "2023-12-25",
    verified: true
  }
]

export default function ReviewsComponent() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [googleReviews, setGoogleReviews] = useState<Review[]>([])

  // Function to fetch Google Reviews
  const fetchGoogleReviews = async () => {
    try {
      // Note: In production, you would need to implement this as a server-side API route
      // to avoid exposing your Google API key
      const response = await fetch('/api/google-reviews')
      if (response.ok) {
        const data = await response.json()
        const formattedReviews: Review[] = data.reviews.map((review: GoogleReview, index: number) => ({
          id: index + 1000, // Offset to avoid conflicts with mock reviews
          name: review.author_name,
          location: 'Australia', // You might want to extract this from the review text or use a different approach
          rating: review.rating,
          review: review.text,
          date: new Date(review.time * 1000).toISOString().split('T')[0],
          verified: true,
          profile_photo: review.profile_photo_url
        }))
        setGoogleReviews(formattedReviews)
      }
    } catch (error) {
      console.error('Failed to fetch Google reviews:', error)
    }
  }

  useEffect(() => {
    // Load both mock reviews and Google reviews
    const loadReviews = async () => {
      setIsLoading(true)
      
      // Load mock reviews immediately
      setReviews(mockReviews)
      
      // Try to fetch Google reviews
      await fetchGoogleReviews()
      
      setIsLoading(false)
    }

    loadReviews()
  }, [])

  // Combine all reviews
  const allReviews = [...reviews, ...googleReviews]

  useEffect(() => {
    if (allReviews.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allReviews.length)
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [allReviews])

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-800 p-8 rounded-xl border border-gray-700 animate-pulse">
            <div className="flex items-center mb-4">
              <div className="w-16 h-4 bg-gray-700 rounded"></div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            </div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    )
  }

  const displayedReviews = allReviews.slice(currentIndex, currentIndex + 3)

  return (
    <div className="space-y-8">
      {/* Reviews Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {displayedReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex text-yellow-400 text-lg">
                {'★'.repeat(review.rating)}
              </div>
              {review.verified && (
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                  {review.id >= 1000 ? 'Google Verified' : 'Verified'}
                </span>
              )}
            </div>
            
            <p className="text-gray-300 mb-4 italic leading-relaxed">
              &ldquo;{review.review}&rdquo;
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {review.profile_photo ? (
                  <img 
                    src={review.profile_photo} 
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-300 font-semibold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <div className="font-semibold text-white">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.location}</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString('en-AU', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Review Stats */}
      <div className="p-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-red-500 mb-2">4.9/5</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500 mb-2">2,000+</div>
            <div className="text-gray-300">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500 mb-2">98%</div>
            <div className="text-gray-300">Would Recommend</div>
          </div>
        </div>
      </div>

      {/* Review Indicators */}
      <div className="flex justify-center space-x-2">
        {allReviews.slice(0, Math.ceil(allReviews.length / 3)).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 3)}
            className={`w-3 h-3 rounded-full transition-colors ${
              Math.floor(currentIndex / 3) === index
                ? 'bg-red-500'
                : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
