'use client'

import { useEffect, useRef } from 'react'

interface MapComponentProps {
  center?: { lat: number; lng: number }
  zoom?: number
  className?: string
}

export default function MapComponent({ 
  center = { lat: -25.2744, lng: 133.7751 }, // Australia center
  zoom = 4,
  className = "w-full h-96"
}: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    // Create a simple map placeholder with Australia outline
    const mapElement = mapRef.current
    mapElement.innerHTML = `
      <div class="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,${btoa(`
          <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
            <g transform="translate(400,300)">
              <circle cx="0" cy="0" r="200" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.3"/>
              <circle cx="0" cy="0" r="100" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.5"/>
              <circle cx="0" cy="0" r="50" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.7"/>
              <circle cx="0" cy="0" r="10" fill="#3b82f6"/>
              <text x="0" y="-30" text-anchor="middle" class="text-lg font-bold text-blue-800">Australia</text>
              <text x="0" y="10" text-anchor="middle" class="text-sm text-blue-600">We Service All Areas</text>
            </g>
          </svg>
        `)}')] bg-center bg-no-repeat bg-contain"></div>
        <div class="text-center z-10">
          <h3 class="text-xl font-bold text-blue-800 mb-2">Australia-Wide Coverage</h3>
          <p class="text-blue-600">We come to you anywhere in Australia</p>
        </div>
      </div>
    `
  }, [center, zoom])

  return (
    <div className={className}>
      <div ref={mapRef} className="w-full h-full rounded-lg border border-gray-200 shadow-lg" />
    </div>
  )
}
