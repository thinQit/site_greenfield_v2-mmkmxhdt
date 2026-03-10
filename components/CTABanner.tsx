"use client";

import { Button } from '@/components/ui/button';

interface CTABannerProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTABanner({
  headline = 'Ready to enroll in your next learning adventure?',
  description = '',
  ctaLabel = 'Start Enrollment',
  ctaHref = '#',
  secondaryCtaLabel = '',
  secondaryCtaHref = '#',
}: Partial<CTABannerProps>) {
  return (
    <section className="bg-sky-600 py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{headline}</h2>
        {description && <p className="mt-4 text-lg text-white/85">{description}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="bg-lime-400 px-8 text-black hover:bg-lime-300" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button size="lg" variant="outline" className="border-white px-8 text-white hover:bg-white/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
