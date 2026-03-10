"use client";

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ContactCards() {
  const depts = [
    { name: 'Admissions Office', phone: '(555) 210-4455', email: 'admissions@greenfieldacademy.edu' },
    { name: 'Student Services', phone: '(555) 210-4488', email: 'support@greenfieldacademy.edu' },
  ]
  return (
    <section className="bg-muted/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#1f2b60]">Contact Departments</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {depts.map((d) => (
            <Card key={d.name} className="rounded-xl p-6">
              <h3 className="font-bold">{d.name}</h3>
              <p className="mt-2 text-sm">{d.phone}</p>
              <p className="text-sm text-muted-foreground">{d.email}</p>
              <Button variant="outline" className="mt-4">Email Department</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
