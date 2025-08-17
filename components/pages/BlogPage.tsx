import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '../ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Your Rights in Employment Disputes',
    excerpt: 'A comprehensive guide to protecting yourself in workplace conflicts and understanding employment law basics.',
    author: 'Sarah Mitchell',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Employment Law',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'Corporate Compliance in 2025: What Businesses Need to Know',
    excerpt: 'Latest regulatory changes and compliance requirements for businesses operating in the current legal landscape.',
    author: 'Michael Chen',
    date: '2025-01-12',
    readTime: '12 min read',
    category: 'Corporate Law',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Family Law Updates: New Custody Guidelines',
    excerpt: 'Recent changes to child custody laws and what they mean for families going through separation or divorce.',
    author: 'Emily Rodriguez',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Family Law',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Personal Injury Claims: Maximizing Your Compensation',
    excerpt: 'Essential strategies for building a strong personal injury case and securing fair compensation.',
    author: 'David Thompson',
    date: '2025-01-08',
    readTime: '10 min read',
    category: 'Personal Injury',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Real Estate Transactions: Common Pitfalls to Avoid',
    excerpt: 'Key legal considerations and potential issues to watch for when buying or selling property.',
    author: 'Sarah Mitchell',
    date: '2025-01-05',
    readTime: '7 min read',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'Criminal Defense: Your Rights During Police Encounters',
    excerpt: 'Understanding your constitutional rights and how to protect yourself during police interactions.',
    author: 'Michael Chen',
    date: '2025-01-03',
    readTime: '9 min read',
    category: 'Criminal Defense',
    image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=600&h=400&fit=crop'
  }
];

const categories = ['All', 'Corporate Law', 'Family Law', 'Criminal Defense', 'Personal Injury', 'Real Estate', 'Employment Law'];

export function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-navy-deep pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-navy-deep" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Legal Insights & News
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
              Stay informed with the latest legal developments, expert insights, and practical advice from our experienced legal team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-gold/30 text-gray-300 hover:bg-gold hover:text-navy-deep hover:border-gold"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-gold text-navy-deep px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-gold text-sm font-medium">{featuredPost.category}</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-white mb-6">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gold" />
                        <span className="text-gray-300 text-sm">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span className="text-gray-300 text-sm">{formatDate(featuredPost.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gold" />
                        <span className="text-gray-300 text-sm">{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-gold text-navy-deep hover:bg-gold/90 self-start">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Latest Articles
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Expert legal insights and practical advice to help you navigate complex legal matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-500">
                  <div className="relative">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-navy-deep/40" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold/90 text-navy-deep px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gold text-sm font-medium group-hover:text-gold/80 transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Subscribe to our newsletter for the latest legal insights and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
              <Button className="bg-gold text-navy-deep hover:bg-gold/90">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}