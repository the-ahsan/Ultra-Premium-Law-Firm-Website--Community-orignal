import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, Users, Calendar, Scale, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const legalForms = [
  {
    title: 'Power of Attorney Forms',
    description: 'Complete forms for granting legal authority to act on your behalf',
    category: 'Estate Planning',
    downloadSize: '2.1 MB',
    icon: FileText
  },
  {
    title: 'Contract Templates',
    description: 'Professional contract templates for various business needs',
    category: 'Business Law',
    downloadSize: '1.8 MB',
    icon: Scale
  },
  {
    title: 'Divorce Settlement Agreement',
    description: 'Comprehensive forms for divorce proceedings and settlements',
    category: 'Family Law',
    downloadSize: '3.2 MB',
    icon: Users
  },
  {
    title: 'Real Estate Purchase Agreement',
    description: 'Standard forms for property transactions and agreements',
    category: 'Real Estate',
    downloadSize: '2.7 MB',
    icon: FileText
  },
  {
    title: 'Employment Agreements',
    description: 'Templates for employment contracts and HR documentation',
    category: 'Employment Law',
    downloadSize: '1.9 MB',
    icon: Users
  },
  {
    title: 'Small Claims Court Forms',
    description: 'Complete packet for filing small claims court cases',
    category: 'Civil Law',
    downloadSize: '1.5 MB',
    icon: Scale
  }
];

const resources = [
  {
    title: 'Legal Consultation Guide',
    description: 'Comprehensive guide on how to prepare for your legal consultation',
    type: 'Guide',
    icon: BookOpen,
    link: '/resources/consultation-guide'
  },
  {
    title: 'Understanding Your Rights',
    description: 'Essential information about your legal rights in various situations',
    type: 'eBook',
    icon: Scale,
    link: '/resources/legal-rights'
  },
  {
    title: 'Legal Terminology Dictionary',
    description: 'Complete glossary of legal terms and their meanings',
    type: 'Reference',
    icon: BookOpen,
    link: '/resources/legal-dictionary'
  },
  {
    title: 'Case Study Library',
    description: 'Real case studies showcasing successful legal outcomes',
    type: 'Case Studies',
    icon: FileText,
    link: '/blog#case-studies'
  }
];

const categories = [
  'All Categories',
  'Estate Planning',
  'Business Law',
  'Family Law',
  'Real Estate',
  'Employment Law',
  'Civil Law'
];

export function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All Categories');

  const filteredForms = selectedCategory === 'All Categories' 
    ? legalForms 
    : legalForms.filter(form => form.category === selectedCategory);

  const handleDownload = (formTitle: string) => {
    // Mock download - in real implementation, this would trigger actual file download
    console.log(`Downloading: ${formTitle}`);
    // You could integrate with your document management system here
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
            className="mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Legal <span className="text-gold">Resources</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Access our comprehensive library of legal forms, guides, and resources to help you navigate your legal matters with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Forms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Legal Forms & Documents
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Download professionally prepared legal forms and documents. Please note that these forms are for informational purposes and should be reviewed with an attorney.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-gold text-navy-deep hover:bg-gold/90"
                      : "border-gold text-gold hover:bg-gold hover:text-navy-deep"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Forms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredForms.map((form, index) => (
              <motion.div
                key={form.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                        <form.icon className="w-6 h-6 text-gold" />
                      </div>
                      <span className="bg-gold/20 text-gold px-2 py-1 rounded text-sm">
                        {form.category}
                      </span>
                    </div>
                    <CardTitle className="text-white mb-2">{form.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {form.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Download className="w-4 h-4" />
                        <span>{form.downloadSize}</span>
                      </div>
                      <Button
                        onClick={() => handleDownload(form.title)}
                        className="bg-gold text-navy-deep hover:bg-gold/90"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Important Legal Disclaimer</h3>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
              These forms are provided for informational purposes only and do not constitute legal advice. 
              Laws vary by jurisdiction and individual circumstances. We strongly recommend consulting with 
              a qualified attorney before using any legal forms or making legal decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Additional Resources
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Explore our comprehensive collection of legal guides, case studies, and educational materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => window.location.href = resource.link}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                      <resource.icon className="w-8 h-8 text-gold" />
                    </div>
                    <CardTitle className="text-white mb-2">{resource.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-between">
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm">
                        {resource.type}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
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
              Need Professional Legal Help?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              While our resources are comprehensive, nothing replaces personalized legal advice. 
              Schedule a consultation with our experienced attorneys today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gold text-navy-deep hover:bg-gold/90 text-lg px-8 py-6"
                onClick={() => window.location.href = '/contact?consultation=true'}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-navy-deep text-lg px-8 py-6"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}