import { Link } from 'react-router-dom'
import { branch, club } from '../data/content'
import BranchLogo from './BranchLogo'
import './BranchLogo.css'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <BranchLogo className="branch-logo--footer" />
          <h3 className="sr-only">{branch.name}</h3>
          <p>{branch.parentOrg}</p>
          <p className="footer__corridor">{branch.corridor}</p>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <h4>Branch</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#members">Committee</a></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/blog">Updates & Fixtures</Link></li>
          </ul>
        </nav>
        <div className="footer__social">
          <h4>Find us on</h4>
          <ul>
            <li>
              <a href={club.officialSite} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            {/* <li><span className="footer__note">Branch WhatsApp — ask your zone rep</span></li> */}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          © {year} {branch.name}. All rights reserved. | Site by {branch.shortName} communications team.
        </p>
      </div>
    </footer>
  )
}
