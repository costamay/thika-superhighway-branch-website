import { blogPosts, matches, branch } from '../data/content'
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

function isPastMatch(match) {
  const matchDate = new Date(`${match.date}T00:00:00`)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return matchDate < today
}

function MatchCard({ match, isPast }) {
  return (
    <article
      className={`fixture-card ${match.isHome ? 'fixture-card--home' : ''} ${
        isPast ? 'fixture-card--past' : ''
      }`}
    >
      <div className="fixture-card__meta">
        <time dateTime={match.date}>{formatDate(match.date)}</time>
        <span>{match.time}</span>
        <span className="fixture-card__comp">{match.competition}</span>
      </div>
      <div className="fixture-card__teams">
        <span className={match.home.toLowerCase() === 'gor mahia' ? 'team--gor' : ''}>
          {match.home}
        </span>
        <span className="fixture-card__vs">vs</span>
        <span className={match.away.toLowerCase() === 'gor mahia' ? 'team--gor' : ''}>
          {match.away}
        </span>
      </div>
      {isPast && <p className="fixture-card__result">Result: {match.result || 'Not recorded'}</p>}
      <p className="fixture-card__venue">{match.venue}</p>
      {match.branchNote && <p className="fixture-card__branch">{match.branchNote}</p>}
      {!isPast && match.isHome && <span className="fixture-card__badge">Home</span>}
    </article>
  )
}

export default function BlogPage() {
  const pastMatches = matches.filter(isPastMatch)
  const upcomingMatches = matches.filter((match) => !isPastMatch(match))

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
            <h2>Upcoming Gor Mahia matches</h2>
            {/* <p>Branch travel and watch-party notes included where planned.</p> */}
          </header>
          <div className="fixtures__list">
            {upcomingMatches.length > 0 ? (
              upcomingMatches.map((match) => <MatchCard key={match.id} match={match} />)
            ) : (
              <p className="fixtures__empty">No upcoming matches have been added yet.</p>
            )}
          </div>
        </div>
      </section>

      {pastMatches.length > 0 && (
        <section className="fixtures section section--muted">
          <div className="container">
            <header className="section-header">
              <span className="section-label">Match history</span>
              <h2>Past matches</h2>
            </header>
            <div className="fixtures__list">
              {pastMatches.map((match) => (
                <MatchCard key={match.id} match={match} isPast />
              ))}
            </div>
          </div>
        </section>
      )}

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
