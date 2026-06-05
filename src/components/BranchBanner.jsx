import { branch, club } from '../data/content'
import './BranchBanner.css'

export default function BranchBanner() {
  return (
    <div className="branch-banner" role="note">
      <p>
        <strong>Unofficial fan branch.</strong> {branch.disclaimer}{' '}
        <a href={club.officialSite} target="_blank" rel="noreferrer">
          Official {club.name} site →
        </a>
      </p>
    </div>
  )
}
