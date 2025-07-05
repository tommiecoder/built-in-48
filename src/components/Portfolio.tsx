import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'The Wokxstation',
      category: 'HR & Remote Work',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern, responsive website built for a remote work training platform',
    },
    {
      title: 'GAD Creative',
      category: 'Presentation Design Studio',
      image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A bold, minimalist portfolio website for a premium presentation design studio',
    },
    {
      title: 'Cyprus Luxe',
      category: 'Real Estate Investment',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A clean, conversion-optimized landing page built for an international real estate company',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-dark/70 max-w-2xl mx-auto">
            See how we've helped businesses like yours establish a professional online presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-light rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                <p className="text-dark/70">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="https://m.me/builtin48"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-lg transition-colors duration-300"
          >
            See More Projects
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;