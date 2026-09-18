import React from 'react';
import { Product, ArchiveEntry } from '../types';

interface ArchivalModalProps {
  product?: Product | null;
  archiveItem?: ArchiveEntry | null;
  onClose: () => void;
}

export const ArchivalModal: React.FC<ArchivalModalProps> = ({
  product,
  archiveItem,
  onClose
}) => {
  if (!product && !archiveItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-[#382517]/75 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#E8E5D2] border-2 border-[#806345] p-4 sm:p-8 md:p-10 shadow-2xl my-auto max-h-[92vh] overflow-y-auto paper-grain"
        onClick={e => e.stopPropagation()}
      >
        {/* Archival Corner Frame Accents */}
        <div className="absolute top-2 left-2 text-[10px] text-[#806345] font-serif select-none">┌</div>
        <div className="absolute top-2 right-2 text-[10px] text-[#806345] font-serif select-none">┐</div>
        <div className="absolute bottom-2 left-2 text-[10px] text-[#806345] font-serif select-none">└</div>
        <div className="absolute bottom-2 right-2 text-[10px] text-[#806345] font-serif select-none">┘</div>

        {/* Close Button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="cursor-pointer sticky sm:absolute top-0 sm:top-4 right-0 sm:right-4 ml-auto flex items-center gap-1.5 mb-3 sm:mb-0 text-xs tracking-[0.18em] sm:tracking-[0.2em] font-serif uppercase text-[#F5F3E9] hover:bg-[#382517] bg-[#57391F] border border-[#382517] px-4 py-2 shadow transition-all min-h-[42px] z-10 rounded-sm"
        >
          <span>ЗАКРЫТЬ</span>
          <span className="font-bold">✕</span>
        </button>

        {/* If Inspecting a Product */}
        {product && (
          <div>
            {/* Header / Registry Block */}
            <div className="border-b border-[#806345]/30 pb-3 sm:pb-4 mb-5 sm:mb-6">
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-[#806345] font-mono uppercase mb-1">
                <span>{product.plate}</span>
                <span>{product.formulationYear}</span>
              </div>
              <h3
                className="text-xl sm:text-3xl md:text-4xl font-serif text-[#382517] tracking-[0.04em] sm:tracking-[0.05em] uppercase leading-tight"
                style={{ fontFamily: '"Bodoni Moda", serif' }}
              >
                {product.name}
              </h3>
              <p className="text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.24em] text-[#806345] uppercase font-serif mt-1">
                {product.classification}
              </p>
            </div>

            {/* Content Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start mb-6">
              <div className="sm:col-span-5 border border-[#806345]/30 p-2 bg-[#DDD8C2]/40">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover grayscale-[10%]"
                />
                <div className="mt-2 text-center text-[9px] tracking-[0.2em] text-[#806345] font-serif uppercase">
                  {product.vessel}
                </div>
              </div>

              <div className="sm:col-span-7 space-y-4 text-xs sm:text-sm font-serif text-[#57391F] leading-relaxed">
                <p>{product.description}</p>
                <p className="text-[#806345] italic">{product.secondaryText}</p>

                {/* Taste Profile Pyramid */}
                {product.tasteProfile && (
                  <div className="p-3 bg-[#DDD8C2]/40 border border-[#806345]/30 space-y-2">
                    <span className="block text-[10px] tracking-[0.25em] text-[#806345] uppercase font-mono border-b border-[#806345]/20 pb-1">
                      ПИРАМИДА ВКУСА И БАЛАНС
                    </span>
                    <div className="text-xs space-y-1">
                      <div>
                        <span className="text-[#806345] font-mono text-[10px] uppercase block">Верхние ноты (при вдохе):</span>
                        <span className="text-[#382517] font-serif font-medium">{product.tasteProfile.topNotes}</span>
                      </div>
                      <div>
                        <span className="text-[#806345] font-mono text-[10px] uppercase block">Ноты сердца (на выдохе):</span>
                        <span className="text-[#382517] font-serif font-medium">{product.tasteProfile.heartNotes}</span>
                      </div>
                      <div>
                        <span className="text-[#806345] font-mono text-[10px] uppercase block">Базовые ноты и послевкусие:</span>
                        <span className="text-[#382517] font-serif font-medium">{product.tasteProfile.baseNotes}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#806345]/20 text-[10px]">
                      <div>
                        <span className="text-[#806345] block">СЛАДОСТЬ</span>
                        <span className="font-mono text-[#382517] font-bold">{product.tasteProfile.sweetness} / 10</span>
                      </div>
                      <div>
                        <span className="text-[#806345] block">ХОЛОДОК</span>
                        <span className="font-mono text-[#382517] font-bold">{product.tasteProfile.coolness} / 10</span>
                      </div>
                      <div>
                        <span className="text-[#806345] block">НАСЫЩЕННОСТЬ</span>
                        <span className="font-mono text-[#382517] font-bold">{product.tasteProfile.saturation} / 10</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-1">
                  <span className="block text-[10px] tracking-[0.25em] text-[#806345] uppercase font-mono mb-1">
                    ПРИГОТОВЛЕНИЕ И СМЕШИВАНИЕ
                  </span>
                  <p className="text-xs text-[#382517]">{product.extractionMethod}</p>
                </div>

                <div>
                  <span className="block text-[10px] tracking-[0.25em] text-[#806345] uppercase font-mono mb-1">
                    АРХИТЕКТУРА АРОМАТИЧЕСКИХ КОМПОНЕНТОВ
                  </span>
                  <ul className="list-disc list-inside text-xs text-[#57391F] space-y-0.5">
                    {product.botanicalOrigins.map((bot, i) => (
                      <li key={i} className="italic">{bot}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Laboratory Specifications Matrix */}
            <div className="border-t border-[#806345]/30 pt-4 mt-6">
              <span className="block text-[10px] tracking-[0.28em] text-[#806345] uppercase font-serif mb-3">
                ХАРАКТЕРИСТИКИ И СПЕЦИФИКАЦИЯ ФОРМУЛЫ
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-[11px] bg-[#DDD8C2]/30 p-3 border border-[#806345]/20">
                {product.specifications.map((spec, i) => (
                  <div key={i}>
                    <span className="block text-[9px] text-[#806345] uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span className="text-[#382517] font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Archival Authentication Seal */}
            <div className="mt-6 pt-4 border-t border-dashed border-[#806345]/30 flex items-center justify-between text-[10px] text-[#806345] font-serif">
              <span>СЕРИЯ: {product.provenance}</span>
              <span>30 МЛ · ФЛАКОН CHUBBY GORILLA V3 · 18+</span>
            </div>
          </div>
        )}

        {/* If Inspecting an Archive Plate */}
        {archiveItem && (
          <div>
            <div className="border-b border-[#806345]/30 pb-4 mb-6">
              <div className="flex items-center justify-between text-[10px] tracking-[0.3em] text-[#806345] font-mono uppercase mb-1">
                <span>{archiveItem.plateNumber}</span>
                <span>ГОД: {archiveItem.year}</span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-serif text-[#382517] tracking-[0.05em] uppercase"
                style={{ fontFamily: '"Bodoni Moda", serif' }}
              >
                {archiveItem.title}
              </h3>
              <p className="text-xs tracking-[0.22em] text-[#806345] uppercase font-serif mt-1">
                КАТЕГОРИЯ: {archiveItem.category} · {archiveItem.dimension}
              </p>
            </div>

            <div className="space-y-4 text-sm font-serif text-[#57391F] leading-relaxed mb-6">
              <p>{archiveItem.description}</p>
              
              <div className="p-4 bg-[#DDD8C2]/40 border border-[#806345]/30">
                <span className="block text-[10px] tracking-[0.25em] text-[#806345] uppercase font-mono mb-1">
                  КУРАТОРСКАЯ ЗАМЕТКА ПО КОНСЕРВАЦИИ
                </span>
                <p className="text-xs text-[#382517] italic">{archiveItem.notes}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#806345]/30 flex items-center justify-between text-[10px] text-[#806345] font-serif">
              <span>ИНДЕКС: {archiveItem.index}</span>
              <span>АРХИВ ИСТОРИЧЕСКОГО ДЕПОЗИТАРИЯ</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
