import React from 'react';
import { Users, Car, Building, Heart, CheckCircle, DollarSign } from 'lucide-react';
import { Button } from '../../ui/button';

const injuryServices = [
  {
    title: 'Auto Accidents',
    description: 'Comprehensive representation for car, truck, and motorcycle accident victims.',
    features: ['Insurance Claims', 'Medical Bills', 'Lost Wages', 'Pain & Suffering']
  },
  {
    title: 'Medical Malpractice',
    description: 'Holding healthcare providers accountable for negligent medical care.',
    features: ['Misdiagnosis', 'Surgical Errors', 'Birth Injuries', 'Hospital Negligence']
  },
  {
    title: 'Workplace Injuries',
    description: 'Protecting workers injured on the job and their right to compensation.',
    features: ['Workers Comp Claims', 'Third-Party Suits', 'Occupational Disease', 'Disability Benefits']
  },
  {
    title: 'Wrongful Death',
    description: 'Compassionate representation for families who have lost loved ones.',
    features: ['Loss of Income', 'Funeral Expenses', 'Emotional Damages', 'Family Support']
  }
];

export function PersonalInjuryPage() {
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
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
                Personal Injury
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Fighting for injury victims and their families. When you're hurt due to someone else's negligence, we'll fight tirelessly to get you the compensation you deserve.
              </p>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6">
                <p className="text-green-300 font-medium">
                  <DollarSign className="w-5 h-5 inline mr-2" />
                  No Fee Unless We Win Your Case
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gold text-navy-deep hover:bg-gold/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Free Case Review
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
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Personal Injury Law"
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
              Personal Injury Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive legal representation for all types of personal injury cases with a track record of success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {injuryServices.map((service, index) => (
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

      {/* Results Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-gray-300 text-lg">
              Over $50 million recovered for our clients in personal injury settlements and verdicts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, value: '$50M+', label: 'Total Recovered' },
              { icon: Users, value: '98%', label: 'Success Rate' },
              { icon: Heart, value: '1000+', label: 'Clients Helped' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-4xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Get the Compensation You Deserve
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Don't let insurance companies take advantage of you. Contact us today for a free case review and learn about your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gold text-navy-deep hover:bg-gold/90 text-lg px-8 py-6"
              onClick={() => window.location.href = '/contact'}
            >
              Free Case Review
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