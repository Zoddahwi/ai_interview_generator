"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Submit contact form to simulate API call
  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nameEl = form.querySelector("#contactName") as HTMLInputElement;
    const name = nameEl?.value || "there";
    
    // Show toast
    setToastMessage(`Thank you, ${name}! Your message has been received.`);
    form.reset();
    
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  }

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <span>{toastMessage}</span>
        </div>
      )}

      <section id="contact" style={{ paddingBlock: "8rem" }}>
        <div className="container">
          <span className="section-pretitle">GET IN TOUCH</span>
          <h2>Connect With Our Team</h2>
          <p className="section-description">
            Have questions, feedback, or custom feature requests for your enterprise hiring process?
            Send us a message below.
          </p>

          <div className="contact-form-container">
            <form onSubmit={handleContactSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="contactName">Name</label>
                <input
                  id="contactName"
                  type="text"
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactEmail">Email Address</label>
                <input
                  id="contactEmail"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactMessage">Message</label>
                <textarea
                  id="contactMessage"
                  required
                  rows={4}
                  placeholder="How can we help you?"
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
