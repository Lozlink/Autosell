"use client"

import Image from "next/image"

const BRANDS = [
  "Toyota",
  "Ford",
  "Holden",
  "Mazda",
  "Honda",
  "Nissan",
  "BMW",
  "Mercedes",
  "Audi",
  "Volkswagen",
  "Hyundai",
  "Kia",
] as const

const brandLogo = (brand: string) => {
  const map: Record<string, string> = {
    Toyota: "https://logo.clearbit.com/toyota.com",
    Holden: "https://logo.clearbit.com/gm.com",
    Ford: "https://logo.clearbit.com/ford.com",
    Mazda: "https://logo.clearbit.com/mazda.com",
    Hyundai: "https://logo.clearbit.com/hyundai.com",
    Nissan: "https://logo.clearbit.com/nissan-global.com",
    Honda: "https://logo.clearbit.com/honda.com",
    Volkswagen: "https://logo.clearbit.com/vw.com",
    BMW: "https://logo.clearbit.com/bmw.com",
    Mercedes: "https://logo.clearbit.com/mercedes-benz.com",
    Audi: "https://logo.clearbit.com/audi.com",
    Kia: "https://logo.clearbit.com/kia.com",
  }
  return map[brand] || "https://logo.clearbit.com/carmax.com"
}

export default function BrandMarquee() {
  // Duplicate list to create seamless loop
  const items = [...BRANDS, ...BRANDS]

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent" />

      <div className="marquee flex items-center gap-10 will-change-transform">
        {items.map((brand, idx) => (
          <a
            key={`${brand}-${idx}`}
            href={`/sell-${brand.toLowerCase()}`}
            className="shrink-0 opacity-80 hover:opacity-100 transition-opacity"
            aria-label={`Go to ${brand} brand page`}
          >
            <Image
              src={brandLogo(brand)}
              alt={`${brand} logo`}
              width={140}
              height={60}
              className="object-contain max-h-[60px]"
              priority={idx < 4}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
