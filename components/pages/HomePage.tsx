import { HeroSection } from '../HeroSection';
import { PracticeCards } from '../PracticeCards';
import { StatisticsSection } from '../StatisticsSection';
import { TestimonialsCarousel } from '../TestimonialsCarousel';
import { motion } from 'motion/react';
import { Scale, Award, Users, Clock } from 'lucide-react';
import { Button } from '../ui/button';

const highlights = [
  {
    icon: Scale,
    title: 'Expert Legal Counsel',
    description: 'Over 25 years of combined legal experience across all practice areas.'
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '98% success rate with thousands of satisfied clients nationwide.'
  },
  {
    icon: Users,
    title: 'Client-Focused Approach',
    description: 'Personalized legal strategies tailored to your unique situation.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock support for urgent legal matters and emergencies.'
  }
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-navy-deep">
      <HeroSection />
      
      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-gold">Premium Law</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We combine decades of legal expertise with cutting-edge technology and unwavering dedication to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <highlight.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PracticeCards />
      <StatisticsSection />
      <TestimonialsCarousel />
      
      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Schedule your free consultation today and take the first step toward resolving your legal matters with confidence.
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
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}