
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";
import "./ProjectSection.css";

const projects = [
  {
    number: "01",
    title: "Campus Bites",
    description:
      "A multi-college food ordering system with menus, order tracking, and an admin dashboard.",
    image: "/campusbites.png",
    tags: ["HTML/CSS", "JSON", "MongoDB", "Node.js"],
    accent: "canteen",
    href: "https://campus-bites-j72t.onrender.com/",
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

export default function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="all-projects-page">
      <section className="projects-section" id="projects">
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
        

          <h2 className="projects-title">
            Some Things <span>I've Built.</span>
          </h2>

          <p className="projects-subtitle">
            A collection of web applications and digital
            experiences I've brought to life.
          </p>
        </div>

      
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            className="project-card"
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 30,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: reduceMotion ? 0 : index * 0.12,
            }}
            whileHover={
              reduceMotion ? undefined : { y: -6 }
            }
          >
          <a
  href={project.href}
  target="_blank"
  rel="noopener noreferrer"
  className="project-image-link"
  aria-label={`Visit ${project.title}`}
>
  <div className={`project-image ${project.accent}`}>
    <img
      src={project.image}
      alt={`${project.title} project preview`}
      loading="lazy"
    />

    <span className="project-number">
      {project.number}
    </span>

    <span className="project-image-arrow">
      <FaArrowUpRightFromSquare />
    </span>
  </div>
</a>

            <div className="project-info">
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <FaArrowUpRightFromSquare className="project-arrow" />
              </div>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
{/* 
              <div className="project-card-actions">
                <Link to={`/projects/${project.slug}`}>
                  View Case Study
                  <FaArrowRight />
                </Link>

                {project.href.startsWith("https://") && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <FaArrowUdpRightFromSquare />
                  </a>
                )}
              </div> */}
            </div>
          </motion.article>
        ))}
      </div>
      </section>
    </main>
  );
}
