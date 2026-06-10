import React from "react";
import Window from "../components/Window";
import { PLANILHAS } from "../../models/data";

interface PackProps {
  onImageClick: (images: string[], startIndex: number) => void;
}

const Pack: React.FC<PackProps> = ({ onImageClick }) => (
  <section id="pack" className="pack wrap">
    <div className="reveal center-text">
      <span className="kicker">O QUE VEM NO PACK</span>
      <h2>7 planilhas que trabalham por você</h2>
      <p className="section-lead">
        Cada uma resolve uma parte do seu negócio. Juntas, colocam tudo no lugar.
      </p>
    </div>

    <div className="cards">
      {PLANILHAS.map((p, i) => (
        <article key={p.id} className="card reveal" style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
          <Window
            item={p}
            onImageClick={p.images.length > 0 ? () => onImageClick(p.images, 0) : undefined}
          />
          <div className="card-body">
            <div className="card-top">
              <span className="num mono">{p.id}</span>
              <span className="tag mono">{p.tag}</span>
            </div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Pack;
