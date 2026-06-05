import branchLogo from '../assets/branch-logo.png'

export default function BranchLogo({ className = '', alt }) {
  return (
    <img
      src={branchLogo}
      alt={alt ?? 'Gor Mahia Thika Superhighway Branch logo'}
      className={className ? `branch-logo ${className}` : 'branch-logo'}
      loading="eager"
      decoding="async"
    />
  )
}
