import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, MapPin } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { getCar } from "../data/cars";
import BookingStepper from "../components/BookingStepper";

export default function Booking() {
  const { booking, updateBooking, updateCustomer, updateDocuments } = useBooking();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const car = getCar(booking.carId);

  const next = () => {
    if (step < 4) setStep(step + 1);
    else navigate("/payment");
  };

  return (
    <div className="container-page py-10 sm:py-14">
      <BookingStepper current={step} />

      {step === 1 && <RentalStep booking={booking} updateBooking={updateBooking} car={car} onNext={next} />}
      {step === 2 && <CustomerStep booking={booking} updateCustomer={updateCustomer} onNext={next} onBack={() => setStep(1)} />}
      {step === 3 && <DocumentsStep booking={booking} updateDocuments={updateDocuments} onNext={next} onBack={() => setStep(2)} />}
      {step === 4 && <SummaryStep booking={booking} car={car} onNext={() => navigate("/payment")} onBack={() => setStep(3)} />}
    </div>
  );
}

function RentalStep({ booking, updateBooking, car, onNext }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_360px]">
      <div>
        <p className="eyebrow">Step 1</p>
        <h1 className="mt-2 font-display text-3xl font-extrabold">Rental Details</h1>
        <p className="mt-2 text-sm text-muted">Select your pickup and return details.</p>
        <div className="mt-7 card p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Pickup Location"><div className="field flex items-center gap-2"><MapPin size={15} className="text-goldDark" /><input className="w-full outline-none" value={booking.pickupLocation} onChange={(e) => updateBooking({ pickupLocation: e.target.value })} /></div></Field>
            <Field label="Pickup Date"><input className="field" type="date" value={booking.pickupDate} onChange={(e) => updateBooking({ pickupDate: e.target.value })} /></Field>
            <Field label="Pickup Time"><input className="field" type="time" value={booking.pickupTime} onChange={(e) => updateBooking({ pickupTime: e.target.value })} /></Field>
            <Field label="Return Date"><input className="field" type="date" value={booking.returnDate} onChange={(e) => updateBooking({ returnDate: e.target.value })} /></Field>
            <Field label="Return Time"><input className="field" type="time" value={booking.returnTime} onChange={(e) => updateBooking({ returnTime: e.target.value })} /></Field>
          </div>
        </div>
        <button onClick={onNext} className="btn-gold mt-5 w-full sm:w-auto">Next Step <ArrowRight size={17} /></button>
      </div>
      <BookingSide car={car} booking={booking} />
    </div>
  );
}

function CustomerStep({ booking, updateCustomer, onNext, onBack }) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="eyebrow">Step 2</p>
      <h1 className="mt-2 font-display text-3xl font-extrabold">Customer Details</h1>
      <p className="mt-2 text-sm text-muted">Enter your personal information for the booking.</p>
      <div className="card mt-7 p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full Name"><input className="field" placeholder="Enter your name" value={booking.customer.name} onChange={(e) => updateCustomer({ name: e.target.value })} /></Field>
          <Field label="Mobile Number"><input className="field" placeholder="+91 98765 43210" value={booking.customer.mobile} onChange={(e) => updateCustomer({ mobile: e.target.value })} /></Field>
          <Field label="Email Address"><input className="field" type="email" placeholder="you@example.com" value={booking.customer.email} onChange={(e) => updateCustomer({ email: e.target.value })} /></Field>
          <Field label="Address"><textarea className="field min-h-28 resize-none" placeholder="Your address" value={booking.customer.address} onChange={(e) => updateCustomer({ address: e.target.value })} /></Field>
        </div>
      </div>
      <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button onClick={onBack} className="btn-outline"><ArrowLeft size={16} /> Back</button>
        <button onClick={onNext} className="btn-gold">Next Step <ArrowRight size={17} /></button>
      </div>
    </div>
  );
}

function DocumentsStep({ booking, updateDocuments, onNext, onBack }) {
  const fileName = (file) => file?.name || "No file selected";
  return (
    <div className="mx-auto max-w-3xl">
      <p className="eyebrow">Step 3</p>
      <h1 className="mt-2 font-display text-3xl font-extrabold">Upload Documents</h1>
      <p className="mt-2 text-sm text-muted">Upload valid documents for verification.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <UploadCard title="Driving Licence" value={fileName(booking.documents.licence)} onChange={(file) => updateDocuments({ licence: file })} />
        <UploadCard title="ID Proof (Aadhaar / PAN)" value={fileName(booking.documents.idProof)} onChange={(file) => updateDocuments({ idProof: file })} />
      </div>
      <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button onClick={onBack} className="btn-outline"><ArrowLeft size={16} /> Back</button>
        <button onClick={onNext} className="btn-gold">Review Booking <ArrowRight size={17} /></button>
      </div>
    </div>
  );
}

