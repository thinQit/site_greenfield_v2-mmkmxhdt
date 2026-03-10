"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className="bg-[#3A56C5] py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-extrabold">Ready to join Greenfield Academy?</h2>
          <p className="mt-2 text-white/85">Start your admissions journey and meet our welcoming school community.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admissions"><Button className="bg-[#FFC857] text-black hover:bg-[#f5bd42]">Apply Now</Button></Link>
          <Link href="/visit"><Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#3A56C5]">Schedule Tour</Button></Link>
        </div>
      </div>
    </section>
  )
}
