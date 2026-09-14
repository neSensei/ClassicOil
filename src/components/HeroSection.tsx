import React from 'react';
import { Wordmark } from './Wordmark';
import heroBgImage from '../assets/images/hero_laboratory_bg_1789384204648.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-[94vh] flex flex-col justify-between items-center px-3 sm:px-8 py-6 sm:py-12 overflow-hidden bg-[#E8E5D2]"
    >
      {/* Rich Atmospheric Archival Laboratory Background that transitions smoothly to solid #E8E5D2 */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* The Laboratory Backdrop */}
        <img
          src={heroBgImage}
          alt=""
          aria-hidden="true"
          className="w-full h-[76%] sm:h-[82%] object-cover object-center filter brightness-[0.72] contrast-[1.12] saturate-[0.95]"
        />

        {/* Ambient Top Espresso tint matching the Navbar #2E1E14 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E1E14]/95 via-[#2E1E14]/75 to-transparent h-[45%]"></div>

        {/* Warm Amber Radial Glow centered behind the CLASSIC OIL wordmark */}
        <div
          className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-4xl h-[52vh] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(175, 128, 72, 0.38) 0%, rgba(95, 63, 34, 0.22) 48%, transparent 75%)'
          }}
        ></div>

        {/* The Gradual Smooth Linear Dissolve into the Solid Uniform #E8E5D2 Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(46, 30, 20, 0.45) 0%, rgba(46, 30, 20, 0.3) 22%, rgba(128, 99, 69, 0.38) 46%, rgba(232, 229, 210, 0.86) 68%, rgba(232, 229, 210, 0.98) 84%, #E8E5D2 100%)'
          }}
        ></div>

        {/* Fine archival horizontal ledger watermark rules */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(87, 57, 31, 0.15) 32px)',
            backgroundSize: '100% 32px'
          }}
        ></div>
      </div>

      {/* Subtle Outer Archival Label Border Frame */}
      <div className="pointer-events-none absolute inset-2 sm:inset-5 md:inset-8 border border-[#DDD8C2]/30 flex flex-col justify-between p-2 sm:p-4 md:p-5 z-10">
        {/* Top Corners & Label Register Marks (in luminous ivory against dark top) */}
        <div className="flex justify-between items-start text-[7.5px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.24em] text-[#DDD8C2]/90 font-serif uppercase">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[#F5F3E9] font-bold">№ 024-LAB</span>
            <span className="hidden md:inline text-[#DDD8C2]/75">· ЖИДКОСТИ ДЛЯ ОЧИСТКИ КАРТРИДЖЕЙ ЭСДН</span>
          </div>
          <div className="text-right text-[#DDD8C2]/90">
            <span className="hidden sm:inline text-[#DDD8C2]/75">МАРКИРОВКА «ЧЕСТНЫЙ ЗНАК» · </span>
            <span className="text-[#F5F3E9] font-bold">ГОСТ Р 58109</span>
          </div>
        </div>

        {/* Bottom Corners (in rich dark brown against light bottom) */}
        <div className="flex justify-between items-end text-[7.5px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.24em] text-[#806345] font-serif uppercase border-t border-[#806345]/15 pt-2">
          <div>
            <span className="hidden sm:inline">ФАРМАКОПЕЙНЫЙ СТАНДАРТ </span>
            <span className="font-semibold text-[#57391F]">USP / EP GRADE</span>
          </div>
          <div className="text-right">
            <span className="hidden sm:inline">ФЛАКОНЫ CHUBBY GORILLA · </span>
            <span className="font-semibold text-[#57391F]">30 МЛ (V3)</span>
          </div>
        </div>
      </div>

      {/* Top Archival Header Eyebrow */}
      <div className="w-full max-w-4xl mx-auto text-center pt-6 sm:pt-10 z-10 px-3">
        <p className="text-[9px] sm:text-xs tracking-[0.24em] sm:tracking-[0.3em] text-[#DDD8C2] font-serif uppercase leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          МОЛОДАЯ НЕЗАВИСИМАЯ ЛАБОРАТОРИЯ ЖИДКОСТЕЙ ДЛЯ ОЧИСТКИ КАРТРИДЖЕЙ ЭСДН
        </p>
      </div>

      {/* Center Label Area with Enormous Wordmark */}
      <div className="my-auto py-8 sm:py-14 md:py-16 flex flex-col items-center justify-center w-full z-10">
        <div className="w-full max-w-5xl px-2 sm:px-6 flex flex-col items-center">
          
          {/* Subtle Top Seal Rule */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-40 sm:w-80 mb-5 sm:mb-8 opacity-80">
            <div className="h-[1px] bg-[#DDD8C2]/40 flex-1"></div>
            <span className="text-xs text-[#DDD8C2] font-serif">♦</span>
            <div className="h-[1px] bg-[#DDD8C2]/40 flex-1"></div>
          </div>

          {/* Enormous Wordmark in Luminous Antique Ivory with inverse={true} */}
          <Wordmark size="hero" subtitle={false} inverse={true} />

          {/* Subtitle Typographic Block */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center text-center px-2">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.26em] text-[#DDD8C2] font-serif uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              <span>ЛАБОРАТОРНАЯ ОЧИСТКА ЭСДН</span>
              <span className="text-[#A99A78] hidden xs:inline">/</span>
              <span>СЫРЬЁ USP/EP</span>
              <span className="text-[#A99A78] hidden xs:inline">/</span>
              <span>УСТРАНЕНИЕ НАГАРА</span>
            </div>

            {/* Fine Thin Decorative Horizontal Rule */}
            <div className="w-48 sm:w-80 md:w-96 h-[1px] bg-[#DDD8C2]/40 mt-4 sm:mt-5"></div>

            {/* Archival Monograph Statement (Placed in the gentle transition zone) */}
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-[#463020] font-serif italic max-w-xl tracking-wide leading-relaxed drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
              Специализированные очищающие жидкости для картриджей и испарительных элементов ЭСДН. Созданы на базе фармакопейных компонентов высокой очистки для деликатного растворения остаточного нагара, бережного ухода за хлопковым фитилем и сохранения первозданной чистоты передачи вкуса.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Quiet Scroll Indicator - sits in the fully uniform #E8E5D2 zone */}
      <div className="z-10 pb-3 sm:pb-4 text-center">
        <a
          href="#collection"
          id="scroll-to-collection"
          className="group inline-flex flex-col items-center gap-1.5 sm:gap-2 text-[9px] tracking-[0.22em] sm:tracking-[0.26em] text-[#806345] hover:text-[#382517] uppercase font-serif transition-colors py-2"
        >
          <span className="font-semibold">ПОЗНАКОМИТЬСЯ С ЛИНЕЙКОЙ ОЧИСТКИ</span>
          <div className="w-[1px] h-5 sm:h-6 bg-[#806345]/50 group-hover:h-7 sm:group-hover:h-8 group-hover:bg-[#57391F] transition-all duration-300"></div>
        </a>
      </div>
    </section>
  );
};
