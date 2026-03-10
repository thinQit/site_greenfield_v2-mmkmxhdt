"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/backgrounds/wavy-background";
import { TextGenerateEffect } from "@/components/ui/text/text-generate-effect";
import { Button } from "@/components/ui/button";

interface HeroWavesProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  waveColors?: string[];
}

export default function HeroWaves({
  title = "Inspiring learning for every stage of growth",
  subtitle = "Explore welcoming courses, caring instructors, and practical skills that help students thrive in school and beyond.",
  ctaLabel = "Browse Courses",
  ctaHref = "#courses",
  secondaryCtaLabel = "Meet Instructors",
  secondaryCtaHref = "#instructors",
  waveColors,
}: HeroWavesProps) {
  return (
    <WavyBackground
      colors={waveColors || ["#0ea5e9", "#38bdf8", "#7dd3fc", "#84cc16", "#a3e635"]}
      backgroundFill="#1e293b"
      waveOpacity={0.45}
      speed="slow"
      containerClassName="relative min-h-screen"
    >
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <TextGenerateEffect words={title} className="text-4xl font-bold text-white md:text-6xl lg:text-7xl" />
        {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-200 md:text-xl">{subtitle}</p>}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-lime-400 px-8 py-6 text-lg text-black hover:bg-lime-300" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="border-white/40 px-8 py-6 text-lg text-white hover:bg-white/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </WavyBackground>
  );
}
