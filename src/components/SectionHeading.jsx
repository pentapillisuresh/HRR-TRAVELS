export default function SectionHeading({ eyebrow, title, text, action }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-title mt-2">{title}</h2>
        {text && <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{text}</p>}
      </div>
      {action}
    </div>
  );
}