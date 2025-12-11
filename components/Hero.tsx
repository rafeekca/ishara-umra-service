import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-10 md:py-20">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Scholar-led Umrah & Madinah Historical Tours
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Multilingual guidance (Urdu, Kannada, Malayalam), Kerala food, and comfortable accommodation near both Harams.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="rounded bg-brand-600 px-4 py-2 text-white hover:bg-brand-700 focus:outline-none focus-visible:ring">
              Book a package
            </Link>
            <Link href="/packages" className="rounded border border-brand-600 px-4 py-2 text-brand-700 hover:bg-brand-50 focus:outline-none focus-visible:ring">
              View packages
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src="/placeholder-hero.jpg"
            alt="Pilgrims around the Kaaba"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}