import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiFlask,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiSqlite,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiFlutter,
  SiAxios,
  SiRedux,
  SiJson,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaCode,
  FaCss3Alt,
} from "react-icons/fa";
import "./AboutSection.css";

const technologies = [
  { name: "Python", icon: SiPython, category: "Backend", color: "#FFD43B" },
  { name: "React", icon: SiReact, category: "Frontend", color: "#61DAFB" },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Frontend",
    color: "#F7DF1E",
  },
  { name: "HTML5", icon: SiHtml5, category: "Frontend", color: "#E34F26" },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    category: "Frontend",
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    color: "#06B6D4",
  },
 
  { name: "Node.js", icon: SiNodedotjs, category: "Backend", color: "#83CD29" },
  {
    name: "Express.js",
    icon: SiExpress,
    category: "Backend",
    color: "#F5EEE5",
  },
  { name: "MongoDB", icon: SiMongodb, category: "Database", color: "#47A248" },
  { name: "MySQL", icon: SiMysql, category: "Database", color: "#00758F" },
  {
    name: "Firebase",
    icon: SiFirebase,
    category: "Database",
    color: "#FFCA28",
  },
  { name: "Git", icon: SiGit, category: "Tools", color: "#F05032" },
  { name: "GitHub", icon: SiGithub, category: "Tools", color: "#F5EEE5" },
{
  name: "VS Code",
  icon: VscCode,
  category: "Tools",
  color: "#007ACC",
},
//   { name: "Postman", icon: SiPostman, category: "Tools", color: "#FF6C37" },
  { name: "Figma", icon: SiFigma, category: "Tools", color: "#F24E1E" },
//   { name: "Axios", icon: SiAxios, category: "Tools", color: "#854CE6" },
  { name: "Redux", icon: SiRedux, category: "Tools", color: "#764ABC" },
  { name: "JSON Server", icon: SiJson, category: "Tools", color: "#F5EEE5" },
  { name: "REST APIs", icon: FaCode, category: "Backend", color: "#D9F879" },
];

const filters = ["Full Stack", "Frontend", "Backend", "Database", "Tools"];

export default function AboutSection() {
  const [activeFilter, setActiveFilter] = useState("Full Stack");
  const reduceMotion = useReducedMotion();

  const visibleTechnologies =
    activeFilter === "Full Stack"
      ? technologies
      : technologies.filter((tech) => tech.category === activeFilter);

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <div className="portfolio-about">
      {/* ABOUT ME */}
      <section className="about-section" id="about">
        <div className="about-background-glow" aria-hidden="true" />

        <motion.div
          className="about-copy"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
         
          <h2 className="about-title">
            Turning Ideas
            <br />
            into <span>Real Projects</span>
          </h2>

          <p className="about-description">
            I'm Aswin, a Python full-stack developer who enjoys building useful
            web applications, learning new technologies, and solving real-world
            problems.
          </p>

          <div className="about-actions">
            <a
              className="about-resume-button"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
              <FaArrowRight />
            </a>

            <span className="about-location">
              <FaMapMarkerAlt />
              Based in Kerala, India
            </span>
          </div>
        </motion.div>

        <motion.div
          className="about-portrait-area"
          initial={{ opacity: 0, x: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-glow" />

          <span className="orbit-dot dot-one" />
          <span className="orbit-dot dot-two" />
          <span className="orbit-dot dot-three" />

          <motion.img
            className="about-portrait"
            src="/images/aswin.png"
            alt="Aswin, Python full-stack developer"
            onError={(event) => {
              event.currentTarget.style.visibility = "hidden";
            }}
            animate={reduceMotion ? {} : { y: [0, -7, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="skills-section" id="skills">
        <motion.div
          className="skills-heading"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="skills-heading-copy">
        

            <h2 className="skills-title">
              Tools I <span>Work With</span>
            </h2>
          </div>

          <div
            className="skills-filters"
            role="group"
            aria-label="Filter technologies"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`skills-filter ${
                  activeFilter === filter ? "active" : ""
                }`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div className="skills-grid" layout>
          {visibleTechnologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.div
                className="skill-card"
                key={tech.name}
                layout
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 10,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.25,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -5, transition: { duration: 0.2 } }
                }
              >
                <Icon
                  className="skill-icon"
                  style={{ color: tech.color }}
                  aria-hidden="true"
                />
                <span>{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
