import { Link } from "react-router-dom";
import { Check, Download, CalendarDays, MapPin, Headphones } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { getCar } from "../data/cars";

export default function Confirmation() {
  const { booking } = useBooking();
  const car = getCar(booking.carId);
  return (
    <div className="container-page py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-3xl bg-ink text-white shadow-premium">
          <div className="relative px-6 py-12 text-center sm:px-12">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: "radial-gradient(circle at 20% 20%, #F6B91A 1px, transparent 1px)", backgroundSize: "28px 28px"}} />
            <div className="relative">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold text-ink"><Check size={30} strokeWidth={3} /></div>
              <p className="eyebrow mt-6">Booking Confirmed</p>
              <h1 className="mt-2 font-display text-4xl font-extrabold">You're all set.</h1>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/60">Your car has been successfully reserved. Keep your booking ID for future reference.</p>
              <div className="mt-5 text-sm">Booking ID: <b>HRR000123</b></div>
            </div>
          </div>
          <div className="m-3 rounded-2xl bg-white p-5 text-ink sm:m-5 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <img src={car.image} alt={car.name} className="h-32 w-full rounded-xl object-cover sm:w-48" />
              <div className="flex-1">
                <p className="text-xs text-muted">Your Vehicle</p>
                <h2 className="mt-1 font-display text-2xl font-extrabold">{car.name}</h2>
                <p className="mt-1 text-sm text-muted">{car.brand} • {car.transmission} • {car.fuel}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Info icon={<CalendarDays />} label="Pickup" value={`${booking.pickupDate} • ${booking.pickupTime}`} />
              <Info icon={<CalendarDays />} label="Return" value={`${booking.returnDate} • ${booking.returnTime}`} />
              <Info icon={<MapPin />} label="Location" value={booking.pickupLocation} />
              <Info icon={<Headphones />} label="Support" value="+91 98765 43210" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button className="btn-gold"><Download size={16} /> Download Receipt</button>
              <Link to="/my-bookings" className="btn-dark text-center">View My Bookings</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Info({ icon, label, value }) { return <div className="rounded-xl bg-cream p-4"><div className="flex items-center gap-2 text-goldDark [&>svg]:h-4 [&>svg]:w-4">{icon}<span className="text-[10px] font-bold uppercase tracking-wider">{label}</span></div><p className="mt-2 text-sm font-semibold">{value}</p></div>; }