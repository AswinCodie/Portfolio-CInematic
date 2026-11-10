import React from "react";
import { GraduationCap, BriefcaseBusiness, ArrowUpRight } from "lucide-react";
import "./EducationExperience.css";


const education = [
  {
    period: "BCA",
    title: "Bachelor of Computer Applications",
    institution: "GEMS College, Ramapuram, Malappuram",
    description:
      "Building a foundation in programming, computer applications, and software development.",
    status: "Degree",
  },
  {
    period: "FULL-STACK DEVELOPMENT",
    title: "Python Full-Stack Development",
    institution: "Betterinu, Perinthalmanna",
    description:
      "Learning Python backend development, React, and modern web application development.",
    status: "Professional Training",
  },
];

const experience = [
  {
    period: "FREELANCE",
    title: "Freelance Web Developer",
    institution: "Independent Projects",
    description:
      "Designed and developed responsive websites with a focus on usability, clean interfaces, and practical solutions.",
    status: "5+ Projects Completed",
  },
];
function JourneyCard({ item, type, index }) {
  const Icon = type === "education" ? GraduationCap : BriefcaseBusiness;

  return (
    <article className="journey-card" style={{ "--card-index": index }}>
      <div className="journey-card-top">
        <span className="journey-icon">
          <Icon size={21} />
        </span>

        <span className="journey-period">{item.period}</span>
        <ArrowUpRight className="journey-arrow" size={19} />
      </div>

      <h3>{item.title}</h3>
      <p className="journey-institution">{item.institution}</p>
      <p className="journey-description">{item.description}</p>

      <span className="journey-status">{item.status}</span>
    </article>
  );
}

export default function EducationExperience() {
  return (
    <section className="journey-section" id="education-experience">
      <div className="journey-heading">
       
        <h2>
          Education &amp; <span>Experience</span>
        </h2>

        <p>
          My learning journey, technical foundation, and experience
          building digital experiences.
        </p>
      </div>

    <div className="journey-grid">
  {education.map((item, index) => (
    <JourneyCard
      key={item.title}
      item={item}
      type="education"
      index={index}
    />
  ))}

  {experience.map((item, index) => (
    <JourneyCard
      key={item.title}
      item={item}
      type="experience"
      index={education.length + index}
    />
  ))}
</div>
</section>
  );
}