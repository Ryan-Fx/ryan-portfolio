import React from "react";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-36 mt-28">
      <div className="grid lg:grid-cols-7">
        <ContactForm />
      </div>
    </section>
  );
}
