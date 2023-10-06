import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
     {"If you have any questions or would like to discuss a project, Please don't hesitate to get in touch using following Tool just in case you are not redirecting plz make sure to allow mail.google.com to open all email links Thanks😊"} 
      </p>
      <div className="contact-cta">
        <Button link="mailto:suyashsshirtar2@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
