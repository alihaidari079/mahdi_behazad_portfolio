import { FaFacebookF, FaTwitter, FaLinkedinIn,  FaInstagram } from 'react-icons/fa'
import Portrait from './Portrait.jsx'

const socials = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/mahdi.behzad.664464?mibextid=ZbWKwL' },
  { icon: FaTwitter, href: 'https://twitter.com/mahdibehzad' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/m-mahdi-saeedi-0a8029428?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { icon: FaInstagram, href: 'https://www.instagram.com/mahdibehzad491?stkn=dmx5N2Voc2tzbXY4' },
]

export default function Hero() {
  return (
    <section id="home" className="section-pad">
      <div className="max-w-content mx-auto grid md:grid-cols-2 gap-12 items-center py-16 md:py-24">
        <div>
          <p className="text-accent text-sm font-medium mb-4 tracking-wide">Welcome to my world</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Hi, I&apos;m <span className="text-accent">Mahdi Behzad</span>
            <br />
            IT Student / Aspiring Network Engineer / Traveler
          </h1>
          <p className="text-muted max-w-md mb-8">
            Focused on Information Technology, networking, web development, and technical problem-solving, with a practical approach to learning and working with technology. I also enjoy traveling and discovering new places along the way.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-accent px-7 py-3 font-medium hover:bg-accent/90 transition-colors"
            >
              Hire Me
            </a>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-white hover:border-accent transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-accent/10 rounded-2xl blur-2xl" aria-hidden="true" />
          <img src="/public/mahdi.png" alt=""
          className='relative w-full max-w-sm mx-auto aspect-[4/5] object-cover rounded-2xl border border-line'
          />
          {/* <Portrait className="relative w-full max-w-sm mx-auto rounded-2xl" /> */}
        </div>
      </div>
    </section>
  )
}
