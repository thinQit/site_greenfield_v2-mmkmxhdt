export const dynamic = 'force-dynamic';

import AnnouncementBar from "@/components/AnnouncementBar"
import HeroWaves from "@/components/HeroWaves"
import StatsCounter from "@/components/StatsCounter"
import FeaturesGrid from "@/components/FeaturesGrid"
import TeamGrid from "@/components/TeamGrid"
import FAQAccordion from "@/components/FAQAccordion"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import GalleryMasonry from "@/components/GalleryMasonry"
import CTABanner from "@/components/CTABanner"

export default function HomePage() {
  return (
    <main>
      <AnnouncementBar />
      <HeroWaves
        title="A school where every student is known, challenged, and supported."
        subtitle="Greenfield Academy is a welcoming K–12 community in Brookside, MA—strong academics, caring teachers, and vibrant arts and athletics."
        ctaLabel="Schedule a Tour"
        ctaHref="/admissions#visit"
        secondaryCtaLabel="Explore Programs"
        secondaryCtaHref="/academics"
      />
      <StatsCounter
        stats={[
          { value: "98%", label: "College acceptance rate" },
          { value: "22", label: "AP / Honors courses" },
          { value: "40+", label: "Clubs & activities" },
          { value: "12", label: "Arts performances per year" },
        ]}
      />
      <FeaturesGrid
        badge="Academics"
        headline="Academic programs built for curiosity and confidence."
        subheadline="From foundational literacy to advanced STEM and humanities—students grow with clear pathways and personal support."
        features={[
          { icon: "BookOpen", title: "Lower School (K–5)", description: "Strong foundations in reading, writing, math, and social-emotional learning." },
          { icon: "GraduationCap", title: "Middle School (6–8)", description: "A supportive bridge to independence with advisory and project-based learning." },
          { icon: "Microscope", title: "Upper School (9–12)", description: "College-prep academics with honors/AP options and capstone projects." },
          { icon: "Palette", title: "Arts & Athletics", description: "A thriving program in visual arts, theater, music, and competitive athletics." },
        ]}
      />
      <TeamGrid
        headline="Teachers who know your child—and teach with heart."
        subheadline="Our faculty blend expertise with warmth, creating classrooms where students feel safe to try, fail, and grow."
        members={[
          { name: "Dr. Maya Chen", title: "Head of School", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg", bio: "Inclusive leader focused on student voice and excellent teaching." },
          { name: "James O’Neill", title: "Upper School Mathematics", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg", bio: "Teaches Algebra through AP Calculus with weekly math labs." },
          { name: "Sofia Alvarez", title: "Middle School Humanities", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg", bio: "Project-based humanities specialist and Debate Club advisor." },
          { name: "Amina Hassan", title: "Lower School Literacy Coach", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg", bio: "Supports early readers with evidence-based instruction." },
        ]}
      />
      <FAQAccordion
        headline="A clear curriculum—flexible enough for every learner."
        subheadline="Explore how we teach, assess, and support students across grade levels."
        items={[
          { question: "How do you support different learning needs?", answer: "We use small-group instruction, differentiated assignments, and Learning Support collaboration." },
          { question: "What does assessment look like?", answer: "A balanced approach of projects, quizzes, presentations, and writing with regular family updates." },
          { question: "Do you offer advanced coursework?", answer: "Yes. Upper School offers Honors and AP options based on readiness and recommendation." },
          { question: "How is character education integrated?", answer: "Through advisory, community meetings, service learning, and restorative practices." },
        ]}
      />
      <TestimonialsAnimated
        title="Families feel the difference."
        subtitle="What parents and students say about Greenfield Academy."
        testimonials={[
          { quote: "Our daughter went from quiet to confident. Her teachers know her strengths and push her in the best way.", name: "Priya S.", designation: "Parent of 6th grader", src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg" },
          { quote: "The classes are challenging, but you’re never on your own. Advisory helped me learn how to manage my time.", name: "Ethan R.", designation: "10th grade student", src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg" },
          { quote: "We chose Greenfield for the warmth—and stayed for the academics.", name: "Michael & Dana K.", designation: "Parents of 3rd and 8th graders", src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg" },
        ]}
      />
      <GalleryMasonry
        headline="See life on campus."
        subheadline="Classrooms, labs, studios, and the moments in between."
        images={[
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577425/site-images/education/18506742.jpg", alt: "Students in science lab", caption: "Hands-on lab science" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577438/site-images/education/12125962.jpg", alt: "Reading in library", caption: "Joyful literacy" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577445/site-images/education/12716111.jpg", alt: "Art studio creativity", caption: "Creative expression" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577446/site-images/education/10987722.jpg", alt: "Soccer on field", caption: "Athletics & teamwork" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577433/site-images/education/10637666.jpg", alt: "Theater rehearsal", caption: "Performing arts" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577425/site-images/education/18395403.jpg", alt: "Community meeting", caption: "Belonging & leadership" },
        ]}
      />
      <CTABanner
        headline="Ready to see Greenfield in person?"
        description="Tours run Tuesdays and Thursdays at 9:30 AM. We also offer monthly Saturday open houses."
        ctaLabel="Schedule a Tour"
        ctaHref="/admissions#visit"
        secondaryCtaLabel="Request Information"
        secondaryCtaHref="/admissions#request-info"
      />
    </main>
  )
}
