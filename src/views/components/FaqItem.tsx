import React from "react";

interface FaqItemProps {
  q: string;
  a: string;
  open: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ q, a, open, onClick }) => (
  <div className={`faq ${open ? "open" : ""}`}>
    <button className="faq-q" onClick={onClick}>
      <span>{q}</span>
      <span className="faq-ico">{open ? "−" : "+"}</span>
    </button>
    <div className="faq-a"><p>{a}</p></div>
  </div>
);

export default FaqItem;
