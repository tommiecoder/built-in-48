import React from 'react';
import { Heart, Clock, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Hi, I'm <span className="text-primary">Tomiwa</span>
            </h2>
            <p className="text-xl text-dark/70 mb-8 leading-relaxed">
              I help small businesses look professional online with simple, mobile-friendly websites built in just 48 hours.
            </p>
            <p className="text-lg text-dark/70 mb-8 leading-relaxed">
              After seeing too many great businesses struggle with expensive, complicated web solutions, I created Builtin48 to make professional websites accessible to everyone. No technical jargon, no months of waiting - just beautiful, functional websites that work.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">48hrs</div>
                <div className="text-sm text-dark/60">Delivery Time</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-dark/60">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">5★</div>
                <div className="text-sm text-dark/60">Average Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Builtin48?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <span>Fast delivery without compromising quality</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <span>Transparent pricing with no hidden costs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <span>Mobile-first design for today's users</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <span>Personal service from a real person</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;