"use client";

import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

interface FooterProps {
  schoolName?: string
}

export default function Footer({ schoolName = 'Greenfield Academy' }: Partial<FooterProps>) {
  return (
    <footer className="bg-[#1f2b60] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">{schoolName}</h3>
            <p className="mt-3 text-sm text-white/80">A welcoming K-12 learning community focused on curiosity, character, and excellence.</p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Contact</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 1450 Evergreen Lane, Brookside, CA</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 210-4455</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> admissions@greenfieldacademy.edu</p>
          </div>
          <div className="text-sm">
            <p className="mb-2 font-semibold">Office Hours</p>
            <p>Mon–Fri: 7:30 AM – 4:30 PM</p>
            <p>Sat: Campus tours by appointment</p>
          </div>
          <div>
            <p className="mb-2 font-semibold">Follow Us</p>
            <div className="flex gap-3">
              <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        <Separator className="my-6 bg-white/20" />
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-white/80">
          <p>© {new Date().getFullYear()} {schoolName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
