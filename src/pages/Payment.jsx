import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, CreditCard, Smartphone, Wallet, Building2, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { getCar } from "../data/cars";
import { useBooking } from "../context/BookingContext";
import BookingStepper from "../components/BookingStepper";

export default function Payment() {
  const { booking } = useBooking();
  const navigate = useNavigate();
  const [method, setMethod] = useState("upi");
  const car = getCar(booking.carId);
  const days = Math.max(1, Math.ceil((new Date(booking.returnDate) - new Date(booking.pickupDate)) / 86400000));
  const rental = car.price * days;
  const total = rental + car.deposit;
  const advance = Math.round(rental * 0.3);

  return (
    <div className="container-page py-10 sm:py-14">
      <BookingStepper current={4} />
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <p className="eyebrow">Secure Checkout</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold">Payment</h1>
          <p className="mt-2 text-sm text-muted">Complete your booking with secure payment.</p>
          <div className="card mt-7 p-6">
            <h2 className="font-display text-lg font-bold">Select Payment Method</h2>
            <div className="mt-5 space-y-3">
              {[
                ["upi", Smartphone, "UPI", "PhonePe, Google Pay, Paytm"],
                ["card", CreditCard, "Credit / Debit Card", "Visa, Mastercard, RuPay"],
                ["netbanking", Building2, "Net Banking", "All major banks"],
                ["wallet", Wallet, "Wallets", "Supported wallets"]
              ].map(([id, Icon, title, sub]) => (
                <button key={id} onClick={() => setMethod(id)} className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${method === id ? "border-gold bg-gold/5" : "border-line hover:border-ink/30"}`}>
                  <span className={`grid h-10 w-10 place-items-center rounded-full ${method === id ? "bg-gold text-ink" : "bg-cream text-muted"}`}><Icon size={18} /></span>
                  <span className="flex-1"><b className="block text-sm">{title}</b><span className="text-xs text-muted">{sub}</span></span>
                  <span className={`grid h-5 w-5 place-items-center rounded-full border ${method === id ? "border-gold bg-gold" : "border-line"}`}>{method === id && <Check size={12} />}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-green-50 p-4 text-sm text-green-800"><ShieldCheck size={18} /> Your payment information is protected with secure checkout.</div>
          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <Link to="/booking" className="btn-outline"><ArrowLeft size={16} /> Back</Link>
            <button onClick={() => navigate("/confirmation")} className="btn-gold">Pay ₹{advance.toLocaleString("en-IN")} <Check size={17} /></button>
          </div>
        </div>
        <div className="card h-fit overflow-hidden">
          <div className="border-b border-line p-5">
            <p className="text-xs text-muted">Booking ID</p>
            <p className="mt-1 text-sm font-bold">HRR000123</p>
          </div>
          <div className="p-5">
            <div className="flex gap-3">
              <img src={car.image} alt={car.name} className="h-20 w-28 rounded-xl object-cover" />
              <div><h3 className="font-display font-bold">{car.name}</h3><p className="mt-1 text-xs text-muted">{booking.pickupDate} → {booking.returnDate}</p></div>
            </div>
            <div className="mt-6 divide-y divide-line">
              <Row label="Rental" value={`₹${rental.toLocaleString("en-IN")}`} />
              <Row label="Security Deposit" value={`₹${car.deposit.toLocaleString("en-IN")}`} />
              <Row label="Total Amount" value={`₹${total.toLocaleString("en-IN")}`} />
              <Row label="Advance (30%)" value={`₹${advance.toLocaleString("en-IN")}`} strong />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Row({ label, value, strong }) { return <div className={`flex justify-between py-3 text-sm ${strong ? "font-bold text-ink" : ""}`}><span className="text-muted">{label}</span><span>{value}</span></div>; }