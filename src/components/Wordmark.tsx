import React from 'react';

interface WordmarkProps {
  className?: string;
  size?: 'hero' | 'nav' | 'footer' | 'inline';
  subtitle?: boolean;
}

export const Wordmark: React.FC<WordmarkProps> = ({
  className = '',
  size = 'hero',
  subtitle = false
}) => {
  if (size === 'nav') {
    return (
      <div className={`inline-flex flex-col items-start leading-none tracking-normal ${className}`}>
        <span
          className="text-[#57391F] font-bold tracking-[0.14em] font-serif uppercase select-none transition-colors duration-300 hover:text-[#382517]"
          style={{
            fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
            fontSize: '1.25rem',
            letterSpacing: '0.14em',
            textShadow: '0 0.5px 0 rgba(232, 229, 210, 0.6)'
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
          className="text-[#57391F] font-bold tracking-[0.18em] uppercase select-none leading-none font-serif"
          style={{
            fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '0.18em',
            textShadow: '0 1px 0 rgba(232, 229, 210, 0.7)'
          }}
        >
          CLASSIC OIL
        </h2>
        {subtitle && (
          <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3 text-[10px] md:text-xs tracking-[0.22em] text-[#806345] uppercase font-serif">
            <span>ФАРМАКОПЕЙНЫЙ СТАНДАРТ USP / EP</span>
            <span className="text-[#A99A78]">·</span>
            <span>АВТОРСКАЯ ФЛЕЙВОРИСТИКА</span>
            <span className="text-[#A99A78]">·</span>
            <span>МАРКИРОВКА ЧЕСТНЫЙ ЗНАК</span>
          </div>
        )}
      </div>
    );
  }

  // Hero Size - Dominant, tall, condensed Roman high-contrast serif resembling reference image
  return (
    <div className={`relative flex flex-col items-center justify-center text-center select-none ${className}`}>
      <div className="relative inline-block px-2">
        <h1
          id="hero-wordmark"
          className="text-[#57391F] font-bold uppercase tracking-[0.16em] leading-[0.88] whitespace-nowrap transition-all duration-700"
          style={{
            fontFamily: '"Bodoni Moda", "Times New Roman", Georgia, serif',
            fontSize: 'clamp(3.5rem, 11vw, 9.5rem)',
            letterSpacing: '0.15em',
            transform: 'scaleY(1.08)',
            transformOrigin: 'center',
            textShadow: '0 1.5px 0 rgba(232, 229, 210, 0.8), 0 -0.5px 0 rgba(56, 37, 23, 0.2)'
          }}
        >
          CLASSIC OIL
        </h1>
      </div>

      {subtitle && (
        <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-xl">
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs tracking-[0.24em] text-[#806345] font-serif uppercase">
            <span>ЖИДКОСТИ ДЛЯ ОЧИСТКИ КАРТРИДЖЕЙ ЭСДН</span>
            <span className="w-1 h-1 rounded-full bg-[#806345]/50"></span>
            <span>СТАНДАРТ USP / EP</span>
            <span className="w-1 h-1 rounded-full bg-[#806345]/50"></span>
            <span>ЧЕСТНЫЙ ЗНАК</span>
          </div>
          <div className="w-48 sm:w-64 h-[1px] bg-[#806345]/40 mt-1"></div>
        </div>
      )}
    </div>
  );
};
