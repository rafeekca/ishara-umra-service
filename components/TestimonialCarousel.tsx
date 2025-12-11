'use client'
import { useState, useEffect } from 'react'

const items = [
  {
    name: 'Abdul Rahman',
    quote:
      'Ameer guided us beautifully. Everything was organized and peaceful.',
    origin: 'Riyadh'
  },
  {
    name: 'Fatima K.',
    quote:
      'Kerala food and accommodation near the Harams made the trip so comfortable.',
    origin: 'Jeddah'
  },
  {
    name: 'Nisar',
    quote:
      'Multilingual support helped our parents a lot. Highly recommend ISHARA.',
    origin: 'Dammam'
  }
]

export default function TestimonialCarousel() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">Testimonials</h2>
      <div className="mt-6 rounded-lg border p-6">
        <blockquote className="text-lg">“{items[idx].quote}”</blockquote>
        <p className="mt-3 text-sm text-gray-700">
          — {items[idx].name}, {items[idx].origin}
        </p>
        <div className="mt-4 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 w-2 rounded-full ${i === idx ? 'bg-brand-600' : 'bg-gray-300'}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}