import { Link } from "react-router-dom";
import { Search, CarFront, CreditCard, KeyRound, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  [Search, "Search a Car", "Enter your pickup location and rental dates to see cars that match your plan."],
  [CarFront, "Choose Your Car", "Compare models, prices, seating, fuel type, transmission and included kilometres."],
  [CreditCard, "Complete Booking", "Enter customer details, upload required documents and select your payment method."],
  [KeyRound, "Pick Up & Drive", "Collect your vehicle from the selected location and start your journey."]
];

export default function HowItWorks() {
  return <div>
    <section className="bg-ink py-16 text-white sm:py-20"><div className="container-page text-center"><p className="eyebrow">Simple & Transparent</p><h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-extrabold sm:text-6xl">How It Works</h1><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">From choosing a car to picking up the keys, we've kept the process simple.</p></div></section>
    <section className="container-page py-16 sm:py-20"><div className="grid gap-5 md:grid-cols-4">{steps.map(([Icon, title, text], i) => <div className="card relative p-6" key={title}><span className="text-sm font-extrabold text-goldDark">0{i + 1}</span><div className="mt-6 grid h-12 w-12 place-items-center rounded-xl bg-gold text-ink"><Icon size={22} /></div><h2 className="mt-5 font-display text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-muted">{text}</p></div>)}</div></section>
    <section className="bg-white py-16"><div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center"><img src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=85" alt="" className="h-[360px] w-full rounded-3xl object-cover" /><div><p className="eyebrow">Before You Drive</p><h2 className="section-title mt-2">What you'll need</h2><div className="mt-6 space-y-4">{["Valid driving licence", "Valid identity proof", "Booking confirmation", "Security deposit, if applicable"].map(x => <div key={x} className="flex items-center gap-3"><CheckCircle2 className="text-goldDark" size={20}/><span className="font-semibold">{x}</span></div>)}</div><Link to="/cars" className="btn-gold mt-7">Browse Cars <ArrowRight size={16}/></Link></div></div></section>
  </div>;
}