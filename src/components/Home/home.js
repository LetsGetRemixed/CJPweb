import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Navbar/footer";
import emailjs from "emailjs-com";
import {
  FaPaintBrush,
  FaMobileAlt,
  FaRocket,
  FaHandsHelping,
  
  FaArrowRight,
} from "react-icons/fa";
import useScrollToHash from "./useScrollToHash";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

function Home() {
  useScrollToHash();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] =useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackClass, setFeedbackClass] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      setFeedbackMessage(
        "Please confirm you are not a robot by completing the CAPTCHA."
      );
      setFeedbackClass("error");
      return;
    }

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
          to_name: name,
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
    setCaptchaVerified(false);
  };

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-code">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/banner.jpg)' }}
        ></div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-code-orange/30 via-transparent to-code-blue/30"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center mb-8 group">
            <div className="relative">
              <img
                src="imagelogo2.png"
                alt="Company Logo"
                className="h-24 w-24 md:h-32 md:w-32 transition-all duration-300 group-hover:rotate-12"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-code-orange/20 to-code-green/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ 
              textShadow: '0 0 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.6), 0 0 90px rgba(0,0,0,0.4)',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.8))'
            }}
          >
            <span className="bg-gradient-to-r from-code-orange font-code via-code-green to-code-blue bg-clip-text text-transparent">
              Let Us Develop Your Website Today!
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-semibold"
            style={{ 
              textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.7), 0 8px 16px rgba(0,0,0,0.5)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
            }}
          >
            <span className="text-code-orange">Coding</span> Digital Excellence, 
            <span className="text-code-blue"> One Line</span> at a 
            <span className="text-code-green"> Time</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/showcase")}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-code-green to-code-blue text-black px-8 py-4 text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-code-green/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>View Our Showcase</span>
              <FaArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#contact-us"
              className="inline-flex items-center space-x-2 border-2 border-code-orange text-code-orange px-8 py-4 text-lg font-bold rounded-xl hover:bg-code-orange hover:text-black transition-all duration-300"
            >
              <span>Get Started</span>
              <FaRocket className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-code-orange mb-2 group-hover:scale-110 transition-transform duration-300">
                200K+
              </div>
              <div className="text-gray-300">Peak Client Visits</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-code-green mb-2 group-hover:scale-110 transition-transform duration-300">
                110%
              </div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-code-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-code-orange mb-2 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-background-dark via-gray-900/50 to-background-dark relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/loginbackground.webp)' }}
        ></div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-code-orange/10 via-transparent to-code-blue/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-code-green/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                textShadow: '0 0 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.6), 0 0 90px rgba(0,0,0,0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.8))'
              }}
            >
              <span className="bg-gradient-to-r from-code-orange via-code-green font-code to-code-blue bg-clip-text text-transparent">
                Why Choose CJP Web Development?
              </span>
            </h2>
            <p 
              className="text-xl text-white max-w-3xl mx-auto font-semibold"
              style={{ 
                textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.7), 0 8px 16px rgba(0,0,0,0.5)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
              }}
            >
              We deliver exceptional web solutions that drive results and exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-code-orange transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-code-orange/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-code-orange to-code-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaPaintBrush className="text-2xl text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Custom Designs</h3>
                <p className="text-gray-300">
                  We bring your vision to life with bespoke designs that stand out from the competition.
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-code-green transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-code-green/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-code-green to-code-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaMobileAlt className="text-2xl text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Responsive Design</h3>
                <p className="text-gray-300">
                  Your site will look perfect on any device, ensuring a seamless experience for all users.
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-code-blue transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-code-blue/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-code-blue to-code-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaRocket className="text-2xl text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Fast Turnaround</h3>
                <p className="text-gray-300">
                  We respect your time and deliver high-quality websites promptly without compromising quality.
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-code-orange transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-code-orange/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-code-orange to-code-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaHandsHelping className="text-2xl text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Ongoing Support</h3>
                <p className="text-gray-300">
                  From updates to troubleshooting, we're here to help long after your site goes live.
                </p>
              </div>
            </div>
          </div>

          {/* View Projects Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/showcase")}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-code-orange to-code-green text-black px-8 py-4 text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-code-orange/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>View Our Projects</span>
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-code-orange/5 via-code-green/5 to-code-blue/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-code-orange via-code-green to-code-blue font-code bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Send us a message about your project and we'll reach out for a consultation!
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-code-green focus:ring-2 focus:ring-code-green/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-code-green focus:ring-2 focus:ring-code-green/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-code-green focus:ring-2 focus:ring-code-green/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Tell us about your project in detail..."
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-code-green focus:ring-2 focus:ring-code-green/20 transition-all resize-none"
                  />
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey='6LdYtZMqAAAAAHTxn9W5HuNRp96TgXFuo79CCLeH'
                    onChange={handleCaptchaChange}
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-code-green to-code-blue text-black px-8 py-4 text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-code-green/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Send Message</span>
                    <FaArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {feedbackMessage && (
                  <div className={`mt-6 p-4 rounded-lg text-center ${
                    feedbackClass === "success" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}>
                    {feedbackMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;


