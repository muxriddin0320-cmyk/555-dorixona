import React, { useState } from 'react';
import { BRANCHES } from '../data';
import { Branch } from '../types';
import { MapPin, Phone, Clock, Landmark, ExternalLink, HelpCircle } from 'lucide-react';

export default function Branches() {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(BRANCHES[0]);

  return (
    <section id="filiallar" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase bg-emerald-100/60 px-3 py-1 rounded-full">
            Bizning Filiallarimiz
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-3">
            O'zingizga Yaqin Filialimizni Tanlang
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            «555 dorixona» Namangan viloyati, Chust tumani bo'ylab qulay joylashuvga ega. Quyida filiallarimiz manzillari va ularning aniq geolokatsiyalari keltirilgan.
          </p>
        </div>

        {/* Content Layout: Split Branches & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Branch Cards List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display font-bold text-slate-800 text-lg mb-4 flex items-center space-x-2">
              <span className="bg-emerald-100 text-emerald-800 p-1.5 rounded-lg text-sm">📍</span>
              <span>Filiallar ro'yxati ({BRANCHES.length} ta)</span>
            </h3>

            {BRANCHES.map((branch) => {
              const isSelected = selectedBranch.id === branch.id;
              return (
                <div
                  key={branch.id}
                  id={`branch-card-${branch.id}`}
                  onClick={() => setSelectedBranch(branch)}
                  className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/10'
                      : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <h4 className="font-sans font-bold text-slate-800 text-base">
                      {branch.name}
                    </h4>
                    {isSelected && (
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                        Tanlandi
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-start space-x-2.5">
                      <MapPin className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <Phone className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0" />
                      <a 
                        href={`tel:${branch.phone.replace(/[^+\d]/g, '')}`} 
                        className="hover:text-emerald-700 hover:underline font-medium"
                        onClick={(e) => e.stopPropagation()} // Prevent card selection click trigger
                      >
                        {branch.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <Clock className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0" />
                      <span>{branch.workHours}</span>
                    </div>

                    {branch.landmark && (
                      <div className="flex items-start space-x-2.5 pt-1 border-t border-slate-50 text-slate-400">
                        <Landmark className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs"><strong>Mo'ljal:</strong> {branch.landmark}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Embedded Map */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 shadow-md border border-slate-100 h-full flex flex-col justify-between min-h-[450px]">
            <div className="flex items-center justify-between pb-3 border-b border-slate-50 mb-3">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">Xarita ko'rinishi</span>
                <h4 className="font-sans font-bold text-slate-800 text-sm">
                  {selectedBranch.name} geolokatsiyasi
                </h4>
              </div>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedBranch.address)}`}
                target="_blank" 
                referrerPolicy="no-referrer"
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center space-x-1"
              >
                <span>Google xaritada ochish</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Map Frame Container */}
            <div className="flex-grow rounded-2xl overflow-hidden bg-slate-100 min-h-[350px] relative">
              {selectedBranch.googleMapEmbedUrl ? (
                <iframe
                  id="branch-map-iframe"
                  title={`${selectedBranch.name} joylashuvi`}
                  src={selectedBranch.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-2">
                  <HelpCircle className="h-10 w-12 stroke-1" />
                  <span className="text-sm">Xarita yuklanmadi</span>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
