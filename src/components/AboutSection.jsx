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
  FaYoutube,
  FaVideo,
  FaPalette,
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

      {/* ABOUT ME */}
      <section className="about-section" id="about">
        <motion.div
          className="about-copy"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="about-eyebrow">BEYOND DEVELOPMENT</span>

          <h2 className="about-title">
            Developer by passion.
            <br />
            <span>Creative by nature.</span>
          </h2>

          <p className="about-description">
            I'm Aswin, a developer passionate about building modern web
            applications and exploring technology. Beyond coding, I run Techy
            Djinn, my technology-focused YouTube channel with 9K+ subscribers.
            <br />
            <br />
            Creating content has helped me explore video editing, graphic
            design, visual storytelling and communication. I enjoy experimenting
            with ideas, learning new skills and bringing creativity into
            everything I build.
          </p>

          <div className="about-actions">
            <a href="/projects" className="about-resume-button">
              Explore My Projects
              <FaArrowRight />
            </a>

            <a
              href="https://www.youtube.com/@Techydjinn"
              target="_blank"
              rel="noopener noreferrer"
              className="about-youtube-button"
            >
              <FaYoutube />
              Techy Djinn
            </a>
          </div>
        </motion.div>

        {/* CREATIVE INTERESTS */}
        <motion.div
          className="about-creative-area"
          initial={{ opacity: 0, x: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="creative-panel">
            <div className="creative-panel-header">
              <div>
                <span className="creative-panel-label">
                  A LITTLE MORE ABOUT ME
                </span>
                <h3>Beyond the code.</h3>
              </div>

              <span className="creative-panel-icon">
                <FaCode />
              </span>
            </div>

            <div className="creative-interest-grid">
              <div className="creative-interest-card">
                <FaCode className="interest-icon development-icon" />
                <div>
                  <h4>Web Development</h4>
                  <span>Building digital experiences</span>
                </div>
              </div>

              <div className="creative-interest-card">
                <FaYoutube className="interest-icon youtube-icon" />
                <div>
                  <h4>Content Creation</h4>
                  <span>Techy Djinn · YouTube</span>
                </div>
              </div>

              <div className="creative-interest-card">
                <FaVideo className="interest-icon editing-icon" />
                <div>
                  <h4>Video Editing</h4>
                  <span>Editing & storytelling</span>
                </div>
              </div>

              <div className="creative-interest-card">
                <FaPalette className="interest-icon design-icon" />
                <div>
                  <h4>Graphic Design</h4>
                  <span>Visuals & creativity</span>
                </div>
              </div>
            </div>

            <div className="creative-channel-highlight">
              <div className="channel-youtube-icon">
                <FaYoutube />
              </div>

              <div className="channel-info">
                <span>MY TECH YOUTUBE CHANNEL</span>
                <h4>Techy Djinn</h4>
              </div>

              <div className="channel-subscribers">
                <strong>9K+</strong>
                <span>Subscribers</span>
              </div>
            </div>
          </div>
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
