import { useInView } from '../hooks/useInView'

const LINKS = [
  { label:'Email',    value:'mahtorajeshkumar8920@gmail.com', href:'mailto:mahtorajeshkumar8920@gmail.com', icon:'✉️' },
  { label:'Phone',    value:'+91 8920170964',                  href:'tel:8920170964',                        icon:'📞' },
  { label:'GitHub',   value:'github.com/rajeshjbk',            href:'https://github.com/rajeshjbk',          icon:'⌨️' },
  { label:'LinkedIn', value:'linkedin.com/in/rajesh-kumar',    href:'https://linkedin.com/in/rajesh-kumar-mahto01012001', icon:'🔗' },
]

export default function Contact() {
  const [ref, visible] = useInView()
  return (
    <section id="contact" className="py-5 bg-s1">
      <div className="container py-4 text-center">
        <div className="eyebrow mb-2 justify-content-center">06 / Contact</div>
        <h2 className="font-serif mb-3" style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.02em',color:'var(--text)'}}>
          Let's Work Together
        </h2>
        <p style={{color:'var(--muted)',maxWidth:460,margin:'0 auto 3rem',lineHeight:1.85}}>
          Actively seeking Java Full Stack Developer roles. Feel free to reach out — I'd love to connect!
        </p>
        <div className="row justify-content-center g-3" ref={ref}>
          {LINKS.map((l,i) => (
            <div key={l.label} className="col-sm-6 col-lg-3">
              <a href={l.href}
                className={`contact-link-card fade-up ${visible?'visible':''}`}
                target={l.href.startsWith('http')?'_blank':undefined}
                rel="noreferrer"
                style={{transitionDelay:`${i*0.1}s`}}>
                <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 tag-violet"
                  style={{width:40,height:40,fontSize:'1.1rem'}}>
                  {l.icon}
                </div>
                <div className="text-start overflow-hidden">
                  <div className="font-mono" style={{fontSize:'0.64rem',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.1em'}}>{l.label}</div>
                  <div style={{fontSize:'0.82rem',fontWeight:500,color:'var(--text)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{l.value}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
