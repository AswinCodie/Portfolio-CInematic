// src/components/ContactFooter.jsx

import { useState } from "react";
import {
  FaArrowRight,
  FaArrowUp,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaLocationDot,
  FaMessage,
  FaCode,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import "./ContactFooter.css";

const socialLinks = [
  { label: "GitHub", icon: FaGithub, href: "https://github.com/aswinCodie" },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/aswin-krishna-p/",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/asweiinn_",
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    href: "https://youtube.com/@Techydjinn/",
  },
];

const projects = [
  { label: "Campus Bites", href: "#projects" },
  { label: "WayPost", href: "#projects" },
  { label: "EDUCHAT AI", href: "#projects" },
];

export default function ContactFooter() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const phone = "+919037552218"; // Your WhatsApp number with country code

    const message = `Hello Aswin!

Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}`;

    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setStatus("WhatsApp opened with your message prepared.");
  }

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-grid-bg" aria-hidden="true" />
        <div className="contact-orbit contact-orbit--one" aria-hidden="true" />
        <div className="contact-orbit contact-orbit--two" aria-hidden="true" />

        <div className="contact-container">
          <div className="contact-intro">
            {/* <div className="contact-eyebrow">
                            <span className="contact-status-dot" />
                            CONTACT
                            <span className="contact-eyebrow-caption">
                                LET'S BUILD SOMETHING GREAT
                            </span>
                        </div> */}

            <h2 className="contact-heading">
              LET'S WORK
              <span>
                TOGETHER<em>.</em>
              </span>
            </h2>

            <p className="contact-description">
              Have a project, collaboration idea, or just want to say hello? I'm
              always open to discussing new opportunities.
            </p>

            <div className="contact-details">
              <a
                className="contact-detail-card"
                href="mailto:aswinasus233@gmail.com"
              >
                <span className="contact-detail-icon">
                  <FaEnvelope />
                </span>
                <span className="contact-detail-copy">
                  <small>EMAIL</small>
                  <strong>aswinasus233@gmail.com</strong>
                </span>
                <FaArrowUpRightFromSquare className="contact-detail-arrow" />
              </a>

              <a
                className="contact-detail-card"
                href="https://instagram.com/asweiinn_"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-detail-icon">
                  <FaMessage />
                </span>
                <span className="contact-detail-copy">
                  <small>DM ME</small>
                  <strong>Let's connect on Instagram</strong>
                </span>
                <FaArrowUpRightFromSquare className="contact-detail-arrow" />
              </a>

              <div className="contact-detail-card">
                <span className="contact-detail-icon">
                  <FaLocationDot />
                </span>
                <span className="contact-detail-copy">
                  <small>LOCATION</small>
                  <strong>Kottakkal, Kerala, India</strong>
                </span>
              </div>
            </div>

            <div className="contact-socials">
              <span className="contact-socials-label">FIND ME ONLINE</span>
              <div className="contact-social-links">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <div className="contact-form-top">
              <h3>
                <span>SEND</span> A MESSAGE
              </h3>
              <FaCode aria-hidden="true" />
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Tell me about your project, idea or just say hello..."
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <div className="contact-form-bottom">
                <p className="contact-response-note">
                  {/* <span></span> Let's create something meaningful. */}
                </p>

                <button className="contact-submit" type="submit">
                  Send Message <FaArrowRight />
                </button>
              </div>

              {status && (
                <p className="contact-form-status" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <div className="footer-top-link">
          <span />
          <a href="#home" aria-label="Scroll to top">
            <small>BACK TO TOP</small>
            <span className="footer-top-icon">
              <FaArrowUp />
            </span>
          </a>
          <span />
        </div>

        <div className="footer-content">
          <div className="footer-brand">
            <a className="footer-logo" href="#home">
              {/* <span className="footer-logo-mark">A</span> */}
              Aswin<span className="footer-logo-period">.</span>
            </a>

            <p>
              A Python Full-Stack Developer building practical solutions and
              meaningful digital experiences.
            </p>

            <div className="footer-socials">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <FooterLinks
            title="NAVIGATION"
            links={[
              ["Home", "#home"],
              ["Projects", "#projects"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ]}
          />

          <FooterLinks title="PROJECTS" links={projects} />

          <FooterLinks
            title="EXPLORE"
            links={[
              ["Resume", "/resume.pdf"],
              ["GitHub", "https://github.com/aswinCodie"],
              ["LinkedIn", "https://www.linkedin.com/in/aswin-krishna-p/"],
            ]}
          />
        </div>

        <div className="footer-image-wrap">
          <img
            className="footer-coding-image"
            src="/FooterImage.png"
            alt="A cinematic, neon-lit workspace with a developer coding at a computer"
            loading="lazy"
          />
          <div className="footer-image-overlay" />

          <div className="footer-image-bottom">
            <span>
              © {new Date().getFullYear()} Aswin. All rights reserved.
            </span>
            <span className="footer-made-with">
              Made with <span>♥</span> and lots of chai.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterLinks({ title, links = [] }) {
  return (
    <div className="footer-link-column">
      <h3>{title}</h3>

      {links.map((item, index) => {
        const label = Array.isArray(item) ? item[0] : item.label;
        const href = Array.isArray(item) ? item[1] : item.href;

        if (!label || !href) {
          console.warn(`Invalid footer link in "${title}"`, item);
          return null;
        }

        return (
          <a key={`${label}-${index}`} href={href}>
            {label}
          </a>
        );
      })}
    </div>
  );
}
