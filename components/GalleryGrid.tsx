'use client'

import { useState } from 'react'
import Image from 'next/image'
import LightboxModal from './LightboxModal'
import { Button } from '@/components/ui/button'

const images = [
  { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577425/site-images/education/18506742.jpg', category: 'Campus', caption: 'Main campus courtyard' },
  { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577438/site-images/education/12125962.jpg', category: 'Classroom', caption: 'Interactive classroom session' },
]

export default function GalleryGrid() {
  const [category, setCategory] = useState('All')
  const [active, setActive] = useState<number | null>(null)
  const filtered = images.filter((i) => category === 'All' || i.category === category)

  return (
    <section className="bg-muted/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex gap-2">
          {['All', 'Campus', 'Classroom'].map((c) => (
            <Button key={c} variant={category === c ? 'default' : 'outline'} onClick={() => setCategory(c)}>{c}</Button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((img, idx) => (
            <button key={img.src} onClick={() => setActive(idx)} className="overflow-hidden rounded-xl">
              <Image src={img.src} alt={img.caption} width={1200} height={800} unoptimized className="h-64 w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
      <LightboxModal open={active !== null} image={active !== null ? filtered[active] : undefined} onClose={() => setActive(null)} />
    </section>
  )
}
