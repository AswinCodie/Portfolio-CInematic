import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  SiPython,
  SiReact,
  SiFlask,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiPostgresql,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";

import "./PortfolioHeroProjects.css";

const technologies = [
  { Icon: SiPython, label: "Python", className: "python" },
  { Icon: SiReact, label: "React", className: "react" },
  { Icon: SiFlask, label: "Flask", className: "flask" },
  { Icon: SiJavascript, label: "JavaScript", className: "javascript" },
  { Icon: SiHtml5, label: "HTML5", className: "html" },
  { Icon: FaCss3Alt, label: "CSS3", className: "css" },
  { Icon: SiGit, label: "Git", className: "git" },
  { Icon: SiPostgresql, label: "Database", className: "database" },
];

const projects = [
  {
    number: "01",
    title: "Campus Canteen",
    description:
      "A multi-college food ordering system with menus, order tracking, and an admin dashboard.",
    image: "/public/campusbites.png",
    tags: ["Python", "Flask", "Flutter", "Database"],
    accent: "canteen",
    href: "#contact",
  },
  {
    number: "02",
    title: "WayPost",
    description:
      "A location-based web experience to discover places, share useful information, and explore.",
    image: "/public/waypost.png",
    tags: ["React", "Maps API", "Web App"],
    accent: "waypost",
    href: "https://way-post-app.vercel.app/",
  },
  {
    number: "03",
    title: "EDUCHAT AI",
    description:
      "An AI-powered student assistant with Gemini API,English & Malayalam conversations, chat history, and study resources.",
    image: "/public/educhat.png",
    tags: ["Html/Css", "Gemini API", "Javascript", "AI Chatbot"],
    accent: "ai",
    href: "https://aibot-kmct.onrender.com/user/home.html",
  },
];

const stats = [
  { value: "08+", label: "Projects", symbol: "↗" },
  { value: "10+", label: "Technologies", symbol: "</>" },
  { value: "100%", label: "Passion", symbol: "✳" },
];

function FloatingTechIcon({ tech, index, reducedMotion, pointerX, pointerY }) {
  const { Icon, label, className } = tech;

  const x = useTransform(pointerX, (value) => value * (index % 2 ? -0.5 : 0.5));
  const y = useTransform(pointerY, (value) => value * (index % 2 ? 0.4 : -0.4));

  return (
    <motion.div
      className={`tech-float tech-float--${index + 1} ${className}`}
      initial={{ opacity: 0, scale: 0.65, y: 28 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: reducedMotion ? 0 : [0, -13, 0, 9, 0],
        rotateZ: reducedMotion ? 0 : [0, 4, -3, 2, 0],
      }}
      transition={{
        opacity: { duration: 0.65, delay: 0.2 + index * 0.08 },
        scale: { duration: 0.65, delay: 0.2 + index * 0.08 },
        y: {
          duration: 5 + (index % 3),
          repeat: reducedMotion ? 0 : Infinity,
          ease: "easeInOut",
          delay: index * 0.25,
        },
        rotateZ: {
          duration: 7 + (index % 4),
          repeat: reducedMotion ? 0 : Infinity,
          ease: "easeInOut",
        },
      }}
      style={{
        x: reducedMotion ? 0 : x,
        translateY: reducedMotion ? 0 : y,
      }}
      aria-label={label}
      title={label}
    >
      <div className="tech-icon__face">
        <Icon aria-hidden="true" />
      </div>
    </motion.div>
  );
}

function HeroPortrait({ reducedMotion, pointerX, pointerY }) {
  const portraitX = useTransform(pointerX, (value) => value * 0.22);
  const portraitY = useTransform(pointerY, (value) => value * 0.16);

  return (
    <motion.div
      className="hero-portrait"
      initial={{ opacity: 0, y: 35 }}
      animate={{
        opacity: 1,
        y: reducedMotion ? 0 : [0, -9, 0, 5, 0],
      }}
      transition={{
        opacity: { duration: 0.9, delay: 0.15 },
        y: {
          duration: 6,
          repeat: reducedMotion ? 0 : Infinity,
          ease: "easeInOut",
        },
      }}
      style={{
        x: reducedMotion ? 0 : portraitX,
        translateY: reducedMotion ? 0 : portraitY,
      }}
    >
      <div className="portrait-halo" />

      <img
        className="portrait-image"
        src="/public/aswin-cutout.png"
        alt="Aswin, Python full-stack developer"
        fetchPriority="high"
      />

      <div className="portrait-bottom-glow" />
    </motion.div>
  );
}

