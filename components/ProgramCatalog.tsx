"use client";

import ProgramCard from './ProgramCard'
import SectionHeader from './SectionHeader'

export default function ProgramCatalog() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader title="Academic Programs" subtitle="From foundational learning to college preparation, every division supports growth." />
        <div className="grid gap-6 md:grid-cols-3">
          <ProgramCard title="Lower School" icon="BookOpen" href="#" description="Literacy, numeracy, social-emotional learning, and discovery-based classrooms." />
          <ProgramCard title="Middle School" icon="Sparkles" href="#" description="Interdisciplinary projects, leadership opportunities, and advisory support." />
          <ProgramCard title="Upper School" icon="FlaskConical" href="#" description="AP/Honors pathways, capstone research, and college counseling." />
        </div>
      </div>
    </section>
  )
}
