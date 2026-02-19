'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
//Unneeded
// const realReviews: Review[] = [
//   {
//     id: 0,
//     name: "Ziggy S",
//     location: "Sydney",
//     rating: 5,
//     review: "Great to deal with and an easy negotiator.\n",
//     date: "2025-09-22",
//     verified: true
//   },
//   {
//     id: 1,
//     name: "Michael S.",
//     location: "Sydney, NSW",
//     rating: 5,
//     review: "The team was very easy to deal with from start to finish. Communication was clear and straightforward, which made the whole process stress-free. They were professional yet friendly, and always willing to answer questions. The staff came across as genuine and honest, which built a lot of trust. Everything was handled smoothly without any issues. Overall, a really good experience with a nice team that I’d happily recommend.”",
//     date: "2025-09-21",
//     verified: true
//   },
//   {
//     id: 2,
//     name: "Tia",
//     location: "Sydney",
//     rating: 5,
//     review: "Very friendly and easy to deal with. Money paid instantly. Would definitely recommend Alex if you’re wanting to sell your car.",
//     date: "2025-08-25",
//     verified: true
//   },
//   {
//     id: 3,
//     name: "James G.",
//     location: "Sydney",
//     rating: 5,
//     review: "Quick easy sale, knows what they are talking about,great customer service,and gave me top dollar on my car I'll be using them every time I need to sell my car.",
//     date: "2024-08-24",
//     verified: true
//   },
//   {
//     id: 4,
//     name: "Marissa C",
//     location: "Sydney",
//     rating: 5,
//     review: "Very happy with the whole process with trading in my car. Alex is very friendly and communicates promptly. Went out of his way to accommodate me so I didn't even have to leave my house.",
//     date: "2025-08-18",
//     verified: true
//   }
// ]

export default function ReviewsComponent() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/google-reviews', {cache: 'no-store'})
        const data = await res.json()
        if (Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviews(data.reviews)
          setIsLoading(false)
        }
      }
        catch (error) {
        console.error(error)
      }
    }
    fetchReviews()
  }, [])

  const getDisplayedReviews = () => {
    if (reviews.length === 0) return []
    if (reviews.length <= 3) return reviews

    const displayed = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length
      displayed.push(reviews[index])
    }
    return displayed
  }

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
          <div key={i} className="bg-white p-8 rounded-xl border border-blue-200 animate-pulse">
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

  const displayedReviews = getDisplayedReviews()


  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Reviews Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {displayedReviews.map((review, index) => (
         <Link
           key={review.id}
           href={review.url}
           className="block">
           <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="bg-white p-8 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow"
           >
             <div className="flex items-center justify-between mb-4">
               <div className="flex text-yellow-400 text-lg">
                 {'★'.repeat(review.rating)}
               </div>
               {review.verified && (
                   <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: '#FFC325', color: '#000000' }}>
                  Verified
                </span>
               )}
             </div>

             <p className="text-gray-600 mb-4 italic leading-relaxed">
               &#34;{review.review}&#34;
             </p>

             <div className="flex items-center justify-between">
               <div>
                 <div className="font-semibold text-gray-600">{review.name}</div>
                 <div className="text-sm text-gray-600">{review.location}</div>
               </div>
               <div className="text-sm text-gray-600">
                 {new Intl.DateTimeFormat('en-AU', {
                   month: 'short',
                   day: 'numeric',
                   year: 'numeric',
                   timeZone: 'UTC',
                 }).format(new Date(review.date + 'T00:00:00Z'))}
               </div>
             </div>
           </motion.div>
         </Link>
        ))}
      </div>

      {/*/!* Review Stats *!/*/}
      {/*<div className="bg-white rounded-xl p-8 text-center border border-blue-200">*/}
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
                ? 'bg-blue-600'
                : 'bg-zinc-700'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
