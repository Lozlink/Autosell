"use client"

import { useId, useState, type ReactNode } from "react"

export type AccordionItem = {
  title: string
  content: ReactNode
}

export default function Accordion({ items, allowMultiple = false, className = "" }: {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])
  const baseId = useId()

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const isOpen = prev.includes(index)
      if (allowMultiple) {
        return isOpen ? prev.filter((i) => i !== index) : [...prev, index]
      }
      return isOpen ? [] : [index]
    })
  }

  return (
    <div className={className}>
      {items.map((item, idx) => {
        const panelId = `${baseId}-panel-${idx}`
        const buttonId = `${baseId}-button-${idx}`
        const isOpen = openIndexes.includes(idx)
        return (
          <div key={idx} className="border-l-2" style={{ borderColor: '#FFC325' }}>
            <button
              id={buttonId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => toggle(idx)}
              className="w-full text-left py-4 md:py-5 px-3 md:px-4 flex items-center justify-between gap-4 group cursor-pointer"
            >
              <span className="text-lg font-semibold text-gray-500 group-hover:text-yellow-600 transition-colors">{item.title}</span>
              <svg
                className={`w-5 h-5 flex-shrink-0 text-gray-600 transition-transform ${isOpen ? "rotate-180 text-yellow-600" : "group-hover:text-yellow-500"}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`pl-3 md:pl-4 pr-3 md:pr-4 overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}
            >
              <div className="pb-4 pl-2 text-gray-600">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
