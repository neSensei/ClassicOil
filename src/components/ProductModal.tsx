import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Product } from '../types';

interface Props { product: Product | null; onClose: () => void; }

export const ProductModal: React.FC<Props> = ({ product, onClose }) => {
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`Classic Oil ${product.name}`} onMouseDown={(e) => { if (e.currentTarget === e.target) onClose(); }}>
      <div className="product-modal">
        <button className="product-modal__close" onClick={onClose} aria-label="Закрыть"><X size={20} /></button>
        <div className="product-modal__image"><img src={product.image} alt="" /></div>
        <div className="product-modal__content">
          <span className="eyebrow">{product.number} / {product.tagline}</span>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="product-modal__notes">
            {product.notes.map(note => <span key={note}>{note}</span>)}
          </div>
          <div className="product-modal__details">
            {product.details.map(item => <div key={item.label}><small>{item.label}</small><strong>{item.value}</strong></div>)}
          </div>
        </div>
      </div>
    </div>
  );
};
