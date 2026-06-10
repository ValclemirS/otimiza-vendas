import React from "react";

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (i: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, index, onClose, onNext, onPrev, onGoTo }) => {
  const hasManyImages = images.length > 1;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Fechar">✕</button>

      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        {hasManyImages && (
          <button className="lightbox-nav lightbox-prev" onClick={onPrev} aria-label="Anterior">‹</button>
        )}

        <img
          key={index}
          src={images[index]}
          alt={`Imagem ${index + 1}`}
          className="lightbox-img"
        />

        {hasManyImages && (
          <button className="lightbox-nav lightbox-next" onClick={onNext} aria-label="Próxima">›</button>
        )}
      </div>

      {hasManyImages && (
        <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
          {images.map((src, i) => (
            <button
              key={i}
              className={`lightbox-thumb${i === index ? " active" : ""}`}
              onClick={() => onGoTo(i)}
              aria-label={`Imagem ${i + 1}`}
            >
              <img src={src} alt={`Miniatura ${i + 1}`} />
            </button>
          ))}
        </div>
      )}

      {hasManyImages && (
        <div className="lightbox-counter">{index + 1} / {images.length}</div>
      )}
    </div>
  );
};

export default Lightbox;
