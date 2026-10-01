import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <AuthShell title="Welcome Back" subtitle="Login to manage your car rentals and bookings.">
      <form onSubmit={(e) => { e.preventDefault(); navigate("/my-bookings"); }} className="space-y-4">
        <Field label="Mobile Number / Email"><input className="field" placeholder="+91 98765 43210 or email" /></Field>
        <Field label="Password"><div className="relative"><input className="field pr-12" type={show ? "text" : "password"} placeholder="Enter password" /><button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted">{show ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></Field>
        <div className="flex justify-end"><button type="button" className="text-xs font-semibold text-goldDark">Forgot Password?</button></div>
        <button className="btn-gold w-full">Login <ArrowRight size={17} /></button>
      </form>
      <div className="my-6 flex items-center gap-3 text-xs text-muted"><span className="h-px flex-1 bg-line" /> OR <span className="h-px flex-1 bg-line" /></div>
      <button className="btn-outline w-full">Continue with Google</button>
      <p className="mt-6 text-center text-sm text-muted">Don't have an account? <Link to="/register" className="font-bold text-goldDark">Register</Link></p>
    </AuthShell>
  );
}
function Field({ label, children }) { return <label className="block"><span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted">{label}</span>{children}</label>; }
function AuthShell({ title, subtitle, children }) { return <div className="container-page grid min-h-[650px] items-center py-12 lg:grid-cols-2 lg:gap-16"><div className="hidden overflow-hidden rounded-3xl bg-ink lg:block"><img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85" alt="" className="h-[600px] w-full object-cover opacity-70" /></div><div className="mx-auto w-full max-w-md"><p className="eyebrow">HRR Travels</p><h1 className="mt-2 font-display text-4xl font-extrabold">{title}</h1><p className="mt-3 text-sm leading-6 text-muted">{subtitle}</p><div className="mt-8">{children}</div></div></div>; }