import React, { useState } from 'react';
import { ARCHIVE_ENTRIES } from '../data/archive';
import { ArchiveEntry } from '../types';

interface ArchiveSectionProps {
  onSelectArchiveItem: (entry: ArchiveEntry) => void;
}

export const ArchiveSection: React.FC<ArchiveSectionProps> = ({ onSelectArchiveItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  const categories = ['Все', 'Чистая зона', 'Сырьё USP/EP', 'Флейвористика', 'Контроль GC/MS', 'Честный Знак', 'Флакон и дозатор'];

  const filteredEntries = selectedCategory === 'Все'
    ? ARCHIVE_ENTRIES
    : ARCHIVE_ENTRIES.filter(e => e.category === selectedCategory);

  return (
    <section id="archive" className="py-14 sm:py-24 md:py-32 bg-[#E8E5D2] border-b border-[#806345]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#806345]/30 pb-6 sm:pb-8 mb-8 sm:mb-12">
          <div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-[#806345] uppercase font-serif mb-2">
              ТЕХНОЛОГИЧЕСКИЙ РЕГЛАМЕНТ · ЛАБОРАТОРНЫЙ СТАНДАРТ
            </div>
            <h2
              className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#382517] tracking-[0.06em] uppercase"
              style={{ fontFamily: '"Bodoni Moda", "Playfair Display", Georgia, serif' }}
            >
              ПРОИЗВОДСТВО
            </h2>
          </div>

          <div className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm text-[#57391F]/80 font-serif italic leading-relaxed">
            Чистые помещения класса ISO 7, сырьё фармакопейной чистоты USP/EP, газохроматографический скрининг и государственная маркировка «Честный Знак».
          </div>
        </div>

        {/* Category Filters (Mobile-friendly horizontal scroll) */}
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12 pb-2">
          <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] text-[#806345] uppercase font-mono mr-2 whitespace-nowrap">
            РАЗДЕЛЫ СТАНДАРТА:
          </span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap text-xs tracking-[0.14em] sm:tracking-[0.16em] font-serif uppercase px-3 sm:px-3.5 py-1.5 sm:py-1 transition-all min-h-[38px] flex items-center ${
                selectedCategory === cat
                  ? 'bg-[#57391F] text-[#E8E5D2]'
                  : 'bg-[#E8E5D2]/60 text-[#806345] border border-[#806345]/30 hover:border-[#57391F] hover:text-[#382517]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredEntries.map((entry, idx) => {
            // Asymmetric layout logic for masonry feel
            const isSpanned = idx === 0 || idx === 3;

            return (
              <div
                key={entry.id}
                onClick={() => onSelectArchiveItem(entry)}
                className={`group cursor-pointer border border-[#806345]/30 p-5 bg-[#E8E5D2] hover:border-[#57391F] transition-all duration-300 flex flex-col justify-between ${
                  isSpanned ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  {/* Plate Header */}
                  <div className="flex items-center justify-between border-b border-[#806345]/20 pb-2 mb-4 text-[9px] tracking-[0.25em] text-[#806345] font-mono uppercase">
                    <span>{entry.plateNumber}</span>
                    <span>{entry.year}</span>
                  </div>

                  <div className="text-[10px] tracking-[0.24em] text-[#806345] font-serif uppercase mb-1">
                    {entry.index} · {entry.category}
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-serif text-[#382517] tracking-[0.03em] uppercase mb-3 group-hover:text-[#57391F] transition-colors"
                    style={{ fontFamily: '"Bodoni Moda", serif' }}
                  >
                    {entry.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#57391F] font-serif leading-relaxed mb-4">
                    {entry.description}
                  </p>
                </div>

                {/* Plate Footer Metadata */}
                <div className="pt-4 border-t border-[#806345]/20 mt-4 flex items-center justify-between text-[10px] font-serif text-[#806345]">
                  <span className="italic">{entry.dimension}</span>
                  <span className="tracking-[0.16em] uppercase group-hover:translate-x-1 transition-transform">
                    ИЗУЧИТЬ ЛИСТ →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Archival Note Banner */}
        <div className="mt-16 border-t border-b border-[#806345]/25 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#806345] font-serif gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#806345]"></span>
            <span className="tracking-[0.15em] uppercase">ЛАБОРАТОРНЫЙ КОМПЛЕКС И КОНТРОЛЬ КАЧЕСТВА</span>
          </div>
          <span className="italic text-center sm:text-right">
            Вся продукция декларирована по стандарту ГОСТ Р 58109-2018 и оснащена цифровым криптографическим кодом DataMatrix («Честный Знак»).
          </span>
        </div>

      </div>
    </section>
  );
};
