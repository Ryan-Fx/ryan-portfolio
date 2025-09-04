import React from "react";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-36 mt-28 px-8 space-y-5 lg:px-14"
    >
      <h1 className="text-5xl font-semibold text-center">Contact</h1>
      <div className="grid lg:grid-cols-8 gap-2 xl:gap-6 w-full">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
