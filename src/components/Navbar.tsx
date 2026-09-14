import React from 'react';
import { Wordmark } from './Wordmark';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  return (
    <header className="w-full bg-[#E8E5D2]/95 border-b border-[#806345]/30 sticky top-0 z-40 transition-colors duration-300 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Left */}
        <a
          href="#hero"
          id="nav-brand-link"
          className="group flex items-center gap-3 no-underline focus:outline-none"
        >
          <Wordmark size="nav" />
          <span className="hidden sm:inline-block text-[9px] tracking-[0.24em] text-[#806345] uppercase font-serif border-l border-[#806345]/30 pl-3">
            ОЧИСТКА КАРТРИДЖЕЙ ЭСДН
          </span>
        </a>

        {/* Archival Navigation Links */}
        <nav className="flex items-center gap-4 sm:gap-7 md:gap-9 text-[11px] sm:text-xs tracking-[0.2em] font-serif uppercase text-[#57391F]">
          <a
            href="#collection"
            id="nav-collection"
            className={`transition-all duration-200 relative pb-1 ${
              activeSection === 'collection'
                ? 'text-[#382517] font-semibold border-b border-[#57391F]'
                : 'text-[#806345] hover:text-[#382517] hover:border-b hover:border-[#806345]/60'
            }`}
          >
            ВКУСЫ И ЛИНЕЙКИ
          </a>

          <a
            href="#brand-story"
            id="nav-brand-story"
            className={`transition-all duration-200 relative pb-1 ${
              activeSection === 'brand-story'
                ? 'text-[#382517] font-semibold border-b border-[#57391F]'
                : 'text-[#806345] hover:text-[#382517] hover:border-b hover:border-[#806345]/60'
            }`}
          >
            О БРЕНДЕ
          </a>

          <a
            href="#archive"
            id="nav-archive"
            className={`transition-all duration-200 relative pb-1 ${
              activeSection === 'archive'
                ? 'text-[#382517] font-semibold border-b border-[#57391F]'
                : 'text-[#806345] hover:text-[#382517] hover:border-b hover:border-[#806345]/60'
            }`}
          >
            ПРОИЗВОДСТВО
          </a>

          <a
            href="#inquiries"
            id="nav-inquiries"
            className={`transition-all duration-200 relative pb-1 ${
              activeSection === 'inquiries'
                ? 'text-[#382517] font-semibold border-b border-[#57391F]'
                : 'text-[#806345] hover:text-[#382517] hover:border-b hover:border-[#806345]/60'
            }`}
          >
            СОТРУДНИЧЕСТВО
          </a>
        </nav>

        {/* 18+ Verification & Registry Code on Desktop */}
        <div className="hidden lg:flex items-center gap-2 text-[9px] tracking-[0.22em] text-[#806345] font-mono border border-[#806345]/30 px-2.5 py-1">
          <span className="font-bold text-[#57391F] border-r border-[#806345]/30 pr-2">18+</span>
          <span>ЧЕСТНЫЙ ЗНАК / ГОСТ</span>
        </div>

      </div>
    </header>
  );
};
