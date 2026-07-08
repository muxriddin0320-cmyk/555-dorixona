import React from 'react';
import { HeartPulse, Github, Phone, Mail, Clock, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Info & Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('bosh-sahifa')}>
              <div className="bg-emerald-600 text-white p-2 rounded-xl">
                <HeartPulse className="h-6 w-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                555 <span className="text-emerald-500 font-medium">DORIXONA</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Chust tumanida yuqori sifatli sertifikatlangan dori vositalari, tibbiy uskunalar va shaxsiy parvarish vositalarini hamyonbop narxlarda yetkazib beramiz.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <span className="text-xs bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 px-2.5 py-1 rounded-full font-semibold">
                Litsenziya № AV-0034521
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">Tezkor havolalar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('bosh-sahifa')} 
                  className="hover:text-emerald-400 hover:underline cursor-pointer transition-colors"
                >
                  Bosh sahifa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('biz-haqimizda')} 
                  className="hover:text-emerald-400 hover:underline cursor-pointer transition-colors"
                >
                  Biz haqimizda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('katalog')} 
                  className="hover:text-emerald-400 hover:underline cursor-pointer transition-colors"
                >
                  Mahsulotlarimiz
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('filiallar')} 
                  className="hover:text-emerald-400 hover:underline cursor-pointer transition-colors"
                >
                  Filiallarimiz
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('boglanish')} 
                  className="hover:text-emerald-400 hover:underline cursor-pointer transition-colors"
                >
                  Aloqa bo'limi
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Help */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">Aloqa markazi</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+998500098078" className="hover:text-emerald-400 font-semibold block">
                    +998 50 009 80 78
                  </a>
                  <span className="text-xs text-slate-500">Yagona koll-markaz tarmog'i</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@555dorixona.uz" className="hover:text-emerald-400 block">
                    info@555dorixona.uz
                  </a>
                  <span className="text-xs text-slate-500">Savollar va takliflar</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Markaziy filialimiz: 24/7</span>
                  <span className="text-xs text-slate-500">Boshqa filiallar: 08:00 - 23:00</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Medical Warning / Disclaimer */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider flex items-center space-x-1">
              <ShieldAlert className="h-4 w-4 text-amber-500" />
              <span>Muhim eslatma</span>
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
              Sog'lig'ingiz uchun zarar yetkazmaslik maqsadida, dori vositalarini qabul qilishdan avval albatta malakali shifokor bilan maslahatlashing. Saytdagi barcha dori ma'lumotlari faqatgina tanishib chiqish maqsadida berilgan bo'lib, o'z-o'zini davolash uchun tavsiya etilmaydi.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} «555 dorixona». Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-mono">Chust, Namangan, O'zbekiston</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
