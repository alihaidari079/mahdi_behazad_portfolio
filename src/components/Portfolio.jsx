import mahdi from '../assets/mahdi.png'
import a from '../assets/a.png'
import b from '../assets/images (1).png'
import c from '../assets/images.png'
const projects = [
  { title: 'Finlytics Dashboard', tag: 'Web App', hue: 'from-accent/30 to-transparent' },
  { title: 'Nomad Travel App', tag: 'Mobile App', hue: 'from-blue-500/30 to-transparent' },
  { title: 'Brewhouse Landing', tag: 'Website', hue: 'from-amber-500/30 to-transparent' },
 
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad py-16 md:py-24 bg-panel">
      <div className="max-w-content mx-auto">
        <div className="mb-12 max-w-lg">
          <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
          <p className="text-muted">A few recent projects across product and web design.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.image}
              href="#"
              className="group rounded-xl overflow-hidden border border-line bg-card block"
            >
              <img src={p.im} alt="" />
              <div className={`h-44 bg-gradient-to-br ${p.hue} bg-card relative`}>
                <div className="absolute inset-0 flex items-center justify-center text-muted/40 font-display text-sm">
                  <img src={a} alt="" />

                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-accent mb-1">{p.tag}</p>
                <h3 className="font-semibold group-hover:text-accent transition-colors">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
