import { motion, useReducedMotion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvznwgwk");
  const shouldReduceMotion = useReducedMotion();

  const getFieldError = (field) =>
    state.errors?.find((error) => error.field === field)?.message;

  const nameError = getFieldError("name");
  const emailError = getFieldError("email");
  const messageError = getFieldError("message");

  const formMotionProps = shouldReduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        viewport: { once: true, amount: 0.4 },
      };

  const successMotionProps = shouldReduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
      };

  if (state.succeeded) {
    return (
      <motion.div
        className="contact-success"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        {...successMotionProps}
      >
        <h3>Message sent</h3>
        <p>Thanks for reaching out. I’ll get back to you as soon as possible.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-describedby="contact-form-help"
      {...formMotionProps}
    >
      <p id="contact-form-help" className="sr-only">
        All fields are required. Name and email are used to respond to your message.
      </p>

      <div className="form-field">
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={Boolean(nameError)}
          aria-describedby={nameError ? "name-error" : undefined}
        />
        <span id="name-error" className="form-error" aria-live="polite">
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </span>
      </div>

      <div className="form-field">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={Boolean(emailError)}
          aria-describedby={emailError ? "email-error" : undefined}
        />
        <span id="email-error" className="form-error" aria-live="polite">
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </span>
      </div>

      <div className="form-field">
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Tell me about your project"
          required
          aria-required="true"
          aria-invalid={Boolean(messageError)}
          aria-describedby={messageError ? "message-error" : undefined}
        />
        <span id="message-error" className="form-error" aria-live="polite">
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </span>
      </div>

      <button type="submit" className="btn-primary contact-submit" disabled={state.submitting} aria-busy={state.submitting}>
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
}