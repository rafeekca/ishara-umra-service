export default function ServicesGrid() {
  const services = [
    { title: 'Experienced guides', desc: 'Ameer & scholars lead rituals and Ziyara with care and clarity.' },
    { title: 'Kerala food', desc: 'Fresh, familiar meals provided throughout the trip.' },
    { title: 'Accommodation', desc: 'Stay near both Harams for ease of worship.' },
    { title: 'Transport', desc: 'Comfortable buses with planned itineraries.' },
    { title: 'Multilingual support', desc: 'Urdu, Kannada, and Malayalam guidance.' },
    { title: 'Visa & tickets', desc: 'Assistance with flight booking and Umrah visas.' }
  ]
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">Our services</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-lg border p-5">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}