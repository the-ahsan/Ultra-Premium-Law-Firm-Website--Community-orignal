import React, { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm';
import { ConsultationBooking } from '../ConsultationBooking';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Car, Train } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Location',
    details: ['123 Legal District', 'New York, NY 10001'],
    action: 'Get Directions'
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: ['Main: (555) 123-4567', 'Emergency: (555) 123-4568'],
    action: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Addresses',
    details: ['General: contact@premiumlaw.com', 'Cases: cases@premiumlaw.com'],
    action: 'Send Email'
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Mon-Fri: 8:00 AM - 7:00 PM', 'Sat: 9:00 AM - 5:00 PM'],
    action: 'Emergency Available 24/7'
  }
];

const officeFeatures = [
  { icon: Car, text: 'Free Parking Available' },
  { icon: Train, text: 'Near Public Transportation' },
  { icon: MapPin, text: 'Downtown Legal District' },
  { icon: Clock, text: 'Flexible Appointment Times' }
];

export function ContactPage() {
  const [isConsultation, setIsConsultation] = useState(false);

  useEffect(() => {
    // Check if user came from consultation booking
    const urlParams = new URLSearchParams(window.location.search);
    const consultation = urlParams.get('consultation');
    if (consultation === 'true') {
      setIsConsultation(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-navy-deep pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="opacity-0 animate-fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              {isConsultation ? (
                <>Schedule Your <span className="text-gold">Free Consultation</span></>
              ) : (
                <>Contact <span className="text-gold">Premium Law</span></>
              )}
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
              {isConsultation ? (
                'Take the first step towards resolving your legal matter. Our expert attorneys are ready to help you achieve the best possible outcome.'
              ) : (
                'Ready to discuss your legal needs? Reach out today for a free consultation with our experienced legal team.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Booking or Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {isConsultation ? (
            <div className="space-y-12">
              <ConsultationBooking />
              
              {/* Quick Contact Options */}
              <div className="text-center">
                <p className="text-gray-300 mb-6">
                  Prefer to speak with someone directly?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="bg-gold text-navy-deep hover:bg-gold/90 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    onClick={() => window.location.href = 'tel:+15551234567'}
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Call (555) 123-4567
                  </button>
                  <button 
                    className="border border-gold text-gold hover:bg-gold hover:text-navy-deep px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    onClick={() => setIsConsultation(false)}
                  >
                    Use General Contact Form
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Contact Information Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 text-center hover:border-gold/40 transition-all duration-500"
                  >
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <info.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-2 mb-6">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-gold text-sm font-medium">
                      {info.action}
                    </p>
                  </div>
                ))}
              </div>

              {/* Main Contact Section */}
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Contact Form */}
                <div>
                  <ContactForm />
                </div>

                {/* Office Information */}
                <div className="space-y-8">
                  {/* Map Placeholder */}
                  <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-gold/20 to-navy-deep/40 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                        <p className="text-white text-lg font-medium">Interactive Map</p>
                        <p className="text-gray-300">123 Legal District, NY 10001</p>
                      </div>
                    </div>
                  </div>

                  {/* Office Features */}
                  <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8">
                    <h3 className="font-serif text-2xl font-bold text-white mb-6">
                      Why Visit Our Office?
                    </h3>
                    <div className="space-y-4">
                      {officeFeatures.map((feature, index) => (
                        <div
                          key={feature.text}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                            <feature.icon className="w-4 h-4 text-gold" />
                          </div>
                          <span className="text-gray-300">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8">
                    <h3 className="font-serif text-2xl font-bold text-white mb-4">
                      Emergency Legal Services
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Legal emergencies don't wait for business hours. Our emergency hotline is available 24/7 for urgent legal matters.
                    </p>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gold" />
                      <span className="text-gold font-bold text-lg">(555) 123-4568</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* FAQ Section - Only show for general contact */}
      {!isConsultation && (
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 text-lg">
                Common questions about our services and consultation process.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'Is the initial consultation really free?',
                  answer: 'Yes, we offer a completely free initial consultation to understand your legal needs and discuss how we can help you achieve your goals.'
                },
                {
                  question: 'How quickly can I schedule an appointment?',
                  answer: 'We typically can schedule consultations within 24-48 hours. For urgent matters, same-day appointments are often available.'
                },
                {
                  question: 'Do you handle cases outside of New York?',
                  answer: 'While our primary practice is in New York, we have partnerships with qualified attorneys in other states and can assist with multi-state legal matters.'
                },
                {
                  question: 'What should I bring to my consultation?',
                  answer: 'Bring any relevant documents, contracts, correspondence, or evidence related to your legal matter. Our team will guide you on specific requirements when you schedule.'
                }
              ].map((faq, index) => (
                <div
                  key={faq.question}
                  className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300"
                >
                  <h3 className="font-serif text-lg font-bold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}