import { motion } from "framer-motion";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        viewport={{ amount: 0.4 }}
      >
        <div className="contact-copy">
        <h2>Let’s Build Something Great Together</h2>
        <p>
          I’m excited to contribute to meaningful projects and grow alongside
          experienced development teams. Send me a message and I’ll reply directly to your inbox.
        </p>
        </div>
        <div className="contact-form-shell">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}