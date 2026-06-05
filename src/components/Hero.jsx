import { Link } from 'react-router-dom'
import { branch, club } from '../data/content'
import BranchLogo from './BranchLogo'
import './BranchLogo.css'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero__overlay" />
      <div className="hero__content">
        <BranchLogo className="branch-logo--hero" />
        <p className="hero__eyebrow">
          {branch.parentOrg} · Est. {branch.founded}
        </p>
        <h1>
          {branch.shortName}
          <span>Green Army · {club.nickname}</span>
        </h1>
        <p className="hero__tagline">{branch.tagline}</p>
        <p className="hero__corridor">{branch.corridor}</p>
        <div className="hero__actions">
          <a href="#about" className="btn btn--primary">
            About Our Branch
          </a>
          <Link to="/blog" className="btn btn--outline">
            Updates & Fixtures
          </Link>
        </div>
        <ul className="hero__stats" aria-label="Branch at a glance">
          <li>
            <strong>30+</strong>
            <span>Registered members</span>
          </li>
          <li>
            <strong>Monthly</strong>
            <span>Branch meetups</span>
          </li>
          <li>
            <strong>Sirkal</strong>
            <span>Supporting {club.name}</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
