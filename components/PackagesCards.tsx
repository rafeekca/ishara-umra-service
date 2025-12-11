export default function PackagesCards() {
  const packages = [
    {
      name: '3-Day Makka–Madeena',
      days: 3,
      desc: 'Quick Umrah with essential Ziyara led by an experienced Ameer.',
      price: 'SAR 1,200'
    },
    {
      name: '5-Day Madeena–Makka',
      days: 5,
      desc: 'Deeper historical study tour with more time in both Harams.',
      price: 'SAR 1,900'
    },
    {
      name: '3-Day Madeena (Makka entry not included)',
      days: 3,
      desc: 'Madeena-only Ziyara with families in mind. No Makka entry.',
      price: 'SAR 1,000'
    }
  ]
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">Popular packages</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((p) => (
          <div key={p.name} className="rounded-lg border p-6">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-medium">Duration: {p.days} days</span>
              <span className="text-sm font-semibold">{p.price}</span>
            </div>
            <a href="/booking" className="mt-5 inline-block rounded bg-brand-600 px-4 py-2 text-white hover:bg-brand-700 focus:outline-none focus-visible:ring">
              Book now
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}