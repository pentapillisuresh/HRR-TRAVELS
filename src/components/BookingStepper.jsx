const steps = ["Rental Details", "Customer Details", "Documents", "Payment"];

export default function BookingStepper({ current = 1 }) {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="mx-auto flex min-w-[620px] max-w-3xl items-center">
        {steps.map((step, index) => {
          const n = index + 1;
          const active = n <= current;
          return (
            <div key={step} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div className={`grid h-9 w-9 place-items-center rounded-full border text-xs font-bold ${active ? "border-gold bg-gold text-ink" : "border-line bg-white text-muted"}`}>
                  {n}
                </div>
                <span className={`mt-2 whitespace-nowrap text-[10px] font-semibold ${active ? "text-ink" : "text-muted"}`}>{step}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`mx-2 mt-[-18px] h-px flex-1 ${n < current ? "bg-gold" : "bg-line"}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}