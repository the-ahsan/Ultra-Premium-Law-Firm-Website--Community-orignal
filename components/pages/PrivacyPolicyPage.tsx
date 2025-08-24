import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, UserCheck, FileText, Globe } from 'lucide-react';

const sections = [
  {
    title: 'Information We Collect',
    icon: FileText,
    content: [
      'Personal information you provide when contacting us (name, email, phone number)',
      'Case-related information shared during consultations',
      'Website usage data and analytics',
      'Communication records and correspondence',
      'Payment and billing information for legal services'
    ]
  },
  {
    title: 'How We Use Your Information',
    icon: UserCheck,
    content: [
      'To provide legal services and consultations',
      'To communicate about your case and legal matters',
      'To improve our website and services',
      'To send important legal updates and newsletters (with your consent)',
      'To comply with legal and regulatory requirements'
    ]
  },
  {
    title: 'Information Sharing and Disclosure',
    icon: Eye,
    content: [
      'We do not sell, trade, or rent your personal information to third parties',
      'Information may be shared with trusted service providers under strict confidentiality agreements',
      'We may disclose information when required by law or court order',
      'Attorney-client privileged communications are protected under applicable laws',
      'Anonymous, aggregated data may be used for statistical purposes'
    ]
  },
  {
    title: 'Data Security',
    icon: Lock,
    content: [
      'We use industry-standard encryption for all data transmission',
      'Secure servers and firewalls protect your information',
      'Access to personal data is limited to authorized personnel only',
      'Regular security audits and updates are performed',
      'Client files are stored in secure, encrypted databases'
    ]
  },
  {
    title: 'Your Rights and Choices',
    icon: Shield,
    content: [
      'You have the right to access your personal information',
      'You can request corrections to inaccurate information',
      'You may request deletion of your data (subject to legal retention requirements)',
      'You can opt-out of marketing communications at any time',
      'You have the right to data portability where applicable'
    ]
  },
  {
    title: 'International Users',
    icon: Globe,
    content: [
      'Our services are primarily intended for users in the United States',
      'Data may be transferred and processed in the United States',
      'We comply with applicable international data protection laws',
      'European users have additional rights under GDPR',
      'Contact us for specific international privacy questions'
    ]
  }
];

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-navy-deep pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="text-gold">Policy</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8">
              Your privacy and the confidentiality of your information are of utmost importance to us. 
              This policy explains how we collect, use, and protect your data.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border border-gold/30 rounded-xl p-6">
              <p className="text-gray-300">
                <strong className="text-gold">Last Updated:</strong> January 1, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8">
              <h2 className="font-serif text-3xl font-bold text-white mb-6">
                Our Commitment to Your Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Premium Law Firm ("we," "our," or "us") is committed to protecting your privacy and maintaining 
                the confidentiality of your personal information. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our legal services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By using our website or services, you consent to the practices described in this Privacy Policy. 
                We encourage you to read this policy carefully and contact us if you have any questions.
              </p>
            </div>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Attorney-Client Privilege Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Attorney-Client Privilege
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Communications between you and our attorneys are protected by attorney-client privilege, 
                which is one of the strongest protections available under law. This privilege ensures that 
                confidential communications made for the purpose of seeking legal advice are protected from disclosure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Please note that this privilege may not apply to communications made before an attorney-client 
                relationship is established or in certain limited circumstances defined by law.
              </p>
            </div>
          </motion.div>

          {/* Cookies and Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Cookies and Tracking Technologies
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our website uses cookies and similar technologies to enhance your browsing experience, 
                analyze site traffic, and understand user preferences. You can control cookie settings 
                through your browser preferences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We use both session cookies (which expire when you close your browser) and persistent 
                cookies (which remain on your device until deleted) to provide our services effectively.
              </p>
            </div>
          </motion.div>

          {/* Updates to Policy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Changes to This Privacy Policy
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or applicable laws. We will notify you of any material changes by posting the updated 
                policy on our website and updating the "Last Updated" date.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Your continued use of our services after any changes to this policy constitutes your 
                acceptance of the updated terms.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Questions About Our Privacy Policy?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or how we handle your personal information, 
                please don't hesitate to contact us. We're here to help and ensure your privacy concerns are addressed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="bg-gold text-navy-deep hover:bg-gold/90 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => window.location.href = 'mailto:privacy@premiumlaw.com'}
                  className="border border-gold text-gold hover:bg-gold hover:text-navy-deep px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Email Privacy Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

