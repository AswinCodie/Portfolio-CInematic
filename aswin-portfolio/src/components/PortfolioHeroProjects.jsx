import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
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
    title: "Campus Bites",
    description:
      "A multi-college food ordering system with menus, order tracking, and an admin dashboard.",
    image: "/campusbites.png",
    tags: ["Python", "Flask", "Flutter", "Database"],
    accent: "canteen",
    href: "#contact",
  },
  {
    number: "02",
    title: "WayPost",
    description:
      "A location-based web experience to discover places, share useful information, and explore.",
    image: "/waypost.png",
    tags: ["React", "Maps API", "Web App"],
    accent: "waypost",
    href: "https://way-post-app.vercel.app/",
  },
  {
    number: "03",
    title: "EDUCHAT AI",
    description:
      "An AI-powered student assistant with Gemini API,English & Malayalam conversations, chat history, and study resources.",
    image: "/educhat.png",
    tags: ["Html/Css", "Gemini API", "Javascript", "AI Chatbot"],
    accent: "ai",
    href: "https://aibot-kmct.onrender.com/user/home.html",
  },
];

const stats = [
  { value: 8, suffix: "+", label: "Projects", symbol: "↗", pad: 2 },
  { value: 10, suffix: "+", label: "Technologies", symbol: "</>" },
  { value: 100, suffix: "%", label: "Passion", symbol: "✳" },
];

const floatingProfiles = [
  { y: [0, -7, 0, 4, 0], rotate: [-10, -7, -12, -8, -10], duration: 5.8 },
  { y: [0, 6, 0, -5, 0], rotate: [11, 14, 8, 13, 11], duration: 6.4 },
  { y: [0, -5, 0, 6, 0], rotate: [-9, -6, -11, -7, -9], duration: 5.4 },
  { y: [0, 7, 0, -4, 0], rotate: [13, 10, 16, 11, 13], duration: 6.1 },
  { y: [0, -6, 0, 4, 0], rotate: [-12, -9, -14, -10, -12], duration: 6.7 },
  { y: [0, 5, 0, -6, 0], rotate: [10, 13, 7, 12, 10], duration: 5.9 },
  { y: [0, -4, 0, 5, 0], rotate: [-12, -9, -14, -10, -12], duration: 6.3 },
  { y: [0, 6, 0, -4, 0], rotate: [10, 13, 7, 12, 10], duration: 5.6 },
];


function StatValue({ stat, isInView, reducedMotion }) {
  const formatValue = (value) =>
    stat.pad ? String(value).padStart(stat.pad, "0") : value;

  if (!isInView) {
    return <strong>{formatValue(0)}{stat.suffix}</strong>;
  }

  if (reducedMotion) {
    return <strong>{formatValue(stat.value)}{stat.suffix}</strong>;
  }

  return <CountingStatValue stat={stat} formatValue={formatValue} />;
}

function CountingStatValue({ stat, formatValue }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, stat.value, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [stat.value]);

  return <strong>{formatValue(displayValue)}{stat.suffix}</strong>;
}

function FloatingTechIcon({
  tech,
  index,
  reducedMotion,
  pointerX,
  pointerY,
}) {
  const { Icon, label, className } = tech;
  const floatingProfile = floatingProfiles[index];
  const baseRotation = floatingProfile.rotate[0];

  // Different strengths create depth between the icons.
  const depth = 12 + (index % 4) * 9;

  const x = useTransform(
    pointerX,
    (value) => value * depth * (index % 2 === 0 ? 1 : -1)
  );

  const y = useTransform(
    pointerY,
    (value) => value * depth * (index % 3 === 0 ? -1 : 1)
  );

  return (
    <motion.div
      className={`tech-float tech-float--${index + 1} ${className} ${
        index < 4 ? "tech-float--behind-portrait" : ""
      }`}
      style={{
        x: reducedMotion ? 0 : x,
        y: reducedMotion ? 0 : y,
      }}
      aria-label={label}
      title={label}
    >
      <motion.div
        className="tech-float__motion"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.85 }}
        animate={
          reducedMotion
            ? { opacity: 1, scale: 1, y: 0, rotate: baseRotation }
            : {
                opacity: 1,
                scale: 1,
                y: floatingProfile.y,
                rotate: floatingProfile.rotate,
              }
        }
        transition={
          reducedMotion
            ? { duration: 0 }
            : {
                opacity: { duration: 0.6, delay: 0.2 + index * 0.07 },
                scale: { duration: 0.6, delay: 0.2 + index * 0.07 },
                y: {
                  duration: floatingProfile.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                },
                rotate: {
                  duration: floatingProfile.duration * 1.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.16,
                },
              }
        }
      >
        <div className="tech-icon__face">
          <Icon aria-hidden="true" />
        </div>
      </motion.div>
    </motion.div>
  );
}


