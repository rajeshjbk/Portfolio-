import { useEffect, useRef, useState } from 'react'

const ROLES = ['Java Full Stack Developer','Spring Boot Engineer','React.js Developer','Backend Architect']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    const target = ROLES[roleIdx]
    let t
    if (!deleting && text.length < target.length)
      t = setTimeout(() => setText(target.slice(0, text.length + 1)), 65)
    else if (!deleting && text.length === target.length)
      t = setTimeout(() => setDeleting(true), 2000)
    else if (deleting && text.length > 0)
      t = setTimeout(() => setText(text.slice(0, -1)), 38)
    else { setDeleting(false); setRoleIdx((roleIdx + 1) % ROLES.length) }
    return () => clearTimeout(t)
  }, [text, deleting, roleIdx])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let id
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
      r: Math.random() * 1.4 + .4, a: Math.random() * .45 + .1,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(124,92,252,${p.a})`; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(124,92,252,${0.07 * (1 - d / 110)})`; ctx.lineWidth = .5; ctx.stroke()
          }
        }
      id = requestAnimationFrame(draw)
    }
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="hero" className="bg-s1 position-relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(124,92,252,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(124,92,252,0.045) 1px,transparent 1px)',
        backgroundSize: '62px 62px',
      }} />
      {/* orbs */}
      <div style={{ position: 'absolute', top: -120, right: -120, width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle,rgba(124,92,252,0.13),transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -60, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,212,170,0.09),transparent 70%)', pointerEvents: 'none' }} />
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: .7 }} />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center" style={{ minHeight: '100vh' }}>
          <div className="col-lg-7 py-5">

            {/* badge */}
            <div className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-2 rounded-pill"
              style={{ background: 'rgba(124,92,252,0.1)', border: '1px solid rgba(124,92,252,0.3)', fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent2)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Open to work · India
            </div>

            {/* name */}
            <h1 className="font-serif mb-1" style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--text)' }}>
              Rajesh Kumar
            </h1>
            <h1 className="font-serif mb-3" style={{
              fontSize: 'clamp(3rem,7vw,5.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em',
              background: 'linear-gradient(120deg,var(--accent),var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Mahto
            </h1>

            {/* typewriter */}
            <div className="font-mono mb-4" style={{ fontSize: 'clamp(0.9rem,2vw,1.1rem)', color: 'var(--accent2)', minHeight: '1.6em' }}>
              &gt; {text}
              <span style={{ display: 'inline-block', width: 2, height: '1em', background: 'var(--accent2)', marginLeft: 2, verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
            </div>

            <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.85, marginBottom: '2rem' }}>
              Recent CS graduate passionate about building robust full-stack web applications.
              Specializing in Java, Spring Boot, and React.
            </p>

            {/* CTA buttons — 3 buttons: Projects, Connect, Download Resume */}
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-accent px-4 py-2 rounded-3">
                View Projects ↓
              </a>
              <a href="#contact" className="btn btn-ghost-accent px-4 py-2 rounded-3">
                Let's Connect →
              </a>
              <a
                href="/Rajesh_Resume.pdf"
                download="Rajesh_Kumar_Mahto_Resume.pdf"
                className="btn btn-download-resume px-4 py-2 rounded-3 d-inline-flex align-items-center gap-2"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Resume
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="col-lg-4 offset-lg-1 d-none d-lg-block">
            <div className="d-flex flex-column gap-4 text-end">
              {[{ num: '4', label: 'Projects Built' }, { num: '3', label: 'Certifications' }, { num: '8', label: 'Technologies' }].map(s => (
                <div key={s.label}>
                  <div className="font-serif" style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1, color: 'var(--text)' }}>
                    {s.num}<span className="text-accent">+</span>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        animation: 'floatY 2.5s ease-in-out infinite', zIndex: 1,
      }}>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom,var(--muted),transparent)' }} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
