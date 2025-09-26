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

const realReviews: Review[] = [
  {
    id: 0,
    name: "Ziggy S",
    location: "Sydney",
    rating: 5,
    review: "Great to deal with and an easy negotiator.\n",
    date: "2025-09-22",
    verified: true
  },
  {
    id: 1,
    name: "Michael S.",
    location: "Sydney, NSW",
    rating: 5,
    review: "The team was very easy to deal with from start to finish. Communication was clear and straightforward, which made the whole process stress-free. They were professional yet friendly, and always willing to answer questions. The staff came across as genuine and honest, which built a lot of trust. Everything was handled smoothly without any issues. Overall, a really good experience with a nice team that I’d happily recommend.”",
    date: "2025-09-21",
    verified: true
  },
  {
    id: 2,
    name: "Tia",
    location: "Sydney",
    rating: 5,
    review: "Very friendly and easy to deal with. Money paid instantly. Would definitely recommend Alex if you’re wanting to sell your car.",
    date: "2025-08-25",
    verified: true
  },
  {
    id: 3,
    name: "James G.",
    location: "Sydney",
    rating: 5,
    review: "Quick easy sale, knows what they are talking about,great customer service,and gave me top dollar on my car I'll be using them every time I need to sell my car.",
    date: "2024-08-24",
    verified: true
  },
  {
    id: 4,
    name: "Marissa C",
    location: "Sydney",
    rating: 5,
    review: "Very happy with the whole process with trading in my car. Alex is very friendly and communicates promptly. Went out of his way to accommodate me so I didn't even have to leave my house.",
    date: "2025-08-18",
    verified: true
  }
]

export default function ReviewsComponent() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/reviews', { cache: 'no-store' })
        const data = await res.json()
        if (Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviews(data.reviews)
        } else {
          setReviews(realReviews) // graceful fallback
        }
      } catch (e) {
        setReviews(realReviews) // fallback on error
      } finally {
        setIsLoading(false)
      }
    }
    fetchReviews()
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
          <div key={i} className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 animate-pulse">
            <div className="flex items-center mb-4">
              <div className="w-16 h-4 bg-zinc-700 rounded"></div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-zinc-700 rounded"></div>
              <div className="h-4 bg-zinc-700 rounded"></div>
              <div className="h-4 bg-zinc-700 rounded w-3/4"></div>
            </div>
            <div className="h-4 bg-zinc-700 rounded w-1/2"></div>
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
            className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex text-yellow-400 text-lg">
                {'★'.repeat(review.rating)}
              </div>
              {review.verified && (
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                  Verified
                </span>
              )}
            </div>
            
            <p className="text-zinc-300 mb-4 italic leading-relaxed">
              &#34;{review.review}&#34;
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-zinc-100">{review.name}</div>
                <div className="text-sm text-zinc-400">{review.location}</div>
              </div>
              <div className="text-sm text-zinc-400">
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

      {/*/!* Review Stats *!/*/}
      {/*<div className="bg-zinc-900 rounded-xl p-8 text-center border border-zinc-800">*/}
      {/*  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
      {/*    <div>*/}
      {/*      <div className="text-3xl font-bold text-red-500 mb-2">5</div>*/}
      {/*      <div className="text-gray-600">Average Rating</div>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <div className="text-3xl font-bold text-red-500 mb-2"></div>*/}
      {/*      <div className="text-gray-600">Happy Customers</div>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <div className="text-3xl font-bold text-red-500 mb-2">98%</div>*/}
      {/*      <div className="text-gray-600">Would Recommend</div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Review Indicators */}
      <div className="flex justify-center space-x-2">
        {reviews.slice(0, Math.ceil(reviews.length / 3)).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 3)}
            className={`w-3 h-3 rounded-full transition-colors ${
              Math.floor(currentIndex / 3) === index
                ? 'bg-red-600'
                : 'bg-zinc-700'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
