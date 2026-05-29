import { useInView } from "../hooks/useInView";

// const PROJECTS = [
//   { num:'01', color:'#7c5cfc', category:'Full Stack', tagClass:'tag-violet',
//     title:'E-Commerce Web App',
//     desc:'Real-time messaging app with Firebase, user profiles, private & group chats.',
//     features:['Real-time sync via Firebase','Private & group chats','Secure auth & message storage'],
//     stack:['React.js','Firebase','JavaScript'] },
//   { num:'02', color:'#00d4aa', category:'Frontend', tagClass:'tag-teal',
//     title:'Weather Web App',
//     desc:'Live weather dashboard powered by OpenWeatherMap API with auto-location detection.',
//     features:['OpenWeatherMap API integration','City search & GPS detection','Dynamic weather backgrounds'],
//     stack:['JavaScript','REST API','HTML5','CSS3'] },
//   { num:'03', color:'#f5c842', category:'Backend', tagClass:'tag-gold',
//     title:'Bank Management System',
//     desc:'Full-featured banking system for deposits, withdrawals, and admin operations.',
//     features:['Account creation & history','Admin dashboard & reports','Encrypted secure login'],
//     stack:['Java','Spring Boot','MySQL'] },
//   { num:'04', color:'#ff5f7e', category:'Full Stack', tagClass:'tag-coral',
//     title:'Product Management System',
//     desc:'Inventory management with CRUD, stock tracking, and low-stock alerts.',
//     features:['Add / update / delete products','Real-time inventory alerts','Secure backend auth'],
//     stack:['Spring Boot','React.js','MongoDB'] },
// ]

const PROJECTS = [
  {
    num: "01",
    color: "#7c5cfc",
    category: "Full Stack",
    tagClass: "tag-violet",
    title: "E-Commerce Web App",
    link: "https://raj-commerce.netlify.app/",
    desc: "A full-stack e-commerce platform with secure authentication, product management, shopping cart, and seamless online ordering experience.",
    features: [
      "JWT-based secure authentication",
      "Role-based access (Admin/User)",
      "Product search & category filtering",
      "Shopping cart & wishlist management",
      "Order placement & tracking",
      "Online payment integration",
      "Admin dashboard for product management",
      "Responsive UI for all devices",
    ],
    stack: [
      "React.js",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "REST API",
      "Bootstrap",
      "Java",
    ],
  },

  {
    num: "02",
    color: "#00d4aa",
    category: "Full Stack",
    tagClass: "tag-teal",
    title: "SmartSchool ERP",
    link: "https://smartschoolerp1.netlify.app/",
    desc: "A complete school management system to manage students, teachers, attendance, timetable, library, and academic activities efficiently.",
    features: [
      "Role-based login system",
      "Student & teacher management",
      "Attendance tracking system",
      "Class timetable management",
      "Library management module",
      "Fee & academic record management",
      "Notice board & announcements",
      "Dashboard analytics & reports",
    ],
    stack: [
      "React.js",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "REST API",
      "Bootstrap",
      "Java",
    ],
  },
  {
    num: "03",
    color: "#f5c842",
    category: "Full Stack",
    tagClass: "tag-gold",
    title: "Learning Management System",
    link: "https://github.com/rajeshjbk/LearningManagementSystem-Backend.git",
    desc: "A comprehensive Learning Management System (LMS) designed for online course management, student enrollment, progress tracking, and secure role-based access.",
    features: [
      "Role-based authentication (Admin/Instructor/Student)",
      "Course & category management",
      "Student enrollment system",
      "Video lecture & content management",
      "Progress tracking dashboard",
      "JWT-based secure authentication",
      "Instructor course ownership",
      "Responsive UI for all devices",
    ],
    stack: [
      "React.js",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "REST API",
      "Bootstrap",
      "Java",
    ],
  },
];

function ProjectCard({ p, i, visible }) {
  return (
    <div className="col-sm-6 col-xl-3 project-card-wrap">
      <div
        className={`themed-card h-100 p-4 fade-up ${visible ? "visible" : ""}`}
        style={{
          "--card-accent": p.color,
          transitionDelay: `${i * 0.12}s`,
          position: "relative",
        }}
      >
        <div
          className="font-serif position-absolute top-0 end-0 pe-3 pt-1 user-select-none"
          style={{
            fontSize: "4.5rem",
            fontWeight: 900,
            color: "rgba(124,92,252,0.06)",
            lineHeight: 1,
          }}
        >
          {p.num}
        </div>

        <div
          className="font-mono mb-2"
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: p.color,
          }}
        >
          {p.category}
        </div>

        {/* Clickable Project Title */}
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <h3
            className="font-serif mb-2"
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text)",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = p.color;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "var(--text)";
            }}
          >
            {p.title} ↗
          </h3>
        </a>

        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--muted)",
            lineHeight: 1.75,
          }}
          className="mb-3"
        >
          {p.desc}
        </p>

        <ul className="list-unstyled mb-3">
          {p.features.map((f) => (
            <li
              key={f}
              className="mb-1"
              style={{
                fontSize: "0.8rem",
                color: "var(--muted)",
                paddingLeft: "1rem",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: p.color,
                }}
              >
                →
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="d-flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className={`tag ${p.tagClass}`}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, visible] = useInView();
  return (
    <section id="projects" className="py-5 bg-s2">
      <div className="container py-4">
        <div className="eyebrow mb-2">03 / Projects</div>
        <h2
          className="font-serif mb-5"
          style={{
            fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}
        >
          Featured Work
        </h2>
        <div className="row g-4" ref={ref}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.num} p={p} i={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
