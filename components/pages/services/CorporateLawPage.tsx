import React from 'react';
import { motion } from 'motion/react';
import { Building, Briefcase, FileText, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { Button } from '../../ui/button';

const corporateServices = [
  {
    title: 'Business Formation',
    description: 'Complete business entity formation services including LLC, Corporation, and Partnership structures.',
    features: ['Entity Selection', 'Registration Process', 'Operating Agreements', 'Tax Structure Planning']
  },
  {
    title: 'Contract Negotiation',
    description: 'Expert contract drafting, review, and negotiation to protect your business interests.',
    features: ['Contract Drafting', 'Terms Negotiation', 'Risk Assessment', 'Compliance Review']
  },
  {
    title: 'Mergers & Acquisitions',
    description: 'Strategic guidance through complex M&A transactions from due diligence to closing.',
    features: ['Due Diligence', 'Deal Structuring', 'Regulatory Compliance', 'Post-Merger Integration']
  },
  {
    title: 'Regulatory Compliance',
    description: 'Comprehensive compliance solutions to navigate complex regulatory environments.',
    features: ['Compliance Audits', 'Policy Development', 'Regulatory Filings', 'Risk Management']
  }
];

const industries = [
  'Technology & Software',
  'Healthcare & Biotech',
  'Financial Services',
  'Manufacturing',
  'Real Estate',
  'Retail & E-commerce'
];

const testimonials = [
  {
    name: 'Jennifer Chen, CEO',
    company: 'TechStart Solutions',
    text: 'Sarah Mitchell guided us through our Series A funding round with exceptional expertise. Her attention to detail saved us significant time and money.',
    rating: 5
  },
  {
    name: 'Robert Anderson, CFO',
    company: 'Global Manufacturing Inc.',
    text: 'Premium Law\'s corporate team helped us navigate a complex acquisition. Their strategic advice was invaluable throughout the entire process.',
    rating: 5
  }
];

export function CorporateLawPage() {
  return (
    <div className="min-h-screen bg-navy-deep pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-gold" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
                Corporate Law
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Strategic legal counsel for businesses of all sizes. From startup formation to complex M&A transactions, we provide comprehensive corporate legal services that drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gold text-navy-deep hover:bg-gold/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule Consultation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-navy-deep"
                  onClick={() => window.location.href = 'tel:(555)123-4567'}
                >
                  Call Now
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                alt="Corporate Law Services"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Our Corporate Legal Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive legal support for every stage of your business journey, from formation to expansion and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corporateServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-500"
              >
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our corporate legal expertise spans across diverse industries, providing specialized knowledge for your business sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6 text-center hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
                <p className="text-gray-300 font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Corporate Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: 'Business-First Approach',
                description: 'We understand business objectives and provide legal solutions that support your strategic goals.'
              },
              {
                icon: TrendingUp,
                title: 'Growth-Oriented',
                description: 'Our legal strategies are designed to facilitate business growth and market expansion.'
              },
              {
                icon: FileText,
                title: 'Comprehensive Documentation',
                description: 'Thorough documentation and compliance to protect your business interests and minimize risks.'
              }
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-gray-300 text-lg">
              Hear from business leaders who have trusted us with their corporate legal needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="text-gold font-medium">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Partner with our corporate legal team to navigate complex business challenges and unlock new opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gold text-navy-deep hover:bg-gold/90 text-lg px-8 py-6"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Free Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-navy-deep text-lg px-8 py-6"
              onClick={() => window.location.href = '/services'}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}