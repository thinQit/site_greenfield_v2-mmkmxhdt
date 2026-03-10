'use client'

import { useState } from 'react'
import { CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const events = [
  { title: 'Spring Open House', date: 'Apr 12, 2026', category: 'Admissions' },
  { title: 'STEM Expo', date: 'May 03, 2026', category: 'Academics' },
]

export default function EventsCalendarList() {
  const [category, setCategory] = useState('All')
  const filtered = events.filter((e) => category === 'All' || e.category === category)

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-5 flex flex-wrap gap-2">
          {['All', 'Admissions', 'Academics'].map((c) => (
            <Button key={c} variant={category === c ? 'default' : 'outline'} onClick={() => setCategory(c)}>{c}</Button>
          ))}
          <Button variant="outline" className="ml-auto">Download iCal</Button>
        </div>
        <div className="space-y-3">
          {filtered.map((event) => (
            <Card key={event.title} className="flex items-center justify-between rounded-xl p-4">
              <div>
                <p className="font-semibold">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.category}</p>
              </div>
              <p className="flex items-center gap-2 text-sm"><CalendarDays className="h-4 w-4" /> {event.date}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
