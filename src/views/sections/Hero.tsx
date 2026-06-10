import React from "react";
import CTA from "../components/CTA";
import Window from "../components/Window";
import { PLANILHAS, PRICE } from "../../models/data";

const Hero: React.FC = () => (
  <section className="hero">
    <div className="glow" />
    <div className="grid-bg" />
    <div className="wrap hero-grid">
      <div className="hero-copy">
        <span className="kicker fade" style={{ animationDelay: ".05s" }}>
          OTIMIZA++ · PACK DE PLANILHAS
        </span>
        <h1 className="fade" style={{ animationDelay: ".12s" }}>
          Coloque seu negócio no controle com{" "}
          <span className="lime">7 planilhas profissionais</span>.
        </h1>
        <p className="lead fade" style={{ animationDelay: ".2s" }}>
          Estoque, vendas, fluxo de caixa e finanças — tudo organizado, automático
          e pronto pra usar no <strong>Excel</strong> ou <strong>Google Sheets</strong>.
          Sem fórmulas complicadas.
        </p>

        <div className="hero-cta fade" style={{ animationDelay: ".28s" }}>
          <CTA>QUERO ORGANIZAR MEU NEGÓCIO</CTA>
          <span className="cta-sub mono">Acesso imediato · Garantia de 7 dias</span>
        </div>

        <div className="gift fade" style={{ animationDelay: ".36s" }}>
          🎁 Comprando hoje você leva <strong>2 e-books exclusivos</strong> de graça
        </div>

        <div className="trust fade" style={{ animationDelay: ".44s" }}>
          <span>🔒 Compra segura</span>
          <span>⚡ Acesso imediato</span>
          <span>♾️ Acesso vitalício</span>
        </div>
      </div>

      <div className="hero-art fade" style={{ animationDelay: ".3s" }}>
        <div className="float">
          <Window item={PLANILHAS[2]} ratio="68%" />
        </div>
        <div className="float-2 stack-2">
          <Window item={PLANILHAS[5]} ratio="62%" />
        </div>
        <div className="hero-badge mono">+7 planilhas</div>
      </div>
    </div>
  </section>
);

export default Hero;
