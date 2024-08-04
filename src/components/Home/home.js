import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Navbar/footer";
import emailjs from "emailjs-com";
import {
  FaPaintBrush,
  FaMobileAlt,
  FaRocket,
  FaHandsHelping,
} from "react-icons/fa";
import useScrollToHash from "./useScrollToHash";

function Home() {
  useScrollToHash();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackClass, setFeedbackClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_41qai17",
        "template_h5ukevk",
        templateParams,
        "mwniZb_WhkSrA4QZs",
      )
      .then((response) => {
        setFeedbackMessage(
          "We have received your email! Our team will reach out to you soon!",
        );
        setFeedbackClass("success");

        const autoReplyParams = {
          to_email: email,
        };
        return emailjs.send(
          "service_41qai17",
          "template_8ujh77c",
          autoReplyParams,
          "mwniZb_WhkSrA4QZs",
        );
      })
      .then((response) => {
        console.log("Auto-reply sent to the user!");
      })
      .catch((error) => {
        setFeedbackMessage(
          "There was an error sending your message, please try again in a moment.",
        );
        setFeedbackClass("error");
      });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background-dark pt-32 font-code text-white">
      <Navbar />
      <div className="w-full bg-background-dark px-4 py-12 text-center md:px-8">
        <img
          src="imagelogo2.png"
          alt="Company Logo"
          className="mx-auto mb-6 h-32 w-32 md:h-96 md:w-96"
        />
        <h1 className="mb-4 font-code text-4xl text-white md:text-6xl">
          CJP Web Development
        </h1>
        <p className="mb-2 border-b-4 pb-5 text-center font-code text-xl md:text-2xl">
          <span className="text-code-orange">Coding</span>
          <span className="text-code-blue"> Digital Excellence</span>,
          <span className="text-code-orange"> One Line </span>
          at a<span className="text-code-green"> Time</span>.
        </p>
      </div>

      <div className="container mx-auto flex flex-col items-start justify-between px-4 pb-10 md:mt-16 md:flex-row">
        <div className="relative my-4 flex w-full rounded-lg bg-background-dark p-6 md:my-0 md:w-1/2 md:pt-8">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10">
            <div className="animate-scroll whitespace-pre text-center text-lg leading-relaxed text-code-green">
              {`function exampleFunction() {
    const message = "Hello, World!";
    console.log(message);
}

exampleFunction();

const add = (a, b) => a + b;
console.log(add(5, 3));

for (let i = 0; i < 10; i++) {
    console.log(i);
}

if (true) {
    console.log("This is true");
}

while (false) {
    console.log("This will never log");
}
exampleFunction();

const add = (a, b) => a + b;
console.log(add(5, 3));

for (let i = 0; i < 10; i++) {
    console.log(i);
}

if (true) {
    console.log("This is true");
}`}
            </div>
          </div>
          <section className="relative z-10">
            <h2 className="mb-6 text-center font-code text-4xl text-code-orange">
              <span>Why Choose</span>
              <br />
              <span className="text-code-blue">CJP Web Development?</span>
            </h2>
            <ul className="space-y-6 text-center">
              <li className="flex flex-col items-center text-lg">
                <FaPaintBrush className="mb-2 animate-bounce text-6xl text-code-orange md:text-4xl" />
                <span className="pb-5 font-heading text-2xl text-code-green">
                  Custom Designs:
                </span>
                <span>
                  We bring your vision to life with bespoke designs that stand
                  out.
                </span>
              </li>
              <li className="flex flex-col items-center text-lg">
                <FaMobileAlt className="mb-2 animate-pulse text-6xl text-code-green md:text-4xl" />
                <span className="pb-5 font-heading text-2xl text-code-blue">
                  Responsive & Mobile-Friendly:
                </span>
                <span>
                  Your site will look great on any device, ensuring a seamless
                  experience for your audience.
                </span>
              </li>
              <li className="flex flex-col items-center text-lg">
                <FaRocket className="mb-2 animate-bounce text-6xl text-code-blue md:text-4xl" />
                <span className="pb-5 font-heading text-2xl text-code-orange">
                  Fast Turnaround:
                </span>
                <span>
                  We respect your time and deliver high-quality websites
                  promptly.
                </span>
              </li>
              <li className="flex flex-col items-center text-lg">
                <FaHandsHelping className="mb-2 animate-pulse text-6xl text-code-orange md:text-4xl" />
                <span className="pb-5 font-heading text-2xl text-code-green">
                  Ongoing Support:
                </span>
                <span>
                  From updates to troubleshooting, we’re here to help long after
                  your site goes live.
                </span>
              </li>
            </ul>
          </section>
        </div>

        <div
          id="contact-us"
          className="my-4 w-full rounded-lg bg-gray-900 p-6 shadow-lg md:my-0 md:w-1/2 md:pt-8"
        >
          <footer>
            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <h2 className="mb-4 font-heading text-2xl font-bold text-code-orange">
                Contact Us
              </h2>
              <h3 className="mb-4 text-center font-heading text-xl text-white">
                Send us a <span className="text-code-blue">message</span>{" "}
                regarding your{" "}
                <span className="text-code-orange">desired project</span> and we
                will reach out to you{" "}
                <span className="text-code-green">soon </span> with a{" "}
                <span className="text-code-green">quote</span>!
              </h3>
              <label htmlFor="name" className="mb-2 w-full max-w-lg text-left">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mb-4 w-full max-w-lg rounded border-2 border-code-orange p-2 text-gray-900"
              />
              <label htmlFor="email" className="mb-2 w-full max-w-lg text-left">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mb-4 w-full max-w-lg rounded border-2 border-code-orange p-2 text-gray-900"
              />
              <label
                htmlFor="subject"
                className="mb-2 w-full max-w-lg text-left"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="mb-4 w-full max-w-lg rounded border-2 border-code-orange p-2 text-gray-900"
              />
              <label
                htmlFor="message"
                className="mb-2 w-full max-w-lg text-left"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mb-4 w-full max-w-lg rounded border-2 border-code-orange p-2 text-gray-900"
              />
              <button
                type="submit"
                className="rounded-full bg-code-orange px-4 py-2 text-white transition-colors hover:bg-green-500 md:pl-10 md:pr-10"
              >
                Send
              </button>
            </form>
            {feedbackMessage && (
              <div
                className={`mt-4 rounded p-4 ${feedbackClass === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                {feedbackMessage}
              </div>
            )}
          </footer>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