function HeroPortrait({ reducedMotion, pointerX, pointerY }) {
  const portraitX = useTransform(pointerX, (value) => value * 0.22);
  const portraitY = useTransform(pointerY, (value) => value * 0.16);

  return (
    <motion.div
      className="hero-portrait"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 0.8, delay: 0.15 },
        y: { duration: 0.8, delay: 0.15, ease: "easeOut" },
      }}
      style={{
        x: reducedMotion ? 0 : portraitX,
        translateY: reducedMotion ? 0 : portraitY,
      }}
    >
      <div className="portrait-halo" />

      <img
        className="portrait-image"
        src="/aswin-cutout.png"
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

export default function PortfolioHeroProjects({ isReady = true }) {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const statsRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState(0);
  const statsInView = useInView(statsRef, { amount: 0.6 });
  const shouldCountStats = isReady && statsInView;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

const pointerX = useSpring(rawX, {
  stiffness: 100,
  damping: 24,
  mass: 0.6,
});

const pointerY = useSpring(rawY, {
  stiffness: 100,
  damping: 24,
  mass: 0.6,
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

  function updateActiveProject() {
    const container = projectsRef.current;
    if (!container) return;

    const cardWidth = container.querySelector(".project-card")?.offsetWidth;
    if (!cardWidth) return;

    const gap = Number.parseFloat(getComputedStyle(container).gap) || 0;
    setActiveProject(
      Math.max(0, Math.min(projects.length - 1, Math.round(container.scrollLeft / (cardWidth + gap))))
    );
  }

  function goToProject(index) {
    const container = projectsRef.current;
    if (!container) return;

    const card = container.querySelectorAll(".project-card")[index];
    card?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "nearest", inline: "start" });
    setActiveProject(index);
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
              {["I BUILD", "DIGITAL", "EXPERIENCES"].map((line, index) => (
                <span className="hero-title-line" key={line}>
                  <motion.span
                    className={`hero-title-inner ${
                      index === 2 ? "hero-title-accent" : ""
                    }`}
                    initial={
                      reducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 70, filter: "blur(8px)" }
                    }
                    animate={
                      reducedMotion
                        ? { opacity: 1 }
                        : { opacity: 1, y: 0, filter: "blur(0px)" }
                    }
                    transition={{
                      duration: reducedMotion ? 0 : 0.9,
                      delay: reducedMotion ? 0 : 0.15 + index * 0.17,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
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

          <div className="hero-actions hero-actions--mobile" aria-label="Hero actions">
            <a className="button-primary" href="#projects">
              Explore Projects <span></span>
            </a>

            <a className="button-secondary" href="#contact">
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div ref={statsRef} className="stats-bar">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-symbol">{stat.symbol}</span>
              <div>
                <span className="stat-label">{stat.label}</span>
                <StatValue
                  stat={stat}
                  isInView={shouldCountStats}
                  reducedMotion={reducedMotion}
                />
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

        <div
          ref={projectsRef}
          className="projects-grid"
          onScroll={updateActiveProject}
          aria-label="Selected projects"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        <div className="projects-mobile-navigation" aria-label="Project carousel controls">
          <button
            type="button"
            className="projects-carousel-button"
            onClick={() => goToProject(activeProject - 1)}
            disabled={activeProject === 0}
            aria-label="Previous project"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="projects-pagination" aria-label={`Project ${activeProject + 1} of ${projects.length}`}>
            {projects.map((project, index) => (
              <button
                key={project.number}
                type="button"
                className={index === activeProject ? "is-active" : ""}
                onClick={() => goToProject(index)}
                aria-label={`Show ${project.title}`}
                aria-current={index === activeProject ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="projects-carousel-button"
            onClick={() => goToProject(activeProject + 1)}
            disabled={activeProject === projects.length - 1}
            aria-label="Next project"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}
