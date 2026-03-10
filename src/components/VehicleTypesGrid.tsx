'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const VEHICLE_TYPES = [
  { type: 'Cars',        href: '/types/cars',        img: '/images/types/bmw.jpg',        desc: 'All makes and models, any condition' },
  { type: 'SUVs',        href: '/types/suvs',        img: '/images/types/SUV.jpg',        desc: '4WDs, crossovers, and family vehicles' },
  { type: 'Utes',        href: '/types/utes',        img: '/images/types/ute.jpg',        desc: 'Work utes, dual cabs, and pickups' },
  { type: 'Trucks',      href: '/types/trucks',      img: '/images/types/truck.jpg',      desc: 'Commercial trucks and heavy vehicles' },
  { type: 'Vans',        href: '/types/vans',        img: '/images/types/van.jpg',        desc: 'Passenger vans and cargo vans' },
  { type: 'Motorcycles', href: '/types/motorcycles', img: '/images/types/motorcycle.jpg', desc: 'Bikes, scooters, and ATVs' },
] as const

export default function VehicleTypesGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {VEHICLE_TYPES.map((t, i) => (
        <motion.a
          key={t.type}
          href={t.href}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{
            duration: 0.4,
            delay: i * 0.07,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all hover:scale-[1.01]"
        >
          <div className="relative h-36 md:h-48">
            <Image
              src={t.img}
              alt={t.type}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
              <h3 className="text-base md:text-lg font-bold text-white">{t.type}</h3>
              <p className="text-xs md:text-sm text-gray-100 mt-0.5">{t.desc}</p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
