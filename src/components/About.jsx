import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="about" className="py-5 bg-s2">
      <div className="container py-4">
        <div className="row align-items-center g-5" ref={ref}>

          <div className={`col-lg-4 text-center fade-up ${visible ? 'visible' : ''}`}>
            <div className="mx-auto d-flex align-items-center justify-content-center rounded-circle font-serif avatar-ring"
              style={{
                width:200,height:200,
                background:'linear-gradient(135deg,rgba(124,92,252,0.22),rgba(0,212,170,0.14))',
                border:'2px solid var(--border)',
                fontSize:'3.5rem',fontWeight:900,color:'var(--accent)',letterSpacing:'-0.03em',cursor:'default',
              }}>
              RKM
            </div>
            <div className="mt-4">
              <div className="fw-semibold fs-5" style={{color:'var(--text)'}}>Rajesh Kumar Mahto</div>
              <div className="font-mono mt-1" style={{fontSize:'0.78rem',color:'var(--accent2)'}}>Software Developer</div>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://github.com/rajeshjbk" target="_blank" rel="noreferrer"
                className="btn btn-ghost-accent btn-sm px-3 rounded-pill" style={{fontSize:'0.78rem'}}>GitHub</a>
              <a href="https://linkedin.com/in/rajesh-kumar-mahto01012001" target="_blank" rel="noreferrer"
                className="btn btn-accent btn-sm px-3 rounded-pill" style={{fontSize:'0.78rem'}}>LinkedIn</a>
            </div>
          </div>

          <div className={`col-lg-8 fade-up ${visible ? 'visible' : ''}`} style={{transitionDelay:'0.15s'}}>
            <div className="eyebrow mb-2">01 / About</div>
            <h2 className="font-serif mb-4" style={{fontSize:'clamp(1.8rem,3.5vw,2.6rem)',fontWeight:700,letterSpacing:'-0.02em',color:'var(--text)'}}>
              Crafting Code,<br/>Building Futures
            </h2>
            <p style={{color:'var(--muted)',lineHeight:1.9}} className="mb-3">
              I'm a recent Computer Science Engineering graduate from Meerut Institute of Technology (2025),
              passionate about building robust and scalable web applications with Java-based backends and modern React frontends.
            </p>
            <p style={{color:'var(--muted)',lineHeight:1.9}} className="mb-4">
              I hold a Java Full Stack certification from Naresh IT, Hyderabad, and have completed internship
              programs with TechnoHacks and Cisco AICTE. Actively seeking my first professional role.
            </p>
            <div className="row g-3">
              {[
                {label:'Location',value:'India'},
                {label:'Degree',value:'B.Tech CSE'},
                {label:'Available',value:'Immediately'},
                {label:'Email',value:'mahtorajeshkumar8920@gmail.com'},
              ].map(f => (
                <div className="col-sm-6" key={f.label}>
                  <div className="themed-card p-3" style={{borderRadius:10}}>
                    <div className="font-mono mb-1" style={{fontSize:'0.66rem',color:'var(--muted)',letterSpacing:'0.1em',textTransform:'uppercase'}}>{f.label}</div>
                    <div style={{fontSize:'0.88rem',fontWeight:500,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',color:'var(--text)'}}>{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
