'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X, Clock3 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnnouncementBarProps {
  message?: string
  deadline?: string
  linkText?: string
  linkHref?: string
  storageKey?: string
  className?: string
}

export default function AnnouncementBar({
  message = 'Admissions for Fall 2026 are now open.',
  deadline = 'Priority deadline: March 31',
  linkText = 'Apply Now',
  linkHref = '/admissions',
  storageKey = 'greenfield-announcement-dismissed',
  className = '',
}: Partial<AnnouncementBarProps>) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const dismissed = sessionStorage.getItem(storageKey)
    if (dismissed === 'true') setVisible(false)
  }, [storageKey])

  const dismiss = () => {
    sessionStorage.setItem(storageKey, 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={cn('bg-[#3A56C5] text-white', className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-sm">
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-[#FFC857]" />
          <p>
            <span className="font-semibold">{message}</span>{' '}
            <span className="text-white/80">• {deadline}</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href={linkHref} className="font-semibold text-[#FFC857] hover:underline">
            {linkText}
          </Link>
          <button onClick={dismiss} aria-label="Dismiss announcement" className="rounded-md p-1 hover:bg-white/10">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
