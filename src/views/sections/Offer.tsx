import React from "react";
import CTA from "../components/CTA";
import { PRICE, VALOR_STACK } from "../../models/data";

const Offer: React.FC = () => (
  <section id="oferta" className="offer">
    <div className="glow soft" />
    <div className="wrap offer-grid">
      <div className="offer-list reveal">
        <span className="kicker">TUDO QUE VOCÊ RECEBE</span>
        <h2>Pacote completo otimiza<span className="mono lime">++</span></h2>
        <ul className="stack">
          {VALOR_STACK.map((s, i) => (
            <li key={i}>
              <span className="check">✓</span>
              <span className="stk-label">
                {s.label}
                {s.bonus && <em className="bonus-pill mono">BÔNUS</em>}
              </span>
              <span className={`stk-val mono ${s.incluso ? "free" : ""}`}>
                {s.incluso ? "Incluso" : `R$ ${s.value}`}
              </span>
            </li>
          ))}
        </ul>
        <div className="total mono">
          Valor total: <s>R$ {PRICE.total}</s>
        </div>
      </div>

      <div className="price-card reveal" style={{ transitionDelay: "80ms" }}>
        <span className="pc-tag mono">OFERTA DE LANÇAMENTO</span>
        <p className="pc-from mono">de R$ {PRICE.total} por apenas</p>
        <div className="pc-now">
          <span className="cur">R$</span>
          <span className="big">{PRICE.now}</span>
        </div>
        <p className="pc-inst mono">{PRICE.installments}</p>
        <p className="pc-pix">{PRICE.pix}</p>

        <CTA block className="pc-btn">GARANTIR MEU PACK AGORA</CTA>

        <ul className="pc-perks mono">
          <li>✓ 7 planilhas profissionais</li>
          <li>✓ 2 e-books grátis</li>
          <li>✓ Acesso imediato e vitalício</li>
          <li>✓ 7 dias de garantia</li>
        </ul>
        <div className="pc-pay mono">🔒 Pagamento seguro via Kirvano · Pix, cartão e boleto</div>
      </div>
    </div>
  </section>
);

export default Offer;
