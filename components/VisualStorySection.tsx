import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Gavel, ArrowRight, CheckCircle } from 'lucide-react';

const storySteps = [
  {
    title: "Challenge",
    description: "Legal obstacles blocking your path forward",
    icon: "⚖️",
    visual: "Chains",
    color: "from-red-900 to-red-700"
  },
  {
    title: "Strategy",
    description: "Expert analysis and tactical planning",
    icon: "🎯",
    visual: "Arrow",
    color: "from-blue-900 to-blue-700"
  },
  {
    title: "Resolution",
    description: "Successful outcomes and peace of mind",
    icon: "✨",
    visual: "Light",
    color: "from-green-900 to-green-700"
  }
];

export function VisualStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <div className="w-full h-full bg-gradient-to-br from-gold/20 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          style={{ y: textY }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl font-bold text-white mb-6"
          >
            From Challenge to <span className="text-gold">Victory</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Every legal challenge is an opportunity for transformation. 
            Watch how we turn obstacles into victories.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent transform -translate-y-1/2 hidden md:block" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {storySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Visual Metaphor */}
                <div className="relative mb-8">
                  <motion.div
                    className="w-32 h-32 mx-auto relative"
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {/* Background Circle */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20`} />
                    
                    {/* Animated Visual Elements */}
                    {step.visual === "Chains" && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-16 h-16 border-4 border-red-500 rounded-lg transform rotate-45" />
                        <motion.div
                          className="absolute w-12 h-2 bg-red-500"
                          animate={{ scaleX: [1, 0, 1] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        />
                      </motion.div>
                    )}

                    {step.visual === "Arrow" && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="w-12 h-12 text-blue-400" />
                      </motion.div>
                    )}

                    {step.visual === "Light" && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <CheckCircle className="w-12 h-12 text-green-400" />
                        <motion.div
                          className="absolute inset-0 border-2 border-green-400 rounded-full"
                          animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    )}

                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">{step.icon}</span>
                    </div>
                  </motion.div>

                  {/* Step Number */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy-deep font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.3 + 0.5, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                <div className="text-center">
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Arrow (except last item) */}
                {index < storySteps.length - 1 && (
                  <motion.div
                    className="absolute top-16 -right-4 hidden md:block"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 + 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="w-8 h-8 text-gold" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(198, 166, 100, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold hover:bg-gold-light text-navy-deep px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
          >
            Start Your Journey to Justice
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
