import './globals.css'
import type { Metadata } from 'next'
//import Header from '@/components/Header'
//import Footer from '@/components/Footer'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'ISHARA Umra Service - Riyadh Batha',
  description:
    'Scholar-led Umrah and Madinah historical tours. Kerala food, accommodation near both Harams, and multilingual guidance.',
  icons: { icon: '/logo.png' },
  openGraph: {
    title: 'ISHARA Umra Service - Riyadh Batha',
    description:
      'Guided Umrah packages with scholar leadership, Kerala food, and comfortable stays near both Harams.',
    url: 'https://ishara-umra.vercel.app',
    siteName: 'ISHARA Umra Service',
    images: [{ url: '/placeholder-hero.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}