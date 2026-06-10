import React from "react";
import CTA from "../components/CTA";
import { PRICE } from "../../models/data";

const CtaBar: React.FC = () => (
  <div className="cta-bar">
    <div className="bar-price">
      <span className="bp-old mono">R$ {PRICE.total}</span>
      <span className="bp-now mono">R$ {PRICE.now}</span>
    </div>
    <CTA className="bar-btn">Comprar pack</CTA>
  </div>
);

export default CtaBar;
