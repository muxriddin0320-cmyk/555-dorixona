import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Clock, Sparkles, Search, MessageSquare } from 'lucide-react';

interface HeroProps {
  onExploreCatalog: () => void;
  onContactConsult: () => void;
}

export default function Hero({ onExploreCatalog, onContactConsult }: HeroProps) {
  const stats = [
    {
      icon: Clock,
      title: "24/7 Faol",
      desc: "Markaziy filialimiz har doim xizmatingizda",
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      icon: ShieldCheck,
      title: "Sertifikatlangan dori",
      desc: "100% kafolatlangan va litsenziyalangan mahsulotlar",
      color: "bg-teal-50 text-teal-700"
    },
    {
      icon: Truck,
      title: "Tezkor Yetkazish",
      desc: "Chust tumani bo'ylab buyurtmalar eshigingizgacha boradi",
      color: "bg-sky-50 text-sky-700"
    }
  ];

  return (
    <div
      id="hero-section-container"
      className="relative overflow-hidden bg-radial from-emerald-50/70 via-white to-white pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-32"
    >
      {/* Decorative ambient background rings */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-emerald-100/60 border border-emerald-200/80 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-800"
            >
              <Sparkles className="h-4.5 w-4.5 text-emerald-600 animate-pulse" />
              <span>Siz kutgan sifat va g'amxo'rlik endi bitta saytda</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]"
            >
              Sizning Sog'lig'ingiz — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
                Bizning Oliy Maqsadimiz
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              «555 dorixona» — Chust tumanida xalqimizga yuqori sifatli sertifikatlangan dori vositalarini yetkazib berib kelayotgan ishonchli hamkoringizdir. Kerakli dori-darmonlarni oson qidiring va bir zumda bron qiling!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                id="hero-explore-catalog-btn"
                onClick={onExploreCatalog}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-emerald-100 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2.5 cursor-pointer shadow-md"
              >
                <Search className="h-5 w-5" />
                <span>Dorilarni qidirish</span>
              </button>
              <button
                id="hero-contact-consult-btn"
                onClick={onContactConsult}
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <MessageSquare className="h-5 w-5 text-emerald-600" />
                <span>Bepul konsultatsiya</span>
              </button>
            </motion.div>
          </div>

          {/* Right Visual Card/Illustration Grid */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-100"
            >
              {/* Card visual elements representing the pharmacy aesthetic */}
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs font-mono text-emerald-600 font-semibold uppercase bg-emerald-50 px-2 py-0.5 rounded-full">
                  Tezkor aloqa liniyasi
                </div>
              </div>

              {/* Dynamic visual box showing pharmacy benefits */}
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-emerald-50/20 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-0.5">💊</span>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">2,500+ nomdagi dori vositasi</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Bizda shifokor retsepti bo'yicha barcha kerakli vositalar doimo mavjud.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-emerald-50/20 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-0.5">🩺</span>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Farmatsevt maslahati</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Har qanday dori bo'yicha mutaxassis maslahati bepul ko'rsatiladi.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-emerald-600 rounded-2xl text-white relative overflow-hidden group shadow-md shadow-emerald-200">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500 rounded-full opacity-50 blur-lg transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative z-10">
                    <span className="text-xs font-mono font-semibold tracking-widest text-emerald-200 block uppercase">Tezkor bron</span>
                    <h3 className="font-display font-bold text-lg mt-1">Uydan chiqmay dorilarni band qiling!</h3>
                    <p className="text-xs text-emerald-100 mt-1 leading-normal">Sayt orqali buyurtma qiling, o'zingizga qulay filialimizdan navbatsiz olib keting.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div id="hero-stats-row" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx + 0.5 }}
              className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all"
            >
              <div className={`p-3.5 rounded-xl ${stat.color} flex-shrink-0`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-slate-800 text-base">{stat.title}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-snug">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
