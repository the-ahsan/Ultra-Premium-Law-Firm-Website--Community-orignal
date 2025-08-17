import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, FileText, Shield, CheckCircle, Star } from 'lucide-react';
import { Button } from '../../ui/button';

const familyLawServices = [
  {
    title: 'Divorce Proceedings',
    description: 'Comprehensive divorce representation with focus on protecting your interests and achieving fair outcomes.',
    features: ['Asset Division', 'Alimony Negotiations', 'Mediation Services', 'Court Representation']
  },
  {
    title: 'Child Custody & Support',
    description: 'Dedicated advocacy for child custody arrangements that prioritize the best interests of your children.',
    features: ['Custody Agreements', 'Visitation Rights', 'Child Support', 'Modification Requests']
  },
  {
    title: 'Adoption Services',
    description: 'Complete adoption legal services to help families grow through domestic and international adoptions.',
    features: ['Domestic Adoption', 'International Adoption', 'Stepparent Adoption', 'Legal Documentation']
  },
  {
    title: 'Prenuptial Agreements',
    description: 'Protect your assets and establish clear expectations with comprehensive prenuptial agreements.',
    features: ['Asset Protection', 'Debt Allocation', 'Future Planning', 'Legal Review']
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    text: 'Emily Rodriguez helped me navigate my divorce with compassion and professionalism. She fought for my rights while keeping my children\'s best interests at heart.',
    rating: 5
  },
  {
    name: 'Michael Davis',
    text: 'The adoption process seemed overwhelming until we found Premium Law. They made our dream of expanding our family a reality.',
    rating: 5
  }
];

export function FamilyLawPage() {
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
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
                Family Law
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Compassionate legal representation for life's most personal matters. We understand that family law issues are deeply emotional and require both legal expertise and personal sensitivity.
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
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop"
                alt="Family Law Services"
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
              Our Family Law Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive legal support for all aspects of family law, from divorce proceedings to adoption services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {familyLawServices.map((service, index) => (
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

      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Family Law Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassionate Approach',
                description: 'We understand the emotional nature of family law matters and provide supportive guidance throughout the process.'
              },
              {
                icon: Users,
                title: 'Child-Focused Solutions',
                description: 'Every decision prioritizes the best interests of your children, ensuring their well-being and stability.'
              },
              {
                icon: Shield,
                title: 'Protective Advocacy',
                description: 'Strong legal representation to protect your rights, assets, and family relationships.'
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Client Stories
            </h2>
            <p className="text-gray-300 text-lg">
              Real experiences from families we've helped through difficult times.
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
                <div className="text-gold font-medium">
                  — {testimonial.name}
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
            Ready to Protect Your Family?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Schedule your free consultation today and let our experienced family law team help you navigate this challenging time with confidence.
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