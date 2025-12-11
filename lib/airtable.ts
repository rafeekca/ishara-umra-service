import Airtable from 'airtable'

const apiKey = process.env.AIRTABLE_API_KEY!
const baseId = process.env.AIRTABLE_BASE_ID!
const tableName = process.env.AIRTABLE_TABLE_NAME || 'Bookings'

export const base = new Airtable({ apiKey }).base(baseId)

export async function createBooking(fields: {
  Name: string
  Email: string
  Phone: string
  Package: string
  StartDate: string
  Notes?: string
}) {
  return base(tableName).create([{ fields }], { typecast: true })
}