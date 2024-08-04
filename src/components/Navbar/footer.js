import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-black py-8 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
          {/* Logo and Company Name */}
          <div className="mb-4 flex items-center md:mb-0">
            <img
              src="imagelogo2.png"
              alt="Company Logo"
              className="mr-3 h-12 w-12"
            />
            <span className="font-heading text-lg">CJP Web Development</span>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-2 flex items-center md:mb-0 md:mr-6">
              <span role="img" aria-label="email" className="mr-2">
                📧
              </span>
              <a
                href="mailto:your-email@example.com"
                className="text-white transition-colors hover:text-gray-400"
              >
                colbyperson@CJPWebDev.com
              </a>
            </div>
            <div className="flex items-center">
              <span role="img" aria-label="phone" className="mr-2">
                📞
              </span>
              <a
                href="tel:+15127865133"
                className="text-white transition-colors hover:text-gray-400"
              >
                +1 (512) 786-5133
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
