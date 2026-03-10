"use client";

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function TuitionPricingCards() {
  const tiers = [
    { level: 'Lower School (K-5)', price: '$18,500/year' },
    { level: 'Middle School (6-8)', price: '$21,200/year' },
    { level: 'Upper School (9-12)', price: '$24,900/year' },
  ]
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#1f2b60]">Tuition & Financial Aid</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.level} className="rounded-xl p-6">
              <Badge className="mb-3 bg-[#E8E0F0] text-[#3A56C5]">{tier.level}</Badge>
              <p className="text-2xl font-extrabold">{tier.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">Includes technology access, advisory support, and co-curricular programming.</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
