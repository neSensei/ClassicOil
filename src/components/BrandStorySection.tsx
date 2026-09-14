import React, { useState } from 'react';
import { BRAND_CHAPTERS } from '../data/archive';

export const BrandStorySection: React.FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const currentChapter = BRAND_CHAPTERS[activeChapterIndex];

  return (
    <section id="brand-story" className="py-24 sm:py-32 bg-[#E8E5D2] relative paper-grain border-b border-[#806345]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Editorial Masthead for the Brand Manifesto */}
        <div className="border-b border-t border-[#806345]/30 py-6 mb-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between text-[9px] sm:text-[10px] tracking-[0.25em] text-[#806345] uppercase font-serif pb-3 border-b border-[#806345]/15 gap-2">
            <span>ФОРМИРОВАНИЕ СТАНДАРТА · РЕЕСТР ГЛАВ</span>
            <span>ОФИЦИАЛЬНАЯ ЛЕТОПИСЬ И МАНИФЕСТ</span>
            <span>МОЛОДАЯ НЕЗАВИСИМАЯ ЛАБОРАТОРИЯ ВКУСА</span>
          </div>

          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#382517] tracking-[0.06em] uppercase my-6"
            style={{ fontFamily: '"Bodoni Moda", "Playfair Display", Georgia, serif' }}
          >
            ИСТОРИЯ БРЕНДА
          </h2>

          <p className="text-xs sm:text-sm tracking-[0.22em] text-[#806345] font-serif uppercase max-w-xl mx-auto">
            МАНИФЕСТ О ЧЕСТНОЙ ФЛЕЙВОРИСТИКЕ, ФАРМАКОПЕЙНОЙ ЧИСТОТЕ И КУЛЬТУРЕ ВКУСА
          </p>
        </div>

        {/* Chapter Navigation Bar (Editorial tabs resembling index tabs in a book) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-16 border-b border-[#806345]/20 pb-4">
          {BRAND_CHAPTERS.map((chap, idx) => (
            <button
              key={chap.num}
              onClick={() => setActiveChapterIndex(idx)}
              className={`text-xs sm:text-sm tracking-[0.2em] font-serif uppercase transition-all duration-200 pb-2 relative ${
                activeChapterIndex === idx
                  ? 'text-[#382517] font-semibold border-b-2 border-[#57391F]'
                  : 'text-[#806345] hover:text-[#57391F]'
              }`}
            >
              <span className="font-mono text-[10px] mr-2 text-[#806345]">0{idx + 1}</span>
              {chap.num.split('/')[1]?.trim() || chap.num}
            </button>
          ))}
        </div>

        {/* Magazine-style Layout Spread */}
        <div className="max-w-5xl mx-auto">
          {/* Chapter Subtitle & Metadata */}
          <div className="mb-12">
            <span className="text-xs tracking-[0.3em] text-[#806345] font-mono uppercase block mb-2">
              {currentChapter.num}
            </span>
            <h3
              className="text-2xl sm:text-4xl font-serif text-[#382517] tracking-[0.03em] uppercase mb-4"
              style={{ fontFamily: '"Bodoni Moda", serif' }}
            >
              {currentChapter.heading}
            </h3>
            <p className="text-sm sm:text-base text-[#806345] font-serif italic max-w-2xl">
              {currentChapter.subheading}
            </p>
            <div className="w-24 h-[1px] bg-[#806345]/30 mt-6"></div>
          </div>

          {/* Narrow Magazine Columns with Drop Cap & Pull Quote */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Main Long Columns (Old Newspaper / Journal Composition) */}
            <div className="md:col-span-8 space-y-6 text-[#57391F] font-serif text-base sm:text-lg leading-[1.8] text-justify">
              {currentChapter.paragraphs.map((para, i) => (
                <p key={i} className={i === 0 ? 'drop-cap' : ''}>
                  {para}
                </p>
              ))}

              {/* Archival Footnote Annotation */}
              <div className="pt-6 mt-8 border-t border-[#806345]/20 text-[11px] text-[#806345] font-mono leading-normal flex items-center justify-between">
                <span>{currentChapter.marginalia}</span>
                <span>ЛАБОРАТОРНЫЙ РЕГЛАМЕНТ CLASSIC OIL</span>
              </div>
            </div>

            {/* Editorial Sidebar with Pulled Quote & Seal Motif */}
            <div className="md:col-span-4 border-l border-[#806345]/20 md:pl-8 space-y-8">
              {currentChapter.quote && (
                <blockquote className="border-t border-b border-[#806345]/30 py-6 my-2">
                  <p className="text-base sm:text-lg font-serif italic text-[#382517] leading-relaxed">
                    {currentChapter.quote}
                  </p>
                  <cite className="block text-[9px] tracking-[0.25em] text-[#806345] uppercase font-serif mt-3 not-italic">
                    — МАНИФЕСТ ОСНОВАТЕЛЕЙ БРЕНДА
                  </cite>
                </blockquote>
              )}

              {/* Vintage Seal Motif Box */}
              <div className="border border-[#806345]/30 p-6 bg-[#DDD8C2]/30 text-center font-serif">
                <div className="w-12 h-12 border border-[#806345] rounded-full mx-auto flex items-center justify-center text-[#57391F] font-serif text-sm mb-3">
                  CO
                </div>
                <div className="text-[10px] tracking-[0.24em] text-[#57391F] uppercase font-semibold">
                  ЛАБОРАТОРИЯ CLASSIC OIL
                </div>
                <div className="text-[9px] text-[#806345] tracking-[0.18em] uppercase mt-1">
                  СТАНДАРТ ЧИСТОТЫ USP / EP
                </div>
                <p className="text-[11px] text-[#57391F]/80 italic mt-3 font-serif">
                  "Создано вейп-энтузиастами и технологами для тех, кто ценит чистый и сложный вкус."
                </p>
              </div>

              {/* Marginalia Note */}
              <div className="text-xs text-[#806345] font-serif italic leading-relaxed">
                Примечание: Мы контролируем каждый этап — от чистоты входящего сырья DOW и Glaconchemie до розлива в чистых зонах ISO 7 и маркировки «Честный Знак».
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
