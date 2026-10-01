import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Heart, MapPin, ShieldCheck, Star, Users, Gauge, Fuel, Snowflake, ChevronRight } from "lucide-react";
import { getCar } from "../data/cars";
import { useBooking } from "../context/BookingContext";

export default function CarDetails() {
  const { id } = useParams();
  const car = getCar(id);
  const navigate = useNavigate();
  const { booking, updateBooking } = useBooking();
  const [image, setImage] = useState(car.gallery[0]);

  const book = () => {
    updateBooking({ carId: car.id });
    navigate("/booking");
  };

  return (
    <div className="container-page py-8 sm:py-12">
      <Link to="/cars" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink"><ArrowLeft size={16} /> Back to Cars</Link>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="relative overflow-hidden rounded-3xl bg-white">
            <img src={image} alt={car.name} className="h-[360px] w-full object-cover sm:h-[500px]" />
            <button className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 shadow"><Heart size={18} /></button>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {car.gallery.map((src) => (
              <button key={src} onClick={() => setImage(src)} className={`overflow-hidden rounded-xl border-2 ${image === src ? "border-gold" : "border-transparent"}`}>
                <img src={src} alt="" className="h-20 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-start justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 text-sm text-goldDark"><Star size={15} fill="currentColor" /> {car.rating} <span className="text-muted">({car.reviews} reviews)</span></div>
              <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">{car.name}</h1>
              <p className="mt-1 text-sm text-muted">{car.brand} • {car.year}</p>
            </div>
            <div className="text-right">
              <div className="font-display text-2xl font-extrabold text-goldDark">₹{car.price.toLocaleString("en-IN")}</div>
              <div className="text-xs text-muted">/ day</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-4 overflow-hidden rounded-2xl border border-line bg-white">
            <Spec icon={<Users />} label={`${car.seats} Seats`} />
            <Spec icon={<Gauge />} label={car.transmission} />
            <Spec icon={<Fuel />} label={car.fuel} />
            <Spec icon={<Snowflake />} label="AC" />
          </div>

          <div className="mt-6 card p-5">
            <h2 className="font-display font-bold">Check Availability</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div><label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted">Pickup Location</label><div className="field flex items-center gap-2"><MapPin size={15} className="text-goldDark" />{booking.pickupLocation}</div></div>
              <div><label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted">Pickup Date</label><input type="date" className="field" value={booking.pickupDate} onChange={(e) => updateBooking({ pickupDate: e.target.value })} /></div>
              <div><label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted">Return Date</label><input type="date" className="field" value={booking.returnDate} onChange={(e) => updateBooking({ returnDate: e.target.value })} /></div>
              <div><label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted">Pickup Time</label><input type="time" className="field" value={booking.pickupTime} onChange={(e) => updateBooking({ pickupTime: e.target.value })} /></div>
            </div>
          </div>

          <div className="mt-6 card p-5">
            <h2 className="font-display font-bold">Rental Information</h2>
            <div className="mt-4 divide-y divide-line text-sm">
              <Row label="Price / Day" value={`₹${car.price.toLocaleString("en-IN")}`} />
              <Row label="Price / Hour" value={`₹${car.hourly.toLocaleString("en-IN")}`} />
              <Row label="Included KM / Day" value={`${car.km} KM`} />
              <Row label="Extra KM Charge" value={`₹${car.extraKm} / KM`} />
              <Row label="Security Deposit" value={`₹${car.deposit.toLocaleString("en-IN")} (Refundable)`} />
            </div>
          </div>

          <div className="mt-6 card p-5">
            <h2 className="font-display font-bold">Key Features</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted">
              {car.features.map((f) => <div key={f} className="flex items-center gap-2"><Check size={15} className="text-goldDark" />{f}</div>)}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-gold p-5">
            <div>
              <div className="text-xs font-semibold text-ink/60">Starting from</div>
              <div className="font-display text-2xl font-extrabold">₹{car.price.toLocaleString("en-IN")} <span className="text-xs font-semibold">/ day</span></div>
            </div>
            <button onClick={book} className="btn-dark">Book Now <ArrowRight size={17} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spec({ icon, label }) {
  return <div className="flex flex-col items-center gap-1 border-r border-line p-4 last:border-0"><span className="text-goldDark [&>svg]:h-5 [&>svg]:w-5">{icon}</span><span className="text-[10px] font-semibold text-muted sm:text-xs">{label}</span></div>;
}
function Row({ label, value }) {
  return <div className="flex items-center justify-between py-3"><span className="text-muted">{label}</span><b>{value}</b></div>;
}