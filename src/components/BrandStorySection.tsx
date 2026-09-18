import React, { useState } from 'react';
import { BRAND_CHAPTERS } from '../data/archive';

export const BrandStorySection: React.FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const currentChapter = BRAND_CHAPTERS[activeChapterIndex];

  return (
    <section id="brand-story" className="py-24 sm:py-32 bg-[#E8E5D2] relative paper-grain border-b border-[#806345]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Editorial Masthead */}
        <div className="border-b border-t border-[#806345]/30 py-6 mb-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[10px] tracking-[0.25em] text-[#806345] uppercase font-serif pb-3 border-b border-[#806345]/15 gap-2">
            <span>О БРЕНДЕ · ИСТОРИЯ</span>
            <span>СОСТАВ И БАЗА</span>
            <span>CLASSIC OIL</span>
          </div>

          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#382517] tracking-[0.06em] uppercase my-6"
            style={{ fontFamily: '"Bodoni Moda", "Playfair Display", Georgia, serif' }}
          >
            ИСТОРИЯ БРЕНДА
          </h2>

          <p className="text-xs sm:text-sm tracking-[0.22em] text-[#806345] font-serif uppercase max-w-xl mx-auto">
            ОЧИЩЕНИЕ И ВОССТАНОВЛЕНИЕ КАРТРИДЖЕЙ ЭСДН
          </p>
        </div>

        {/* Chapter Navigation Bar (Explicit clickable buttons) */}
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center sm:justify-center gap-2.5 sm:gap-4 mb-10 sm:mb-16 border-b border-[#806345]/20 pb-4 px-1">
          {BRAND_CHAPTERS.map((chap, idx) => (
            <button
              key={chap.num}
              onClick={() => setActiveChapterIndex(idx)}
              className={`cursor-pointer group flex items-center gap-2 text-xs sm:text-sm tracking-[0.16em] sm:tracking-[0.18em] font-serif uppercase transition-all duration-200 px-4 py-2.5 rounded-sm border shadow-sm ${
                activeChapterIndex === idx
                  ? 'bg-[#57391F] text-[#F5F3E9] border-[#382517] font-semibold'
                  : 'bg-[#DDD8C2]/70 text-[#57391F] border-[#806345]/40 hover:bg-[#DDD8C2] hover:border-[#57391F] hover:text-[#382517]'
              }`}
            >
              <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                activeChapterIndex === idx ? 'bg-[#382517] text-[#DDD8C2]' : 'bg-[#C9C2A7] text-[#57391F]'
              }`}>
                0{idx + 1}
              </span>
              <span>{chap.num.split('/')[1]?.trim() || chap.num}</span>
            </button>
          ))}
        </div>

        {/* Content Layout Spread */}
        <div className="max-w-4xl mx-auto">
          {/* Chapter Subtitle & Metadata */}
          <div className="mb-8 sm:mb-12 text-center sm:text-left">
            <span className="text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-[#806345] font-mono uppercase block mb-1.5">
              {currentChapter.num}
            </span>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#382517] tracking-[0.03em] uppercase mb-3 sm:mb-4"
              style={{ fontFamily: '"Bodoni Moda", serif' }}
            >
              {currentChapter.heading}
            </h3>
            <p className="text-xs sm:text-base text-[#806345] font-serif italic max-w-2xl leading-relaxed">
              {currentChapter.subheading}
            </p>
            <div className="w-20 sm:w-24 h-[1px] bg-[#806345]/30 mt-4 sm:mt-6 mx-auto sm:mx-0"></div>
          </div>

          {/* Main Story Paragraphs */}
          <div className="space-y-5 sm:space-y-6 text-[#57391F] font-serif text-sm sm:text-base md:text-lg leading-[1.8] text-left sm:text-justify bg-[#DDD8C2]/25 p-6 sm:p-8 border border-[#806345]/20">
            {currentChapter.paragraphs.map((para, i) => (
              <p key={i} className={i === 0 ? 'drop-cap' : ''}>
                {para}
              </p>
            ))}
          </div>

          {/* Bottom Quick Navigation Buttons to Next Sections */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#806345]/25 pt-6">
            <a
              href="#collection"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-serif px-5 py-3 border border-[#806345] bg-[#57391F] text-[#F5F3E9] hover:bg-[#382517] transition-colors shadow-sm"
            >
              <span>ПЕРЕЙТИ К ЛИНЕЙКЕ ОЧИСТКИ</span>
              <span>→</span>
            </a>
            <a
              href="#archive"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-serif px-5 py-3 border border-[#806345]/50 bg-transparent text-[#57391F] hover:bg-[#DDD8C2] hover:text-[#382517] transition-colors"
            >
              <span>РАЗДЕЛ ПРОИЗВОДСТВО</span>
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
