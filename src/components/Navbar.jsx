import { useState, useEffect } from 'react'
import ThemeSwitch from './ThemeSwitch'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.35s ease',
        padding: '1rem 0',
      }}
    >
      <div className="container">
        <a className="navbar-brand font-serif fw-bold fs-4" href="#hero"
          style={{ color: 'var(--text)', letterSpacing: '0.02em', textDecoration: 'none' }}>
          R<span className="text-accent">.</span>K<span className="text-accent">.</span>M
        </a>

        <button className="navbar-toggler border-0" type="button"
          data-bs-toggle="collapse" data-bs-target="#mainNav"
          style={{ color: 'var(--text)', boxShadow: 'none', fontSize: '1.3rem' }}>
          ☰
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto gap-lg-2">
            {NAV_LINKS.map(link => (
              <li className="nav-item" key={link}>
                <a className="nav-link nav-link-custom" href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>

          {/* Right controls: theme switch + resume download + hire me */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 flex-wrap">
            <ThemeSwitch />

            <a
              href="/Rajesh_Resume.pdf"
              download="Rajesh_Kumar_Mahto_Resume.pdf"
              className="btn btn-download-resume px-3 py-2 d-inline-flex align-items-center gap-2"
              style={{ fontSize: '0.78rem' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>

            <a href="#contact" className="btn btn-accent rounded-pill px-4 py-2"
              style={{ fontSize: '0.82rem' }}>
              Hire Me ↗
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
