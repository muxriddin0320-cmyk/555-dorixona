import React, { useState, useEffect } from 'react';
import { Inquiry } from '../types';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  ListTodo, Trash2, ClipboardCheck, MessageSquare, AlertCircle 
} from 'lucide-react';

interface ContactProps {
  preFilledMedicineName: string;
  onClearPreFill: () => void;
  onNewInquiryAdded: () => void;
}

export default function Contact({ preFilledMedicineName, onClearPreFill, onNewInquiryAdded }: ContactProps) {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState<'general' | 'medicine_order' | 'consultation'>('general');
  const [medicineName, setMedicineName] = useState('');
  const [message, setMessage] = useState('');
  
  // Status State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  
  // User inquiries loaded from local storage
  const [userInquiries, setUserInquiries] = useState<Inquiry[]>([]);

  // Track preFilledMedicineName prop changes
  useEffect(() => {
    if (preFilledMedicineName) {
      setInquiryType('medicine_order');
      setMedicineName(preFilledMedicineName);
      setMessage(`Assalomu alaykum. Men ushbu dori vositasini bron qilmoqchi edim: ${preFilledMedicineName}`);
      
      // Scroll to contact form smoothly
      const element = document.getElementById('boglanish');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preFilledMedicineName]);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('555_dorixona_inquiries');
    if (saved) {
      try {
        setUserInquiries(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading user inquiries", e);
      }
    }
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Basic phone helper
    if (!value.startsWith('+998') && value.length > 0) {
      value = '+998' + value.replace(/[^\d]/g, '');
    }
    setPhone(value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Validations
    if (!fullName.trim()) {
      setFormError("Iltimos, ismingizni kiriting.");
      return;
    }
    
    // Simple phone check
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    if (cleanPhone.length < 9) {
      setFormError("Iltimos, telefon raqamingizni to'liq kiriting (masalan: +998 90 123 45 67).");
      return;
    }

    if (inquiryType === 'medicine_order' && !medicineName.trim()) {
      setFormError("Iltimos, bron qilmoqchi bo'lgan dori nomini yozing.");
      return;
    }

    if (!message.trim()) {
      setFormError("Iltimos, savolingiz yoki buyurtmangiz haqida qisqacha yozing.");
      return;
    }

    // Create inquiry
    const newInquiry: Inquiry = {
      id: 'inq-' + Date.now(),
      fullName: fullName.trim(),
      phone: phone.trim(),
      message: message.trim(),
      type: inquiryType,
      date: new Date().toLocaleString('uz-UZ'),
      status: 'yuborildi',
      medicineName: inquiryType === 'medicine_order' ? medicineName.trim() : undefined
    };

    const updatedList = [newInquiry, ...userInquiries];
    setUserInquiries(updatedList);
    localStorage.setItem('555_dorixona_inquiries', JSON.stringify(updatedList));
    
    // Clear form inputs
    setFullName('');
    setPhone('');
    setMedicineName('');
    setMessage('');
    onClearPreFill();
    setIsSubmitted(true);
    
    // Notify parent to increment inquiry badge count
    onNewInquiryAdded();

    // Auto dismiss success screen after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleDeleteInquiry = (id: string) => {
    const filtered = userInquiries.filter(item => item.id !== id);
    setUserInquiries(filtered);
    localStorage.setItem('555_dorixona_inquiries', JSON.stringify(filtered));
    onNewInquiryAdded(); // Trigger re-calculation
  };

  const getInquiryTypeBadge = (type: string) => {
    switch (type) {
      case 'medicine_order':
        return <span className="bg-amber-50 text-amber-700 text-[10px] px-2 py-0.5 rounded-md font-semibold border border-amber-100">Dori bron qilish</span>;
      case 'consultation':
        return <span className="bg-teal-50 text-teal-700 text-[10px] px-2 py-0.5 rounded-md font-semibold border border-teal-100">Mutaxassis maslahati</span>;
      default:
        return <span className="bg-sky-50 text-sky-700 text-[10px] px-2 py-0.5 rounded-md font-semibold border border-sky-100">Umumiy savol</span>;
    }
  };

  return (
    <section id="boglanish" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase bg-emerald-100/60 px-3 py-1 rounded-full">
            Biz bilan bog'lanish
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-3">
            Savollaringiz Bormi? Biz Bilan Bog'laning
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Har qanday savol yoki dori bron qilish buyurtmalari bo'yicha shaklni to'ldiring. Mutaxassislarimiz tez orada siz bilan telefon orqali bog'lanishadi.
          </p>
        </div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-slate-800 text-xl tracking-tight mb-4">
              Aloqa ma'lumotlari
            </h3>
            
            <div className="space-y-4">
              {/* Call Card */}
              <div className="flex items-start space-x-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-emerald-50/10 transition-colors">
                <div className="p-3 bg-emerald-100/60 text-emerald-800 rounded-xl">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-800 text-sm">Yagona Koll-Markaz</h4>
                  <p className="text-sm text-slate-500 mt-0.5">Sizga 24/7 yordam berishga tayyormiz</p>
                  <a href="tel:+998500098078" className="text-emerald-700 hover:underline font-semibold block text-base mt-1">
                    +998 50 009 80 78
                  </a>
                </div>
              </div>

              {/* Mail Card */}
              <div className="flex items-start space-x-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-emerald-50/10 transition-colors">
                <div className="p-3 bg-sky-100/60 text-sky-800 rounded-xl">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-800 text-sm">Elektron Pochta</h4>
                  <p className="text-sm text-slate-500 mt-0.5">Hamkorlik va takliflar uchun</p>
                  <a href="mailto:info@555dorixona.uz" className="text-emerald-700 hover:underline font-semibold block text-sm mt-1">
                    info@555dorixona.uz
                  </a>
                </div>
              </div>

              {/* Main Address Card */}
              <div className="flex items-start space-x-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-emerald-50/10 transition-colors">
                <div className="p-3 bg-amber-100/60 text-amber-800 rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-800 text-sm">Markaziy Ofis</h4>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Namangan viloyati, Chust tumani, Chust shahri, Mustaqillik ko'chasi, 5-uy
                  </p>
                </div>
              </div>
            </div>

            {/* Quick reminder card */}
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl text-white shadow-lg space-y-3">
              <span className="text-2xl">⚡</span>
              <h4 className="font-display font-bold text-base">Bepul Konsultatsiya</h4>
              <p className="text-xs text-emerald-100 leading-normal">
                Sizga dori analoglarini tanlash, foydalanish tartibi va to'g'ri dozalash masalalarida bizning malakali farmatsevtlarimiz bepul telefon orqali konsultatsiya berishadi.
              </p>
            </div>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-xl">
            {isSubmitted ? (
              <div id="contact-success-container" className="text-center py-10 space-y-4">
                <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="font-display font-bold text-slate-800 text-xl">Sizning so'rovingiz qabul qilindi!</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                  Rahmat! 555 dorixona xodimi tez orada siz bilan kiritilgan telefon raqami orqali bog'lanadi. Yuborilgan so'rovlar holatini pastdagi ro'yxatdan kuzatishingiz mumkin.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold cursor-pointer shadow-sm"
                >
                  Yangi so'rov yuborish
                </button>
              </div>
            ) : (
              <form id="contact-inquiry-form" onSubmit={handleFormSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-slate-800 text-xl tracking-tight mb-2">
                  Aloqa va bronlash shakli
                </h3>

                {formError && (
                  <div className="flex items-center space-x-2 p-3 bg-red-50 text-red-700 rounded-xl text-xs border border-red-100">
                    <AlertCircle className="h-4 w-4" />
                    <span className="font-medium">{formError}</span>
                  </div>
                )}

                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500">To'liq ismingiz *</label>
                    <input
                      id="form-fullname"
                      type="text"
                      required
                      placeholder="Masalan: Shavkat Alimov"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500">Telefon raqamingiz *</label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="+998 (90) 123-45-67"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white text-sm"
                    />
                  </div>
                </div>

                {/* Inquiry Type Radio Buttons */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 block">Murojaat turi *</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => { setInquiryType('general'); setMedicineName(''); }}
                      className={`py-2 px-3 text-xs font-semibold rounded-xl border cursor-pointer transition-colors ${
                        inquiryType === 'general'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-500'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Umumiy savol
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType('medicine_order')}
                      className={`py-2 px-3 text-xs font-semibold rounded-xl border cursor-pointer transition-colors ${
                        inquiryType === 'medicine_order'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-500'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Dori bronlash
                    </button>
                    <button
                      type="button"
                      onClick={() => { setInquiryType('consultation'); setMedicineName(''); }}
                      className={`py-2 px-3 text-xs font-semibold rounded-xl border cursor-pointer transition-colors ${
                        inquiryType === 'consultation'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-500'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Konsultatsiya
                    </button>
                  </div>
                </div>

                {/* Conditional Medicine Name Field */}
                {inquiryType === 'medicine_order' && (
                  <div className="space-y-1.5 animate-fade-in">
                    <label className="text-xs font-semibold text-slate-500">Bron qilinadigan dori vositasi nomi *</label>
                    <input
                      id="form-medname"
                      type="text"
                      required
                      placeholder="Masalan: Paratsetamol-555"
                      value={medicineName}
                      onChange={(e) => setMedicineName(e.target.value)}
                      className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white text-sm"
                    />
                  </div>
                )}

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500">Murojaat matni / Savolingiz *</label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    placeholder={
                      inquiryType === 'medicine_order'
                        ? "Masalan: Qaysi filialingizdan qachon borib olib keta olaman? Buyurtma dozasini kiriting..."
                        : "Sizni qiziqtirgan barcha savollarni bu yerda yozib qoldirishingiz mumkin..."
                    }
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white text-sm"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  id="form-submit-button"
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-100 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                >
                  <Send className="h-4 w-4" />
                  <span>Xabarni yuborish</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Dynamic inquiry tracker (Persistent Client-side section) */}
        {userInquiries.length > 0 && (
          <div id="user-inquiries-log-section" className="mt-16 bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-emerald-600 text-white rounded-xl">
                  <ListTodo className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-lg">Mening yuborgan so'rovlarim</h3>
                  <p className="text-xs text-slate-500">Faol seans davomida yuborilgan murojaatlaringiz va ularning holati</p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (window.confirm("Barcha yuborilgan so'rovlarni o'chirib tashlamoqchimisiz?")) {
                    setUserInquiries([]);
                    localStorage.setItem('555_dorixona_inquiries', JSON.stringify([]));
                    onNewInquiryAdded();
                  }
                }}
                className="flex items-center space-x-1 px-3 py-1.5 border border-slate-200 hover:border-red-200 text-slate-500 hover:text-red-600 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Tozalash</span>
              </button>
            </div>

            {/* Inquiries List */}
            <div className="space-y-4">
              {userInquiries.map((inq) => (
                <div
                  key={inq.id}
                  id={`user-inquiry-${inq.id}`}
                  className="bg-white rounded-2xl p-5 border border-slate-150/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-slate-800 text-sm">{inq.fullName}</span>
                      <span className="text-xs text-slate-400">• {inq.date}</span>
                      {getInquiryTypeBadge(inq.type)}
                    </div>
                    {inq.medicineName && (
                      <p className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium w-fit">
                        <strong>Bron dori:</strong> {inq.medicineName}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                      "{inq.message}"
                    </p>
                  </div>

                  {/* Inquiry Status Badge */}
                  <div className="flex items-center space-x-3 self-end md:self-center">
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Holat</span>
                      <span className="text-xs font-bold text-emerald-600 flex items-center space-x-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping mr-1" />
                        <span>Koll-markazga uzatildi</span>
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteInquiry(inq.id)}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
