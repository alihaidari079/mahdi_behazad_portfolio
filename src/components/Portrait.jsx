// Stylized placeholder portrait. Swap the <img> tag in Hero/About for your
// own photo (e.g. src="/photo.jpg") — this SVG exists so the template
// renders fully without needing external image assets.
export default function Portrait({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 480"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pgrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a2a30" />
          <stop offset="100%" stopColor="#141416" />
        </linearGradient>
      </defs>
      <rect width="400" height="480" rx="18" fill="url(#pgrad)" />
      <circle cx="200" cy="190" r="80" fill="#2f2f36" />
      <path
        d="M60 460c10-90 70-150 140-150s130 60 140 150"
        fill="#2f2f36"
      />
      <rect x="0" y="0" width="400" height="480" rx="18" fill="none" stroke="#ef2d56" strokeOpacity="0.25" strokeWidth="2" />
    </svg>
  )
}
