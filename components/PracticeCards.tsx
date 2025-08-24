import { motion } from 'framer-motion';
import { Scale, Users, Shield, Building } from 'lucide-react';
import { Card } from './ui/card';

const practiceAreas = [
  {
    icon: Building,
    title: "Corporate Law",
    description: "Strategic business counsel for mergers, acquisitions, contracts, and corporate governance.",
    stats: "500+ Cases",
    color: "from-blue-900 to-blue-700"
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Compassionate representation for divorce, custody, adoption, and family disputes.",
    stats: "300+ Families",
    color: "from-purple-900 to-purple-700"
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    description: "Aggressive defense strategies for all criminal charges with proven track record.",
    stats: "95% Success Rate",
    color: "from-red-900 to-red-700"
  }
];

export function PracticeCards() {
  return (
    <section className="py-24 bg-gradient-to-b from-navy-deep to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gold">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized legal services tailored to your unique needs with decades of combined experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -20,
                rotateX: 5,
                rotateY: 5,
                z: 50,
                scale: 1.02
              }}
              viewport={{ once: true }}
              className="card-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="relative h-96 p-8 bg-gradient-to-br from-gray-900/90 to-black/90 border-gold/20 backdrop-blur-sm overflow-hidden group cursor-pointer">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Floating Icon Background */}
                <motion.div
                  className="absolute -top-4 -right-4 opacity-5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <area.icon className="w-32 h-32 text-gold" />
                </motion.div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center mb-4"
                    >
                      <area.icon className="w-8 h-8 text-gold" />
                    </motion.div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">
                      {area.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 flex-grow">
                    {area.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-semibold text-lg">
                        {area.stats}
                      </span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-gold"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 border-2 border-gold/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </section>
  );
}

