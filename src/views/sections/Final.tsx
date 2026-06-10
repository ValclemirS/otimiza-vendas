import React from "react";
import CTA from "../components/CTA";
import { PRICE } from "../../models/data";

const Final: React.FC = () => (
  <section className="final">
    <div className="glow soft" />
    <div className="wrap center-text reveal">
      <span className="kicker">ÚLTIMA CHAMADA</span>
      <h2>
        Comece a controlar seu negócio <span className="lime">hoje</span>.
      </h2>
      <p className="final-lead">
        7 planilhas + 2 e-books grátis por <strong>R$ {PRICE.now}</strong>.
        Acesso imediato e 7 dias de garantia.
      </p>
      <CTA>QUERO MEU PACK AGORA</CTA>
      <p className="cta-sub mono">🎁 Bônus de 2 e-books incluso · oferta por tempo limitado</p>
    </div>
  </section>
);

export default Final;
