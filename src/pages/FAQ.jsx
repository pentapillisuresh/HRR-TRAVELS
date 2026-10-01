import FAQItem from "../components/FAQItem";

const faqs = [
  ["What documents are required?", "A valid driving licence and an accepted identity proof such as Aadhaar or PAN are required for verification."],
  ["Is a security deposit required?", "A refundable security deposit may apply depending on the vehicle and rental terms."],
  ["What kilometres are included?", "Each vehicle has an included kilometre allowance. Extra kilometres are charged according to the vehicle's published rate."],
  ["Can I extend my rental period?", "Yes, subject to vehicle availability. Contact support before your current rental period ends."],
  ["Can I cancel my booking?", "Cancellation is subject to the booking's cancellation terms. Contact support as early as possible."],
  ["Is fuel included?", "Fuel is generally not included in the rental price unless specifically stated on the vehicle listing."],
  ["Can someone else drive the car?", "Only approved drivers who meet the required documentation and eligibility conditions should drive the vehicle."],
  ["How do I get the car after booking?", "Your confirmation will contain pickup information. Bring the required original documents for verification."]
];

export default function FAQ() {
  return <div className="container-page py-12 sm:py-16">
    <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Help Center</p><h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Frequently Asked Questions</h1><p className="mt-4 text-sm leading-7 text-muted">Everything you need to know before booking your self-drive car.</p></div>
    <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-line bg-white px-5 sm:px-8">{faqs.map(([q,a])=><FAQItem key={q} question={q} answer={a}/>)}</div>
  </div>;
}