'use client'

import { useState } from 'react'

export default function BookingForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [message, setMessage] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to submit')
      setStatus('success')
      setMessage('Booking submitted successfully. We will contact you soon.')
      e.currentTarget.reset()
    } catch (err: any) {
      setStatus('error')
      setMessage(err.message || 'Something went wrong.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Full name</label>
        <input id="name" name="name" type="text" required
          className="mt-1 w-full rounded border px-3 py-2"
          aria-describedby="name-help" />
        <p id="name-help" className="mt-1 text-xs text-gray-600">As in your ID/passport.</p>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" required
          className="mt-1 w-full rounded border px-3 py-2" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
        <input id="phone" name="phone" type="tel" required
          className="mt-1 w-full rounded border px-3 py-2"
          placeholder="e.g., 0578920611" />
      </div>

      <div>
        <label htmlFor="package" className="block text-sm font-medium">Package</label>
        <select id="package" name="package" required className="mt-1 w-full rounded border px-3 py-2">
          <option value="">Select a package</option>
          <option>3-Day Makka–Madeena</option>
          <option>5-Day Madeena–Makka</option>
          <option>3-Day Madeena (Makka entry not included)</option>
        </select>
      </div>

      <div>
        <label htmlFor="startDate" className="block text-sm font-medium">Preferred start date</label>
        <input id="startDate" name="startDate" type="date" required className="mt-1 w-full rounded border px-3 py-2" />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium">Notes</label>
        <textarea id="notes" name="notes" rows={4} className="mt-1 w-full rounded border px-3 py-2"
          placeholder="Any special requests or language preference (Urdu/Kannada/Malayalam)." />
      </div>

      <button
        type="submit"
        className="rounded bg-brand-600 px-4 py-2 text-white hover:bg-brand-700 focus:outline-none focus-visible:ring"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting...' : 'Submit booking'}
      </button>

      {message && (
        <div
          role={status === 'error' ? 'alert' : 'status'}
          className={`mt-3 rounded border px-3 py-2 ${status === 'error' ? 'border-red-600 text-red-700' : 'border-green-600 text-green-700'}`}
        >
          {message}
        </div>
      )}
    </form>
  )
}