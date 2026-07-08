import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FAQS } from './data';
import { ChevronDown, ChevronUp, HelpCircle, HeartPulse, ShieldAlert } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('bosh-sahifa');
  const [preFilledMedicineName, setPreFilledMedicineName] = useState('');
  const [inquiryCount, setInquiryCount] = useState(0);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Load inquiry count on mount and when changed
  const updateInquiryCount = () => {
    const saved = localStorage.getItem('555_dorixona_inquiries');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setInquiryCount(parsed.length);
      } catch (e) {
        setInquiryCount(0);
      }
    } else {
      setInquiryCount(0);
    }
  };

  useEffect(() => {
    updateInquiryCount();
  }, []);

  // Monitor scroll position to update active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['bosh-sahifa', 'biz-haqimizda', 'katalog', 'filiallar', 'boglanish', 'faq'];
      const scrollPosition = window.scrollY + 150; // Offset for navbar

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom navigation trigger
  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scroll to account for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectMedicineForOrder = (medicineName: string) => {
    setPreFilledMedicineName(medicineName);
    handleNavigation('boglanish');
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800">
      
      {/* 1. Header & Navigation */}
      <Navbar 
        onNavigate={handleNavigation} 
        activeSection={activeSection === 'faq' ? 'boglanish' : activeSection} 
        inquiryCount={inquiryCount} 
      />

      {/* 2. Hero Presentation */}
      <div id="bosh-sahifa">
        <Hero 
          onExploreCatalog={() => handleNavigation('katalog')} 
          onContactConsult={() => handleNavigation('boglanish')} 
        />
      </div>

      {/* 3. About Pharmacy Section */}
      <About />

      {/* 4. Interactive Drug Catalog Section */}
      <Catalog onSelectMedicineForOrder={handleSelectMedicineForOrder} />

      {/* 5. Geographic Branches with Embed Map */}
      <Branches />

      {/* 6. FAQ Accordion Section */}
      <section id="faq" className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase bg-emerald-100/60 px-3 py-1 rounded-full">
              Tez-tez so'raladigan savollar
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-3">
              Ko'p Beriladigan Savollarga Javoblar
            </h2>
            <p className="font-sans text-sm text-slate-500 mt-2">
              Dorixonamiz, dori-darmonlarni bron qilish va yetkazib berish haqida eng keng tarqalgan savollar.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="bg-slate-50 rounded-2xl border border-slate-150/80 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-slate-800 hover:text-emerald-700 transition-colors cursor-pointer text-sm sm:text-base focus:outline-none"
                  >
                    <div className="flex items-start space-x-3 pr-4">
                      <HelpCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {/* Smooth Collapse Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-60 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-5 text-slate-600 text-xs sm:text-sm leading-relaxed bg-white/80">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hotline Promo */}
          <div className="mt-12 bg-emerald-50 rounded-2xl p-6 border border-emerald-100/50 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
            <div className="flex items-center space-x-3 text-center sm:text-left">
              <span className="text-2xl">📞</span>
              <div>
                <h4 className="font-semibold text-emerald-900 text-sm">Savolingizga javob topmadingizmi?</h4>
                <p className="text-xs text-emerald-700 mt-0.5">Koll-markazimiz mutaxassislari istalgan vaqtda yordam berishga tayyor.</p>
              </div>
            </div>
            <a
              href="tel:+998500098078"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold cursor-pointer shadow-sm transition-all flex-shrink-0"
            >
              Qo'ng'iroq qilish
            </a>
          </div>

        </div>
      </section>

      {/* 7. Interactive Contact and Booking Form */}
      <Contact 
        preFilledMedicineName={preFilledMedicineName} 
        onClearPreFill={() => setPreFilledMedicineName('')}
        onNewInquiryAdded={updateInquiryCount}
      />

      {/* 8. Modern Pharmacy Footer */}
      <Footer onNavigate={handleNavigation} />

    </div>
  );
}
