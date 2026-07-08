import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, HeartPulse, ClipboardList } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  inquiryCount: number;
}

export default function Navbar({ onNavigate, activeSection, inquiryCount }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'bosh-sahifa', label: 'Bosh sahifa' },
    { id: 'biz-haqimizda', label: 'Biz haqimizda' },
    { id: 'katalog', label: 'Dori-darmonlar' },
    { id: 'filiallar', label: 'Filiallarimiz' },
    { id: 'boglanish', label: 'Bog\'lanish' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800 border-b border-emerald-50'
          : 'bg-white/80 backdrop-blur-sm py-4 text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="nav-logo-container"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleItemClick('bosh-sahifa')}
          >
            <div className="bg-emerald-600 text-white p-2 rounded-xl group-hover:bg-emerald-500 transition-colors duration-300 shadow-md shadow-emerald-200">
              <HeartPulse className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight text-emerald-800 block">
                555 <span className="text-emerald-500 font-medium">DORIXONA</span>
              </span>
              <span className="text-[9px] font-mono tracking-wider uppercase text-emerald-600 block -mt-1 font-semibold">
                Sog'liq uchun eng yaxshisi
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div id="desktop-nav-links" className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`font-sans text-sm font-medium transition-colors relative py-1 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-emerald-700'
                    : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Call & Inquiry Status */}
          <div id="nav-actions-container" className="hidden md:flex items-center space-x-4">
            {inquiryCount > 0 && (
              <button
                id="my-inquiries-badge"
                onClick={() => handleItemClick('boglanish')}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold hover:bg-emerald-100 transition-all cursor-pointer"
              >
                <ClipboardList className="h-3.5 w-3.5" />
                <span>So'rovlarim ({inquiryCount})</span>
              </button>
            )}

            <a
              id="nav-phone-button"
              href="tel:+998500098078"
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-4 py-2.5 rounded-full hover:shadow-lg hover:shadow-emerald-100 hover:scale-[1.02] transition-all duration-300 text-sm font-semibold shadow-md"
            >
              <Phone className="h-4 w-4" />
              <span>+998 (50) 009-80-78</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div id="mobile-menu-btn-container" className="md:hidden flex items-center space-x-3">
            {inquiryCount > 0 && (
              <button
                onClick={() => handleItemClick('boglanish')}
                className="flex items-center p-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold"
              >
                <ClipboardList className="h-4 w-4" />
                <span className="ml-1 text-[11px]">{inquiryCount}</span>
              </button>
            )}
            <button
              id="mobile-hamburger-button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-emerald-600 hover:bg-slate-50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation-drawer"
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-slate-100 ${
          isOpen ? 'max-h-96 opacity-100 mt-2 bg-white' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-link-${item.id}`}
              onClick={() => handleItemClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-emerald-50 text-emerald-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2 px-4">
            <a
              id="mobile-phone-anchor"
              href="tel:+998500098078"
              className="flex items-center justify-center space-x-2 w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <Phone className="h-4 w-4" />
              <span>+998 (50) 009-80-78</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
