type IconName = 'code' | 'layers' | 'pen' | 'cloud'

export function Icon({ name }: { name: IconName }) {
  if (name === 'code') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 16 4 12l4-4M16 8l4 4-4 4" />
      </svg>
    )
  }
  if (name === 'layers') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
      </svg>
    )
  }
  if (name === 'pen') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
      </svg>
    )
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 18a5 5 0 0 1 0-10 6 6 0 0 1 11.2 1.6A4 4 0 1 1 18 18H7Z" />
    </svg>
  )
}

export function Logo() {
  return (
    <span className="logo">
      <img src="/kyrocodex.jpeg" alt="" width={32} height={32} className="logo-img" />
    </span>
  )
}
