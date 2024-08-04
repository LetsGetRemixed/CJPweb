import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Navbar/footer';
import emailjs from 'emailjs-com';
import { FaPaintBrush, FaMobileAlt, FaRocket, FaHandsHelping } from 'react-icons/fa';
import useScrollToHash from './useScrollToHash';

function Home() {
    useScrollToHash();

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
        <div className="bg-background-dark font-code text-white pt-32 min-h-screen">
            <Navbar />
            <div className="w-full bg-background-dark text-center py-12 px-4 md:px-8">
                <img src="imagelogo2.png" alt="Company Logo" className="mx-auto w-32 h-32 md:w-96 md:h-96 mb-6" />
                <h1 className="font-code text-4xl md:text-6xl text-white mb-4">CJP Web Development</h1>
                <p className="font-code text-xl md:text-2xl mb-2 text-center  pb-5 border-b-4">
                        <span className="text-code-orange">Coding</span> 
                        <span className="text-code-blue"> Digital Excellence</span>, 
                        <span className="text-code-orange"> One Line </span> 
                                 at a 
                        <span className="text-code-green"> Time</span>.
                </p>

            </div>

            <div className="container mx-auto px-4 pb-10 flex flex-col md:flex-row justify-between items-start md:mt-16">
                <div className="w-full md:w-1/2 bg-background-dark rounded-lg p-6 my-4 md:my-0 relative md:pt-8 flex">
                    <div className="absolute inset-0 flex justify-center items-center overflow-hidden opacity-10">
                        <div className="whitespace-pre text-code-green text-lg leading-relaxed animate-scroll text-center">
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
                    <section className=" relative z-10">
                     <h2 className="font-code text-4xl text-code-orange mb-6 text-center">
                         <span>Why Choose</span>
                             <br />
                            <span className="text-code-blue">CJP Web Development?</span>
                     </h2>
                        <ul className="space-y-6 text-center">
                            <li className="flex flex-col items-center text-lg">
                                <FaPaintBrush className="text-code-orange mb-2 text-6xl md:text-4xl animate-bounce" />
                                <span className="text-code-green font-heading text-2xl pb-5">Custom Designs:</span> 
                                <span>We bring your vision to life with bespoke designs that stand out.</span>
                            </li>
                            <li className="flex flex-col items-center text-lg">
                                <FaMobileAlt className="text-code-green mb-2 text-6xl md:text-4xl animate-pulse" />
                                <span className="text-code-blue font-heading text-2xl pb-5">Responsive & Mobile-Friendly:</span> 
                                <span>Your site will look great on any device, ensuring a seamless experience for your audience.</span>
                            </li>
                            <li className="flex flex-col items-center text-lg">
                                <FaRocket className="text-code-blue mb-2 text-6xl md:text-4xl animate-bounce" />
                                <span className="text-code-orange font-heading text-2xl pb-5">Fast Turnaround:</span> 
                                <span>We respect your time and deliver high-quality websites promptly.</span>
                            </li>
                            <li className="flex flex-col items-center text-lg ">
                                <FaHandsHelping className="text-code-orange mb-2 text-6xl md:text-4xl animate-pulse" />
                                <span className="text-code-green font-heading text-2xl pb-5">Ongoing Support:</span> 
                                <span>From updates to troubleshooting, we’re here to help long after your site goes live.</span>
                            </li>
                        </ul>
                    </section>
                </div>
                
                <div id="contact-us" className="w-full md:w-1/2 bg-gray-900 rounded-lg shadow-lg p-6 my-4 md:my-0 md:pt-8">
                    <footer>
                        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                            <h2 className="font-heading text-2xl font-bold text-code-orange mb-4">Contact Us</h2>
                                <h3 className="font-heading text-xl text-white mb-4 text-center">
                                    Send us a <span className="text-code-blue">message</span> regarding your <span className="text-code-orange">desired project</span> and we will reach out to you <span className="text-code-green">soon </span> with a <span className="text-code-green">quote</span>!
                                </h3>
                            <label htmlFor="name" className="w-full max-w-lg text-left mb-2">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                                className="w-full max-w-lg p-2 mb-4 text-gray-900 border-2 border-code-orange rounded"
                            />
                            <label htmlFor="email" className="w-full max-w-lg text-left mb-2">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                className="w-full max-w-lg p-2 mb-4 text-gray-900 border-2 border-code-orange rounded"
                            />
                            <label htmlFor="subject" className="w-full max-w-lg text-left mb-2">Subject:</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={subject} 
                                onChange={(e) => setSubject(e.target.value)} 
                                required 
                                className="w-full max-w-lg p-2 mb-4 text-gray-900 border-2 border-code-orange rounded"
                            />
                            <label htmlFor="message" className="w-full max-w-lg text-left mb-2">Message:</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                required 
                                className="w-full max-w-lg p-2 mb-4 text-gray-900 border-2 border-code-orange rounded"
                            />
                            <button type="submit" className="bg-code-orange md:pr-10 md:pl-10 text-white py-2 px-4 rounded-full hover:bg-green-500 transition-colors">
                                Send
                            </button>
                        </form>
                        {feedbackMessage && (
                            <div className={`mt-4 p-4 rounded ${feedbackClass === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
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
