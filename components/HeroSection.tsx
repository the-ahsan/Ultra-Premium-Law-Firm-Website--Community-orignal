import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const handleBookConsultation = () => {
    // Navigate to contact page with consultation flag
    window.location.href = '/contact?consultation=true';
  };

  const handleViewPracticeAreas = () => {
    // Navigate to services page
    window.location.href = '/services';
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-deep">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 30, 58, 0.7), rgba(11, 30, 58, 0.8)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
      </div>

      {/* Animated Overlay Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Defending Justice,
            <br />
            <span className="text-gold">Delivering Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Premier legal representation with over two decades of proven success. 
            We fight for your rights with unwavering dedication and expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold-light text-navy-deep px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
            onClick={handleBookConsultation}
          >
            Book Consultation
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-gold text-gold hover:bg-gold hover:text-navy-deep px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={handleViewPracticeAreas}
          >
            View Practice Areas
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gold" />
      </motion.div>

      {/* 3D Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 180],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full border-2 border-gold transform rotate-45" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 opacity-10"
        animate={{
          rotateX: [360, 0],
          rotateY: [180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full border-2 border-gold rounded-full" />
      </motion.div>
    </section>
  );
}