import { FaFacebookF, FaTwitter, FaLinkedinIn,  FaInstagram } from 'react-icons/fa'

const socials = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/mahdi.behzad.664464?mibextid=ZbWKwL' },
  { icon: FaTwitter, href: 'https://twitter.com/mahdibehzad' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/m-mahdi-saeedi-0a8029428?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { icon: FaInstagram, href: 'https://www.instagram.com/mahdibehzad491?stkn=dmx5N2Voc2tzbXY4' },
]

export default function Footer() {
  return (
    <footer className="section-pad py-10 border-t border-line">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Omor Rahman. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-white hover:border-accent transition-colors"
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
