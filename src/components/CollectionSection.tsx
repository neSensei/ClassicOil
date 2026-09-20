import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface CollectionSectionProps {
  onSelectProduct: (product: Product) => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({ onSelectProduct }) => {
  return (
    <section id="collection" className="py-14 sm:py-24 md:py-28 bg-[#E8E5D2] border-t border-b border-[#806345]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Masthead */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <span className="text-[10px] sm:text-[10px] tracking-[0.26em] sm:tracking-[0.3em] text-[#806345] uppercase font-serif block">
            СПЕЦИАЛИЗИРОВАННЫЕ СОСТАВЫ · СЕРИЯ CLEANSE
          </span>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#382517] tracking-[0.06em] sm:tracking-[0.08em] mt-3 uppercase leading-tight"
            style={{ fontFamily: '"Bodoni Moda", "Playfair Display", Georgia, serif' }}
          >
            ЖИДКОСТИ ДЛЯ ОЧИСТКИ КАРТРИДЖЕЙ ЭСДН
          </h2>
          <div className="w-16 h-[1px] bg-[#806345]/40 mx-auto mt-4 mb-4"></div>
          <p className="text-xs sm:text-base text-[#57391F]/80 font-serif italic max-w-lg mx-auto leading-relaxed">
            Вкусы на чистой базе 50/50 PG/VG — от сдобной выпечки и молочных коктейлей до табачной классики и свежих цитрусов.
          </p>
        </div>

        {/* Flavor grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 sm:gap-y-16">
          {PRODUCTS.map((product) => (
            <article key={product.id} className="group flex flex-col">
              <button
                type="button"
                onClick={() => onSelectProduct(product)}
                aria-label={`Подробнее: ${product.name}`}
                className="cursor-pointer relative block w-full text-left overflow-hidden border border-[#806345]/30 p-2 sm:p-3 bg-[#E8E5D2] shadow-sm"
              >
                <div className="overflow-hidden aspect-[3/2]">
                  <img
                    src={product.imageSmall}
                    alt={`Classic Oil ${product.name} — ${product.classification.toLowerCase()}`}
                    width={720}
                    height={477}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[12%] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#E8E5D2] bg-[#382517]/85 px-2.5 py-1 font-mono uppercase backdrop-blur-xs">
                  {product.number}
                </div>
              </button>

              <div className="flex flex-col flex-1 pt-5 sm:pt-6">
                <h3
                  className="text-xl sm:text-2xl font-serif text-[#382517] tracking-[0.04em] uppercase mb-2"
                  style={{ fontFamily: '"Bodoni Moda", serif' }}
                >
                  {product.name}
                </h3>

                <p className="text-[11px] tracking-[0.18em] sm:tracking-[0.2em] text-[#806345] font-serif uppercase mb-3 pb-2.5 border-b border-[#806345]/20">
                  {product.classification}
                </p>

                <p className="text-sm text-[#57391F] font-serif leading-relaxed mb-5">
                  {product.description}
                </p>

                <button
                  id={`inspect-${product.id}`}
                  type="button"
                  onClick={() => onSelectProduct(product)}
                  className="cursor-pointer group/btn mt-auto self-start w-full sm:w-auto text-center justify-center inline-flex items-center gap-3 text-xs tracking-[0.18em] sm:tracking-[0.2em] text-[#F5F3E9] uppercase font-serif bg-[#382517] hover:bg-[#57391F] active:bg-[#22150D] border-2 border-[#806345] px-6 py-3 shadow-md hover:shadow-lg transition-all duration-200 min-h-[48px] rounded-sm"
                >
                  <span>ПОДРОБНЕЕ О ВКУСЕ</span>
                  <span className="text-sm font-bold group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
