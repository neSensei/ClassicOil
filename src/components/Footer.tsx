import React from 'react';
import { Wordmark } from './Wordmark';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#E8E5D2] border-t border-[#806345]/30 py-12 sm:py-20 px-3 sm:px-8 paper-grain relative">
      <div className="max-w-4xl mx-auto border border-[#806345]/40 p-5 sm:p-10 md:p-14 bg-[#E8E5D2] relative">
        
        {/* Archival Label Corner Notches */}
        <div className="absolute top-2 left-2 text-[10px] text-[#806345] font-serif select-none">┌</div>
        <div className="absolute top-2 right-2 text-[10px] text-[#806345] font-serif select-none">┐</div>
        <div className="absolute bottom-2 left-2 text-[10px] text-[#806345] font-serif select-none">└</div>
        <div className="absolute bottom-2 right-2 text-[10px] text-[#806345] font-serif select-none">┘</div>

        {/* Top Fine Border Label Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#806345]/25 pb-3 sm:pb-4 mb-6 sm:mb-8 text-[10px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#806345] font-serif uppercase text-center gap-1.5">
          <span>ИНФОРМАЦИОННАЯ ЭТИКЕТКА</span>
          <span className="hidden sm:inline">ФОРМУЛА 50 PG / 50 VG · 30 МЛ</span>
          <span>18+ СОВЕРШЕННОЛЕТНИМ</span>
        </div>

        {/* Center Large Wordmark */}
        <div className="py-4 sm:py-6">
          <Wordmark size="footer" subtitle={true} />
        </div>

        {/* Thin Ornamental Rule */}
        <div className="w-24 sm:w-32 h-[1px] bg-[#806345]/40 mx-auto my-6 sm:my-8"></div>

        {/* Extremely Small Editorial Text (Reverse Label Prose) */}
        <div className="max-w-xl mx-auto text-center space-y-3 text-[10px] sm:text-[11px] font-serif text-[#57391F]/80 leading-relaxed px-1">
          <p>
            CLASSIC OIL — бренд специализированных жидкостей для ухода и очистки картриджей ЭСДН и испарительных элементов POD-систем. Сбалансированный состав на основе очищенного пропиленгликоля и глицерина мягко растворяет остаточный нагар, не повреждая фитиль, и сохраняет чистоту вкусопередачи.
          </p>
          <p className="text-[10px] sm:text-[10px] tracking-wider text-[#806345] uppercase font-serif">
            НАЗНАЧЕНИЕ: ОЧИСТКА КАРТРИДЖЕЙ ЭСДН · ФЛАКОН CHUBBY GORILLA V3
          </p>
          <p className="text-[10px] sm:text-[10px] tracking-[0.18em] text-[#806345] uppercase font-mono">
            РОССИЙСКАЯ ФЕДЕРАЦИЯ · CLASSIC OIL
          </p>
        </div>

        {/* Back to Top Action */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#806345]/25 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[10px] tracking-[0.2em] text-[#806345] font-serif uppercase gap-3 text-center">
          <span>© 2024 CLASSIC OIL · ПРЕЗЕНТАЦИЯ ПРОДУКЦИИ · 18+</span>
          <button
            onClick={scrollToTop}
            className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#806345] bg-[#DDD8C2]/60 text-[#382517] hover:bg-[#57391F] hover:text-[#F5F3E9] transition-all rounded-sm min-h-[36px]"
          >
            <span>В НАЧАЛО СТРАНИЦЫ</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
