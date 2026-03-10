'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface LightboxModalProps {
  open?: boolean
  image?: { src: string; caption: string; category?: string }
  onClose?: () => void
}

export default function LightboxModal({
  open = false,
  image = { src: '', caption: '' },
  onClose = () => {},
}: Partial<LightboxModalProps>) {
  useEffect(() => {
    const handle = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [onClose])

  if (!open || !image?.src) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <button onClick={onClose} className="absolute right-4 top-4 text-white"><X className="h-6 w-6" /></button>
      <div className="max-w-4xl">
        <Image src={image.src} alt={image.caption} width={1200} height={800} unoptimized className="rounded-lg object-cover" />
        <p className="mt-2 text-center text-sm text-white/80">{image.caption}</p>
      </div>
    </div>
  )
}
