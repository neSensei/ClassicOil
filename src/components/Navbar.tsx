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
    { href: '#collection', id: 'nav-collection', label: 'ВКУСЫ', num: '01' },
    { href: '#brand-story', id: 'nav-brand-story', label: 'О БРЕНДЕ', num: '02' },
    { href: '#archive', id: 'nav-archive', label: 'ПРОИЗВОДСТВО', num: '03' },
    { href: '#inquiries', id: 'nav-inquiries', label: 'ОПТ', num: '04' },
  ];

  return (
    <header className="w-full bg-[#2E1E14] border-b border-[#806345]/50 sticky top-0 z-40 transition-colors duration-300 backdrop-blur-md shadow-md shadow-[#1A100B]/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        
        {/* Brand Left */}
        <a
          href="#hero"
          id="nav-brand-link"
          className="group flex items-center shrink-0 min-w-max no-underline focus:outline-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Wordmark size="nav" inverse={true} />
        </a>

        {/* Desktop Navigation Links (Clear, distinct clickable button tabs) */}
        <nav className="hidden md:flex items-center shrink-0 gap-1.5 lg:gap-2.5 text-xs tracking-[0.16em] lg:tracking-[0.18em] font-serif uppercase">
          {navLinks.map(link => {
            const sectionKey = link.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.id}
                href={link.href}
                id={link.id}
                className={`cursor-pointer inline-flex items-center gap-2 px-3.5 lg:px-4 py-2 rounded-sm border transition-all duration-200 text-xs ${
                  isActive
                    ? 'bg-[#57391F] border-[#E8E5D2] text-[#FFFFFF] font-semibold shadow-inner'
                    : 'bg-[#22150D]/90 border-[#806345]/50 text-[#DDD8C2] hover:bg-[#57391F] hover:text-[#FFFFFF] hover:border-[#E8E5D2]/70'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-[#E8E5D2]' : 'text-[#806345]'}`}>{link.num}</span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop 18+ Badge */}
        <div className="hidden lg:flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#DDD8C2] font-mono border border-[#806345]/60 bg-[#22150D] px-3 py-1">
          <span className="font-bold text-[#F5F3E9]">18+</span>
          <span className="text-[#DDD8C2]/70">ТОЛЬКО ДЛЯ СОВЕРШЕННОЛЕТНИХ</span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-nav-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label="Переключить меню навигации"
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="md:hidden flex items-center gap-2 border border-[#806345]/60 px-3 py-2 text-[10px] tracking-[0.2em] font-serif uppercase text-[#F5F3E9] bg-[#22150D] active:bg-[#1A100B] transition-colors focus:outline-none min-h-[42px]"
        >
          <span>{mobileMenuOpen ? 'ЗАКРЫТЬ' : 'МЕНЮ'}</span>
          <span className="text-xs font-mono">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-t border-[#806345]/40 bg-[#2E1E14] px-5 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center justify-between text-[10px] tracking-[0.25em] text-[#DDD8C2]/60 font-mono uppercase border-b border-[#806345]/30 pb-2 mb-3">
            <span>РЕЕСТР РАЗДЕЛОВ</span>
            <span className="text-[#DDD8C2]/80">CLASSIC OIL</span>
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
                  className={`flex items-center justify-between py-3.5 px-3.5 border transition-colors font-serif uppercase text-xs tracking-[0.2em] min-h-[46px] ${
                    isActive
                      ? 'bg-[#22150D] border-[#806345] text-[#FFFFFF] font-bold'
                      : 'border-transparent text-[#DDD8C2]/80 hover:bg-[#22150D]/60 hover:text-[#FFFFFF]'
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

          <div className="pt-4 border-t border-[#806345]/30 flex items-center justify-between text-[10px] tracking-[0.18em] text-[#DDD8C2]/70 font-mono uppercase">
            <span className="font-bold text-[#F5F3E9]">18+ ТОЛЬКО</span>
            <span>ДЛЯ СОВЕРШЕННОЛЕТНИХ</span>
          </div>
        </div>
      )}
    </header>
  );
};