function ProjectCard({ project, index, reducedMotion }) {
  return (
    <motion.article
      className={`project-card project-card--${project.accent}`}
      initial={reducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={
        reducedMotion ? undefined : { y: -7, transition: { duration: 0.25 } }
      }
    >
      <a
        className="project-card__link"
        href={project.href}
        aria-label={`Learn more about ${project.title}`}
      >
        <div className="project-card__visual">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
          />

          <span className="project-card__number">{project.number}</span>

          <span className="project-card__arrow" aria-hidden="true">
            ↗
          </span>
        </div>

        <div className="project-card__body">
          <div className="project-card__heading">
            <h3>{project.title}</h3>
            <span className="project-card__external" aria-hidden="true">
              ↗
            </span>
          </div>

          <p>{project.description}</p>

          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </a>
    </motion.article>
  );
}

export default function PortfolioHeroProjects() {
  const heroRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const pointerX = useSpring(rawX, {
    stiffness: 90,
    damping: 22,
    mass: 0.5,
  });

  const pointerY = useSpring(rawY, {
    stiffness: 90,
    damping: 22,
    mass: 0.5,
  });

  function handlePointerMove(event) {
    if (reducedMotion || window.innerWidth < 768) return;

    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;

    rawX.set((event.clientX - rect.left) / rect.width - 0.5);
    rawY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function resetPointer() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <main className="portfolio-shell">
      <section
        ref={heroRef}
        className="hero-section"
        id="home"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--left" aria-hidden="true" />
        <div className="hero-glow hero-glow--right" aria-hidden="true" />

        <header className="site-header">
          <a className="brand" href="#home">
            <span className="brand__name">ASWIN</span>
            <span className="brand__role">
              Python Full-Stack
              <br />
              Developer
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="header-cta" href="#contact">
            Let&apos;s Talk <span>↗</span>
          </a>
        </header>

        <div className="hero-main">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-title">
              <span>I BUILD</span>
              <span>DIGITAL</span>
              <span>EXPERIENCES</span>
            </h1>

            <p className="hero-subtitle">
              Python Full-Stack Developer <span>·</span> React <span>·</span>{" "}
              Flask <span>·</span> APIs
            </p>

            <p className="hero-description">
              I&apos;m Aswin, a developer who loves building modern web
              applications, useful tools, and real-world solutions.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore Projects <span>→</span>
              </a>

              <a className="button-secondary" href="#contact">
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>

          <div className="hero-stage">
            <div className="orbit orbit--one" aria-hidden="true" />
            <div className="orbit orbit--two" aria-hidden="true" />
            <div className="orbit orbit--three" aria-hidden="true" />

            <HeroPortrait
              reducedMotion={reducedMotion}
              pointerX={pointerX}
              pointerY={pointerY}
            />

            {technologies.map((tech, index) => (
              <FloatingTechIcon
                key={tech.label}
                tech={tech}
                index={index}
                reducedMotion={reducedMotion}
                pointerX={pointerX}
                pointerY={pointerY}
              />
            ))}

            <div className="handwritten-note" aria-hidden="true">
              Build.
              <br />
              Learn.
              <br />
              Create.
              <br />
              Repeat.
            </div>
          </div>
        </div>

        <div className="stats-bar">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-symbol">{stat.symbol}</span>
              <div>
                <span className="stat-label">{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-heading">
          <div>
            <span className="eyebrow">SELECTED WORK · 01—03</span>
            <h2>
              Some Things I&apos;ve <span>Built</span>
            </h2>
          </div>

          <a className="projects-view-all" href="#contact">
            Let&apos;s build something <span>↗</span>
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        <div className="projects-footer">
          <span>DESIGNED WITH INTENTION.</span>
          <span>BUILT TO BE USEFUL.</span>
        </div>
      </section>
    </main>
  );
}
