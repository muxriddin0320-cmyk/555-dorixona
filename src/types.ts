export interface Medicine {
  id: string;
  name: string;
  genericName: string; // Active substance
  category: string;
  description: string;
  price: number; // in UZS (sum)
  available: boolean;
  image: string; // Lucide icon name or image placeholder URL
  dosage: string;
  manufacturer: string;
  country: string;
  sideEffects?: string;
  usageInstructions?: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  workHours: string;
  googleMapEmbedUrl?: string;
  landmark?: string;
}

export interface Inquiry {
  id: string;
  fullName: string;
  phone: string;
  message: string;
  type: 'general' | 'medicine_order' | 'consultation';
  date: string;
  status: 'yuborildi' | 'korib_chiqilmoqda' | 'bajarildi';
  medicineName?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
