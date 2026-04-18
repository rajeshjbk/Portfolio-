export default function Footer() {
  return (
    <footer className="py-4 bg-s2" style={{borderTop:'1px solid var(--border)'}}>
      <div className="container d-flex flex-wrap align-items-center justify-content-between gap-2">
        <span className="font-mono" style={{fontSize:'0.74rem',color:'var(--muted)'}}>
          © 2026 <span className="text-accent">Rajesh</span> · All rights reserved
        </span>
        <div className="d-flex align-items-center gap-2">
          <span className="font-mono" style={{fontSize:'0.72rem',color:'var(--muted)'}}>Built with</span>
          <span className="tag tag-violet">React 19</span>
          <span className="tag tag-teal">Bootstrap 5</span>
          <span className="tag tag-gold">Vite</span>
        </div>
      </div>
    </footer>
  )
}
