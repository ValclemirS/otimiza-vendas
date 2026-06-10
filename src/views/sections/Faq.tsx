import React from "react";
import FaqItem from "../components/FaqItem";
import { FAQS } from "../../models/data";

interface FaqProps {
  openIndex: number;
  onToggle: (index: number) => void;
}

const Faq: React.FC<FaqProps> = ({ openIndex, onToggle }) => (
  <section id="faq" className="faqs wrap">
    <div className="reveal center-text">
      <span className="kicker">DÚVIDAS FREQUENTES</span>
      <h2>Tudo que você precisa saber</h2>
    </div>
    <div className="faq-list reveal">
      {FAQS.map((f, i) => (
        <FaqItem
          key={i}
          q={f.q}
          a={f.a}
          open={openIndex === i}
          onClick={() => onToggle(i)}
        />
      ))}
    </div>
  </section>
);

export default Faq;
