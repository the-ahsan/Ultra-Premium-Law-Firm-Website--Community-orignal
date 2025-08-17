import React from 'react';
import { FileText, Edit, Shield, Gavel, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/button';

const contractServices = [
  {
    title: 'Contract Drafting',
    description: 'Custom contract creation tailored to your specific business needs and requirements.',
    features: ['Business Agreements', 'Service Contracts', 'Employment Terms', 'Partnership Agreements']
  },
  {
    title: 'Agreement Review',
    description: 'Thorough review of existing contracts to identify risks and improve terms.',
    features: ['Risk Assessment', 'Term Analysis', 'Compliance Review', 'Amendment Suggestions']
  },
  {
    title: 'Breach of Contract',
    description: 'Legal representation for contract disputes and breach of contract claims.',
    features: ['Dispute Resolution', 'Damage Assessment', 'Litigation Support', 'Settlement Negotiation']
  },
  {
    title: 'Contract Negotiations',
    description: 'Expert negotiation services to secure favorable contract terms.',
    features: ['Terms Negotiation', 'Risk Mitigation', 'Deal Structuring', 'Final Agreement']
  }
];

export function ContractLawPage() {
  return (
    <div className="min-h-screen bg-navy-deep pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-gold" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
                Contract Law
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Expert contract services from drafting to dispute resolution. Protect your business interests with carefully crafted agreements and experienced legal representation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gold text-navy-deep hover:bg-gold/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule Consultation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-navy-deep"
                  onClick={() => window.location.href = 'tel:(555)123-4567'}
                >
                  Call Now
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
                alt="Contract Law Services"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Contract Law Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive contract services to protect your business interests and resolve disputes effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contractServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-500"
              >
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Contract Types We Handle
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Business Partnerships',
              'Service Agreements',
              'Employment Contracts',
              'Non-Disclosure Agreements',
              'Licensing Agreements',
              'Supply Contracts',
              'Distribution Agreements',
              'Joint Venture Contracts',
              'Franchise Agreements'
            ].map((contractType, index) => (
              <div
                key={contractType}
                className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-4 text-center hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Edit className="w-5 h-5 text-gold" />
                </div>
                <p className="text-gray-300 font-medium">{contractType}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Our Contract Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analysis', description: 'Review your needs and objectives' },
              { step: '02', title: 'Drafting', description: 'Create comprehensive contract terms' },
              { step: '03', title: 'Review', description: 'Thorough legal review and refinement' },
              { step: '04', title: 'Finalization', description: 'Execute agreement and ongoing support' }
            ].map((process, index) => (
              <div
                key={process.step}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <span className="text-gold font-bold text-lg group-hover:text-navy-deep">
                    {process.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-300">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Your Business with Strong Contracts
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Don't leave your business vulnerable to disputes. Get professional contract services that protect your interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gold text-navy-deep hover:bg-gold/90 text-lg px-8 py-6"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-navy-deep text-lg px-8 py-6"
              onClick={() => window.location.href = '/services'}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}