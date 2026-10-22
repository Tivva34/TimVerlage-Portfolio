import { motion } from "framer-motion";
import ContactForm from "./ContactForm.jsx";
import "../styles/Contact.css";

export default function Contact() {
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
        <header className="contact-copy">
          {/* Antique Geometric Corner Frame */}
          <div className="contact-card-frame" aria-hidden="true">
            <span className="contact-corner corner-tl" />
            <span className="contact-corner corner-tr" />
            <span className="contact-corner corner-bl" />
            <span className="contact-corner corner-br" />
          </div>

          <div className="contact-sigil-badge">
            <span className="contact-sigil-glyph" aria-hidden="true">🜚</span>
            <span className="contact-sigil-tag">EPISTOLA · COMMUNICATIO</span>
          </div>

          <h2 id="contact-title">Let's Build Something Great Together</h2>
          <p>
            I'm excited to contribute to meaningful projects and grow alongside
            experienced development teams. Send me a message and I'll reply
            directly to your inbox.
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
