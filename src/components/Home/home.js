import React, { useState } from 'react';
import './home.css';
import Navbar from '../Navbar/navbar';
import emailjs from 'emailjs-com';

function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackClass, setFeedbackClass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        };

        emailjs.send('service_41qai17', 'template_h5ukevk', templateParams, 'mwniZb_WhkSrA4QZs')
            .then((response) => {
                setFeedbackMessage("We have received your email! Our team will reach out to you soon!");
                setFeedbackClass('success');

                // Send auto-reply to the user
                const autoReplyParams = {
                    to_email: email,
                };
                return emailjs.send('service_41qai17', 'template_8ujh77c', autoReplyParams, 'mwniZb_WhkSrA4QZs');
            })
            .then((response) => {
                console.log('Auto-reply sent to the user!');
            })
            .catch((error) => {
                setFeedbackMessage("There was an error sending your message, please try again in a moment.");
                setFeedbackClass('error');
            });

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="home-container">
            <Navbar />
            <div className="content-wrapper">
                <div className="left-content box-container">
                    <header className="hero-section">
                        <div className="code-background">
                            <div className="scrolling-code">
                                <pre>
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
}`}
                                </pre>
                            </div>
                        </div>
                        <section className="advertisement-hook">
                            <p className="code-text">
                                <span className="ad-hook-first">Unleash Your Online Potential with CJP Web Development!</span>
                                Whether you’re a <span className="code-variable">business owner</span> looking to <span className="code-function">expand your reach</span>, a <span className="code-variable">professional</span> aiming to <span className="code-function">showcase your portfolio</span>, or someone with a <span className="code-variable">passion project</span>, <span className="code-keyword">CJP Web Development</span> has got you covered. We specialize in <span className="code-function">creating stunning</span>, <span className="code-keyword">user-friendly websites</span> tailored to your <span className="code-variable">unique needs</span>.
                            </p>
                        </section>
                    </header>
                </div>
                <div className="right-content box-container">
                    <footer className="contact-section">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h2>Contact Us</h2>
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <label htmlFor="subject">Subject:</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={subject} 
                                onChange={(e) => setSubject(e.target.value)} 
                                required 
                            />
                            <label htmlFor="message">Message:</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                required 
                            />
                            <button type="submit" className="contact-button">Send</button>
                        </form>
                        {feedbackMessage && (
                            <div className={`feedback-message ${feedbackClass}`}>
                                {feedbackMessage}
                            </div>
                        )}
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Home;

