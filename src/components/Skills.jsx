import { useInView } from '../hooks/useInView'

const GROUPS = [
  { icon:'☕', title:'Backend',      tagClass:'tag-violet', iconBg:'rgba(124,92,252,0.14)',
    skills:['Core Java','Java 8','Advanced Java','Spring Boot','Spring MVC','Hibernate','JPA','REST APIs'] },
  { icon:'⚛',  title:'Frontend',    tagClass:'tag-teal',   iconBg:'rgba(0,212,170,0.11)',
    skills:['React.js','JavaScript','HTML5','CSS3','Bootstrap'] },
  { icon:'🗄',  title:'Databases',   tagClass:'tag-gold',   iconBg:'rgba(245,200,66,0.11)',
    skills:['MySQL','Oracle','MongoDB','TiDB'] },
  { icon:'🔧', title:'Tools & DevOps',tagClass:'tag-coral', iconBg:'rgba(255,95,126,0.11)',
    skills:['Git','Maven','Gradle','Postman','Swagger API','JUnit5','Eclipse','STS','VS Code','Render','Netlify'] },
]

export default function Skills() {
  const [ref, visible] = useInView()

  return (
    <section id="skills" className="py-5 bg-s1">
      <div className="container py-4">
        <div className="eyebrow mb-2">02 / Skills</div>
        <h2 className="font-serif mb-5" style={{fontSize:'clamp(1.8rem,3.5vw,2.6rem)',fontWeight:700,letterSpacing:'-0.02em',color:'var(--text)'}}>
          Technical Expertise
        </h2>
        <div className="row g-4" ref={ref}>
          {GROUPS.map((g,i) => (
            <div key={g.title} className="col-sm-6 col-xl-3">
              <div className={`themed-card skill-card-hover h-100 p-4 fade-up ${visible?'visible':''}`}
                style={{transitionDelay:`${i*0.1}s`}}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center rounded-3"
                    style={{width:42,height:42,background:g.iconBg,fontSize:'1.2rem',flexShrink:0}}>
                    {g.icon}
                  </div>
                  <span className="fw-semibold" style={{color:'var(--text)'}}>{g.title}</span>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {g.skills.map(s => (
                    <span key={s} className={`tag ${g.tagClass}`}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
