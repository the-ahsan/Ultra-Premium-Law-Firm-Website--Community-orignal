import { motion } from 'framer-motion';
import { Scale, Building, Heart, Shield, Home, FileText, Gavel, Users } from 'lucide-react';
import { Button } from '../ui/button';

const services = [
  {
    icon: Building,
    title: 'Corporate Law',
    description: 'Comprehensive business legal services including formation, contracts, mergers & acquisitions, and compliance.',
    features: ['Business Formation', 'Contract Negotiation', 'M&A Transactions', 'Regulatory Compliance'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
  },
  {
    icon: Heart,
    title: 'Family Law',
    description: 'Compassionate legal support for divorce, custody, adoption, and other family matters.',
    features: ['Divorce Proceedings', 'Child Custody', 'Adoption Services', 'Prenuptial Agreements'],
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop'
  },
  {
    icon: Shield,
    title: 'Criminal Defense',
    description: 'Aggressive defense representation for all criminal charges from misdemeanors to felonies.',
    features: ['DUI Defense', 'White Collar Crime', 'Violent Crimes', 'Drug Offenses'],
    image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=600&h=400&fit=crop'
  },
  {
    icon: Users,
    title: 'Personal Injury',
    description: 'Fighting for maximum compensation for accident victims and their families.',
    features: ['Auto Accidents', 'Medical Malpractice', 'Workplace Injuries', 'Wrongful Death'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop'
  },
  {
    icon: Home,
    title: 'Real Estate Law',
    description: 'Complete real estate legal services for residential and commercial transactions.',
    features: ['Property Transactions', 'Title Issues', 'Zoning Matters', 'Construction Law'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop'
  },
  {
    icon: FileText,
    title: 'Contract Law',
    description: 'Expert contract drafting, review, and dispute resolution services.',
    features: ['Contract Drafting', 'Agreement Review', 'Breach of Contract', 'Negotiations'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop'
  }
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-navy-deep pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-navy-deep" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Legal Services
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
              Comprehensive legal solutions tailored to meet your unique needs across all practice areas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-500">
                  {/* Service Image */}
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-navy-deep/40" />
                    <div className="absolute top-6 left-6 w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-navy-deep" />
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-8">
                    <h3 className="font-serif text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-gold/10 text-gold border border-gold/30 hover:bg-gold hover:text-navy-deep"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
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
              Our Legal Process
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We follow a proven methodology to ensure the best possible outcomes for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Free initial consultation to understand your legal needs' },
              { step: '02', title: 'Strategy', description: 'Develop a customized legal strategy for your case' },
              { step: '03', title: 'Execution', description: 'Implement the strategy with precision and expertise' },
              { step: '04', title: 'Resolution', description: 'Achieve the best possible outcome for your situation' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <span className="text-gold font-bold text-lg group-hover:text-navy-deep">
                    {process.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Need Legal Assistance?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us today for a free consultation and let our experienced team help you navigate your legal challenges.
            </p>
            <Button 
              size="lg"
              className="bg-gold text-navy-deep hover:bg-gold/90 text-lg px-8 py-6"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

