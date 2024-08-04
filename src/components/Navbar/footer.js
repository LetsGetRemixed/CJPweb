import React from 'react';

function Footer() {
    return (
<div>
<footer className="bg-black text-white py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center mb-4 md:mb-0">
            <img src="imagelogo2.png" alt="Company Logo" className="w-12 h-12 mr-3" />
            <span className="text-lg font-heading">CJP Web Development</span>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center mb-2 md:mb-0 md:mr-6">
                <span role="img" aria-label="email" className="mr-2">📧</span>
                <a href="mailto:your-email@example.com" className="text-white hover:text-gray-400 transition-colors">colbyperson@CJPWebDev.com</a>
            </div>
            <div className="flex items-center">
                <span role="img" aria-label="phone" className="mr-2">📞</span>
                <a href="tel:+15127865133" className="text-white hover:text-gray-400 transition-colors">+1 (512) 786-5133</a>
            </div>
        </div>
    </div>
</footer>

</div>

    );
}
export default Footer;