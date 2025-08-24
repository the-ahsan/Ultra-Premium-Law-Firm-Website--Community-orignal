import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Award, Users, Clock, TrendingUp } from 'lucide-react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
}

function AnimatedCounter({ from, to, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [motionValue, isInView, to]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString();
      }
    });
    
    return unsubscribe;
  }, [springValue]);

  return <span ref={ref}>{from}</span>;
}

const statistics = [
  {
    icon: Award,
    value: 500,
    suffix: "+",
    label: "Cases Won",
    description: "Successful legal victories",
    color: "from-yellow-500 to-gold"
  },
  {
    icon: Users,
    value: 1200,
    suffix: "+",
    label: "Clients Served",
    description: "Satisfied clients nationwide",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Clock,
    value: 25,
    suffix: "+",
    label: "Years Experience",
    description: "Decades of legal expertise",
    color: "from-green-500 to-green-600"
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: "%",
    label: "Success Rate",
    description: "Proven track record",
    color: "from-purple-500 to-purple-600"
  }
];

export function StatisticsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-200px" });

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-black to-navy-deep relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A664' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
            Proven <span className="text-gold">Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and client success.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 100, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 20
              }}
              viewport={{ once: true }}
              className="relative group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Card Container */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gold/20 backdrop-blur-sm overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating Icon Background */}
                <motion.div
                  className="absolute -top-2 -right-2 opacity-10"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity }
                  }}
                >
                  <stat.icon className="w-20 h-20 text-gold" />
                </motion.div>

                <div className="relative z-10 text-center">
                  {/* Animated Icon */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      y: -5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mx-auto mb-4 w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center"
                  >
                    <stat.icon className="w-6 h-6 text-gold" />
                  </motion.div>

                  {/* Animated Counter */}
                  <motion.div
                    className="mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <span className="font-serif text-4xl md:text-5xl font-bold text-white">
                      <AnimatedCounter from={0} to={stat.value} duration={2 + index * 0.2} />
                    </span>
                    <span className="text-gold text-3xl md:text-4xl font-bold">
                      {stat.suffix}
                    </span>
                  </motion.div>

                  <h3 className="text-gold font-semibold text-lg mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.02 }}
                />

                {/* Particle Effect on Hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  whileHover="hover"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gold rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      variants={{
                        hover: {
                          scale: [1, 2, 1],
                          opacity: [0, 1, 0],
                          y: [0, -20, 0],
                        }
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* 3D Shadow Effect */}
              <motion.div
                className="absolute inset-0 bg-gold/10 rounded-2xl -z-10"
                animate={{ 
                  rotateX: [0, 2, 0],
                  rotateY: [0, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                style={{ 
                  transform: 'translateZ(-10px) translateY(10px)',
                  filter: 'blur(10px)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}