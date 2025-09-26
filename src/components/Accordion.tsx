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
          <div key={idx} className="border-l-2 border-red-800/40">
            <button
              id={buttonId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => toggle(idx)}
              className="w-full text-left py-4 md:py-5 px-0 md:px-4 flex items-center justify-between gap-4 group"
            >
              <span className="text-lg font-semibold text-zinc-100 group-hover:text-red-400 transition-colors">{item.title}</span>
              <svg
                className={`w-5 h-5 flex-shrink-0 text-zinc-400 transition-transform ${isOpen ? "rotate-180 text-red-400" : "group-hover:text-red-300"}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`pl-0 md:pl-4 pr-0 md:pr-4 overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}
            >
              <div className="pb-4 text-zinc-400">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
