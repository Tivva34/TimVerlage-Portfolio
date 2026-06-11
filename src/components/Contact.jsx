import { motion } from "framer-motion";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-copy"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        viewport={{ amount: 0.4 }}
      >
        <h2>Let’s Build Something Great Together</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          viewport={{ amount: 0.4 }}
        >
          I’m excited to contribute to meaningful projects and grow alongside
          experienced development teams. Send me a message and I’ll reply directly to your inbox.
        </motion.p>
      </motion.div>
      <motion.div
        className="contact-form-shell"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.35 }}
        viewport={{ amount: 0.4 }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
}