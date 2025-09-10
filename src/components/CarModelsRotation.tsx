'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface CarModel {
  id: string
  name: string
  image: string
  brand: string
}

const carModels: CarModel[] = [
  { id: '1', name: 'Camry', image: '/public/next.svg', brand: 'Toyota' },
  { id: '2', name: 'Commodore', image: '/public/next.svg', brand: 'Holden' },
  { id: '3', name: 'Focus', image: '/public/next.svg', brand: 'Ford' },
  { id: '4', name: 'CX-5', image: '/public/next.svg', brand: 'Mazda' },
  { id: '5', name: 'i30', image: '/public/next.svg', brand: 'Hyundai' },
  { id: '6', name: 'X-Trail', image: '/public/next.svg', brand: 'Nissan' },
  { id: '7', name: 'Civic', image: '/public/next.svg', brand: 'Honda' },
  { id: '8', name: 'Golf', image: '/public/next.svg', brand: 'Volkswagen' },
  { id: '9', name: 'Outlander', image: '/public/next.svg', brand: 'Mitsubishi' },
  { id: '10', name: 'Forester', image: '/public/next.svg', brand: 'Subaru' },
  { id: '11', name: '3 Series', image: '/public/next.svg', brand: 'BMW' },
  { id: '12', name: 'C-Class', image: '/public/next.svg', brand: 'Mercedes-Benz' }
]

export default function CarModelsRotation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedModels, setDisplayedModels] = useState<CarModel[]>([])

  useEffect(() => {
    // Initialize with first 3 models
    setDisplayedModels(carModels.slice(0, 3))
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % carModels.length
        const nextModels = []
        
        // Get next 3 models in rotation
        for (let i = 0; i < 3; i++) {
          const modelIndex = (nextIndex + i) % carModels.length
          nextModels.push(carModels[modelIndex])
        }
        
        setDisplayedModels(nextModels)
        return nextIndex
      })
    }, 3000) // Rotate every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <AnimatePresence mode="wait">
        {displayedModels.map((model, index) => (
          <motion.div
            key={`${model.id}-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1 
            }}
            className="text-center group"
          >
            <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={model.image}
                alt={`${model.brand} ${model.name}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  const target = e.target as HTMLImageElement
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="150" height="100" xmlns="http://www.w3.org/2000/svg">
                      <rect width="150" height="100" fill="#f3f4f6"/>
                      <text x="75" y="50" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="14" fill="#6b7280">
                        ${model.brand} ${model.name}
                      </text>
                    </svg>
                  `)}`
                }}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
              {model.brand} {model.name}
            </h3>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
