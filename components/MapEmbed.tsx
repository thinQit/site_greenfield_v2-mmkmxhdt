"use client";

export default function MapEmbed() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-3xl font-bold text-[#1f2b60]">Visit Our Campus</h2>
        <p className="mb-6 text-muted-foreground">1450 Evergreen Lane, Brookside, CA • Parking available at North Lot • Transit stop on Route 14.</p>
        <div className="overflow-hidden rounded-xl border">
          <iframe
            title="Greenfield Academy map"
            src="https://maps.google.com/maps?q=San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
