import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Starter',
      price: '$49',
      description: 'Perfect for getting started online',
      features: [
        '1-page professional website',
        'Contact information section',
        'Mobile-responsive design',
        'Basic SEO optimization',
        '48-hour delivery',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$79',
      description: 'Everything you need to grow',
      features: [
        'Everything in Starter',
        'Facebook Messenger button',
        'Custom domain setup guide',
        'Social media integration',
        'Google Analytics setup',
        '1 round of revisions',
      ],
      popular: true,
    },
    {
      name: 'Express',
      price: '$99',
      description: 'For those who need it fast',
      features: [
        'Everything in Pro',
        '24-hour delivery',
        '2 rounds of revisions',
        'Priority support',
        'Advanced contact forms',
        'Performance optimization',
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Choose Your <span className="text-primary">Package</span>
          </h2>
          <p className="text-xl text-dark/70 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All packages include hosting guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                pkg.popular ? 'border-2 border-primary shadow-lg scale-105' : 'border border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dark mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                <p className="text-dark/70">{pkg.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-dark/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://m.me/builtin48"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-full font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl'
                    : 'bg-dark hover:bg-dark/90 text-white'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;