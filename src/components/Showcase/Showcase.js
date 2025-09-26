import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Navbar/footer";
import showcaseData from "./ShowcaseData";

const Showcase = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Get unique categories
  const categories = ["All", ...new Set(showcaseData.map(project => project.category))];

  // Filter projects based on category and search term
  const filteredProjects = showcaseData.filter(project => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort projects by featured status (featured first, then by name)
  const allProjects = filteredProjects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.name.localeCompare(b.name);
  });

  useEffect(() => {
    // Simulate loading for smooth animation
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (image, project) => {
    setEnlargedImage(image);
    setSelectedProject(project);
  };

  const handleClose = () => {
    setEnlargedImage(null);
    setSelectedProject(null);
  };

  const ProjectCard = ({ project, isFeatured = false }) => (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
        isFeatured 
          ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border-2 border-code-orange shadow-2xl shadow-code-orange/20' 
          : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-code-green shadow-lg hover:shadow-code-green/20'
      }`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-code-orange text-black px-3 py-1 rounded-full text-sm font-bold">
            Featured
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          onClick={() => handleImageClick(project.image, project)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Icons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <button
              onClick={() => handleImageClick(project.image, project)}
              className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </button>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-code-green/20 backdrop-blur-sm rounded-full p-3 hover:bg-code-green/30 transition-colors"
              >
                <svg className="w-6 h-6 text-code-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.category === 'E-commerce' ? 'bg-blue-500/20 text-blue-400' :
            project.category === 'Portfolio' ? 'bg-purple-500/20 text-purple-400' :
            project.category === 'Corporate' ? 'bg-green-500/20 text-green-400' :
            project.category === 'Marketing' ? 'bg-orange-500/20 text-orange-400' :
            project.category === 'Service' ? 'bg-cyan-500/20 text-cyan-400' :
            'bg-gray-500/20 text-gray-400'
          }`}>
            {project.category}
          </span>
          <span className="text-gray-400 text-sm">{project.year}</span>
        </div>

        <h2 className="text-2xl font-bold text-white mb-3 font-code group-hover:text-code-green transition-colors">
          {project.name}
        </h2>
        
        <p className="text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Action Button */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-code-green to-code-blue text-black px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-code-green/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>Visit Website</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="bg-background-dark min-h-screen text-white font-code flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-code-orange mx-auto mb-4"></div>
          <p className="text-code-blue">Loading amazing projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-dark min-h-screen text-white font-code">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/banner.jpg)' }}
        ></div>
        {/* Stronger overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-code-orange/30 via-transparent to-code-blue/30"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-code mb-6">
            <span 
              className="bg-gradient-to-r from-code-orange via-code-green to-code-blue bg-clip-text text-transparent"
              style={{ 
                textShadow: '0 0 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.6), 0 0 90px rgba(0,0,0,0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.8))'
              }}
            >
              SHOWCASE
            </span>
          </h1>
          <p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-semibold"
            style={{ 
              textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.7), 0 8px 16px rgba(0,0,0,0.5)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
            }}
          >
            Explore our portfolio of innovative web solutions that bring ideas to life
          </p>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-8 bg-gradient-to-r from-gray-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-gray-800/60 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-code-green focus:ring-1 focus:ring-code-green/20 transition-all text-sm backdrop-blur-sm"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-all duration-300 text-sm backdrop-blur-sm ${
                    filter === category
                      ? 'bg-code-green text-black shadow-md shadow-code-green/25'
                      : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 hover:text-white border border-gray-600/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gradient-to-br from-background-dark via-gray-900/50 to-background-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-code-orange/5 via-transparent to-code-blue/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-code-green/3 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-code-orange font-code via-code-green to-code-blue bg-clip-text text-transparent">
              OUR PROJECTS
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={project.featured} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      {enlargedImage && selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <div 
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Image Header */}
            <div className="relative flex-shrink-0">
              <img
                src={enlargedImage}
                alt={selectedProject.name}
                className="w-full h-64 md:h-96 object-cover"
              />
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-white">{selectedProject.name}</h3>
                  <span className="text-code-orange font-semibold">{selectedProject.year}</span>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">{selectedProject.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-code-green/20 text-code-green rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-code-green to-code-blue text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-code-green/25 transition-all duration-300"
                  >
                    <span>Visit Live Website</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br border-t-2 border-gray-800 from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-code-orange/5 via-code-green/5 to-code-blue/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-code-orange via-code-green to-code-blue bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-code-blue mb-8 max-w-2xl mx-auto">
            Let's transform your vision into a stunning digital experience that captivates your audience and drives results.
          </p>
          <div className="flex justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-code-green to-code-blue text-black px-8 py-4 text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-code-green/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Your Project</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Showcase;

  