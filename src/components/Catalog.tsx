import React, { useState, useMemo } from 'react';
import { MEDICINES, MEDICINE_CATEGORIES } from '../data';
import { Medicine } from '../types';
import { 
  Search, Pill, Sparkles, Heart, Leaf, Baby, Activity, Info, 
  ShoppingBag, Check, X, Globe, Building2, HelpCircle 
} from 'lucide-react';

interface CatalogProps {
  onSelectMedicineForOrder: (medicineName: string) => void;
}

export default function Catalog({ onSelectMedicineForOrder }: CatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);

  // Helper function to render correct category icon
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="h-5 w-5 text-amber-500" />;
      case 'Heart':
        return <Heart className="h-5 w-5 text-red-500" />;
      case 'Leaf':
        return <Leaf className="h-5 w-5 text-emerald-500" />;
      case 'Baby':
        return <Baby className="h-5 w-5 text-pink-500" />;
      case 'Activity':
        return <Activity className="h-5 w-5 text-indigo-500" />;
      default:
        return <Pill className="h-5 w-5 text-emerald-500" />;
    }
  };

  // Filter medicines based on search and category
  const filteredMedicines = useMemo(() => {
    return MEDICINES.filter((med) => {
      const matchesSearch = 
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesCategory = 
        selectedCategory === 'Barchasi' || 
        med.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
  };

  const handleReserveClick = (medName: string) => {
    setSelectedMedicine(null); // Close modal if open
    onSelectMedicineForOrder(medName);
  };

  return (
    <section id="katalog" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase bg-emerald-100/60 px-3 py-1 rounded-full">
            Dori-Darmonlar Katalogi
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-3">
            Sertifikatlangan Dori Vositalarini Izlash Va Bron Qilish
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
            Bizning dori-darmonlar bazamizdan o'zingizga kerakli vositani toping, uning tarkibi bilan tanishing va uydan chiqmay bron qiling.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div id="catalog-controls" className="space-y-6 mb-12">
          {/* Search Box */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              id="catalog-search-input"
              type="text"
              placeholder="Dori nomi, ta'sir qiluvchi moddasi yoki ishlab chiqaruvchisini yozing..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all text-sm sm:text-base shadow-sm"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Category Badges (Scrollable horizontally on small screens) */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {MEDICINE_CATEGORIES.map((category) => (
              <button
                key={category}
                id={`category-btn-${category.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-100 font-semibold'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800 border border-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredMedicines.length > 0 ? (
          <div id="medicines-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedicines.map((med) => (
              <div
                key={med.id}
                id={`med-card-${med.id}`}
                className="group relative bg-white rounded-2xl border border-slate-100 hover:border-emerald-200/60 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Medicine Top */}
                <div>
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-emerald-50/70 transition-colors">
                      {getCategoryIcon(med.image)}
                    </div>
                    {med.available ? (
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100/50 px-2 py-0.5 rounded-full flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block mr-1" />
                        Mavjud
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-200/50 px-2 py-0.5 rounded-full">
                        Tez orada keladi
                      </span>
                    )}
                  </div>

                  <div className="mt-4 space-y-1">
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase block">
                      {med.category}
                    </span>
                    <h3 className="font-sans font-bold text-slate-800 text-base group-hover:text-emerald-700 transition-colors line-clamp-1">
                      {med.name}
                    </h3>
                    <p className="text-xs text-slate-400 italic line-clamp-1">
                      Faol modda: {med.genericName}
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 mt-3 line-clamp-2 leading-relaxed">
                    {med.description}
                  </p>
                </div>

                {/* Medicine Bottom */}
                <div className="mt-6 pt-4 border-t border-slate-50 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-400">Narxi</span>
                    <span className="font-display font-bold text-slate-900 text-lg">
                      {formatPrice(med.price)}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id={`med-btn-detail-${med.id}`}
                      onClick={() => setSelectedMedicine(med)}
                      className="px-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 cursor-pointer transition-colors border border-slate-100"
                    >
                      <Info className="h-3.5 w-3.5" />
                      <span>Batafsil</span>
                    </button>

                    <button
                      id={`med-btn-reserve-${med.id}`}
                      disabled={!med.available}
                      onClick={() => handleReserveClick(med.name)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition-all cursor-pointer ${
                        med.available
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>Bron qilish</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div id="catalog-no-results" className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <HelpCircle className="h-12 w-12 text-slate-400 mx-auto stroke-1" />
            <h3 className="font-display font-semibold text-slate-800 text-lg mt-4">
              Dori topilmadi
            </h3>
            <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
              «{searchTerm}» bo'yicha hech qanday dori topilmadi. Qidiruv so'zini to'g'ri yozganingizni tekshiring yoki biz bilan bog'laning.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('Barchasi'); }}
              className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold cursor-pointer shadow-sm transition-all"
            >
              Qidiruvni tozalash
            </button>
          </div>
        )}
      </div>

      {/* Slide-out Medicine Detail Modal Overlay */}
      {selectedMedicine && (
        <div id="med-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative border border-slate-100">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMedicine(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full cursor-pointer transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start space-x-4 pr-6 pb-6 border-b border-slate-100">
              <div className="p-4 bg-emerald-50 rounded-2xl">
                {getCategoryIcon(selectedMedicine.image)}
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider text-emerald-600 font-bold uppercase">
                  {selectedMedicine.category}
                </span>
                <h3 className="font-display font-bold text-slate-950 text-xl sm:text-2xl mt-1">
                  {selectedMedicine.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  <span className="font-medium text-slate-700">Xalqaro patentlanmagan nomi (INN):</span> {selectedMedicine.genericName}
                </p>
              </div>
            </div>

            {/* Modal Details Grid */}
            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Tavsifi va qo'llanilishi</h4>
                <p className="text-sm text-slate-700 mt-1.5 leading-relaxed">
                  {selectedMedicine.description}
                </p>
              </div>

              {selectedMedicine.usageInstructions && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Qo'llash usuli va dozalari</h4>
                  <p className="text-sm text-slate-700 mt-1.5 leading-relaxed">
                    {selectedMedicine.usageInstructions}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center space-x-2 text-slate-700 text-xs">
                  <Globe className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Ishlab chiqaruvchi mamlakat:</strong> {selectedMedicine.country}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700 text-xs">
                  <Building2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Kompaniya:</strong> {selectedMedicine.manufacturer}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700 text-xs col-span-1 sm:col-span-2">
                  <span className="text-emerald-600 font-bold mr-1">📐</span>
                  <span><strong>Tavsiya etilgan doza:</strong> {selectedMedicine.dosage}</span>
                </div>
              </div>

              {selectedMedicine.sideEffects && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">Nojo'ya ta'sirlari</h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {selectedMedicine.sideEffects}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs text-slate-400 block">Narxi</span>
                <span className="font-display font-black text-emerald-700 text-xl">
                  {formatPrice(selectedMedicine.price)}
                </span>
              </div>

              <div className="flex space-x-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedMedicine(null)}
                  className="w-1/2 sm:w-auto px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold cursor-pointer transition-colors"
                >
                  Yopish
                </button>
                <button
                  disabled={!selectedMedicine.available}
                  onClick={() => handleReserveClick(selectedMedicine.name)}
                  className={`w-1/2 sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                    selectedMedicine.available
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Bron qilish</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
