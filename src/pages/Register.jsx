import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="container-page grid min-h-[650px] items-center py-12 lg:grid-cols-2 lg:gap-16">
      <div className="hidden overflow-hidden rounded-3xl bg-ink lg:block"><img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85" alt="" className="h-[600px] w-full object-cover opacity-70" /></div>
      <div className="mx-auto w-full max-w-md">
        <p className="eyebrow">Create Account</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold">Start your journey</h1>
        <p className="mt-3 text-sm leading-6 text-muted">Create an account to book cars and manage your rentals.</p>
        <form onSubmit={(e) => { e.preventDefault(); navigate("/cars"); }} className="mt-8 space-y-4">
          <Field label="Full Name"><input className="field" placeholder="Your full name" /></Field>
          <Field label="Mobile Number"><input className="field" placeholder="+91 98765 43210" /></Field>
          <Field label="Email Address"><input className="field" type="email" placeholder="you@example.com" /></Field>
          <Field label="Password"><input className="field" type="password" placeholder="Create password" /></Field>
          <label className="flex items-start gap-2 text-xs text-muted"><input type="checkbox" className="mt-0.5 accent-[#F6B91A]" required /> I agree to the terms and privacy policy.</label>
          <button className="btn-gold w-full">Create Account <ArrowRight size={17} /></button>
        </form>
        <p className="mt-6 text-center text-sm text-muted">Already have an account? <Link to="/login" className="font-bold text-goldDark">Login</Link></p>
      </div>
    </div>
  );
}
function Field({ label, children }) { return <label className="block"><span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted">{label}</span>{children}</label>; }