import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  
  // Client's contact numbers (replace with actual numbers)
  const whatsappNumber = "+15551234567"; // Format: +1234567890
  const phoneNumber = "+15551234567";
  
  // Show notification bubble after 3 seconds, hide after 8 seconds
  useEffect(() => {
    const showTimer = setTimeout(() => setShowNotification(true), 3000);
    const hideTimer = setTimeout(() => setShowNotification(false), 8000);
    
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleWhatsAppMessage = () => {
    const message = encodeURIComponent("Hello! I'd like to inquire about your legal services. Could you please provide more information about how you can help me?");
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4 space-y-3"
          >
            {/* Call Option */}
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={handlePhoneCall}
              className="flex items-center space-x-3 bg-navy-deep/95 backdrop-blur-lg border border-gold/30 rounded-full px-4 py-3 text-white hover:bg-gold hover:text-navy-deep transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[140px]"
            >
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-navy-deep/20 transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <span className="pr-2 font-medium whitespace-nowrap">Call Now</span>
            </motion.button>

            {/* WhatsApp Message Option */}
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ delay: 0.15 }}
              onClick={handleWhatsAppMessage}
              className="flex items-center space-x-3 bg-green-600/95 backdrop-blur-lg border border-green-500/30 rounded-full px-4 py-3 text-white hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[140px]"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="pr-2 font-medium whitespace-nowrap">WhatsApp</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {/* Glowing effect */}
        <div className={`absolute inset-0 rounded-full animate-pulse ${
          isOpen ? 'bg-red-500/30' : 'bg-green-500/30'
        }`} />
        <div className={`absolute inset-0 rounded-full ${
          isOpen 
            ? 'shadow-[0_0_20px_rgba(239,68,68,0.6)] sm:shadow-[0_0_30px_rgba(239,68,68,0.6)]' 
            : 'shadow-[0_0_20px_rgba(34,197,94,0.6)] sm:shadow-[0_0_30px_rgba(34,197,94,0.6)]'
        }`} />
        
        {/* Icon */}
        <div className="relative z-10 w-full h-full flex items-center justify-center text-white">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: isOpen ? [0, 1.5] : 0, opacity: isOpen ? [1, 0] : 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Floating notification bubble */}
      <AnimatePresence>
        {!isOpen && showNotification && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-2 left-16 sm:left-20 bg-navy-deep/95 backdrop-blur-lg border border-gold/30 rounded-lg px-3 py-2 text-xs sm:text-sm text-white shadow-lg max-w-[200px] sm:max-w-none"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <span className="leading-tight">Need legal help? Chat with us!</span>
            </div>
            {/* Arrow pointer */}
            <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
              <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-transparent border-r-navy-deep/95" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

