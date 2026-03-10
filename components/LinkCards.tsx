"use client";

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { ExternalLink, FileText } from 'lucide-react'

export default function LinkCards() {
  const links = [
    { title: 'Parent Portal', href: '#', type: 'external' },
    { title: 'Student Portal', href: '#', type: 'external' },
    { title: 'Academic Calendar PDF', href: '#', type: 'pdf' },
  ]
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#1f2b60]">Quick Links</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <Link key={link.title} href={link.href}>
              <Card className="rounded-xl p-5 hover:shadow-md">
                <div className="mb-3">{link.type === 'pdf' ? <FileText className="h-5 w-5 text-[#3A56C5]" /> : <ExternalLink className="h-5 w-5 text-[#3A56C5]" />}</div>
                <p className="font-semibold">{link.title}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