function SummaryStep({ booking, car, onNext, onBack }) {
  const days = Math.max(1, Math.ceil((new Date(booking.returnDate) - new Date(booking.pickupDate)) / 86400000));
  const rental = car.price * days;
  const total = rental + car.deposit;
  return (
    <div className="mx-auto max-w-3xl">
      <p className="eyebrow">Step 4</p>
      <h1 className="mt-2 font-display text-3xl font-extrabold">Booking Summary</h1>
      <p className="mt-2 text-sm text-muted">Please review your booking details before payment.</p>
      <div className="card mt-7 overflow-hidden">
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
          <img src={car.image} alt={car.name} className="h-28 w-full rounded-xl object-cover sm:w-40" />
          <div className="flex-1">
            <h2 className="font-display text-xl font-bold">{car.name}</h2>
            <p className="mt-1 text-xs text-muted">{car.seats} Seats • {car.transmission} • {car.fuel}</p>
            <div className="mt-3 font-display text-xl font-extrabold text-goldDark">₹{car.price.toLocaleString("en-IN")} <span className="text-xs text-muted">/ day</span></div>
          </div>
        </div>
        <div className="border-t border-line p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <Info icon={<CalendarDays />} label="Pickup" value={`${booking.pickupDate} • ${booking.pickupTime}`} />
            <Info icon={<CalendarDays />} label="Return" value={`${booking.returnDate} • ${booking.returnTime}`} />
          </div>
        </div>
        <div className="border-t border-line p-5">
          <Row label={`Rental (${days} day${days > 1 ? "s" : ""})`} value={`₹${rental.toLocaleString("en-IN")}`} />
          <Row label="Security Deposit" value={`₹${car.deposit.toLocaleString("en-IN")}`} />
          <div className="mt-2 flex justify-between border-t border-line pt-4 font-display text-lg font-extrabold"><span>Total Amount</span><span>₹{total.toLocaleString("en-IN")}</span></div>
        </div>
      </div>
      <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button onClick={onBack} className="btn-outline"><ArrowLeft size={16} /> Back</button>
        <button onClick={onNext} className="btn-gold">Proceed to Payment <ArrowRight size={17} /></button>
      </div>
    </div>
  );
}

function BookingSide({ car, booking }) {
  return (
    <div className="card h-fit overflow-hidden">
      <img src={car.image} alt={car.name} className="h-48 w-full object-cover" />
      <div className="p-5">
        <h2 className="font-display font-bold">{car.name}</h2>
        <p className="mt-1 text-xs text-muted">{car.seats} Seats • {car.transmission} • {car.fuel}</p>
        <div className="mt-4 font-display text-xl font-extrabold text-goldDark">₹{car.price.toLocaleString("en-IN")} <span className="text-xs text-muted">/ day</span></div>
      </div>
    </div>
  );
}
function Field({ label, children }) { return <label className="block"><span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted">{label}</span>{children}</label>; }
function UploadCard({ title, value, onChange }) {
  return <label className="card flex min-h-56 cursor-pointer flex-col items-center justify-center p-6 text-center hover:border-gold">
    <div className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-goldDark"><Check size={21} /></div>
    <h3 className="mt-4 font-display font-bold">{title}</h3>
    <p className="mt-2 max-w-xs text-xs text-muted">{value}</p>
    <span className="mt-4 rounded-xl bg-ink px-4 py-2 text-xs font-bold text-white">Choose File</span>
    <input type="file" className="hidden" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => onChange(e.target.files?.[0] || null)} />
  </label>;
}
function Info({ icon, label, value }) { return <div className="flex items-center gap-3 rounded-xl bg-cream p-4"><span className="text-goldDark [&>svg]:h-5 [&>svg]:w-5">{icon}</span><div><p className="text-[10px] font-bold uppercase tracking-wider text-muted">{label}</p><p className="mt-1 text-sm font-semibold">{value}</p></div></div>; }
function Row({ label, value }) { return <div className="flex justify-between py-2 text-sm"><span className="text-muted">{label}</span><b>{value}</b></div>; }