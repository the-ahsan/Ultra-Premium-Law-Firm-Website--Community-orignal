import React from 'react';
import { motion } from 'motion/react';
import { Scale, FileText, AlertTriangle, Users, Globe, Shield } from 'lucide-react';

const sections = [
  {
    title: 'Legal Services and Representation',
    icon: Scale,
    content: [
      'Our legal services are provided by licensed attorneys in good standing',
      'Attorney-client relationships are established through formal engagement agreements',
      'We provide legal advice only within our areas of practice and jurisdiction',
      'All legal services are subject to applicable laws and professional conduct rules',
      'Consultation does not automatically create an attorney-client relationship'
    ]
  },
  {
    title: 'Client Responsibilities',
    icon: Users,
    content: [
      'Provide accurate and complete information about your legal matter',
      'Respond promptly to requests for information or documentation',
      'Pay legal fees and costs as agreed in your engagement agreement',
      'Follow legal advice and instructions provided by your attorney',
      'Notify us immediately of any changes that may affect your case'
    ]
  },
  {
    title: 'Website Use and Restrictions',
    icon: Globe,
    content: [
      'Our website is for informational purposes and does not constitute legal advice',
      'You may not use our website for any unlawful or prohibited purpose',
      'Content on our website is protected by copyright and other intellectual property laws',
      'You may not reproduce, distribute, or modify website content without permission',
      'We reserve the right to monitor and restrict access to our website'
    ]
  },
  {
    title: 'Fees and Payment Terms',
    icon: FileText,
    content: [
      'Legal fees are outlined in individual engagement agreements',
      'Payment terms vary based on the type and complexity of legal services',
      'Additional costs may include court fees, expert witnesses, and administrative expenses',
      'Late payment may result in interest charges and suspension of services',
      'Fee disputes are subject to applicable bar association procedures'
    ]
  },
  {
    title: 'Limitation of Liability',
    icon: AlertTriangle,
    content: [
      'Our liability is limited to the scope of services outlined in engagement agreements',
      'We are not liable for outcomes beyond our reasonable control',
      'Damages are limited to the amount of fees paid for the specific legal matter',
      'We do not guarantee specific results or outcomes in legal matters',
      'Claims must be brought within applicable statute of limitations periods'
    ]
  },
  {
    title: 'Privacy and Confidentiality',
    icon: Shield,
    content: [
      'Client communications are protected by attorney-client privilege',
      'We maintain strict confidentiality of all client information',
      'Personal information is handled according to our Privacy Policy',
      'We may use anonymous case information for educational or marketing purposes',
      'Confidentiality obligations survive termination of attorney-client relationships'
    ]
  }
];

export function TermsOfServicePage() {
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
              <Scale className="w-10 h-10 text-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="text-gold">Service</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8">
              These terms govern your use of our legal services and website. Please read them carefully 
              as they contain important information about your rights and obligations.
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
                Agreement to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to Premium Law Firm. These Terms of Service ("Terms") govern your use of our 
                website and legal services. By accessing our website or engaging our legal services, 
                you agree to be bound by these Terms and all applicable laws and regulations.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you do not agree with any of these Terms, you are prohibited from using our services. 
                These Terms apply to all visitors, users, and clients of our legal services.
              </p>
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
                <p className="text-gold font-medium">
                  <strong>Important:</strong> These Terms do not create an attorney-client relationship. 
                  Such relationships are established only through signed engagement agreements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Professional Conduct */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Professional Standards
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our attorneys are bound by the highest standards of professional conduct and ethics. 
                We adhere to all applicable bar association rules, including those governing client 
                confidentiality, conflicts of interest, and competent representation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Any concerns about our professional conduct should be directed to the appropriate 
                state bar association or through our internal grievance procedures.
              </p>
            </div>
          </motion.div>

          {/* Dispute Resolution */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Dispute Resolution
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">Fee Disputes</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Fee disputes are subject to applicable state bar association fee arbitration programs. 
                    You have the right to seek arbitration of fee disputes in accordance with local rules.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">Other Disputes</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Disputes not related to fees may be subject to mediation or arbitration as specified 
                    in individual engagement agreements or as required by applicable law.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">Governing Law</h4>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms are governed by the laws of New York State, without regard to conflict 
                    of law principles. Any legal action must be brought in the appropriate courts of New York.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Intellectual Property Rights
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                All content on our website, including text, graphics, logos, images, and software, 
                is the property of Premium Law Firm or its licensors and is protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You may view and download content for personal, non-commercial use only. Any other 
                use requires our prior written permission.
              </p>
            </div>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Termination of Services
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">Client Termination</h4>
                  <p className="text-gray-300 leading-relaxed">
                    You may terminate our representation at any time with written notice. You remain 
                    responsible for fees and costs incurred up to the termination date.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">Attorney Withdrawal</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We may withdraw from representation in accordance with applicable professional 
                    conduct rules, including non-payment of fees or irreconcilable differences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Updates to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Changes to Terms of Service
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. Updated Terms will be posted 
                on our website with a revised "Last Updated" date. Material changes will be communicated 
                to active clients.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Your continued use of our services after any changes constitutes acceptance of the 
                updated Terms. If you do not agree to modified Terms, you must discontinue use of our services.
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
                Questions About These Terms?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about these Terms of Service or need clarification about 
                any provisions, please contact us. We're here to help you understand your rights and obligations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="bg-gold text-navy-deep hover:bg-gold/90 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => window.location.href = 'mailto:legal@premiumlaw.com'}
                  className="border border-gold text-gold hover:bg-gold hover:text-navy-deep px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Email Legal Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}