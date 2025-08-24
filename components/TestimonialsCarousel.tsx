import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, Tech Innovations",
    content: "Their expertise in corporate law helped us navigate a complex merger seamlessly. The attention to detail and strategic guidance was exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    case: "Corporate Merger"
  },
  {
    id: 2,
    name: "David Thompson",
    role: "Small Business Owner",
    content: "After a difficult divorce, they fought tirelessly for my rights as a father. Their compassionate approach made all the difference during a challenging time.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    case: "Family Law"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Financial Analyst",
    content: "Facing criminal charges was terrifying, but their aggressive defense strategy and unwavering support resulted in a complete dismissal of all charges.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    case: "Criminal Defense"
  },
  {
    id: 4,
    name: "Robert Chen",
    role: "Entrepreneur",
    content: "Their contract law expertise saved my startup from a potentially devastating partnership dispute. Professional, thorough, and results-driven.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    case: "Contract Law"
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex >= testimonials.length) return 0;
      if (nextIndex < 0) return testimonials.length - 1;
      return nextIndex;
    });
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-navy-deep to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Client <span className="text-gold">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real experiences from clients who trusted us with their most important legal matters.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative h-96 mb-8 perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  rotateY: { type: "spring", stiffness: 300, damping: 30 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="h-full bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                  {/* Background Quote Icon */}
                  <Quote className="absolute top-8 right-8 w-16 h-16 text-gold/10" />
                  
                  <div className="h-full flex flex-col justify-center relative z-10">
                    <div className="flex items-center mb-6">
                      <motion.img
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full border-2 border-gold mr-4 object-cover"
                      />
                      <div>
                        <h3 className="text-white font-semibold text-xl">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-gray-400">
                          {testimonials[currentIndex].role}
                        </p>
                        <div className="flex mt-1">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-gold fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    <div className="text-gold font-semibold">
                      Case: {testimonials[currentIndex].case}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(-1)}
              className="border-gold text-gold hover:bg-gold hover:text-navy-deep p-3"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-gold' : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(1)}
              className="border-gold text-gold hover:bg-gold hover:text-navy-deep p-3"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Side Preview Cards */}
          <div className="hidden lg:block">
            {/* Previous Card */}
            <motion.div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 w-64 opacity-30"
              animate={{ rotateY: -15, scale: 0.8 }}
              whileHover={{ rotateY: -10, scale: 0.85, opacity: 0.5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gold/10 rounded-xl p-4">
                <div className="flex items-center mb-3">
                  <img
                    src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
                    alt=""
                    className="w-10 h-10 rounded-full border border-gold/30 mr-3"
                  />
                  <div>
                    <h4 className="text-white text-sm font-semibold">
                      {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].name}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm line-clamp-3">
                  "{testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].content}"
                </p>
              </div>
            </motion.div>

            {/* Next Card */}
            <motion.div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-20 w-64 opacity-30"
              animate={{ rotateY: 15, scale: 0.8 }}
              whileHover={{ rotateY: 10, scale: 0.85, opacity: 0.5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gold/10 rounded-xl p-4">
                <div className="flex items-center mb-3">
                  <img
                    src={testimonials[(currentIndex + 1) % testimonials.length].image}
                    alt=""
                    className="w-10 h-10 rounded-full border border-gold/30 mr-3"
                  />
                  <div>
                    <h4 className="text-white text-sm font-semibold">
                      {testimonials[(currentIndex + 1) % testimonials.length].name}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {testimonials[(currentIndex + 1) % testimonials.length].role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm line-clamp-3">
                  "{testimonials[(currentIndex + 1) % testimonials.length].content}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}