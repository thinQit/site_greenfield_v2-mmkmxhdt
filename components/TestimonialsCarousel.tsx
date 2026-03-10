'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const items = [
  { quote: 'Greenfield helped my daughter find confidence and joy in learning.', name: 'Parent of Grade 5 Student' },
  { quote: 'Teachers here genuinely know every student and support their goals.', name: 'Parent of Grade 10 Student' },
]

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((index - 1 + items.length) % items.length)
  const next = () => setIndex((index + 1) % items.length)

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <Card className="rounded-xl p-8 text-center">
          <p className="text-xl font-medium">“{items[index].quote}”</p>
          <p className="mt-4 text-sm text-muted-foreground">{items[index].name}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial"><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
