import { motion } from 'motion/react';
import { VisualStorySection } from '../VisualStorySection';
import { StatisticsSection } from '../StatisticsSection';
import { Scale, Award, Users, BookOpen, Calendar, Briefcase, Trophy } from 'lucide-react';
import { Button } from '../ui/button';

const teamMembers = [
  {
    name: 'Sarah Mitchell',
    position: 'Managing Partner',
    specialization: 'Corporate Law & M&A',
    experience: '20+ years',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
    bio: 'Harvard Law graduate with extensive experience in corporate transactions and business law.'
  },
  {
    name: 'Michael Chen',
    position: 'Senior Partner',
    specialization: 'Criminal Defense',
    experience: '18+ years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'Former prosecutor turned defense attorney with a 95% success rate in criminal cases.'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Partner',
    specialization: 'Family Law',
    experience: '15+ years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    bio: 'Compassionate advocate specializing in complex family law matters and child advocacy.'
  },
  {
    name: 'David Thompson',
    position: 'Partner',
    specialization: 'Personal Injury',
    experience: '12+ years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Dedicated to fighting for injury victims with over $50M recovered in settlements.'
  }
];

const values = [
  {
    icon: Scale,
    title: 'Justice',
    description: 'Unwavering commitment to upholding justice and protecting our clients\' rights.'
  },
  {
    icon: Users,
    title: 'Integrity',
    description: 'Honest, transparent communication and ethical practices in every case.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Pursuit of the highest standards in legal representation and client service.'
  },
  {
    icon: BookOpen,
    title: 'Knowledge',
    description: 'Continuous learning and staying current with evolving legal landscapes.'
  }
];

const successStories = [
  {
    title: 'Corporate Merger Success',
    description: 'Successfully guided a $500M merger, saving the client over $50M in potential liabilities.',
    outcome: '$50M Saved',
    category: 'Corporate Law'
  },
  {
    title: 'Criminal Case Dismissal',
    description: 'Achieved complete dismissal of felony charges through expert defense strategy.',
    outcome: 'Case Dismissed',
    category: 'Criminal Defense'
  },
  {
    title: 'Family Custody Victory',
    description: 'Secured full custody for client in complex international custody dispute.',
    outcome: 'Full Custody',
    category: 'Family Law'
  }
];

const careers = [
  {
    position: 'Senior Associate Attorney',
    department: 'Corporate Law',
    type: 'Full-time',
    location: 'New York, NY'
  },
  {
    position: 'Paralegal',
    department: 'Family Law',
    type: 'Full-time',
    location: 'New York, NY'
  },
  {
    position: 'Legal Assistant',
    department: 'Personal Injury',
    type: 'Part-time',
    location: 'New York, NY'
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-navy-deep pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-gold">Premium Law</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                For over two decades, we have been at the forefront of legal excellence, providing unmatched representation and achieving outstanding results for our clients across diverse practice areas.
              </p>
              <Button 
                size="lg"
                className="bg-gold text-navy-deep hover:bg-gold/90"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Consultation
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
                alt="Premium Law Office"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section id="history" className="py-20 relative overflow-hidden">
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
              Our History
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Founded in 2002, Premium Law has grown from a small practice to one of the region's most respected law firms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: '2002', milestone: 'Firm Founded', description: 'Started with 3 attorneys and a vision for excellence' },
              { year: '2010', milestone: 'Major Expansion', description: 'Opened satellite offices and expanded practice areas' },
              { year: '2015', milestone: 'Industry Recognition', description: 'First major industry awards and national recognition' },
              { year: '2020', milestone: 'Digital Innovation', description: 'Launched advanced client portal and digital services' },
              { year: '2023', milestone: 'Community Impact', description: 'Established pro bono foundation serving 1000+ clients' },
              { year: '2025', milestone: 'Continued Growth', description: 'Now serving clients across multiple states' }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300"
              >
                <div className="text-gold text-2xl font-bold mb-2">{milestone.year}</div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{milestone.milestone}</h3>
                <p className="text-gray-300 text-sm">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <VisualStorySection />

      {/* Our Values */}
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
              Our Core Values
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              These fundamental principles guide everything we do and define who we are as legal professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatisticsSection />

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our experienced attorneys bring decades of combined expertise and a passion for achieving exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-500">
                  <div className="relative">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-navy-deep/40" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gold mb-2">{member.position}</p>
                    <p className="text-gray-300 text-sm mb-3">{member.specialization}</p>
                    <p className="text-gold text-sm font-medium mb-4">{member.experience}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 relative overflow-hidden">
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
              Success Stories
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Real results for real clients. Here are just a few examples of how we've made a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Trophy className="w-8 h-8 text-gold" />
                  <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm">
                    {story.category}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{story.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{story.description}</p>
                <div className="text-gold font-bold text-lg">{story.outcome}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
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
              Awards & Recognition
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading legal organizations and publications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: '2024', award: 'Best Law Firm', organization: 'Legal Excellence Awards' },
              { year: '2023', award: 'Top Rated Lawyers', organization: 'National Law Journal' },
              { year: '2023', award: 'Client Choice Award', organization: 'American Lawyer' },
              { year: '2022', award: 'Firm of the Year', organization: 'State Bar Association' },
              { year: '2022', award: 'Pro Bono Recognition', organization: 'Legal Aid Society' },
              { year: '2021', award: 'Excellence in Practice', organization: 'Bar Foundation' }
            ].map((recognition, index) => (
              <motion.div
                key={`${recognition.year}-${recognition.award}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6 text-center hover:border-gold/40 transition-all duration-300"
              >
                <div className="text-gold text-2xl font-bold mb-2">{recognition.year}</div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{recognition.award}</h3>
                <p className="text-gray-300 text-sm">{recognition.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We're always looking for talented legal professionals who share our commitment to excellence and client service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {careers.map((job, index) => (
              <motion.div
                key={job.position}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Briefcase className="w-8 h-8 text-gold" />
                  <span className="bg-gold/20 text-gold px-2 py-1 rounded text-sm">
                    {job.type}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">{job.position}</h3>
                <p className="text-gray-300 mb-2">{job.department}</p>
                <p className="text-gold text-sm">{job.location}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              size="lg"
              className="bg-gold text-navy-deep hover:bg-gold/90"
              onClick={() => window.location.href = 'mailto:careers@premiumlaw.com'}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Apply Now
            </Button>
          </motion.div>
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
              Experience the Premium Difference
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of satisfied clients who have trusted us with their most important legal matters.
            </p>
            <Button 
              size="lg"
              className="bg-gold text-navy-deep hover:bg-gold/90 text-lg px-8 py-6"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}