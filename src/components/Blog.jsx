const posts = [
  {
    title: 'Computer Lab Management System',
    date: 'Aug 14, 2026',
    excerpt: 'A simple system for managing computers, equipment and users practically.',
  },
  {
    title: 'A practical guide to design systems',
    date: 'Jul 02, 2026',
    excerpt: 'How to start one without over-engineering it in the first sprint.',
  },
  {
    title: 'What I learned from 6 user interviews',
    date: 'Jun 21, 2026',
    excerpt: 'Patterns that kept showing up across very different products and audiences.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section-pad py-16 md:py-24">
      <div className="max-w-content mx-auto">
        <div className="mb-12 max-w-lg">
          <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
          <p className="text-muted">Notes on design, process and the occasional opinion.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="rounded-xl border border-line bg-card p-6 hover:border-accent/50 transition-colors block"
            >
              <p className="text-xs text-muted mb-3">{post.date}</p>
              <h3 className="font-semibold mb-2 leading-snug">{post.title}</h3>
              <p className="text-sm text-muted">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
