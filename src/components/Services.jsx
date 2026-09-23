import { HiOutlinePencil, HiOutlineDeviceMobile, HiOutlineCube, HiOutlineChartBar } from 'react-icons/hi'

const services = [
  {
    icon: HiOutlinePencil,
    title: 'Networking and IT Support',
    desc: 'Network configuration, connectivity, and troubleshooting.',
  },
  {
    icon: HiOutlineDeviceMobile,
    title: 'IT infrastructure',
    desc: 'Managing and maintaining IT systems and networks to ensure optimal performance and reliability.',
  },
  {
    icon: HiOutlineCube,
    title: 'Frontend Development',
    desc: 'Building responsive and interactive web applications using modern technologies.',
  },
  {
    icon: HiOutlineChartBar,
    title: 'Travel Blogging',
    desc: 'Sharing experiences and insights from travels around the world.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad py-16 md:py-24">
      <div className="max-w-content mx-auto">
        <div className="mb-12 max-w-lg">
          <h2 className="text-3xl font-bold mb-4">What I Do</h2>
          <p className="text-muted">
            A handful of the ways I help teams turn ideas into interfaces worth using.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-line bg-card p-6 hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accentSoft flex items-center justify-center text-accent mb-5">
                <Icon size={22} />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
