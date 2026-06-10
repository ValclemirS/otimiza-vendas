import React from "react";
import { DEPOIMENTOS } from "../../models/data";

const Reviews: React.FC = () => (
  <section className="reviews wrap">
    <div className="reveal center-text">
      <span className="kicker">QUEM JÁ USA</span>
      <h2>Resultados de quem saiu da bagunça</h2>
    </div>
    <div className="reviews-grid">
      {DEPOIMENTOS.map((d, i) => (
        <figure key={i} className="review reveal" style={{ transitionDelay: `${i * 70}ms` }}>
          <div className="stars">★★★★★</div>
          <blockquote>"{d.text}"</blockquote>
          <figcaption>
            <span className="r-author">{d.author}</span>
            <span className="r-role mono">{d.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default Reviews;
