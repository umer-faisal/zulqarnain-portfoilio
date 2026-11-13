export default function Scribble({ className = "" }) {
  return (
    <svg
      className={`scribble w-[min(25rem,55vw)] h-auto block text-brand-yellow my-6 mx-auto overflow-visible ${className}`}
      viewBox="0 0 400 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        data-draw
        d="M5 20C80-15 120 45 202 20S320 5 395 15"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
