import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage?: string;
}

export function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Home', 
      href: '/',
      id: 'home'
    },
    { 
      name: 'Services', 
      href: '/services',
      id: 'services',
      dropdown: [
        { name: 'Corporate Law', href: '/services/corporate-law' },
        { name: 'Family Law', href: '/services/family-law' },
        { name: 'Criminal Defense', href: '/services/criminal-defense' },
        { name: 'Personal Injury', href: '/services/personal-injury' },
        { name: 'Real Estate', href: '/services/real-estate' },
        { name: 'Contract Law', href: '/services/contract-law' }
      ]
    },
    { 
      name: 'About', 
      href: '/about',
      id: 'about'
    },
    { 
      name: 'Blog', 
      href: '/blog',
      id: 'blog'
    },
    { 
      name: 'Contact', 
      href: '/contact',
      id: 'contact'
    }
  ];

  const handleNavigation = (href: string) => {
    // Simplified navigation - just reload the page
    window.location.href = href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-deep/95 backdrop-blur-lg border-b border-gold/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-navy-deep" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-white">
                Premium Law
              </h1>
              <p className="text-gold text-xs">Excellence in Legal Service</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 transition-colors duration-300 ${
                    currentPage === item.id ? 'text-gold' : 'text-white hover:text-gold'
                  }`}
                  onClick={() => handleNavigation(item.href)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.id && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-navy-deep/95 backdrop-blur-lg border border-gold/20 rounded-lg shadow-2xl">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.name}
                        className="w-full text-left px-4 py-3 text-white hover:text-gold hover:bg-gold/10 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => handleNavigation(subItem.href)}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-navy-deep"
              onClick={() => handleNavigation('/contact')}
            >
              Free Consultation
            </Button>
            <Button 
              className="bg-gold text-navy-deep hover:bg-gold/90"
              onClick={() => handleNavigation('/client-portal')}
            >
              Client Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-navy-deep/95 backdrop-blur-lg border-t border-gold/20">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    className={`w-full text-left px-4 py-3 transition-colors duration-300 ${
                      currentPage === item.id ? 'text-gold' : 'text-white hover:text-gold'
                    }`}
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.name}
                  </button>
                  {/* Mobile Services Dropdown */}
                  {item.dropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.name}
                          className="w-full text-left px-4 py-2 text-gray-300 hover:text-gold transition-colors duration-300 text-sm"
                          onClick={() => handleNavigation(subItem.href)}
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 py-3 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full border-gold text-gold hover:bg-gold hover:text-navy-deep"
                  onClick={() => handleNavigation('/contact')}
                >
                  Free Consultation
                </Button>
                <Button 
                  className="w-full bg-gold text-navy-deep hover:bg-gold/90"
                  onClick={() => handleNavigation('/client-portal')}
                >
                  Client Portal
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
