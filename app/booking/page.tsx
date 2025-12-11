import BookingForm from '../../components/BookingForm'

export default function BookingPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Booking</h1>
      <p className="mt-3 text-gray-700">
        Submit your details and preferred dates. Our team will confirm availability and next steps.
      </p>
      <div className="mt-6 max-w-xl">
        <BookingForm />
      </div>
      <div className="mt-10 text-sm text-gray-700">
        Departure times: 5 AM for weekday trips • Group and individual Umrah available • Family-friendly options.
      </div>
    </div>
  )
}