import { branchMembers, branch } from '../data/content'
import Footer from '../components/Footer'
import './MembersPage.css'

export default function MembersPage() {
  const committeeCount = branchMembers.filter((person) => person.committee).length

  return (
    <>
      <section className="members-hero">
        <div className="container">
          <span className="section-label">{branch.shortName}</span>
          <h1>Branch members</h1>
          <p>
            Registered Green Army members along the Thika Superhighway corridor —{' '}
            {branchMembers.length} on the roll, including {committeeCount} committee
            volunteers.
          </p>
        </div>
      </section>

      <section className="members-roster section">
        <div className="container">
          <div className="members-roster__grid">
            {branchMembers.map((person) => (
              <article key={person.id} className="passport-card">
                <div className="passport-card__photo">
                  <img
                    src={person.passportImage}
                    alt={`Passport photo of ${person.name}`}
                    loading="lazy"
                  />
                </div>
                <div className="passport-card__body">
                  <span className="passport-card__id">{person.id}</span>
                  <h2>{person.name}</h2>
                  {person.committee && (
                    <span className="passport-card__badge">{person.role}</span>
                  )}
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
