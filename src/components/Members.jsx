import { members, branch } from '../data/content'
import './Members.css'

export default function Members() {
  return (
    <section id="members" className="members section">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Branch committee</span>
          <h2>Meet the team behind the updates</h2>
          <p>
            Volunteers who run {branch.shortName} — reach out for membership, travel, or
            anything posted on this site.
          </p>
        </header>
        <div className="members__grid">
          {members.map((person) => (
            <article key={person.name} className="member-card">
              <img src={person.image} alt={person.name} loading="lazy" />
              <div className="member-card__body">
                <h3>{person.name}</h3>
                <span className="member-card__role">{person.role}</span>
                {/* <p>{person.bio}</p> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
