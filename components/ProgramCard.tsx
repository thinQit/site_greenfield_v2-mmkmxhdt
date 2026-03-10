"use client";

import Link from 'next/link'
import { BookOpen, FlaskConical, Music, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface ProgramCardProps {
  title?: string
  description?: string
  href?: string
  icon?: string
}

const icons: Record<string, any> = { BookOpen, FlaskConical, Music, Sparkles }

export default function ProgramCard({
  title = 'STEM Innovation',
  description = 'Hands-on labs, robotics, coding, and real-world design challenges.',
  href = '/programs/stem',
  icon = 'FlaskConical',
}: Partial<ProgramCardProps>) {
  const Icon = icons[icon] || Sparkles
  return (
    <Card className="rounded-xl border p-6">
      <div className="mb-4 inline-flex rounded-full bg-[#E8E0F0] p-3">
        <Icon className="h-6 w-6 text-[#3A56C5]" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <Link href={href} className="mt-4 inline-block font-semibold text-[#3A56C5] hover:underline">Learn more</Link>
    </Card>
  )
}
