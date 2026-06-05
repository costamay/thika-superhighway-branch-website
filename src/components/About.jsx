import { branch, club } from '../data/content'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <header className="section-header">
          <span className="section-label">About our branch</span>
          <h2>One corridor, one Green Army</h2>
          <p>
            The {branch.name} is a registered Green Army fan branch for supporters living and
            working along the Thika Superhighway. We exist to keep our members informed, united,
            and ready for every {club.nickname} match day.
          </p>
        </header>
        <div className="about__grid">
          <article className="about__card">
            <div className="about__icon" aria-hidden="true">
              ◆
            </div>
            <h3>Mission</h3>
            <p>
              To connect Gor Mahia supporters along the Thika Superhighway corridor with timely
              club updates, organised match-day travel, and a welcoming community — so every
              member stays in the loop and never watches K&apos;Ogalo alone.
            </p>
          </article>
          <article className="about__card">
            <div className="about__icon" aria-hidden="true">
              ◆
            </div>
            <h3>Vision</h3>
            <p>
              To be the most active and organised Green Army branch on the corridor: growing
              membership from Ruiru to Muthaiga, strengthening ties with sister branches, and
              representing the Green Army with pride at home and away.
            </p>
          </article>
          <article className="about__card about__card--highlight">
            <h3>Who we support</h3>
            <p>
              We follow {club.name} — {club.nickname}, Sirkal — Kenya&apos;s most successful club.
              This site shares Gor Mahia news and fixtures for our branch members; for official
              club statements, visit the club directly.
            </p>
            <ul className="about__trophies">
              <li>{branch.meetup}</li>
              <li>Match travel & watch parties organised locally</li>
              <li>Affiliated with Gor Mahia FC</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
