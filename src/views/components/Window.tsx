import React from "react";

interface WindowProps {
  item: { name: string; images?: string[]; image?: string };
  ratio?: string;
  onImageClick?: () => void;
}

const Window: React.FC<WindowProps> = ({ item, ratio = "95%", onImageClick }) => {
  const firstImage = item.images?.[0] ?? item.image ?? "";
  const hasGallery = (item.images?.length ?? 0) > 1;

  return (
    <div className="win">
      <div className="win-bar">
        <span className="dot" /><span className="dot" /><span className="dot lime-dot" />
        <span className="win-title mono">{item.name}.xlsx</span>
      </div>
      <div className="win-body" style={{ paddingTop: ratio }}>
        {firstImage ? (
          <div className={`win-img-wrap${onImageClick ? " win-img-clickable" : ""}`} onClick={onImageClick}>
            <img src={firstImage} alt={item.name} className="win-img" />
            {hasGallery && (
              <span className="win-gallery-badge mono">+{item.images!.length - 1} fotos</span>
            )}
          </div>
        ) : (
          <div className="slot sheet-grid">
            <div className="slot-inner">
              <div className="slot-icon">▦</div>
              <div className="slot-text">Adicione a imagem<br />da planilha aqui</div>
              <div className="slot-hint mono">campo "images"</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Window;
