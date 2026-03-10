'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  logoText?: string
  academicsItems?: NavItem[]
  admissionsItems?: NavItem[]
  mainItems?: NavItem[]
  className?: string
}

export default function Navbar({
  logoText = 'Greenfield Academy',
  academicsItems = [
    { label: 'Lower School', href: '/academics/lower-school' },
    { label: 'Middle School', href: '/academics/middle-school' },
    { label: 'Upper School', href: '/academics/upper-school' },
  ],
  admissionsItems = [
    { label: 'How to Apply', href: '/admissions/how-to-apply' },
    { label: 'Tuition & Aid', href: '/admissions/tuition-aid' },
    { label: 'Visit Campus', href: '/admissions/visit' },
  ],
  mainItems = [
    { label: 'Programs', href: '/programs' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'Events', href: '/events' },
    { label: 'Portal', href: '/portal' },
  ],
  className = '',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState<'academics' | 'admissions' | ''>('')

  return (
    <header className={cn('sticky top-0 z-40 border-b bg-white/95 backdrop-blur', className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-extrabold text-[#3A56C5]">{logoText}</Link>
        <nav className="hidden items-center gap-6 md:flex">
          <div className="relative">
            <button onClick={() => setOpen(open === 'academics' ? '' : 'academics')} className="flex items-center gap-1 font-medium">
              Academics <ChevronDown className="h-4 w-4" />
            </button>
            {open === 'academics' && (
              <div className="absolute mt-2 w-56 rounded-xl border bg-white p-2 shadow-lg">
                {academicsItems.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 hover:bg-muted">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={() => setOpen(open === 'admissions' ? '' : 'admissions')} className="flex items-center gap-1 font-medium">
              Admissions <ChevronDown className="h-4 w-4" />
            </button>
            {open === 'admissions' && (
              <div className="absolute mt-2 w-56 rounded-xl border bg-white p-2 shadow-lg">
                {admissionsItems.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 hover:bg-muted">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {mainItems.map((item) => (
            <Link key={item.href} href={item.href} className="font-medium hover:text-[#3A56C5]">{item.label}</Link>
          ))}
          <Button className="bg-[#FFC857] text-black hover:bg-[#f5bd42]">Schedule a Tour</Button>
        </nav>
        <button className="md:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
