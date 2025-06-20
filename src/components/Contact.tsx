import React from 'react';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build <span className="text-accent">Yours Next</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to get your professional website? Let's chat about your project and get started today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href="https://m.me/builtin48"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-primary hover:bg-primary/90 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold mb-2">Start on Messenger</h3>
            <p className="text-white/80 mb-4">
              Quick and easy - tell us about your project and get a custom quote
            </p>
            <div className="inline-flex items-center text-white font-semibold">
              Message Now
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          
          <a
            href="mailto:hello@builtin48.com"
            className="group bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105"
          >
            <Mail className="h-12 w-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold mb-2">Send an Email</h3>
            <p className="text-white/70 mb-4">
              Prefer email? Send us your project details and we'll get back to you
            </p>
            <div className="inline-flex items-center text-white font-semibold">
              hello@builtin48.com
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
        
        <div className="text-center mt-16 pt-16 border-t border-white/20">
          <p className="text-white/60">
            © 2024 Builtin48. Professional websites built fast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;