import ServicesGrid from '@/components/ServicesGrid'
import Image from 'next/image'

export default function ServicesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-3 text-gray-700">
        We provide end-to-end Umrah support with scholar leadership, logistics, and multilingual guidance.
      </p>
      <div className="mt-6 relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Image src="/placeholder-kaaba.jpg" alt="Kaaba view" fill className="object-cover" />
      </div>
      <ServicesGrid />
    </div>
  )
}