import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Navbar/footer";
import showcaseData from "./ShowcaseData";

const Showcase = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleClose = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="bg-background-dark min-h-screen text-white font-code">
      <Navbar />
      <header className="py-12 text-center">
        <h1 className="text-4xl text-code-orange">Showcase</h1>
        <p className="text-lg text-code-blue mt-2">
          Explore some of the amazing websites we have developed.
        </p>
      </header>
      <main className="container mx-auto px-4 py-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {showcaseData.map((site) => (
          <div
            key={site.id}
            className="bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-700 shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={site.image}
              alt={site.name}
              className="w-full h-72 object-cover cursor-pointer"
              onClick={() => handleImageClick(site.image)}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-code-green">{site.name}</h2>
              <p className="text-gray-400 my-4">{site.description}</p>
              {site.link && (
                    <a
                        href={site.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-code-orange hover:underline"
                    >
                        Visit Website
                    </a>
                    )}
            </div>
          </div>
        ))}
      </main>

      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <img
            src={enlargedImage}
            alt="Enlarged"
            className="max-w-full max-h-full"
          />
        </div>
      )}

      <section className="bg-gray-900 py-16 text-center border-t-2 text-white">
        <h2 className="text-3xl font-heading text-code-orange mb-6">
          Want a Website Catered to Your Vision?
        </h2>
        <p className="text-lg text-code-blue mb-8">
          Let us bring your ideas to life with a custom-built website tailored to your needs.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-code-green px-6 py-3 text-lg font-bold text-black rounded-full transition-transform hover:scale-110"
        >
          Reach Out to Us
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Showcase;

  