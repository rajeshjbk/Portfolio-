import { useInView } from '../hooks/useInView'

const CERTS = [
  { icon:'🏆', title:'Java Full Stack Certification', issuer:'Naresh IT, Hyderabad',    color:'#7c5cfc' },
  { icon:'💻', title:'Web Developer Internship',      issuer:'TechnoHacks Edu Tech',    color:'#00d4aa' },
  { icon:'🌐', title:'AICTE Virtual Internship',      issuer:'Cisco · Program 2024',    color:'#f5c842' },
]
const HOBBIES = ['Coding','Traveling','Learning New Tools','Playing Cricket']

export default function Certifications() {
  const [ref, visible] = useInView()
  return (
    <section className="py-5 bg-s2">
      <div className="container py-4">
        <div className="eyebrow mb-2">05 / Certifications</div>
        <h2 className="font-serif mb-5" style={{fontSize:'clamp(1.8rem,3.5vw,2.6rem)',fontWeight:700,letterSpacing:'-0.02em',color:'var(--text)'}}>
          Awards & Recognition
        </h2>
        <div className="row g-4 mb-5" ref={ref}>
          {CERTS.map((c,i) => (
            <div key={c.title} className="col-md-4">
              <div className={`cert-card-custom h-100 fade-up ${visible?'visible':''}`}
                style={{'--card-accent':c.color,transitionDelay:`${i*0.14}s`}}>
                <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{width:42,height:42,background:`${c.color}1a`,fontSize:'1.2rem'}}>
                  {c.icon}
                </div>
                <div>
                  <div className="fw-semibold mb-1" style={{fontSize:'0.92rem',color:'var(--text)'}}>{c.title}</div>
                  <div style={{fontSize:'0.8rem',color:'var(--muted)'}}>{c.issuer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h4 className="font-serif mb-3" style={{fontWeight:700,fontSize:'1.3rem',color:'var(--text)'}}>Beyond the Code</h4>
        <div className="d-flex flex-wrap gap-2">
          {HOBBIES.map(h => (
            <span key={h} className="tag tag-soft px-3 py-2 rounded-pill" style={{fontSize:'0.85rem',cursor:'default'}}>{h}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
