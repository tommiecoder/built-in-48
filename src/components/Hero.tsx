import React from 'react';
import { ArrowRight, Zap, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-light via-white to-light flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center bg-accent/20 px-4 py-2 rounded-full mb-8">
            <Zap className="h-5 w-5 text-accent mr-2" />
            <span className="text-dark font-medium">Fast • Professional • Affordable</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6 leading-tight">
            Get a Beautiful Website<br />
            <span className="text-primary">Built in 48 Hours</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dark/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional, mobile-optimized websites for small businesses, creators, and professionals — from just <span className="font-semibold text-primary">$49</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://m.me/builtin48"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Get Started on Messenger
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center text-dark hover:text-primary font-semibold text-lg transition-colors duration-300"
            >
              View Recent Projects
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
        
        <div className="mt-16 animate-bounce-gentle">
          <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <ArrowRight className="h-6 w-6 text-primary rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;