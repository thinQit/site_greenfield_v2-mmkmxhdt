"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface SectionHeaderProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}

export default function SectionHeader({
  title = 'Section Title',
  subtitle = 'Helpful section description goes here.',
  ctaText = '',
  ctaHref = '#',
}: Partial<SectionHeaderProps>) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#1f2b60] md:text-4xl">{title}</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>
      </div>
      {ctaText ? (
        <Link href={ctaHref}>
          <Button variant="outline">{ctaText}</Button>
        </Link>
      ) : null}
    </div>
  )
}
