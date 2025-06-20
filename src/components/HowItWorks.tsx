import React from 'react';
import { FileText, Palette, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Fill out a short brief',
      description: 'Tell us about your business, goals, and design preferences. Takes just 5 minutes.',
    },
    {
      icon: Palette,
      title: 'We design and deliver in 48 hours',
      description: 'Our team creates your professional website and delivers it within 48 hours.',
    },
    {
      icon: Rocket,
      title: 'You review and go live',
      description: 'Review your site, request any changes, and launch your professional online presence.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-dark/70 max-w-2xl mx-auto">
            Getting your professional website is simple and straightforward
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-light rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-dark mb-4">
                  {step.title}
                </h3>
                
                <p className="text-dark/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;