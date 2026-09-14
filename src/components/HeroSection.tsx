import React from 'react';
import { Wordmark } from './Wordmark';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between items-center px-4 sm:px-8 py-8 sm:py-12 paper-grain overflow-hidden"
    >
      {/* Subtle Outer Archival Label Border Frame */}
      <div className="pointer-events-none absolute inset-4 sm:inset-8 border border-[#806345]/25 flex flex-col justify-between p-3 sm:p-5">
        {/* Top Corners & Label Register Marks */}
        <div className="flex justify-between items-start text-[8px] sm:text-[9px] tracking-[0.24em] text-[#806345] font-serif uppercase">
          <div className="flex items-center gap-2">
            <span>№ 024-LAB</span>
            <span className="hidden md:inline">· ЖИДКОСТИ ДЛЯ ОЧИСТКИ КАРТРИДЖЕЙ ЭСДН</span>
          </div>
          <div className="text-right">
            <span>МАРКИРОВКА «ЧЕСТНЫЙ ЗНАК» · ГОСТ</span>
          </div>
        </div>

        {/* Bottom Corners */}
        <div className="flex justify-between items-end text-[8px] sm:text-[9px] tracking-[0.24em] text-[#806345] font-serif uppercase">
          <div>
            <span>ФАРМАКОПЕЙНЫЙ СТАНДАРТ USP / EP</span>
          </div>
          <div className="text-right">
            <span>ФЛАКОНЫ CHUBBY GORILLA V3 (30 МЛ)</span>
          </div>
        </div>
      </div>

      {/* Top Archival Header Eyebrow */}
      <div className="w-full max-w-4xl mx-auto text-center pt-8 sm:pt-12 z-10">
        <p className="text-[10px] sm:text-xs tracking-[0.28em] text-[#806345] font-serif uppercase">
          МОЛОДАЯ НЕЗАВИСИМАЯ ЛАБОРАТОРИЯ ЖИДКОСТЕЙ ДЛЯ ОЧИСТКИ КАРТРИДЖЕЙ ЭСДН
        </p>
      </div>

      {/* Center Label Area with Enormous Wordmark */}
      <div className="my-auto py-12 sm:py-20 flex flex-col items-center justify-center w-full z-10">
        <div className="w-full max-w-5xl px-2 sm:px-6 flex flex-col items-center">
          
          {/* Subtle Top Seal Rule */}
          <div className="flex items-center justify-center gap-4 w-48 sm:w-80 mb-6 sm:mb-8 opacity-70">
            <div className="h-[1px] bg-[#806345]/40 flex-1"></div>
            <span className="text-xs text-[#806345] font-serif">♦</span>
            <div className="h-[1px] bg-[#806345]/40 flex-1"></div>
          </div>

          {/* Enormous Wordmark matching reference label */}
          <Wordmark size="hero" subtitle={false} />

          {/* Subtitle Typographic Block */}
          <div className="mt-8 sm:mt-12 flex flex-col items-center text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-5 text-[10px] sm:text-xs tracking-[0.26em] text-[#806345] font-serif uppercase">
              <span>ЛАБОРАТОРНАЯ ОЧИСТКА ЭСДН</span>
              <span className="text-[#A99A78]">/</span>
              <span>ФАРМАКОПЕЙНОЕ СЫРЬЁ USP/EP</span>
              <span className="text-[#A99A78]">/</span>
              <span>УСТРАНЕНИЕ НАГАРА КАРТРИДЖЕЙ</span>
            </div>

            {/* Fine Thin Decorative Horizontal Rule */}
            <div className="w-64 sm:w-96 h-[1px] bg-[#806345]/40 mt-5"></div>

            {/* Archival Monograph Statement */}
            <p className="mt-5 text-xs sm:text-sm text-[#57391F]/85 font-serif italic max-w-xl tracking-wide leading-relaxed">
              Специализированные очищающие жидкости для картриджей и испарительных элементов ЭСДН. Созданы на базе фармакопейных компонентов высокой очистки для деликатного растворения остаточного нагара, бережного ухода за хлопковым фитилем и сохранения первозданной чистоты передачи вкуса.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Quiet Scroll Indicator */}
      <div className="z-10 pb-4 text-center">
        <a
          href="#collection"
          id="scroll-to-collection"
          className="group inline-flex flex-col items-center gap-2 text-[9px] tracking-[0.26em] text-[#806345] hover:text-[#382517] uppercase font-serif transition-colors"
        >
          <span>ПОЗНАКОМИТЬСЯ С ЛИНЕЙКОЙ ОЧИСТКИ</span>
          <div className="w-[1px] h-6 bg-[#806345]/40 group-hover:h-8 group-hover:bg-[#57391F] transition-all duration-300"></div>
        </a>
      </div>
    </section>
  );
};
