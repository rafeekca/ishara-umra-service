import { z } from 'zod'

export const bookingSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(20),
  package: z.enum([
    '3-Day Makka–Madeena',
    '5-Day Madeena–Makka',
    '3-Day Madeena (Makka entry not included)'
  ]),
  startDate: z.string().refine((v) => !Number.isNaN(Date.parse(v)), 'Invalid date'),
  notes: z.string().max(1000).optional().or(z.literal(''))
})
export type BookingInput = z.infer<typeof bookingSchema>