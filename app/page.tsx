//import Hero from '@/components/Hero'
//import ServicesGrid from '@/components/ServicesGrid'
//import PackagesCards from '@/components/PackagesCards'
//import TestimonialCarousel from '@/components/TestimonialCarousel'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import PackagesCards from '../components/PackagesCards'
import TestimonialCarousel from '../components/TestimonialCarousel'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <PackagesCards />
      <TestimonialCarousel />
      <section className="container pb-16">
        <a href="/booking" className="inline-block rounded bg-brand-600 px-5 py-3 text-white hover:bg-brand-700 focus:outline-none focus-visible:ring">
          Ready to go? Book now
        </a>
      </section>
    </>
  )
}