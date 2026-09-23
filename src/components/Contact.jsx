import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

const info = [
  { icon: HiOutlineMail, label: 'mahdijan5645@gmail.com' },
  { icon: HiOutlinePhone, label: '+93 748050181' },
  { icon: HiOutlineLocationMarker, label: 'Kabul, Afghanistan' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad py-16 md:py-24 bg-panel">
      <div className="max-w-content mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-muted mb-8 max-w-sm">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
          <ul className="space-y-4">
            {info.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm">
                <span className="w-10 h-10 rounded-full bg-accentSoft text-accent flex items-center justify-center">
                  <Icon size={18} />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md bg-card border border-line px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-accent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-md bg-card border border-line px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-accent"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md bg-card border border-line px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-accent"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full rounded-md bg-card border border-line px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-accent resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-accent px-7 py-3 font-medium hover:bg-accent/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
