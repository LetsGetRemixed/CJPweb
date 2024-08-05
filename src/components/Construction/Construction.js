import React from "react";
import { Link } from "react-router-dom"; // Make sure you import Link from react-router-dom
import Navbar from "../Navbar/navbar";
import Footer from "../Navbar/footer";
import { FaTools } from "react-icons/fa";

function Construction() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen flex-col justify-between bg-background-dark text-white">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <FaTools className="mb-8 animate-spin text-6xl text-code-orange md:text-8xl" />
          <h1 className="mb-4 font-heading text-3xl md:text-5xl">
            <span className="text-code-orange">Sorry</span>, this
            <span className="text-code-blue"> page</span> is still under
            <span className="text-code-orange"> construction</span>
          </h1>
          <p className="mb-8 text-xl text-code-green md:text-2xl">
            We're working hard to get this page ready. Please check back soon!
          </p>
          <Link
            to="/"
            className="rounded-full bg-code-orange px-6 py-4 text-2xl text-white transition-colors hover:bg-green-500"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Construction;
