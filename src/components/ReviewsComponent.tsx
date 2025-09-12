'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Review {
  id: number
  name: string
  location: string
  rating: number
  review: string
  date: string
  verified: boolean
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

  useEffect(() => {
    // Simulate loading reviews
    const timer = setTimeout(() => {
      setReviews(mockReviews)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (reviews.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [reviews])

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-200 animate-pulse">
            <div className="flex items-center mb-4">
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    )
  }

  const displayedReviews = reviews.slice(currentIndex, currentIndex + 3)

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
            className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex text-yellow-400 text-lg">
                {'★'.repeat(review.rating)}
              </div>
              {review.verified && (
                <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full">
                  Verified
                </span>
              )}
            </div>
            
            <p className="text-gray-700 mb-4 italic leading-relaxed">
              &ldquo;{review.review}&rdquo;
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">{review.name}</div>
                <div className="text-sm text-gray-500">{review.location}</div>
              </div>
              <div className="text-sm text-gray-400">
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
      <div className="bg-emerald-50 rounded-xl p-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">2,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>
      </div>

      {/* Review Indicators */}
      <div className="flex justify-center space-x-2">
        {reviews.slice(0, Math.ceil(reviews.length / 3)).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 3)}
            className={`w-3 h-3 rounded-full transition-colors ${
              Math.floor(currentIndex / 3) === index
                ? 'bg-emerald-600'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
