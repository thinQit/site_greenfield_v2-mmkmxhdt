'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Group {
  title: string
  links: { label: string; href: string }[]
}

interface MobileNavDrawerProps {
  groups?: Group[]
  className?: string
}

export default function MobileNavDrawer({
  groups = [
    { title: 'Academics', links: [{ label: 'Lower School', href: '#' }, { label: 'Middle School', href: '#' }] },
    { title: 'Admissions', links: [{ label: 'Apply', href: '#' }, { label: 'Tuition & Aid', href: '#' }] },
  ],
  className = '',
}: Partial<MobileNavDrawerProps>) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  return (
    <div className={cn('md:hidden', className)}>
      <button onClick={() => setOpen(true)} aria-label="Open navigation">
        <Menu className="h-6 w-6" />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="ml-auto h-full w-80 bg-white p-5 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-bold text-[#3A56C5]">Greenfield Academy</p>
              <button onClick={() => setOpen(false)} aria-label="Close navigation"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-3">
              {groups.map((group) => (
                <div key={group.title} className="rounded-lg border">
                  <button
                    onClick={() => setActive(active === group.title ? '' : group.title)}
                    className="flex w-full items-center justify-between px-4 py-3 font-medium"
                  >
                    {group.title}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {active === group.title && (
                    <div className="space-y-2 px-4 pb-3">
                      {group.links.map((link) => (
                        <Link key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-foreground">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              <Button className="w-full bg-[#3A56C5] hover:bg-[#324bb1]">Schedule a Tour</Button>
              <Button variant="outline" className="w-full">Apply Today</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
