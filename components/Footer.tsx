import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">ISHARA Umra Service</h3>
            <p className="mt-2 text-sm text-gray-700">
              Riyadh Batha • Scholar-led Umrah and Madeena Ziyara • Kerala food • Accommodation near both Harams.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Quick links</h4>
            <ul className="mt-2 space-y-2">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/packages">Packages</Link></li>
              <li><Link href="/booking">Booking</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-2 text-sm text-gray-700">
              Phone: 057 892 0611 • 054 054 9786<br />
              Email: bookings@ishara-umra.com
            </p>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-600">
          © {new Date().getFullYear()} ISHARA Umra Service. All rights reserved.
        </div>
      </div>
    </footer>
  )
}