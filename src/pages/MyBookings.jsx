import { Link } from "react-router-dom";
import { CalendarDays, ChevronRight, Clock3 } from "lucide-react";
import { cars } from "../data/cars";

const bookings = [
  { id: "HRR000123", car: cars[0], from: "01 Oct 2026", to: "03 Oct 2026", amount: 2598, status: "Confirmed" },
  { id: "HRR000124", car: cars[2], from: "05 Oct 2026", to: "07 Oct 2026", amount: 4998, status: "Ongoing" },
  { id: "HRR000119", car: cars[1], from: "20 Sep 2026", to: "22 Sep 2026", amount: 2998, status: "Completed" }
];

export default function MyBookings() {
  return (
    <div className="container-page py-10 sm:py-14">
      <div className="mb-8">
        <p className="eyebrow">Account</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold">My Bookings</h1>
        <p className="mt-3 text-sm text-muted">View and manage your rental history.</p>
      </div>
      <div className="mb-5 flex overflow-x-auto rounded-xl border border-line bg-white p-1">
        {["Upcoming (2)", "Completed (3)", "Cancelled (1)"].map((x, i) => <button key={x} className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold ${i === 0 ? "bg-gold text-ink" : "text-muted"}`}>{x}</button>)}
      </div>
      <div className="space-y-4">
        {bookings.map((b) => (
          <div key={b.id} className="card p-4 sm:p-5">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <img src={b.car.image} alt={b.car.name} className="h-40 w-full rounded-xl object-cover md:h-24 md:w-36" />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-lg font-bold">{b.car.name}</h2>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${b.status === "Confirmed" ? "bg-green-100 text-green-700" : b.status === "Ongoing" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"}`}>{b.status}</span>
                </div>
                <p className="mt-1 text-xs text-muted">{b.id}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted">
                  <span className="inline-flex items-center gap-1"><CalendarDays size={13} /> {b.from} → {b.to}</span>
                  <span className="inline-flex items-center gap-1"><Clock3 size={13} /> Self Drive</span>
                </div>
              </div>
              <div className="text-left md:text-right">
                <div className="font-display text-xl font-extrabold text-goldDark">₹{b.amount.toLocaleString("en-IN")}</div>
                <Link to="/confirmation" className="mt-2 inline-flex items-center gap-1 text-xs font-bold">View Details <ChevronRight size={14} /></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}