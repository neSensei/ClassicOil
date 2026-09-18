import React from 'react';

interface WordmarkProps {
  className?: string;
  size?: 'hero' | 'nav' | 'footer' | 'inline';
  subtitle?: boolean;
  inverse?: boolean;
}

export const Wordmark: React.FC<WordmarkProps> = ({
  className = '',
  size = 'hero',
  subtitle = false,
  inverse = false,
}) => {
  if (size === 'nav') {
    return (
      <div className={`inline-flex flex-col items-start leading-[1.15] tracking-normal whitespace-nowrap shrink-0 py-0.5 ${className}`}>
        <span
          className={`font-bold tracking-[0.12em] font-serif uppercase select-none transition-colors duration-300 ${
            inverse
              ? 'text-[#F5F3E9] hover:text-[#FFFFFF]'
              : 'text-[#57391F] hover:text-[#382517]'
          }`}
          style={{
            fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
            fontSize: 'clamp(1.15rem, 4vw, 1.35rem)',
            letterSpacing: '0.14em',
            textShadow: inverse
              ? '0 1px 2px rgba(0, 0, 0, 0.5)'
              : '0 0.5px 0 rgba(232, 229, 210, 0.6)'
          }}
        >
          CLASSIC OIL
        </span>
      </div>
    );
  }

  if (size === 'footer') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <h2
          className="text-[#57391F] font-bold uppercase select-none leading-none font-serif"
          style={{
            fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
            fontSize: 'clamp(1.9rem, 6vw, 5rem)',
            letterSpacing: 'clamp(0.1em, 2.5vw, 0.18em)',
            textShadow: '0 1px 0 rgba(232, 229, 210, 0.7)'
          }}
        >
          CLASSIC OIL
        </h2>
        {subtitle && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] md:text-xs tracking-[0.2em] text-[#806345] uppercase font-serif">
            <span>ФАРМАКОПЕЙНЫЙ СТАНДАРТ USP / EP</span>
            <span className="text-[#A99A78]">·</span>
            <span>АВТОРСКАЯ ФЛЕЙВОРИСТИКА</span>
          </div>
        )}
      </div>
    );
  }

  // Hero Size - Dominant, tall, condensed Roman high-contrast serif resembling reference label
  return (
    <div className={`relative left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-center select-none w-screen max-w-none ${className}`}>
      <div className="relative inline-block px-1 sm:px-2 max-w-full overflow-visible">
        <h1
          id="hero-wordmark"
          className={`font-bold uppercase leading-[1] whitespace-nowrap transition-all duration-700 ${
            inverse ? 'text-[#F5F3E9]' : 'text-[#57391F]'
          }`}
          style={{
  fontFamily: '"Bodoni Moda", "Times New Roman", Georgia, serif',
  fontSize: 'clamp(2.1rem, 8vw, 9.2rem)',
  letterSpacing: 'clamp(0.04em, 1.2vw, 0.15em)',
  transform: 'scaleY(1.06)',
  transformOrigin: 'center',
  textShadow: inverse
    ? '0 3px 16px rgba(10, 6, 4, 0.85), 0 1px 0 rgba(255, 255, 255, 0.35), 0 0 24px rgba(221, 216, 194, 0.2)'
    : '0 1.5px 0 rgba(232, 229, 210, 0.8), 0 -0.5px 0 rgba(56, 37, 23, 0.2)'
}}
        >
          CLASSIC OIL
        </h1>
      </div>

      {subtitle && (
        <div className="mt-6 sm:mt-8 flex flex-col items-center gap-3 w-full max-w-xl px-4">
          <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs tracking-[0.22em] uppercase font-serif ${
            inverse ? 'text-[#DDD8C2]' : 'text-[#806345]'
          }`}>
            <span>ЖИДКОСТИ ДЛЯ ОЧИСТКИ КАРТРИДЖЕЙ ЭСДН</span>
            <span className={`w-1 h-1 rounded-full ${inverse ? 'bg-[#DDD8C2]/60' : 'bg-[#806345]/50'}`}></span>
            <span>СТАНДАРТ USP / EP</span>
          </div>
          <div className="w-36 sm:w-64 h-[1px] bg-[#806345]/40 mt-1"></div>
        </div>
      )}
    </div>
  );
};
