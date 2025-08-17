import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner@2.0.3';

interface ConsultationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  legalMatter: string;
  preferredDate: string;
  preferredTime: string;
  urgency: string;
  description: string;
  hearAbout: string;
}

const legalMatters = [
  'Family Law',
  'Corporate Law', 
  'Criminal Defense',
  'Personal Injury',
  'Real Estate',
  'Contract Law',
  'Employment Law',
  'Immigration Law',
  'Other'
];

const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM'
];

const urgencyLevels = [
  { value: 'high', label: 'Urgent (Within 24 hours)' },
  { value: 'medium', label: 'Standard (Within 1 week)' },
  { value: 'low', label: 'Flexible (Within 2 weeks)' }
];

export function ConsultationBooking() {
  const [formData, setFormData] = useState<ConsultationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    legalMatter: '',
    preferredDate: '',
    preferredTime: '',
    urgency: '',
    description: '',
    hearAbout: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Client contact details (replace with actual details)
  const clientEmail = "legal@premiumlaw.com";
  const clientWhatsApp = "+15551234567"; // Replace with actual WhatsApp number

  const handleInputChange = (field: keyof ConsultationData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const sendEmailNotification = async (data: ConsultationData) => {
    // Mock email sending - replace with actual email service
    const emailSubject = encodeURIComponent(`New Consultation Request from ${data.firstName} ${data.lastName}`);
    const emailBody = encodeURIComponent(`
New Consultation Request Details:

Client Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone}

Consultation Details:
- Legal Matter: ${data.legalMatter}
- Preferred Date: ${data.preferredDate}
- Preferred Time: ${data.preferredTime}
- Urgency Level: ${data.urgency}
- How they heard about us: ${data.hearAbout}

Case Description:
${data.description}

Please contact the client as soon as possible to confirm the consultation appointment.

Best regards,
Website Consultation System
    `);

    // This would typically integrate with an email service like SendGrid, Mailgun, etc.
    // For demo purposes, we'll open the default email client
    const mailtoLink = `mailto:${clientEmail}?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoLink, '_blank');
    
    return true;
  };

  const sendWhatsAppNotification = async (data: ConsultationData) => {
    const whatsappMessage = encodeURIComponent(`
🔔 *NEW CONSULTATION REQUEST* 🔔

👤 *Client:* ${data.firstName} ${data.lastName}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}

⚖️ *Legal Matter:* ${data.legalMatter}
📅 *Preferred Date:* ${data.preferredDate}
🕐 *Preferred Time:* ${data.preferredTime}
🚨 *Urgency:* ${data.urgency}

📝 *Case Description:*
${data.description}

💡 *Heard about us:* ${data.hearAbout}

Please contact client ASAP to confirm consultation.
    `);

    const whatsappUrl = `https://wa.me/${clientWhatsApp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.legalMatter) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email notification
      await sendEmailNotification(formData);
      
      // Send WhatsApp notification
      await sendWhatsAppNotification(formData);
      
      // Show success message
      setIsSubmitted(true);
      toast.success('Consultation request submitted successfully! We will contact you within 24 hours.');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          legalMatter: '',
          preferredDate: '',
          preferredTime: '',
          urgency: '',
          description: '',
          hearAbout: ''
        });
        setIsSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting consultation request:', error);
      toast.error('There was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border-gold/30">
        <CardContent className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-4">Request Submitted Successfully!</h3>
          <p className="text-gray-300 mb-6">
            Thank you for your consultation request. Our team has been notified and will contact you within 24 hours to schedule your appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-navy-deep"
              onClick={() => window.location.href = '/'}
            >
              Return to Home
            </Button>
            <Button 
              className="bg-gold text-navy-deep hover:bg-gold/90"
              onClick={() => window.location.href = 'tel:+15551234567'}
            >
              Call Us Now
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border-gold/30">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-serif text-white mb-2">
          Schedule Your Free Consultation
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg">
          Complete the form below and we'll contact you within 24 hours to confirm your appointment
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white">
                First Name <span className="text-red-400">*</span>
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400"
                placeholder="Enter your first name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white">
                Last Name <span className="text-red-400">*</span>
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email Address <span className="text-red-400">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400"
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                Phone Number <span className="text-red-400">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Legal Matter */}
          <div className="space-y-2">
            <Label htmlFor="legalMatter" className="text-white">
              Type of Legal Matter <span className="text-red-400">*</span>
            </Label>
            <Select value={formData.legalMatter} onValueChange={(value) => handleInputChange('legalMatter', value)}>
              <SelectTrigger className="bg-white/10 border-gold/30 text-white">
                <SelectValue placeholder="Select the type of legal matter" />
              </SelectTrigger>
              <SelectContent className="bg-navy-deep border-gold/30">
                {legalMatters.map((matter) => (
                  <SelectItem key={matter} value={matter} className="text-white hover:bg-gold/20">
                    {matter}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Consultation Scheduling */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="preferredDate" className="text-white">
                Preferred Date
              </Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                className="bg-white/10 border-gold/30 text-white"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="preferredTime" className="text-white">
                Preferred Time
              </Label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                <SelectTrigger className="bg-white/10 border-gold/30 text-white">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent className="bg-navy-deep border-gold/30">
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time} className="text-white hover:bg-gold/20">
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="urgency" className="text-white">
                Urgency Level
              </Label>
              <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                <SelectTrigger className="bg-white/10 border-gold/30 text-white">
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent className="bg-navy-deep border-gold/30">
                  {urgencyLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value} className="text-white hover:bg-gold/20">
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Case Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-white">
              Brief Description of Your Legal Matter
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400 min-h-[120px]"
              placeholder="Please provide a brief description of your legal situation. This will help us prepare for your consultation and assign the right attorney."
            />
          </div>

          {/* How did you hear about us */}
          <div className="space-y-2">
            <Label htmlFor="hearAbout" className="text-white">
              How did you hear about us?
            </Label>
            <Input
              id="hearAbout"
              value={formData.hearAbout}
              onChange={(e) => handleInputChange('hearAbout', e.target.value)}
              className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400"
              placeholder="Google search, referral, social media, etc."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gold text-navy-deep hover:bg-gold/90 text-lg py-6"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-navy-deep mr-3"></div>
                  Submitting Request...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-3" />
                  Submit Consultation Request
                </>
              )}
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-6 border-t border-gold/20 text-center">
            <p className="text-gray-300 mb-4">
              Need to speak with someone immediately?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-navy-deep"
                onClick={() => window.location.href = 'tel:+15551234567'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (555) 123-4567
              </Button>
              <Button 
                variant="outline" 
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                onClick={() => {
                  const message = encodeURIComponent("Hello! I'd like to schedule a consultation about my legal matter.");
                  window.open(`https://wa.me/${clientWhatsApp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
                }}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}