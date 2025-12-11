'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import classNames from 'classnames'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="ISHARA Home">
          <Image src="/logo.png" alt="ISHARA logo" width={32} height={32} />
          <span className="font-semibold">ISHARA Umra Service</span>
        </Link>

        <button
          className="md:hidden rounded p-2 focus:outline-none focus-visible:ring"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-gray-900" />
            <span className="block h-0.5 w-5 bg-gray-900" />
            <span className="block h-0.5 w-5 bg-gray-900" />
          </div>
        </button>

        <nav
          className={classNames(
            'md:flex md:items-center md:gap-6',
            open ? 'block' : 'hidden md:block'
          )}
          aria-label="Primary navigation"
        >
          <Link href="/services" className="block py-2 md:py-0">Services</Link>
          <Link href="/packages" className="block py-2 md:py-0">Packages</Link>
          <Link href="/booking" className="block py-2 md:py-0">Booking</Link>
          <Link href="/testimonials" className="block py-2 md:py-0">Testimonials</Link>
          <Link href="/contact" className="block py-2 md:py-0">Contact</Link>
          <Link href="/booking" className="ml-0 md:ml-4 inline-block rounded bg-brand-600 px-3 py-1.5 text-white hover:bg-brand-700 focus:outline-none focus-visible:ring">
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  )
}