import Portrait from './Portrait.jsx'

export default function About() {
  return (
    <section id="about" className="section-pad py-16 md:py-24 bg-panel">
      <div className="max-w-content mx-auto grid md:grid-cols-2 gap-12 items-center">
       <img src="/public/mahdi.png" alt=""
          className='relative w-full max-w-sm mx-auto aspect-[4/5] object-cover rounded-2xl border border-line'
          />

        <div>
          <h2 className="text-4xl font-bold mb-5">Who I Am?</h2>
          <p className="text-muted  mb-4">
            My area of expertise is Information Technology, with a focus on networking, technical troubleshooting, system support, and IT infrastructure. I work with core IT concepts and technologies, with an emphasis on network configuration, problem-solving, system maintenance, and reliable technical support. I am continuously developing my knowledge and practical skills across different areas of IT.
          </p>
          <p className="text-muted mb-8">
           I have worked on IT and software development projects, collaborating with teams to build practical digital solutions. I am interested in web development, software engineering, databases, and modern technologies, with a focus on continuously improving my technical skills and solving real-world problems through technology.
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-accent px-6 py-3 font-medium hover:bg-accent/90 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
