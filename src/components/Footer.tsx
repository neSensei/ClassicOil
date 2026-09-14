import React from 'react';
import { Wordmark } from './Wordmark';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#DDD8C2]/60 border-t border-[#806345]/30 py-16 sm:py-24 px-4 sm:px-8 paper-grain relative">
      <div className="max-w-4xl mx-auto border border-[#806345]/40 p-8 sm:p-14 bg-[#E8E5D2] relative">
        
        {/* Archival Label Corner Notches */}
        <div className="absolute top-2 left-2 text-[9px] text-[#806345] font-serif select-none">┌</div>
        <div className="absolute top-2 right-2 text-[9px] text-[#806345] font-serif select-none">┐</div>
        <div className="absolute bottom-2 left-2 text-[9px] text-[#806345] font-serif select-none">└</div>
        <div className="absolute bottom-2 right-2 text-[9px] text-[#806345] font-serif select-none">┘</div>

        {/* Top Fine Border Label Header */}
        <div className="flex items-center justify-between border-b border-[#806345]/25 pb-4 mb-8 text-[8px] sm:text-[9px] tracking-[0.25em] text-[#806345] font-serif uppercase">
          <span>КОНТРЭТИКЕТКА СО СПЕЦИФИКАЦИЕЙ</span>
          <span>ГОСТ Р 58109-2018 · ЧЕСТНЫЙ ЗНАК</span>
          <span>ТОЛЬКО ДЛЯ СОВЕРШЕННОЛЕТНИХ · 18+</span>
        </div>

        {/* Center Large Wordmark */}
        <div className="py-6">
          <Wordmark size="footer" subtitle={true} />
        </div>

        {/* Thin Ornamental Rule */}
        <div className="w-32 h-[1px] bg-[#806345]/40 mx-auto my-8"></div>

        {/* Extremely Small Editorial Text (Reverse Label Prose) */}
        <div className="max-w-xl mx-auto text-center space-y-3 text-[10px] sm:text-[11px] font-serif text-[#57391F]/80 leading-relaxed">
          <p>
            CLASSIC OIL — официальный российский бренд специализированных жидкостей для очистки картриджей ЭСДН и испарительных элементов POD-систем. Изготавливается в сертифицированных чистых помещениях класса ISO 7 на базе фармакопейного сырья USP/EP (Glaconchemie, Германия; DOW, США). Формула эффективно удаляет углеродистый нагар, не содержит агрессивных кислот и продлевает ресурс картриджей ЭСДН.
          </p>
          <p className="text-[10px] tracking-wider text-[#806345] uppercase font-serif">
            НАЗНАЧЕНИЕ: ОЧИСТКА КАРТРИДЖЕЙ ЭСДН · СЕРТИФИЦИРОВАНО ПО ГОСТ Р 58109-2018
          </p>
          <p className="text-[9px] tracking-[0.2em] text-[#806345] uppercase font-mono">
            РОССИЙСКАЯ ФЕДЕРАЦИЯ · ЛАБОРАТОРИЯ CLASSIC OIL LAB
          </p>
        </div>

        {/* Back to Top Restrained Action */}
        <div className="mt-10 pt-6 border-t border-[#806345]/25 flex flex-col sm:flex-row items-center justify-between text-[9px] tracking-[0.22em] text-[#806345] font-serif uppercase gap-4">
          <span>© 2024 CLASSIC OIL LAB · ОФИЦИАЛЬНАЯ ПРЕЗЕНТАЦИЯ БРЕНДА · 18+</span>
          <button
            onClick={scrollToTop}
            className="hover:text-[#382517] transition-colors border-b border-transparent hover:border-[#57391F]"
          >
            В НАЧАЛО СТРАНИЦЫ ↑
          </button>
        </div>

      </div>
    </footer>
  );
};
