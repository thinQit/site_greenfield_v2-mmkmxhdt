"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

interface FacultyProfileCardProps {
  name?: string
  role?: string
  department?: string
  imageSrc?: string
  tags?: string[]
  emailHref?: string
}

export default function FacultyProfileCard({
  name = 'Dr. Maya Thompson',
  role = 'Science Department Chair',
  department = 'Science',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg',
  tags = ['STEM', 'Robotics', 'Mentorship'],
  emailHref = 'mailto:mthompson@greenfieldacademy.edu',
}: Partial<FacultyProfileCardProps>) {
  return (
    <Card className="overflow-hidden rounded-xl border">
      <Image src={imageSrc} alt={name} width={1200} height={800} unoptimized className="h-56 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="mt-1 text-sm font-medium text-[#3A56C5]">{department}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        <Link href={emailHref} className="mt-4 inline-block text-sm font-semibold text-[#3A56C5] hover:underline">Contact Faculty</Link>
      </div>
    </Card>
  )
}
