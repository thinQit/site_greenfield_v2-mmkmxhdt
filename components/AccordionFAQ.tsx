'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Item {
  question: string
  answer: string
}

interface AccordionFAQProps {
  items?: Item[]
}

export default function AccordionFAQ({
  items = [
    { question: 'What is your class size?', answer: 'Average class size is 16 students for strong individualized support.' },
    { question: 'Do you offer financial aid?', answer: 'Yes, need-based aid is available for qualifying families.' },
  ],
}: Partial<AccordionFAQProps>) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.question} className="rounded-xl border bg-white">
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold">
            {item.question}
            <ChevronDown className={cn('h-4 w-4 transition-transform', open === i && 'rotate-180')} />
          </button>
          {open === i && <p className="px-5 pb-4 text-sm text-muted-foreground">{item.answer}</p>}
        </div>
      ))}
    </div>
  )
}
