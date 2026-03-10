'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Step {
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    title: 'Get Your Quote',
    description: 'Fill out our simple form and receive an instant offer within 30 minutes.',
  },
  {
    title: 'Book Inspection',
    description: 'Schedule a free on-site inspection at your convenience — we come to you.',
  },
  {
    title: 'Get Paid Instantly',
    description: 'Same-day OSKO payment directly to your bank account. That simple.',
  },
]

const GOLD = '#FFC325'

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-80px 0px' })

  return (
    <div ref={containerRef} className="max-w-lg mx-auto px-4 sm:px-0">
      {/* Steps */}
      <div className="relative flex flex-col gap-0">
        {STEPS.map((step, i) => {
          const isLast = i === STEPS.length - 1

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -14 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
              transition={{
                duration: 0.42,
                delay: i * 0.18,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative flex items-start gap-4"
            >
              {/* Left column: step number circle + connector line */}
              <div className="relative flex flex-col items-center flex-shrink-0" style={{ width: '28px' }}>
                {/* Numbered circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.28,
                    delay: i * 0.18 + 0.12,
                    type: 'spring',
                    stiffness: 320,
                    damping: 18,
                  }}
                  className="relative z-10 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: '26px',
                    height: '26px',
                    backgroundColor: GOLD,
                    boxShadow: `0 0 0 4px rgba(255, 195, 37, 0.15)`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-all-round-gothic), AllRoundGothic-Medium, sans-serif',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      color: '#000',
                      lineHeight: 1,
                    }}
                  >
                    {i + 1}
                  </span>
                </motion.div>

                {/* Connecting line — hidden for last step */}
                {!isLast && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.18 + 0.3,
                      ease: 'easeOut',
                    }}
                    style={{
                      originY: 0,
                      width: '1.5px',
                      flexGrow: 1,
                      minHeight: '28px',
                      backgroundColor: 'rgba(255, 195, 37, 0.35)',
                    }}
                  />
                )}
              </div>

              {/* Right column: text */}
              <div className={`pt-0.5 pb-7 ${isLast ? 'pb-0' : ''}`}>
                <p
                  className="font-bold text-gray-900 leading-snug mb-0.5"
                  style={{
                    fontFamily: 'var(--font-all-round-gothic), AllRoundGothic-Medium, sans-serif',
                    fontSize: '1rem',
                  }}
                >
                  {step.title}
                </p>
                <p
                  className="text-gray-500 leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                    fontSize: '0.875rem',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
