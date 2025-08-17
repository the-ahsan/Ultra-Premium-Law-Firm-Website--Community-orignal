import { motion } from 'motion/react';
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Separator } from './ui/separator';

const footerLinks = {
  'Practice Areas': [
    'Corporate Law',
    'Family Law',
    'Criminal Defense',
    'Personal Injury',
    'Real Estate',
    'Contract Law'
  ],
  'About': [
    'Our Team',
    'Our History',
    'Success Stories',
    'Awards',
    'Careers',
    'News'
  ],
  'Resources': [
    'Legal Blog',
    'Case Studies',
    'Legal Forms',
    'FAQ',
    'Client Portal',
    'Consultation'
  ]
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/premiumlaw', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/premiumlaw', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/premiumlaw', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/premiumlaw', label: 'Instagram' }
];

export function Footer() {
  const handleFooterNavigation = (linkText: string, category: string) => {
    // Practice Areas navigation
    if (category === 'Practice Areas') {
      const serviceMap: { [key: string]: string } = {
        'Corporate Law': '/services/corporate-law',
        'Family Law': '/services/family-law',
        'Criminal Defense': '/services/criminal-defense',
        'Personal Injury': '/services/personal-injury',
        'Real Estate': '/services/real-estate',
        'Contract Law': '/services/contract-law'
      };
      
      if (serviceMap[linkText]) {
        window.location.href = serviceMap[linkText];
      } else {
        window.location.href = '/services';
      }
    }
    // About section navigation
    else if (category === 'About') {
      const aboutMap: { [key: string]: string } = {
        'Our Team': '/about#team',
        'Our History': '/about#history',
        'Success Stories': '/about#success-stories',
        'Awards': '/about#awards',
        'Careers': '/about#careers',
        'News': '/blog'
      };
      
      if (aboutMap[linkText]) {
        window.location.href = aboutMap[linkText];
      } else {
        window.location.href = '/about';
      }
    }
    // Resources navigation
    else if (category === 'Resources') {
      const resourceMap: { [key: string]: string } = {
        'Legal Blog': '/blog',
        'Case Studies': '/blog#case-studies',
        'Legal Forms': '/resources/legal-forms',
        'FAQ': '/contact#faq',
        'Client Portal': '/client-portal',
        'Consultation': '/contact?consultation=true'
      };
      
      if (resourceMap[linkText]) {
        window.location.href = resourceMap[linkText];
      } else {
        window.location.href = '/resources';
      }
    }
  };

  const handleContactClick = (type: 'phone' | 'email' | 'address') => {
    switch (type) {
      case 'phone':
        window.location.href = 'tel:+15551234567';
        break;
      case 'email':
        window.location.href = 'mailto:contact@premiumlaw.com';
        break;
      case 'address':
        window.open('https://maps.google.com/?q=123+Legal+District,+NY+10001', '_blank');
        break;
    }
  };

  return (
    <footer className="bg-navy-deep relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C6A664' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="flex items-center space-x-3 mb-4"
                >
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <Scale className="w-6 h-6 text-navy-deep" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Premium Law
                    </h3>
                    <p className="text-gold text-sm">Excellence in Legal Service</p>
                  </div>
                </motion.div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Providing exceptional legal representation with unwavering commitment to justice and client success for over two decades.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => handleContactClick('phone')}
                    className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-4567</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => handleContactClick('email')}
                    className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>contact@premiumlaw.com</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => handleContactClick('address')}
                    className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>123 Legal District, NY 10001</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-serif text-xl font-bold text-white mb-6">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <motion.button
                        onClick={() => handleFooterNavigation(link, title)}
                        whileHover={{ x: 5, color: '#C6A664' }}
                        className="text-gray-300 hover:text-gold transition-colors duration-300 block cursor-pointer text-left"
                      >
                        {link}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="bg-gold/20" />

        {/* Bottom Footer */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center md:text-left"
            >
              <p>
                © 2025 Premium Law Firm. All rights reserved. |{' '}
                <motion.button
                  onClick={() => window.location.href = '/privacy-policy'}
                  whileHover={{ color: '#C6A664' }}
                  className="hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  Privacy Policy
                </motion.button>
                {' '}|{' '}
                <motion.button
                  onClick={() => window.location.href = '/terms-of-service'}
                  whileHover={{ color: '#C6A664' }}
                  className="hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  Terms of Service
                </motion.button>
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    backgroundColor: '#C6A664'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-navy-deep transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/20 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                bottom: `${10 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}