import { Medicine, Branch, FAQ } from './types';

export const MEDICINE_CATEGORIES = [
  "Barchasi",
  "Og'riq qoldiruvchilar",
  "Vitaminlar va Minerallar",
  "Yurak va qon-tomir",
  "Oshqozon va ovqat hazm qilish",
  "Bolalar uchun",
  "Tinchlantiruvchi"
];

export const MEDICINES: Medicine[] = [
  {
    id: "med-1",
    name: "Paratsetamol-555 500mg",
    genericName: "Paratsetamol",
    category: "Og'riq qoldiruvchilar",
    description: "Tana haroratini tushirish va o'rtacha og'riqlarni qoldirish uchun qo'llaniladi. Isitma, bosh og'rig'i, tish og'rig'i va mushak og'riqlarida samarali.",
    price: 4500,
    available: true,
    image: "Pill",
    dosage: "Kattalarga 1-2 tabletka, kuniga 3-4 martagacha",
    manufacturer: "555 Pharm MChJ",
    country: "O'zbekiston",
    usageInstructions: "Ovqatdan keyin ko'p miqdordagi suv bilan ichiladi. Kunlik maksimal doza - 4 gramm.",
    sideEffects: "Kam hollarda ko'ngil aynishi, allergik toshmalar."
  },
  {
    id: "med-2",
    name: "Ibuprofen Forte 400mg",
    genericName: "Ibuprofen",
    category: "Og'riq qoldiruvchilar",
    description: "Yallig'lanishga qarshi, og'riq qoldiruvchi va isitma tushiruvchi ta'sirga ega. Bo'g'im, bel va bosh og'riqlarida tez yordam beradi.",
    price: 12000,
    available: true,
    image: "Pill",
    dosage: "1 tabletkadan kuniga 2-3 marta",
    manufacturer: "Sandoz",
    country: "Germaniya",
    usageInstructions: "Ovqat paytida yoki ovqatdan keyin ichish tavsiya etiladi. Oshqozon muammosi borlarga ehtiyotkorlik so'raladi.",
    sideEffects: "Oshqozonda noqulaylik, bosh aylanishi."
  },
  {
    id: "med-3",
    name: "Vitamin C-555 500mg",
    genericName: "Askorbin kislotasi",
    category: "Vitaminlar va Minerallar",
    description: "Immun tizimini mustahkamlash, shamollashning oldini olish va charchoqni kamaytirish uchun ajoyib vitamin kompleksi.",
    price: 8000,
    available: true,
    image: "Sparkles",
    dosage: "Kattalar uchun kuniga 1 dona chaynaladigan tabletka",
    manufacturer: "Jurabek Laboratories",
    country: "O'zbekiston",
    usageInstructions: "Ovqatdan so'ng og'izda chaynash yoki so'rish tavsiya etiladi.",
    sideEffects: "Allergik reaksiyalar, oshqozon kislotaligi oshishi."
  },
  {
    id: "med-4",
    name: "Supradin Active",
    genericName: "Multivitaminlar + Minerallar",
    category: "Vitaminlar va Minerallar",
    description: "Sog'lom va faol hayot tarzi uchun 12 ta hayotiy muhim vitaminlar va 9 ta mineralni o'z ichiga olgan mukammal kompleks.",
    price: 85000,
    available: true,
    image: "Sparkles",
    dosage: "Kuniga 1 tabletka, ertalab ovqat bilan birga",
    manufacturer: "Bayer",
    country: "Shveytsariya",
    usageInstructions: "Tabletkani butunligicha suv bilan yutish lozim. Kurs davomiyligi 1 oy.",
    sideEffects: "Kam hollarda siydikning yorqin sariq rangga bo'yalishi (B2 vitamini hisobiga)."
  },
  {
    id: "med-5",
    name: "Kardio-Asprin 100mg",
    genericName: "Atsetilsalitsil kislotasi",
    category: "Yurak va qon-tomir",
    description: "Tromb hosil bo'lishining oldini olish, yurak xuruji va insult xavfini kamaytirish uchun qonni suyultiruvchi vosita.",
    price: 18000,
    available: true,
    image: "Heart",
    dosage: "Kuniga 1 tabletka, kechki payt ovqatdan keyin",
    manufacturer: "KRKA",
    country: "Sloveniya",
    usageInstructions: "Chaynamasdan, ko'p miqdordagi suv bilan yutiladi. Uzoq muddat shifokor nazoratida ichiladi.",
    sideEffects: "Me'da shilliq qavatining ta'sirlanishi."
  },
  {
    id: "med-6",
    name: "Valeriana Extra",
    genericName: "Valeriana dorivor ildiz ekstrakti",
    category: "Tinchlantiruvchi",
    description: "Asab tarangligi, uyqusizlik va hayajonlanish holatlarida tinchlantiruvchi ta'sirga ega tabiiy o'simlik preparati.",
    price: 6000,
    available: true,
    image: "Activity",
    dosage: "1-2 tabletkadan kuniga 3 marta",
    manufacturer: "Galenika",
    country: "Serbiya",
    usageInstructions: "Ovqatdan oldin yetarli miqdordagi suv bilan qabul qilinadi.",
    sideEffects: "Ko'p qabul qilinganda uyquchanlik va darmonsizlik."
  },
  {
    id: "med-7",
    name: "Mezim Forte 10000",
    genericName: "Pankreatin",
    category: "Oshqozon va ovqat hazm qilish",
    description: "Oshqozonosti bezi fermentlarining yetishmovchiligini qoplash va og'ir ovqatlardan keyin hazm qilishni yaxshilash vositasi.",
    price: 26000,
    available: true,
    image: "Leaf",
    dosage: "Ovqat vaqtida 1-2 tabletkadan chaynamasdan",
    manufacturer: "Berlin-Chemie",
    country: "Germaniya",
    usageInstructions: "Ko'p miqdordagi iliq suv bilan, butun holatda ichiladi.",
    sideEffects: "Kam hollarda ich qotishi yoki diareya."
  },
  {
    id: "med-8",
    name: "Lineks Forte",
    genericName: "Laktobakteriyalar va Bifidobakteriyalar",
    category: "Oshqozon va ovqat hazm qilish",
    description: "Ichak mikroflorasini tiklovchi va normallashtiruvchi zamonaviy probiotik. Antibiotik qabul qilgandan so'ng juda muhim.",
    price: 68000,
    available: true,
    image: "Leaf",
    dosage: "Kattalarga kuniga 1-3 kapsuladan",
    manufacturer: "Sandoz",
    country: "Sloveniya",
    usageInstructions: "Ovqat vaqtida ozgina suv bilan ichiladi. Issiq ichimliklar bilan ichish mumkin emas.",
    sideEffects: "Nojo'ya ta'sirlari aniqlanmagan, xavfsiz preparat."
  },
  {
    id: "med-9",
    name: "Bobotik tomchilari 30ml",
    genericName: "Simetikon",
    category: "Bolalar uchun",
    description: "Chaqaloqlardagi qorin dam bo'lishi (kolikalar), gazlar to'planishi va bezovtalikni tez va xavfsiz bartaraf etadi.",
    price: 34000,
    available: true,
    image: "Baby",
    dosage: "28 kunlikdan oshgan chaqaloqlarga kuniga 3-4 marta 8 tomchidan",
    manufacturer: "Medana",
    country: "Polsha",
    usageInstructions: "Ovqatdan keyin yoki ovqat vaqtida ozgina qaynatilgan suv yoki sut bilan beriladi.",
    sideEffects: "Kamdan-kam hollarda allergik reaksiyalar."
  },
  {
    id: "med-10",
    name: "Akvadetrim Vitamin D3 10ml",
    genericName: "Kolekaltsiferol",
    category: "Bolalar uchun",
    description: "Bolalarda raxit kasalligining oldini olish, suyaklar va tishlarning mustahkam rivojlanishi hamda immunitetni oshirish uchun suvli eritma.",
    price: 42000,
    available: true,
    image: "Baby",
    dosage: "Kuniga 1-2 tomchi (shifokor tavsiyasiga ko'ra)",
    manufacturer: "Polpharma",
    country: "Polsha",
    usageInstructions: "Bir qoshiq suvga tomizib, tushlik vaqtida berish tavsiya etiladi.",
    sideEffects: "Tavsiya etilgan dozada nojo'ya ta'siri kuzatilmaydi."
  },
  {
    id: "med-11",
    name: "Noshpa-555 40mg",
    genericName: "Drotaverin gidroxloridi",
    category: "Og'riq qoldiruvchilar",
    description: "Silliq mushaklar spazmlarini (qorin, jigar, buyrak sanchig'i, bosh og'rig'i) tezda yumshatib, og'riqni bartaraf etadi.",
    price: 15000,
    available: false,
    image: "Pill",
    dosage: "1-2 tabletkadan kuniga 2-3 marta",
    manufacturer: "Sanofi",
    country: "Vengriya",
    usageInstructions: "Ovqatlanishdan qat'iy nazar suv bilan ichiladi.",
    sideEffects: "Bosh aylanishi, qon bosimi pasayishi."
  },
  {
    id: "med-12",
    name: "Glyukozamin + Xondroitin",
    genericName: "Glyukozamin va Xondroitin sulfat",
    category: "Vitaminlar va Minerallar",
    description: "Bo'g'imlar va tog'ay to'qimalarini tiklovchi, bo'g'im harakatchanligini yaxshilovchi faol biologik qo'shimcha.",
    price: 110000,
    available: true,
    image: "Sparkles",
    dosage: "Kattalarga kuniga 1 kapsuladan 2 marta",
    manufacturer: "Natures Bounty",
    country: "AQSh",
    usageInstructions: "Ovqatdan keyin 3 oy davomida qabul qilinadi.",
    sideEffects: "Oshqozonda yengil og'riq yoki qorin dam bo'lishi."
  }
];

