'use client'

import { useMemo, useState } from 'react'
import FacultyProfileCard from './FacultyProfileCard'
import { Select } from '@/components/ui/select'

const faculty = [
  { name: 'Dr. Maya Thompson', department: 'Science' },
  { name: 'Luis Ramirez', department: 'Mathematics' },
  { name: 'Anika Bose', department: 'Humanities' },
]

export default function FacultyDirectory() {
  const [department, setDepartment] = useState('All')
  const filtered = useMemo(() => faculty.filter((f) => department === 'All' || f.department === department), [department])

  return (
    <section className="bg-muted/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-[#1f2b60]">Meet Our Faculty</h2>
          <Select value={department} onValueChange={setDepartment}>
            <option value="All">All Departments</option>
            <option value="Science">Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Humanities">Humanities</option>
          </Select>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((f) => (
            <FacultyProfileCard key={f.name} name={f.name} department={f.department} />
          ))}
        </div>
      </div>
    </section>
  )
}
