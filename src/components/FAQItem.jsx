import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-5 py-5 text-left font-semibold">
        <span>{question}</span>
        <ChevronDown className={`shrink-0 transition ${open ? "rotate-180 text-goldDark" : "text-muted"}`} size={19} />
      </button>
      {open && <div className="pb-5 pr-10 text-sm leading-6 text-muted">{answer}</div>}
    </div>
  );
}