import { useInView } from '../hooks/useInView'

const EDU = [
  { year:'2021 – 2025', degree:'B.Tech — Computer Science Engineering', school:'Meerut Institute of Technology, Meerut', score:'75.6%', highlight:true },
  { year:'2019 – 2021', degree:'Intermediate (Science)', school:'Inter Science College, Hazaribagh', score:'76.8%' },
  { year:'2018 – 2019', degree:'Matriculation', school:'Adiwasi High School, Chappargarha', score:'78.4%' },
]

export default function Education() {
  const [ref, visible] = useInView()
  return (
    <section id="education" className="py-5 bg-s1">
      <div className="container py-4">
        <div className="eyebrow mb-2">04 / Education</div>
        <h2 className="font-serif mb-5" style={{fontSize:'clamp(1.8rem,3.5vw,2.6rem)',fontWeight:700,letterSpacing:'-0.02em',color:'var(--text)'}}>
          Academic Background
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-8" ref={ref}>
            <div style={{position:'relative'}}>
              <div style={{position:'absolute',left:143,top:0,bottom:0,width:1,background:'linear-gradient(to bottom,var(--accent),transparent)',opacity:0.3}}/>
              {EDU.map((e,i) => (
                <div key={e.year} className={`edu-item d-flex gap-4 mb-5 fade-up ${visible?'visible':''}`}
                  style={{transitionDelay:`${i*0.18}s`,position:'relative'}}>
                  <div className="text-end flex-shrink-0 font-mono"
                    style={{width:130,fontSize:'0.75rem',color:'var(--muted)',paddingTop:4}}>
                    {e.year}
                  </div>
                  <div className="edu-dot flex-shrink-0" style={{position:'absolute',left:137,top:6,zIndex:1}}/>
                  <div style={{paddingLeft:'1.5rem'}}>
                    <div className="themed-card p-3" style={{borderRadius:12,transition:'border-color .3s,transform .3s,box-shadow .3s'}}>
                      <div className="fw-semibold mb-1" style={{fontSize:'0.95rem',color:'var(--text)'}}>{e.degree}</div>
                      <div style={{fontSize:'0.82rem',color:'var(--muted)',marginBottom:8}}>{e.school}</div>
                      <span className={`tag ${e.highlight?'tag-violet':'tag-teal'}`} style={{fontSize:'0.72rem'}}>
                        {e.highlight&&'★ '}{e.score}
                      </span>
                    </div>
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
