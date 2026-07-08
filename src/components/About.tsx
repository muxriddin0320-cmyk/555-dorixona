import React from 'react';
import { ShieldCheck, Users, ThermometerSnowflake, Sparkles, Award, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "100% Litsenziya",
      desc: "Barcha dori vositalarimiz davlat standartlariga mos sertifikatlarga ega.",
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      icon: ThermometerSnowflake,
      title: "Mukammal saqlash",
      desc: "Sovutgich va omborlarda dori saqlash harorati doimo qat'iy nazorat qilinadi.",
      color: "text-sky-600 bg-sky-50"
    },
    {
      icon: Users,
      title: "Malakali mutaxassislar",
      desc: "Farmatsevtlarimiz doimiy malaka oshirib boradi va sizga to'g'ri maslahat bera oladi.",
      color: "text-amber-600 bg-amber-50"
    }
  ];

  return (
    <section id="biz-haqimizda" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase bg-emerald-100/60 px-3 py-1 rounded-full">
            Biz Haqimizda
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-3">
            Odamlar Salomatligi Va Ishonchi — Bizning Eng Oliy Qadriyatimiz
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            «555 dorixona» Chust tumanida aholiga qulay, tezkor va ishonchli farmatsevtik xizmatlarni ko'rsatish maqsadida tashkil etilgan. Biz har bir mijozning sog'lig'ini eng birinchi o'ringa qo'yamiz.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl font-bold text-slate-800 tracking-tight">
              Sog'liqni saqlash sohasida 10 yildan ortiq tajriba
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Biz faoliyatimizni boshlagan kundan boshlab, faqatgina eng ishonchli va tekshirilgan ishlab chiqaruvchilar bilan hamkorlik qilib kelmoqdamiz. Bugungi kunda tarmog'imizda 2500 dan ortiq dori-darmonlar, parhez qo'shimchalari, tibbiy texnikalar va gigiyena vositalari mavjud.
            </p>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Dorixonamizning har bir filialida dori vositalarining saqlash qoidalariga (harorat, namlik, quyosh nurlaridan himoya) 100% rioya etilishini ta'minlovchi zamonaviy uskunalar o'rnatilgan. Shuningdek, xodimlarimiz dori vositalarining qo'llanilishi va nojo'ya ta'sirlari haqida to'liq maslahat bera oladi.
            </p>

            {/* Bullet achievements */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2.5">
                <div className="p-1 bg-emerald-500 rounded-full text-white">
                  <Award className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Litsenziyalangan</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="p-1 bg-emerald-500 rounded-full text-white">
                  <Heart className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Hammasi g'amxo'rlikda</span>
              </div>
            </div>
          </div>

          {/* Right Visual Stats Card Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Value Card 1 */}
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all space-y-4">
              <div className="p-3 w-fit rounded-xl bg-emerald-50 text-emerald-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="font-sans font-bold text-slate-800 text-base">Haqiqiy Litsenziya</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Barcha sotiladigan dori-darmonlar sertifikatlangan bo'lib, xavfsiz va samaralidir.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all space-y-4">
              <div className="p-3 w-fit rounded-xl bg-sky-50 text-sky-600">
                <ThermometerSnowflake className="h-6 w-6" />
              </div>
              <h4 className="font-sans font-bold text-slate-800 text-base">Gelmintik iqlim nazorati</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Dori saqlash xonalari va peshtaxtalarimizda harorat hamda namlik 24/7 kompyuterlashtirilgan tartibda boshqariladi.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all space-y-4">
              <div className="p-3 w-fit rounded-xl bg-amber-50 text-amber-600">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="font-sans font-bold text-slate-800 text-base">Professional Farmatsevtlar</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Har qanday dori bo'yicha tushuntirish va qo'llash qoidalari bo'yicha to'liq bepul maslahat oling.
              </p>
            </div>

            {/* Value Card 4 - Highlight */}
            <div className="p-6 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl text-white shadow-xl space-y-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-2xl">🏥</span>
                <span className="text-[10px] font-mono tracking-widest bg-white/20 px-2 py-0.5 rounded-full uppercase">Sifat kafolati</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-lg">Mijozlarimiz fikri</h4>
                <p className="text-xs text-emerald-100 mt-1 leading-normal">
                  "Bizga har kuni 1,000 dan ortiq odam o'z salomatligini ishonib topshiradi."
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
