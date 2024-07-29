import React from 'react';
import './home.css';
import Navbar from '../Navbar/navbar';

function Home() {
    return (
        <div className="home-container">
            <Navbar />
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
        Whether you’re a <span class="code-variable">business owner</span> looking to <span class="code-function">expand your reach</span>, a <span class="code-variable">professional</span> aiming to <span class="code-function">showcase your portfolio</span>, or someone with a <span class="code-variable">passion project</span>, <span class="code-keyword">CJP Web Development</span> has got you covered. We specialize in <span class="code-function">creating stunning</span>, <span class="code-keyword">user-friendly websites</span> tailored to your <span class="code-variable">unique needs</span>.
    </p>
</section>
</header>

            <footer className="contact-section">
                <button className="contact-button" onClick={() => window.location.href='/contact'}>Contact Now</button>
            </footer>
        </div>
    );
}

export default Home;
