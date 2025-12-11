import { NextRequest, NextResponse } from 'next/server'
import { bookingSchema } from '@/lib/validation'
import { rateLimit } from '@/lib/rateLimit'
import { createBooking } from '@/lib/airtable'

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    '0.0.0.0'
  const rl = rateLimit(ip)
  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = bookingSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { name, email, phone, package: pkg, startDate, notes } = parsed.data

  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
    return NextResponse.json(
      { error: 'Server not configured. Missing Airtable env.' },
      { status: 500 }
    )
  }

  try {
    await createBooking({
      Name: name,
      Email: email,
      Phone: phone,
      Package: pkg,
      StartDate: startDate,
      Notes: notes || ''
    })
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json(
      { error: 'Failed to store booking', details: e?.message },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok' })
}