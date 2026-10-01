import { Mail, MapPin, Phone, MessageCircle, Clock3 } from "lucide-react";

export default function Contact() {
  return <div className="container-page py-12 sm:py-16">
    <div className="max-w-2xl"><p className="eyebrow">Contact Us</p><h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Let's get you on the road.</h1><p className="mt-4 text-sm leading-7 text-muted">Have a question about a car, booking or pickup? Send us a message and our team will help.</p></div>
    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
      <form onSubmit={(e)=>e.preventDefault()} className="card p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full Name"><input className="field" placeholder="Your name"/></Field>
          <Field label="Phone Number"><input className="field" placeholder="+91 98765 43210"/></Field>
          <Field label="Email"><input className="field" type="email" placeholder="you@example.com"/></Field>
          <Field label="Subject"><input className="field" placeholder="How can we help?"/></Field>
          <div className="sm:col-span-2"><Field label="Message"><textarea className="field min-h-36 resize-none" placeholder="Write your message..."/></Field></div>
        </div>
        <button className="btn-gold mt-6">Send Message</button>
      </form>
      <div className="space-y-4">
        {[[Phone,"Call Us","+91 98765 43210"],[MessageCircle,"WhatsApp","+91 98765 43210"],[Mail,"Email","hello@hrrtravels.com"],[MapPin,"Location","Visakhapatnam, Andhra Pradesh"],[Clock3,"Working Hours","24/7 Customer Support"]].map(([Icon,t,v])=><div className="card flex items-center gap-4 p-5" key={t}><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-goldDark"><Icon size={20}/></div><div><h3 className="font-display font-bold">{t}</h3><p className="mt-1 text-sm text-muted">{v}</p></div></div>)}
      </div>
    </div>
  </div>;
}
function Field({label,children}){return <label className="block"><span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted">{label}</span>{children}</label>}