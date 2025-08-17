import React from 'react';
import { Home, Building2, FileText, Key, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/button';

const realEstateServices = [
  {
    title: 'Property Transactions',
    description: 'Complete legal support for residential and commercial property purchases and sales.',
    features: ['Purchase Agreements', 'Title Review', 'Closing Services', 'Due Diligence']
  },
  {
    title: 'Title Issues',
    description: 'Resolution of complex title disputes and ownership issues.',
    features: ['Title Searches', 'Quiet Title Actions', 'Boundary Disputes', 'Easement Rights']
  },
  {
    title: 'Zoning Matters',
    description: 'Navigate zoning laws and land use regulations for property development.',
    features: ['Zoning Appeals', 'Variance Applications', 'Land Use Planning', 'Compliance Issues']
  },
  {
    title: 'Construction Law',
    description: 'Legal support for construction projects and contractor disputes.',
    features: ['Contract Review', 'Lien Issues', 'Defect Claims', 'Payment Disputes']
  }
];

export function RealEstatePage() {
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
                <Home className="w-8 h-8 text-gold" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
                Real Estate Law
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Comprehensive real estate legal services for buyers, sellers, developers, and investors. Protecting your property interests with experienced legal counsel.
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
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                alt="Real Estate Law"
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
              Real Estate Legal Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              From residential purchases to complex commercial developments, we provide comprehensive real estate legal support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {realEstateServices.map((service, index) => (
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

      {/* Property Types Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Property Types We Handle
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: 'Residential', description: 'Single-family homes, condos, and residential developments' },
              { icon: Building2, title: 'Commercial', description: 'Office buildings, retail spaces, and commercial properties' },
              { icon: Key, title: 'Investment', description: 'Rental properties, REITs, and investment portfolios' }
            ].map((type, index) => (
              <div
                key={type.title}
                className="text-center bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {type.description}
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
            Protect Your Real Estate Investment
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Whether buying, selling, or developing property, ensure your interests are protected with experienced legal counsel.
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