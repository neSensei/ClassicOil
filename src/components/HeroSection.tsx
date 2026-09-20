import React from 'react';
import { Wordmark } from './Wordmark';
import heroBgImage from '../assets/images/hero_laboratory_bg_1789384204648.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-[94vh] flex flex-col justify-between items-center px-3 sm:px-8 py-6 sm:py-12 overflow-hidden bg-[#E8E5D2]"
    >
      {/* Rich Atmospheric Archival Laboratory Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* The Laboratory Backdrop */}
        <img
          src={heroBgImage}
          alt=""
          aria-hidden="true"
          className="w-full h-[76%] sm:h-[82%] object-cover object-center filter brightness-[0.72] contrast-[1.12] saturate-[0.95]"
        />

        {/* Ambient Top Espresso tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E1E14]/95 via-[#2E1E14]/75 to-transparent h-[45%]" />

        {/* Warm Amber Radial Glow centered behind the wordmark */}
        <div
          className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-4xl h-[52vh] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(175, 128, 72, 0.38) 0%, rgba(95, 63, 34, 0.22) 48%, transparent 75%)',
          }}
        />

        {/* Gradual dissolve into solid #E8E5D2 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(46, 30, 20, 0.45) 0%, rgba(46, 30, 20, 0.3) 22%, rgba(128, 99, 69, 0.38) 46%, rgba(232, 229, 210, 0.86) 68%, rgba(232, 229, 210, 0.98) 84%, #E8E5D2 100%)',
          }}
        />

        {/* Fine archival horizontal ledger watermark rules */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(87, 57, 31, 0.15) 32px)',
            backgroundSize: '100% 32px',
          }}
        />
      </div>

      {/* Subtle Outer Archival Label Border Frame */}
      <div className="pointer-events-none absolute inset-2 sm:inset-5 md:inset-8 border border-[#DDD8C2]/30 flex flex-col justify-between p-2 sm:p-4 md:p-5 z-10">
        {/* Top Corners */}
        <div className="flex justify-between items-start text-[10px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.24em] text-[#DDD8C2]/90 font-serif uppercase">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[#F5F3E9] font-bold">
              № 024-CLEAN
            </span>

            <span className="hidden md:inline text-[#DDD8C2]/75">
              · ЖИДКОСТИ ДЛЯ ОЧИСТКИ КАРТРИДЖЕЙ ЭСДН
            </span>
          </div>

          <div className="text-right text-[#DDD8C2]/90">
            <span className="hidden sm:inline text-[#DDD8C2]/75">
              ФОРМАТ 28 МЛ ·{' '}
            </span>

            <span className="text-[#F5F3E9] font-bold">
              18+ ONLY
            </span>
          </div>
        </div>

        {/* Bottom Corners */}
        <div className="flex justify-between items-end text-[10px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.24em] text-[#806345] font-serif uppercase border-t border-[#806345]/15 pt-2">
          <div>
            <span className="hidden sm:inline">
              БАЛАНС ОСНОВЫ{' '}
            </span>

            <span className="font-semibold text-[#57391F]">
              50 PG / 50 VG
            </span>
          </div>

          <div className="text-right">
            <span className="hidden sm:inline">
              ФЛАКОНЫ CHUBBY GORILLA ·{' '}
            </span>

            <span className="font-semibold text-[#57391F]">
              28 МЛ (V3)
            </span>
          </div>
        </div>
      </div>

      {/* Top Archival Header Eyebrow */}
      <div className="w-full max-w-4xl mx-auto text-center pt-6 sm:pt-10 z-10 px-3">
        <p className="text-[10px] sm:text-xs tracking-[0.24em] sm:tracking-[0.3em] text-[#DDD8C2] font-serif uppercase leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          СПЕЦИАЛИЗИРОВАННЫЕ ЖИДКОСТИ ДЛЯ ОЧИСТКИ КАРТРИДЖЕЙ ЭСДН
        </p>
      </div>

      {/* Center Label Area */}
      <div className="my-auto py-8 sm:py-14 md:py-16 flex flex-col items-center justify-center w-full z-10">
        
        {/* 
          IMPORTANT:
          This container is now full viewport width.
          The previous max-w-5xl caused the huge wordmark
          to be centered relative to ~1024px instead of the screen.
        */}
        <div className="w-full flex flex-col items-center">
          
          {/* Subtle Top Seal Rule */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-40 sm:w-80 mb-5 sm:mb-8 opacity-80">
            <div className="h-[1px] bg-[#DDD8C2]/40 flex-1" />

            <span className="text-xs text-[#DDD8C2] font-serif">
              ♦
            </span>

            <div className="h-[1px] bg-[#DDD8C2]/40 flex-1" />
          </div>

          {/* 
            FULL-WIDTH WORDMARK
            It is centered against the viewport, not max-w-5xl.
          */}
          <div className="w-screen max-w-none flex justify-center items-center overflow-visible">
            <Wordmark
              size="hero"
              subtitle={false}
              inverse={true}
              className="w-full"
            />
          </div>

          {/* Subtitle Typographic Block */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center text-center px-2 w-full">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.26em] text-[#DDD8C2] font-serif uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              <span>
                ОЧИСТКА КАРТРИДЖЕЙ ЭСДН
              </span>

              <span className="text-[#A99A78] hidden xs:inline">
                /
              </span>

              <span>
                БАЗА 50/50
              </span>

              <span className="text-[#A99A78] hidden xs:inline">
                /
              </span>

              <span>
                УСТРАНЕНИЕ НАГАРА
              </span>
            </div>

            {/* Fine Thin Decorative Horizontal Rule */}
            <div className="w-48 sm:w-80 md:w-96 h-[1px] bg-[#DDD8C2]/40 mt-4 sm:mt-5" />

            {/* Archival Monograph Statement */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#463020] font-serif italic max-w-xl tracking-wide leading-relaxed drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
              Специализированные очищающие жидкости для картриджей и
              испарительных элементов ЭСДН. Созданы на базе очищенных
              компонентов для деликатного растворения остаточного нагара,
              бережного ухода за хлопковым фитилем и сохранения чистоты
              передачи вкуса.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Clear Navigation Button */}
      <div className="z-10 pb-6 sm:pb-8 text-center px-4">
        <a
          href="#collection"
          id="scroll-to-collection"
          className="group inline-flex items-center gap-3 text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.22em] text-[#F5F3E9] uppercase font-serif bg-[#382517] hover:bg-[#57391F] active:bg-[#22150D] border-2 border-[#806345] px-6 sm:px-8 py-3 sm:py-3.5 shadow-lg hover:shadow-xl transition-all duration-300 rounded-sm"
        >
          <span className="font-semibold">
            ПЕРЕЙТИ К ЛИНЕЙКЕ ОЧИСТКИ
          </span>

          <span className="text-sm group-hover:translate-y-0.5 transition-transform">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
};