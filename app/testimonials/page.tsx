import TestimonialCarousel from '@/components/TestimonialCarousel'

export default function TestimonialsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Testimonials</h1>
      <p className="mt-3 text-gray-700">
        Pilgrims share their experiences with ISHARA’s guidance and hospitality.
      </p>
      <TestimonialCarousel />
    </div>
  )
}