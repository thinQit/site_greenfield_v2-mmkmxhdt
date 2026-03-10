"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface HeroProps {
  title?: string
  subtitle?: string
  imageSrc?: string
}

export default function Hero({
  title = 'Inspiring curious minds at Greenfield Academy',
  subtitle = 'A modern K-12 education with personalized support, strong academics, and vibrant student life.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771576896/site-images/corporate/12911251.jpg',
}: Partial<HeroProps>) {
  return (
    <section className="bg-[#E8E0F0]/40 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center">
        <div>
          <Badge className="mb-4 bg-[#FFC857] text-black">Now Enrolling 2026–2027</Badge>
          <h1 className="text-4xl font-extrabold leading-tight text-[#1f2b60] md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/admissions"><Button className="bg-[#3A56C5] hover:bg-[#3049ad]">Apply Today</Button></Link>
            <Link href="/visit"><Button variant="outline">Schedule a Tour</Button></Link>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div className="rounded-lg bg-white p-3"><p className="font-bold text-[#3A56C5]">12:1</p><p>Student–Teacher Ratio</p></div>
            <div className="rounded-lg bg-white p-3"><p className="font-bold text-[#3A56C5]">98%</p><p>College Acceptance</p></div>
            <div className="rounded-lg bg-white p-3"><p className="font-bold text-[#3A56C5]">35+</p><p>Clubs & Teams</p></div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border bg-white shadow">
          <Image src={imageSrc} alt="Greenfield Academy students" width={1600} height={900} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
