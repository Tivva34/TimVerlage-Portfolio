import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm.jsx";
import MysticLabel from "./MysticLabel.jsx";
import "../styles/Contact.css";

export default function Contact() {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        viewport={{ amount: 0, once: false }}
      >
        <header
          className="contact-copy"
          onMouseEnter={() => setIsHeaderHovered(true)}
          onMouseLeave={() => setIsHeaderHovered(false)}
        >
          {/* Antique Geometric Corner Frame */}
          <div className="contact-card-frame" aria-hidden="true">
            <span className="contact-corner corner-tl" />
            <span className="contact-corner corner-tr" />
            <span className="contact-corner corner-bl" />
            <span className="contact-corner corner-br" />
          </div>

          <MysticLabel
            defaultText="EPISTOLA · COMMUNICATIO"
            revealText="CONTACT · CONNECT"
            glyph="🜚"
            className="contact-sigil-badge"
            glyphClassName="contact-sigil-glyph"
            tagClassName="contact-sigil-tag"
            cardHovered={isHeaderHovered}
          />

          <h2 id="contact-title">Open to Possibilities.</h2>
          <p>
            I'm always looking to learn, build, and take on interesting challenges. Whether you have a project in mind or just want to connect, my inbox is open.
          </p>
        </header>

        <section
          className="contact-form-shell"
          aria-label="Contact form"
        >
          {/* Antique Geometric Corner Frame */}
          <div className="contact-card-frame" aria-hidden="true">
            <span className="contact-corner corner-tl" />
            <span className="contact-corner corner-tr" />
            <span className="contact-corner corner-bl" />
            <span className="contact-corner corner-br" />
          </div>

          <ContactForm />
        </section>
      </motion.article>
    </section>
  );
}
