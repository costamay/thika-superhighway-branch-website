import { Link, useLocation } from 'react-router-dom'
import { branch, club } from '../data/content'
import BranchLogo from './BranchLogo'
import './BranchLogo.css'
import './Navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <BranchLogo className="branch-logo--nav" />
          <span className="navbar__titles">
            <strong className="sr-only">{branch.shortName}</strong>
            <small>Green Army · {club.nickname}</small>
          </span>
        </Link>
        <nav className="navbar__links" aria-label="Main navigation">
          {isHome ? (
            <>
              <a href="#about">About</a>
              <a href="#gallery">Gallery</a>
              <a href="#members">Committee</a>
            </>
          ) : (
            <>
              <Link to="/#about">About</Link>
              <Link to="/#gallery">Gallery</Link>
              <Link to="/#members">Committee</Link>
            </>
          )}
          <Link to="/members" className={pathname === '/members' ? 'active' : ''}>
            Members
          </Link>
          <Link to="/blog" className={pathname === '/blog' ? 'active' : ''}>
            Updates
          </Link>
        </nav>
      </div>
    </header>
  )
}
