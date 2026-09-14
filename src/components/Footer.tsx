import React from 'react';
import { Wordmark } from './Wordmark';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="parchment-secondary border-t border-[#806345]/30 py-12 sm:py-20 px-3 sm:px-8 paper-grain relative">
      <div className="max-w-4xl mx-auto border border-[#806345]/40 p-5 sm:p-10 md:p-14 bg-[#E8E5D2] relative">
        
        {/* Archival Label Corner Notches */}
        <div className="absolute top-2 left-2 text-[9px] text-[#806345] font-serif select-none">┌</div>
        <div className="absolute top-2 right-2 text-[9px] text-[#806345] font-serif select-none">┐</div>
        <div className="absolute bottom-2 left-2 text-[9px] text-[#806345] font-serif select-none">└</div>
        <div className="absolute bottom-2 right-2 text-[9px] text-[#806345] font-serif select-none">┘</div>

        {/* Top Fine Border Label Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#806345]/25 pb-3 sm:pb-4 mb-6 sm:mb-8 text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] text-[#806345] font-serif uppercase text-center gap-1.5">
          <span>КОНТРЭТИКЕТКА СО СПЕЦИФИКАЦИЕЙ</span>
          <span className="hidden sm:inline">ГОСТ Р 58109-2018 · ЧЕСТНЫЙ ЗНАК</span>
          <span>18+ СОВЕРШЕННОЛЕТНИМ</span>
        </div>

        {/* Center Large Wordmark */}
        <div className="py-4 sm:py-6">
          <Wordmark size="footer" subtitle={true} />
        </div>

        {/* Thin Ornamental Rule */}
        <div className="w-24 sm:w-32 h-[1px] bg-[#806345]/40 mx-auto my-6 sm:my-8"></div>

        {/* Extremely Small Editorial Text (Reverse Label Prose) */}
        <div className="max-w-xl mx-auto text-center space-y-3 text-[9.5px] sm:text-[11px] font-serif text-[#57391F]/80 leading-relaxed px-1">
          <p>
            CLASSIC OIL — официальный российский бренд специализированных жидкостей для очистки картриджей ЭСДН и испарительных элементов POD-систем. Изготавливается в сертифицированных чистых помещениях класса ISO 7 на базе фармакопейного сырья USP/EP (Glaconchemie, Германия; DOW, США). Формула эффективно удаляет углеродистый нагар, не содержит агрессивных кислот и продлевает ресурс картриджей ЭСДН.
          </p>
          <p className="text-[9px] sm:text-[10px] tracking-wider text-[#806345] uppercase font-serif">
            НАЗНАЧЕНИЕ: ОЧИСТКА КАРТРИДЖЕЙ ЭСДН · СЕРТИФИЦИРОВАНО ПО ГОСТ Р 58109-2018
          </p>
          <p className="text-[8.5px] sm:text-[9px] tracking-[0.18em] text-[#806345] uppercase font-mono">
            РОССИЙСКАЯ ФЕДЕРАЦИЯ · ЛАБОРАТОРИЯ CLASSIC OIL LAB
          </p>
        </div>

        {/* Back to Top Restrained Action */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#806345]/25 flex flex-col sm:flex-row items-center justify-between text-[8.5px] sm:text-[9px] tracking-[0.2em] text-[#806345] font-serif uppercase gap-3 text-center">
          <span>© 2024 CLASSIC OIL LAB · ПРЕЗЕНТАЦИЯ БРЕНДА · 18+</span>
          <button
            onClick={scrollToTop}
            className="hover:text-[#382517] transition-colors border-b border-transparent hover:border-[#57391F] py-1 min-h-[36px] flex items-center"
          >
            В НАЧАЛО СТРАНИЦЫ ↑
          </button>
        </div>

      </div>
    </footer>
  );
};
