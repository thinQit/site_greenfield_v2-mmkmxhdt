"use client";

import { Card } from '@/components/ui/card'

export default function Steps() {
  const steps = ['Submit Inquiry Form', 'Attend Campus Tour', 'Complete Application', 'Family Interview', 'Enrollment Decision']
  return (
    <section className="bg-[#E8E0F0]/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#1f2b60]">Admissions Steps</h2>
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, i) => (
            <Card key={step} className="rounded-xl p-4">
              <p className="text-sm font-bold text-[#3A56C5]">Step {i + 1}</p>
              <p className="mt-1 text-sm">{step}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
