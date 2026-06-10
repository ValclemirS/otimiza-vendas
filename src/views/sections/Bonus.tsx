import React from "react";
import Window from "../components/Window";
import { EBOOKS } from "../../models/data";

const Bonus: React.FC = () => (
  <section id="bonus" className="bonus wrap">
    <div className="reveal center-text">
      <span className="kicker lime">BÔNUS EXCLUSIVOS · GRÁTIS</span>
      <h2>E ainda leva 2 e-books de graça</h2>
      <p className="section-lead">
        Comprou o pack, ganhou. Material que vale R$ 134 — por sua conta, zero.
      </p>
    </div>

    <div className="ebooks">
      {EBOOKS.map((e, i) => (
        <article key={i} className="ebook reveal" style={{ transitionDelay: `${i * 80}ms` }}>
          <div className="ebook-cover">
            <Window item={e} ratio="120%" />
            <span className="free-flag mono">GRÁTIS</span>
          </div>
          <div className="ebook-body">
            <span className="value-old mono">De R$ {e.value}</span>
            <h3>{e.name}</h3>
            <span className="ebook-sub">{e.sub}</span>
            <p>{e.desc}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Bonus;
