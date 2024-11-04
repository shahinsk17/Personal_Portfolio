import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:shahinshaikh6828@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;

    // Reset form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-neutral-950/90 shadow-lg border border-gray-700 rounded-lg flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">Thank You!</h2>
        <p className="text-gray-300 text-center mb-4">
          Thank you for visiting my profile! I appreciate your interest in my
          work. If you have any questions, your feedback and inquiries are
          always welcome! <br />
          <br />
          <motion.span
            className="inline-block"
            animate={{ y: [0, -10, 0], scale: [2.4, 1, 2.4], rotate: [0, 360] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            😊
          </motion.span>
        </p>
      </div>

      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-400">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-300" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-neutral-900 text-gray-100 focus:outline-none focus:ring focus:ring-purple-400 transition duration-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-neutral-900 text-gray-100 focus:outline-none focus:ring focus:ring-purple-400 transition duration-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-300" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-neutral-900 text-gray-100 focus:outline-none focus:ring focus:ring-purple-400 transition duration-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-300" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-neutral-900 text-gray-100 focus:outline-none focus:ring focus:ring-purple-400 transition duration-200"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-900 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
