import React from 'react';
import { Shield, Gavel, Clock, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from '../../ui/button';

const criminalServices = [
  {
    title: 'DUI Defense',
    description: 'Aggressive defense against DUI charges with focus on protecting your driving privileges and freedom.',
    features: ['License Protection', 'Court Representation', 'Plea Negotiations', 'Alternative Sentencing']
  },
  {
    title: 'White Collar Crime',
    description: 'Expert defense for complex financial crimes and professional misconduct charges.',
    features: ['Fraud Defense', 'Embezzlement Cases', 'Securities Violations', 'Tax Evasion']
  },
  {
    title: 'Violent Crimes',
    description: 'Dedicated representation for serious violent crime charges requiring experienced defense.',
    features: ['Assault & Battery', 'Domestic Violence', 'Homicide Cases', 'Self-Defense Claims']
  },
  {
    title: 'Drug Offenses',
    description: 'Comprehensive defense strategies for all levels of drug-related criminal charges.',
    features: ['Possession Charges', 'Distribution Cases', 'Drug Trafficking', 'Treatment Programs']
  }
];

export function CriminalDefensePage() {
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
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
                Criminal Defense
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Aggressive criminal defense representation when your freedom is on the line. Our experienced defense attorneys fight tirelessly to protect your rights and achieve the best possible outcome.
              </p>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
                <p className="text-red-300 font-medium">
                  <Clock className="w-5 h-5 inline mr-2" />
                  24/7 Emergency Legal Assistance Available
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gold text-navy-deep hover:bg-gold/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Free Case Evaluation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                  onClick={() => window.location.href = 'tel:(555)123-4568'}
                >
                  Emergency Hotline
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=600&h=400&fit=crop"
                alt="Criminal Defense Services"
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
              Criminal Defense Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive defense representation for all types of criminal charges, from misdemeanors to serious felonies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {criminalServices.map((service, index) => (
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

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Our Defense Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Case Evaluation', description: 'Free confidential review of your charges and situation' },
              { step: '02', title: 'Investigation', description: 'Thorough investigation and evidence gathering' },
              { step: '03', title: 'Strategy', description: 'Develop aggressive defense strategy tailored to your case' },
              { step: '04', title: 'Resolution', description: 'Fight for the best possible outcome in court or through negotiation' }
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
            Your Freedom is Our Priority
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Don't face criminal charges alone. Contact our experienced defense team immediately for a free case evaluation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gold text-navy-deep hover:bg-gold/90 text-lg px-8 py-6"
              onClick={() => window.location.href = '/contact'}
            >
              Free Case Evaluation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white text-lg px-8 py-6"
              onClick={() => window.location.href = 'tel:(555)123-4568'}
            >
              24/7 Emergency Line
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}