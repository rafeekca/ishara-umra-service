import PackagesCards from '../../components/PackagesCards'
import Image from 'next/image'

export default function PackagesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Packages</h1>
      <p className="mt-3 text-gray-700">
        Choose a package to fit your time and goals. Each trip is organized with clarity and care.
      </p>
      <div className="mt-6 relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Image src="/placeholder-madinah.jpg" alt="Madinah mosque" fill className="object-cover" />
      </div>
      <PackagesCards />
    </div>
  )
}