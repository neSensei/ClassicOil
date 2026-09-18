import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface CollectionSectionProps {
  onSelectProduct: (product: Product) => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({ onSelectProduct }) => {
  const p1 = PRODUCTS[0];
  const p2 = PRODUCTS[1];
  const p3 = PRODUCTS[2];
  const p4 = PRODUCTS[3];

  return (
    <section id="collection" className="py-14 sm:py-24 md:py-28 bg-[#E8E5D2] border-t border-b border-[#806345]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Masthead */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-24">
          <span className="text-[10px] sm:text-[10px] tracking-[0.26em] sm:tracking-[0.3em] text-[#806345] uppercase font-serif block">
            СПЕЦИАЛИЗИРОВАННЫЕ СОСТАВЫ · СЕРИЯ CLEANSE
          </span>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#382517] tracking-[0.06em] sm:tracking-[0.08em] mt-3 uppercase leading-tight"
            style={{ fontFamily: '"Bodoni Moda", "Playfair Display", Georgia, serif' }}
          >
            ЖИДКОСТИ ДЛЯ ОЧИСТКИ КАРТРИДЖЕЙ ЭСДН
          </h2>
          <div className="w-16 h-[1px] bg-[#806345]/40 mx-auto mt-4 mb-4"></div>
          <p className="text-xs sm:text-base text-[#57391F]/80 font-serif italic max-w-lg mx-auto leading-relaxed">
            Четыре специализированные формулы на чистой базе 50/50 PG/VG для промывки, удаления нагара и ухода за испарительными элементами картриджей ЭСДН.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PRODUCT 01: Large Image on Left, Editorial Typography on Right */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center mb-16 sm:mb-28 md:mb-36">
          <div className="lg:col-span-7">
            <div className="relative group overflow-hidden border border-[#806345]/30 p-2 sm:p-4 bg-[#E8E5D2] shadow-sm">
              <div className="overflow-hidden aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src={p1.image}
                  alt="Classic Oil Orange Reserve жидкость для очистки картриджей ЭСДН"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-[10px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#E8E5D2] bg-[#382517]/85 px-2.5 py-1 font-mono uppercase backdrop-blur-xs">
                {p1.plate}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-4">
            <div className="text-[10px] sm:text-[10px] tracking-[0.26em] text-[#806345] font-serif uppercase mb-1">
              {p1.number}
            </div>
            <div className="text-[10px] sm:text-xs tracking-[0.2em] text-[#806345]/70 font-mono mb-1">
              CLASSIC OIL · CLEANING LAB
            </div>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#382517] tracking-[0.04em] uppercase mb-3 sm:mb-4"
              style={{ fontFamily: '"Bodoni Moda", serif' }}
            >
              {p1.name}
            </h3>

            <p className="text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] text-[#806345] font-serif uppercase mb-4 sm:mb-6 pb-2.5 border-b border-[#806345]/20">
              {p1.classification}
            </p>

            <p className="text-xs sm:text-base text-[#57391F] font-serif leading-relaxed mb-3 sm:mb-4">
              {p1.description}
            </p>

            <p className="text-xs text-[#806345] font-serif italic leading-relaxed mb-5 sm:mb-6">
              {p1.secondaryText}
            </p>

            {/* Taste Balance Bars */}
            <div className="bg-[#DDD8C2]/50 border border-[#806345]/20 p-3 sm:p-3.5 mb-5 sm:mb-6 text-xs font-serif space-y-2">
              <div className="text-[10px] sm:text-[10px] uppercase tracking-[0.2em] text-[#806345] font-mono border-b border-[#806345]/20 pb-1 mb-2">
                ПРОФИЛЬ ВКУСА / КАЛИБРОВКА LAB
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#57391F]">
                <span>Сладость</span>
                <div className="flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`w-2 sm:w-2.5 h-1.5 ${i < p1.tasteProfile.sweetness ? 'bg-[#57391F]' : 'bg-[#806345]/20'}`}></span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#57391F]">
                <span>Холодок (WS-23)</span>
                <div className="flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`w-2 sm:w-2.5 h-1.5 ${i < p1.tasteProfile.coolness ? 'bg-[#57391F]' : 'bg-[#806345]/20'}`}></span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#57391F]">
                <span>Насыщенность букета</span>
                <div className="flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`w-2 sm:w-2.5 h-1.5 ${i < p1.tasteProfile.saturation ? 'bg-[#57391F]' : 'bg-[#806345]/20'}`}></span>
                  ))}
                </div>
              </div>
            </div>

            {/* Spec Sheet Table */}
            <div className="border-t border-b border-[#806345]/25 py-3.5 mb-6 text-xs font-serif">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#57391F]">
                <div>
                  <span className="text-[#806345] block text-[10px] uppercase tracking-[0.18em]">ФЛАКОН И ОБЪЁМ</span>
                  <span>30 МЛ / Chubby Gorilla V3</span>
                </div>
                <div>
                  <span className="text-[#806345] block text-[10px] uppercase tracking-[0.18em]">НАЗНАЧЕНИЕ / БАЗА</span>
                  <span>Очистка картриджей ЭСДН · 50/50</span>
                </div>
                <div className="sm:col-span-2 pt-1">
                  <span className="text-[#806345] block text-[10px] uppercase tracking-[0.18em]">ВЕРХНИЕ И БАЗОВЫЕ НОТЫ</span>
                  <span className="italic text-xs">{p1.tasteProfile.topNotes} → {p1.tasteProfile.baseNotes}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              id="inspect-product-01"
              onClick={() => onSelectProduct(p1)}
              className="cursor-pointer group w-full sm:w-auto text-center justify-center inline-flex items-center gap-3 text-xs tracking-[0.18em] sm:tracking-[0.2em] text-[#F5F3E9] uppercase font-serif bg-[#382517] hover:bg-[#57391F] active:bg-[#22150D] border-2 border-[#806345] px-6 sm:px-7 py-3.5 shadow-md hover:shadow-lg transition-all duration-200 min-h-[48px] rounded-sm"
            >
              <span>ПОДРОБНЫЕ ХАРАКТЕРИСТИКИ</span>
              <span className="text-sm font-bold group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PRODUCT 02: Typography on Left, Large Image on Right */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center mb-16 sm:mb-28 md:mb-36">
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center lg:pr-4">
            <div className="text-[10px] sm:text-[10px] tracking-[0.26em] text-[#806345] font-serif uppercase mb-1">
              {p2.number}
            </div>
            <div className="text-[10px] sm:text-xs tracking-[0.2em] text-[#806345]/70 font-mono mb-1">
              CLASSIC OIL · CLEANING LAB
            </div>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#382517] tracking-[0.04em] uppercase mb-3 sm:mb-4"
              style={{ fontFamily: '"Bodoni Moda", serif' }}
            >
              {p2.name}
            </h3>

            <p className="text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] text-[#806345] font-serif uppercase mb-4 sm:mb-6 pb-2.5 border-b border-[#806345]/20">
              {p2.classification}
            </p>

            <p className="text-xs sm:text-base text-[#57391F] font-serif leading-relaxed mb-3 sm:mb-4">
              {p2.description}
            </p>

            <p className="text-xs text-[#806345] font-serif italic leading-relaxed mb-5 sm:mb-6">
              {p2.secondaryText}
            </p>

            {/* Taste Balance Bars */}
            <div className="bg-[#DDD8C2]/50 border border-[#806345]/20 p-3 sm:p-3.5 mb-5 sm:mb-6 text-xs font-serif space-y-2">
              <div className="text-[10px] sm:text-[10px] uppercase tracking-[0.2em] text-[#806345] font-mono border-b border-[#806345]/20 pb-1 mb-2">
                ПРОФИЛЬ ВКУСА / КАЛИБРОВКА LAB
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#57391F]">
                <span>Сладость</span>
                <div className="flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`w-2 sm:w-2.5 h-1.5 ${i < p2.tasteProfile.sweetness ? 'bg-[#57391F]' : 'bg-[#806345]/20'}`}></span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#57391F]">
                <span>Холодок (Кулер)</span>
                <div className="flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`w-2 sm:w-2.5 h-1.5 ${i < p2.tasteProfile.coolness ? 'bg-[#57391F]' : 'bg-[#806345]/20'}`}></span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#57391F]">
                <span>Насыщенность букета</span>
                <div className="flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`w-2 sm:w-2.5 h-1.5 ${i < p2.tasteProfile.saturation ? 'bg-[#57391F]' : 'bg-[#806345]/20'}`}></span>
                  ))}
                </div>
              </div>
            </div>

            {/* Spec Sheet Table */}
            <div className="border-t border-b border-[#806345]/25 py-3.5 mb-6 text-xs font-serif">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#57391F]">
                <div>
                  <span className="text-[#806345] block text-[10px] uppercase tracking-[0.18em]">НАЗНАЧЕНИЕ</span>
                  <span>Очистка картриджей ЭСДН</span>
                </div>
                <div>
                  <span className="text-[#806345] block text-[10px] uppercase tracking-[0.18em]">РЕЗУЛЬТАТ</span>
                  <span>Удаление нагара и смол</span>
                </div>
                <div className="sm:col-span-2 pt-1">
                  <span className="text-[#806345] block text-[10px] uppercase tracking-[0.18em]">ОСНОВНЫЕ АКЦЕНТЫ</span>
                  <span className="italic text-xs">{p2.tasteProfile.topNotes} → {p2.tasteProfile.heartNotes}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              id="inspect-product-02"
              onClick={() => onSelectProduct(p2)}
              className="cursor-pointer group w-full sm:w-auto text-center justify-center inline-flex items-center gap-3 text-xs tracking-[0.18em] sm:tracking-[0.2em] text-[#F5F3E9] uppercase font-serif bg-[#382517] hover:bg-[#57391F] active:bg-[#22150D] border-2 border-[#806345] px-6 sm:px-7 py-3.5 shadow-md hover:shadow-lg transition-all duration-200 min-h-[48px] rounded-sm"
            >
              <span>ПОДРОБНЫЕ ХАРАКТЕРИСТИКИ</span>
              <span className="text-sm font-bold group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group overflow-hidden border border-[#806345]/30 p-2 sm:p-4 bg-[#E8E5D2] shadow-sm">
              <div className="overflow-hidden aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src={p2.image}
                  alt="Classic Oil Dark Virginia жидкость для очистки картриджей ЭСДН"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-[10px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#E8E5D2] bg-[#382517]/85 px-2.5 py-1 font-mono uppercase backdrop-blur-xs">
                {p2.plate}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PRODUCT 03: Full-width Cinematic Image with Centered Archival Description */}
        {/* ========================================================================= */}
        <div className="mb-16 sm:mb-28 md:mb-36">
          <div className="relative border border-[#806345]/30 p-2 sm:p-5 bg-[#E8E5D2] mb-6 sm:mb-8 shadow-sm">
            <div className="overflow-hidden aspect-[16/10] sm:aspect-[16/9] max-h-[65vh]">
              <img
                src={p3.image}
                alt="Classic Oil Forest Frost жидкость для очистки картриджей ЭСДН"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[12%] contrast-[1.08] hover:scale-[1.01] transition-transform duration-1000"
              />
            </div>
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8 text-[10px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-[#E8E5D2] bg-[#382517]/90 px-2.5 sm:px-3 py-1 font-mono uppercase backdrop-blur-xs">
              {p3.plate}
            </div>
            <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 hidden sm:block text-[10px] sm:text-[10px] tracking-[0.25em] text-[#E8E5D2] bg-[#382517]/90 px-3 py-1 font-serif uppercase backdrop-blur-xs">
              СЕРИЯ CLEANSE & REFRESH · 30 МЛ
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center px-2 sm:px-4">
            <div className="text-[10px] sm:text-[10px] tracking-[0.26em] sm:tracking-[0.32em] text-[#806345] font-serif uppercase mb-2">
              {p3.number} · CLASSIC OIL CLEANING LAB
            </div>
            <h3
              className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#382517] tracking-[0.05em] uppercase mb-3 sm:mb-4"
              style={{ fontFamily: '"Bodoni Moda", serif' }}
            >
              {p3.name}
            </h3>
            <p className="text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.24em] text-[#806345] font-serif uppercase mb-4 sm:mb-5">
              {p3.classification}
            </p>
            <p className="text-xs sm:text-base text-[#57391F] font-serif leading-relaxed mb-5 sm:mb-6">
              {p3.description}
            </p>
            <button
              id="inspect-product-03"
              onClick={() => onSelectProduct(p3)}
              className="cursor-pointer group w-full sm:w-auto text-center justify-center inline-flex items-center gap-3 text-xs tracking-[0.18em] sm:tracking-[0.2em] text-[#F5F3E9] uppercase font-serif bg-[#382517] hover:bg-[#57391F] active:bg-[#22150D] border-2 border-[#806345] px-6 sm:px-8 py-3.5 shadow-md hover:shadow-lg transition-all duration-200 min-h-[48px] rounded-sm"
            >
              <span>ПОДРОБНЫЕ ХАРАКТЕРИСТИКИ</span>
              <span className="text-sm font-bold group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PRODUCT 04: Asymmetric Editorial Composition */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="relative border border-[#806345]/30 p-2 sm:p-5 bg-[#E8E5D2] shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p4.image}
                  alt="Classic Oil Citron Herbal Tea жидкость для очистки картриджей ЭСДН"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[12%] contrast-[1.05]"
                />
              </div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-[10px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#E8E5D2] bg-[#382517]/85 px-2.5 py-1 font-mono uppercase">
                {p4.plate}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="text-[10px] sm:text-[10px] tracking-[0.26em] text-[#806345] font-serif uppercase mb-1">
              {p4.number} · РЕЦЕПТУРА HERBAL PURIFY
            </div>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#382517] tracking-[0.04em] uppercase mb-3 sm:mb-4"
              style={{ fontFamily: '"Bodoni Moda", serif' }}
            >
              {p4.name}
            </h3>

            <p className="text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] text-[#806345] font-serif uppercase mb-4 sm:mb-6 pb-2.5 border-b border-[#806345]/20">
              {p4.classification}
            </p>

            <p className="text-xs sm:text-base text-[#57391F] font-serif leading-relaxed mb-4">
              {p4.description}
            </p>

            {/* Spec Card */}
            <div className="border border-dashed border-[#806345]/40 p-3.5 sm:p-4 bg-[#E8E5D2]/60 mb-6 sm:mb-8 font-mono text-[11px] text-[#57391F]">
              <div className="flex justify-between border-b border-[#806345]/20 pb-1.5 mb-2 text-[#806345] text-[10px] sm:text-[10px] tracking-[0.18em] uppercase font-serif">
                <span>СПЕЦИФИКАЦИЯ ФОРМУЛЫ</span>
                <span>СЕРИЯ № 024-TEA</span>
              </div>
              <p className="italic font-serif text-xs text-[#57391F]/90 mb-2">
                "Мягкая композиция для промывки картриджей ЭСДН. Растворяет нагар, продлевая ресурс хлопкового фитиля и сетки испарителя."
              </p>
              <div className="flex flex-col xs:flex-row justify-between text-[10px] sm:text-[10px] text-[#806345] gap-1">
                <span>ФЛАКОН: 30 МЛ · CHUBBY GORILLA V3</span>
                <span>БАЗА: 50 PG / 50 VG · 18+</span>
              </div>
            </div>

            <button
              id="inspect-product-04"
              onClick={() => onSelectProduct(p4)}
              className="cursor-pointer group w-full sm:w-auto text-center justify-center inline-flex items-center gap-3 text-xs tracking-[0.18em] sm:tracking-[0.2em] text-[#F5F3E9] uppercase font-serif bg-[#382517] hover:bg-[#57391F] active:bg-[#22150D] border-2 border-[#806345] px-6 sm:px-7 py-3.5 shadow-md hover:shadow-lg transition-all duration-200 min-h-[48px] rounded-sm"
            >
              <span>ПОДРОБНЫЕ ХАРАКТЕРИСТИКИ</span>
              <span className="text-sm font-bold group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
