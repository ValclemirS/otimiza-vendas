import React from "react";

const PAIN_ITEMS = [
  ["🗒️", "Controle no caderno",   "Anotações soltas, contas que somem e aquela sensação de que algo está escapando."],
  ["💸", "Não sabe o lucro real", "Vende, vende, vende… mas no fim do mês o dinheiro não bate e você não sabe o porquê."],
  ["📦", "Estoque no escuro",     "Falta produto na hora da venda ou sobra dinheiro parado na prateleira."],
  ["😵", "Planilha bagunçada",    "Aquele arquivo cheio de erro, sem padrão, que mais atrapalha do que ajuda."],
] as const;

const Pain: React.FC = () => (
  <section className="pain wrap">
    <div className="reveal">
      <span className="kicker">SOA FAMILIAR?</span>
      <h2>Gerir tudo "de cabeça" custa caro.</h2>
    </div>
    <div className="pain-grid">
      {PAIN_ITEMS.map(([ic, t, d], i) => (
        <div key={i} className="pain-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
          <div className="pain-ic">{ic}</div>
          <h3>{t}</h3>
          <p>{d}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Pain;