export const BRANCHES: Branch[] = [
  {
    id: "branch-1",
    name: "Markaziy 555 dorixona (24/7)",
    address: "Namangan viloyati, Chust tumani, Chust shahri, Mustaqillik ko'chasi, 5-uy",
    phone: "+998 50 009 80 78",
    workHours: "24 soat davomida (Dam olish kunlarisiz)",
    landmark: "Chust dehqon bozori yonida, istirohat bog'i ro'parasi",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.234125893!2d71.2215!3d41.0025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb39f000000000%3A0x123456789abcde!2sChust%2C%20Uzbekistan!5e0!3m2!1suz!2s!4v1700000000000"
  },
  {
    id: "branch-2",
    name: "555 dorixona Chust Shifoxona",
    address: "Namangan viloyati, Chust tumani, Chust shahri, Shifokorlar ko'chasi, 12-uy",
    phone: "+998 50 009 80 78",
    workHours: "08:00 - 23:00 (Har kuni)",
    landmark: "Chust tumani markaziy shifoxonasi kirish darvozasi ro'parasi",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.234125893!2d71.2215!3d41.0025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb39f000000000%3A0x123456789abcde!2sChust%2C%20Uzbekistan!5e0!3m2!1suz!2s!4v1700000000001"
  },
  {
    id: "branch-3",
    name: "555 dorixona G'oyon",
    address: "Namangan viloyati, Chust tumani, G'oyon mahallasi, Tinchlik ko'chasi, 45-uy",
    phone: "+998 50 009 80 78",
    workHours: "08:00 - 21:00 (Har kuni)",
    landmark: "G'oyon ota ziyoratgohi yaqinida, mahalla markazi",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.234125893!2d71.2215!3d41.0025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb39f000000000%3A0x123456789abcde!2sChust%2C%20Uzbekistan!5e0!3m2!1suz!2s!4v1700000000002"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "Dorilarni uydan turib buyurtma qilsa bo'ladimi?",
    answer: "Ha, albatta! Veb-saytimiz orqali kerakli dorilarni bron qilish yoki bog'lanish shakli orqali buyurtma qoldirishingiz mumkin. Koll-markazimiz siz bilan bog'lanib, uyingizgacha yetkazib berish (dostavka) xizmatini tashkil qiladi."
  },
  {
    id: "faq-2",
    question: "Barcha dorilar uchun litsenziya va sertifikatlar bormi?",
    answer: "Kompaniyamiz faqat rasmiy ro'yxatdan o'tgan, sertifikatlangan dori-darmonlarni sotadi. Barcha mahsulotlar O'zbekiston Respublikasi Sog'liqni saqlash vazirligi tomonidan tasdiqlangan litsenziyalarga ega va saqlash qoidalariga qat'iy rioya etiladi."
  },
  {
    id: "faq-3",
    question: "To'lovlarni qanday usullarda amalga oshirish mumkin?",
    answer: "Siz to'lovlarni naqd pulda, shuningdek, Click, Payme yoki Uzcard/Humo bank kartalari orqali dorixonaning o'zida yoki kuryerga amalga oshirishingiz mumkin."
  },
  {
    id: "faq-4",
    question: "Retsept talab qilinadigan dorilarni qanday sotib olsak bo'ladi?",
    answer: "Kuchli ta'sir qiluvchi yoki shifokor retsepti majburiy bo'lgan dori vositalarini sotib olish uchun dorixonamizga kelganda yoki kuryer yetkazganda haqiqiy shifokor retseptini taqdim etishingiz zarur."
  }
];
