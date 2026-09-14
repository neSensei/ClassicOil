import React, { useState, useEffect } from 'react';
import { Wordmark } from './Wordmark';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Esc key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { href: '#collection', id: 'nav-collection', label: 'ВКУСЫ И ЛИНЕЙКИ', num: '01' },
    { href: '#brand-story', id: 'nav-brand-story', label: 'О БРЕНДЕ', num: '02' },
    { href: '#archive', id: 'nav-archive', label: 'ПРОИЗВОДСТВО', num: '03' },
    { href: '#inquiries', id: 'nav-inquiries', label: 'СОТРУДНИЧЕСТВО', num: '04' },
  ];

  return (
    <header className="w-full bg-[#E8E5D2]/95 border-b border-[#806345]/30 sticky top-0 z-40 transition-colors duration-300 backdrop-blur-[4px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        
        {/* Brand Left */}
        <a
          href="#hero"
          id="nav-brand-link"
          className="group flex items-center gap-2.5 sm:gap-3 no-underline focus:outline-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Wordmark size="nav" />
          <span className="hidden sm:inline-block text-[9px] tracking-[0.22em] text-[#806345] uppercase font-serif border-l border-[#806345]/30 pl-3">
            ОЧИСТКА КАРТРИДЖЕЙ ЭСДН
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs tracking-[0.2em] font-serif uppercase text-[#57391F]">
          {navLinks.map(link => {
            const sectionKey = link.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.id}
                href={link.href}
                id={link.id}
                className={`transition-all duration-200 relative pb-1 ${
                  isActive
                    ? 'text-[#382517] font-semibold border-b border-[#57391F]'
                    : 'text-[#806345] hover:text-[#382517] hover:border-b hover:border-[#806345]/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop 18+ & GOST */}
        <div className="hidden lg:flex items-center gap-2 text-[9px] tracking-[0.22em] text-[#806345] font-mono border border-[#806345]/30 px-2.5 py-1">
          <span className="font-bold text-[#57391F] border-r border-[#806345]/30 pr-2">18+</span>
          <span>ЧЕСТНЫЙ ЗНАК / ГОСТ</span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-nav-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label="Переключить меню навигации"
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="md:hidden flex items-center gap-2 border border-[#806345]/40 px-3 py-2 text-[10px] tracking-[0.2em] font-serif uppercase text-[#382517] bg-[#DDD8C2]/40 active:bg-[#DDD8C2] transition-colors focus:outline-none min-h-[42px]"
        >
          <span>{mobileMenuOpen ? 'ЗАКРЫТЬ' : 'МЕНЮ'}</span>
          <span className="text-xs font-mono">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-t border-[#806345]/30 bg-[#E8E5D2] px-5 py-6 space-y-4 shadow-xl paper-grain animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center justify-between text-[9px] tracking-[0.25em] text-[#806345] font-mono uppercase border-b border-[#806345]/20 pb-2 mb-3">
            <span>РЕЕСТР РАЗДЕЛОВ</span>
            <span>№ 024-LAB</span>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map(link => {
              const sectionKey = link.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3.5 px-3 border border-transparent transition-colors font-serif uppercase text-xs tracking-[0.2em] min-h-[46px] ${
                    isActive
                      ? 'bg-[#DDD8C2]/60 border-[#806345]/40 text-[#382517] font-bold'
                      : 'text-[#57391F] hover:bg-[#DDD8C2]/40 hover:text-[#382517]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#806345]">{link.num}.</span>
                    <span>{link.label}</span>
                  </div>
                  <span className="text-[#806345] font-mono text-xs">→</span>
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#806345]/25 flex items-center justify-between text-[9px] tracking-[0.18em] text-[#806345] font-mono uppercase">
            <span className="font-bold text-[#382517]">18+ · ГОСТ Р 58109-2018</span>
            <span>ЧЕСТНЫЙ ЗНАК</span>
          </div>
        </div>
      )}
    </header>
  );
};
