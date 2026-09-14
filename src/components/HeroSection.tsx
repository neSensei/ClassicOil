import React from 'react';
import { Wordmark } from './Wordmark';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-[92vh] flex flex-col justify-between items-center px-3 sm:px-8 py-6 sm:py-12 paper-grain overflow-hidden"
    >
      {/* Subtle Outer Archival Label Border Frame */}
      <div className="pointer-events-none absolute inset-2 sm:inset-5 md:inset-8 border border-[#806345]/25 flex flex-col justify-between p-2 sm:p-4 md:p-5">
        {/* Top Corners & Label Register Marks */}
        <div className="flex justify-between items-start text-[7.5px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.24em] text-[#806345] font-serif uppercase">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span>№ 024-LAB</span>
            <span className="hidden md:inline">· ЖИДКОСТИ ДЛЯ ОЧИСТКИ КАРТРИДЖЕЙ ЭСДН</span>
          </div>
          <div className="text-right">
            <span className="hidden sm:inline">МАРКИРОВКА «ЧЕСТНЫЙ ЗНАК» · </span>
            <span>ГОСТ Р 58109</span>
          </div>
        </div>

        {/* Bottom Corners */}
        <div className="flex justify-between items-end text-[7.5px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.24em] text-[#806345] font-serif uppercase">
          <div>
            <span className="hidden sm:inline">ФАРМАКОПЕЙНЫЙ СТАНДАРТ </span>
            <span>USP / EP GRADE</span>
          </div>
          <div className="text-right">
            <span className="hidden sm:inline">ФЛАКОНЫ CHUBBY GORILLA · </span>
            <span>30 МЛ (V3)</span>
          </div>
        </div>
      </div>

      {/* Top Archival Header Eyebrow */}
      <div className="w-full max-w-4xl mx-auto text-center pt-6 sm:pt-10 z-10 px-3">
        <p className="text-[9px] sm:text-xs tracking-[0.22em] sm:tracking-[0.28em] text-[#806345] font-serif uppercase leading-relaxed">
          МОЛОДАЯ НЕЗАВИСИМАЯ ЛАБОРАТОРИЯ ЖИДКОСТЕЙ ДЛЯ ОЧИСТКИ КАРТРИДЖЕЙ ЭСДН
        </p>
      </div>

      {/* Center Label Area with Enormous Wordmark */}
      <div className="my-auto py-8 sm:py-16 md:py-20 flex flex-col items-center justify-center w-full z-10">
        <div className="w-full max-w-5xl px-2 sm:px-6 flex flex-col items-center">
          
          {/* Subtle Top Seal Rule */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-40 sm:w-80 mb-5 sm:mb-8 opacity-70">
            <div className="h-[1px] bg-[#806345]/40 flex-1"></div>
            <span className="text-xs text-[#806345] font-serif">♦</span>
            <div className="h-[1px] bg-[#806345]/40 flex-1"></div>
          </div>

          {/* Enormous Wordmark matching reference label */}
          <Wordmark size="hero" subtitle={false} />

          {/* Subtitle Typographic Block */}
          <div className="mt-6 sm:mt-10 md:mt-12 flex flex-col items-center text-center px-2">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 text-[9px] sm:text-xs tracking-[0.18em] sm:tracking-[0.26em] text-[#806345] font-serif uppercase">
              <span>ЛАБОРАТОРНАЯ ОЧИСТКА ЭСДН</span>
              <span className="text-[#A99A78] hidden xs:inline">/</span>
              <span>СЫРЬЁ USP/EP</span>
              <span className="text-[#A99A78] hidden xs:inline">/</span>
              <span>УСТРАНЕНИЕ НАГАРА</span>
            </div>

            {/* Fine Thin Decorative Horizontal Rule */}
            <div className="w-48 sm:w-80 md:w-96 h-[1px] bg-[#806345]/40 mt-4 sm:mt-5"></div>

            {/* Archival Monograph Statement */}
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-[#57391F]/85 font-serif italic max-w-xl tracking-wide leading-relaxed">
              Специализированные очищающие жидкости для картриджей и испарительных элементов ЭСДН. Созданы на базе фармакопейных компонентов высокой очистки для деликатного растворения остаточного нагара, бережного ухода за хлопковым фитилем и сохранения первозданной чистоты передачи вкуса.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Quiet Scroll Indicator */}
      <div className="z-10 pb-3 sm:pb-4 text-center">
        <a
          href="#collection"
          id="scroll-to-collection"
          className="group inline-flex flex-col items-center gap-1.5 sm:gap-2 text-[9px] tracking-[0.22em] sm:tracking-[0.26em] text-[#806345] hover:text-[#382517] uppercase font-serif transition-colors py-2"
        >
          <span>ПОЗНАКОМИТЬСЯ С ЛИНЕЙКОЙ ОЧИСТКИ</span>
          <div className="w-[1px] h-5 sm:h-6 bg-[#806345]/40 group-hover:h-7 sm:group-hover:h-8 group-hover:bg-[#57391F] transition-all duration-300"></div>
        </a>
      </div>
    </section>
  );
};
