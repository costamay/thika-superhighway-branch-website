import { blogPosts, upcomingMatches, branch } from '../data/content'
import Footer from '../components/Footer'
import './BlogPage.css'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-KE', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <span className="section-label">{branch.shortName} updates</span>
          <h1>Branch news & Gor Mahia fixtures</h1>
          <p>
            Local announcements for our members plus upcoming K&apos;Ogalo matches — curated by
            the branch communications team.
          </p>
        </div>
      </section>

      <section className="fixtures section">
        <div className="container">
          <header className="section-header">
            <span className="section-label">Fixtures</span>
            <h2>Recent Gor Mahia matches</h2>
            {/* <p>Branch travel and watch-party notes included where planned.</p> */}
          </header>
          <div className="fixtures__list">
            {upcomingMatches.map((match) => (
              <article
                key={match.id}
                className={`fixture-card ${match.isHome ? 'fixture-card--home' : ''}`}
              >
                <div className="fixture-card__meta">
                  <time dateTime={match.date}>{formatDate(match.date)}</time>
                  <span>{match.time}</span>
                  <span className="fixture-card__comp">{match.competition}</span>
                </div>
                <div className="fixture-card__teams">
                  <span className={match.home === 'Gor Mahia' ? 'team--gor' : ''}>
                    {match.home}
                  </span>
                  <span className="fixture-card__vs">vs</span>
                  <span className={match.away === 'Gor Mahia' ? 'team--gor' : ''}>
                    {match.away}
                  </span>
                </div>
                <p className="fixture-card__venue">{match.venue}</p>
                {match.branchNote && (
                  <p className="fixture-card__branch">{match.branchNote}</p>
                )}
                {match.isHome && <span className="fixture-card__badge">Home</span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-list section section--muted">
        <div className="container">
          <header className="section-header">
            <span className="section-label">Latest posts</span>
            <h2>Branch news & K&apos;Ogalo updates</h2>
          </header>
          <div className="blog-list__grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <img src={post.image} alt="" loading="lazy" />
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span className="blog-card__category">{post.category}</span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  {/* <button type="button" className="blog-card__link">
                    Read more →
                  </button> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
