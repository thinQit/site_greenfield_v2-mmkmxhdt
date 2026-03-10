"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = 'What learners and families say',
  subheadline = '',
  testimonials = [],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-sky-500 to-lime-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            {headline}
          </h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
      </div>
    </section>
  );
}
