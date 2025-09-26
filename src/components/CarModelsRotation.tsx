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

// Use brand logos via Clearbit for visibility; swap to local assets later if desired
const brandLogo = (brand: string) => {
  const map: Record<string, string> = {
    'Toyota': 'https://logo.clearbit.com/toyota.com',
    'Holden': 'https://logo.clearbit.com/gm.com',
    'Ford': 'https://logo.clearbit.com/ford.com',
    'Mazda': 'https://logo.clearbit.com/mazda.com',
    'Hyundai': 'https://logo.clearbit.com/hyundai.com',
    'Nissan': 'https://logo.clearbit.com/nissan-global.com',
    'Honda': 'https://logo.clearbit.com/honda.com',
    'Volkswagen': 'https://logo.clearbit.com/vw.com',
    'BMW': 'https://logo.clearbit.com/bmw.com',
    'Mercedes': 'https://logo.clearbit.com/mercedes-benz.com',
    'Audi': 'https://logo.clearbit.com/audi.com',
    'Kia': 'https://logo.clearbit.com/kia.com'
  }
  return map[brand] || 'https://logo.clearbit.com/carmax.com'
}

const carModels: CarModel[] = [
  { id: '1', name: 'Camry', image: brandLogo('Toyota'), brand: 'Toyota' },
  { id: '2', name: 'Commodore', image: brandLogo('Holden'), brand: 'Holden' },
  { id: '3', name: 'Focus', image: brandLogo('Ford'), brand: 'Ford' },
  { id: '4', name: 'CX-5', image: brandLogo('Mazda'), brand: 'Mazda' },
  { id: '5', name: 'i30', image: brandLogo('Hyundai'), brand: 'Hyundai' },
  { id: '6', name: 'X-Trail', image: brandLogo('Nissan'), brand: 'Nissan' },
  { id: '7', name: 'Civic', image: brandLogo('Honda'), brand: 'Honda' },
  { id: '8', name: 'Golf', image: brandLogo('Volkswagen'), brand: 'Volkswagen' },
  { id: '9', name: '3 Series', image: brandLogo('BMW'), brand: 'BMW' },
  { id: '10', name: 'C-Class', image: brandLogo('Mercedes'), brand: 'Mercedes' },
  { id: '11', name: 'A4', image: brandLogo('Audi'), brand: 'Audi' },
  { id: '12', name: 'Cerato', image: brandLogo('Kia'), brand: 'Kia' }
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
        const nextModels: CarModel[] = []

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
      <AnimatePresence mode="wait">
        {displayedModels.map((model, index) => (
          <motion.div
            key={`${model.id}-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-center"
          >
            <a href={`/sell-${model.brand.toLowerCase()}`} className="relative block cursor-pointer group">
              <Image
                src={model.image}
                alt={`${model.brand} ${model.name}`}
                width={150}
                height={150}
                className="object-contain max-w-[150px] max-h-[150px] rounded-md shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
