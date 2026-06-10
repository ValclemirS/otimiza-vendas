import React from "react";
import { KIRVANO_URL } from "../../models/config";

const CTA: React.FC<{ children: React.ReactNode; block?: boolean; className?: string }> = ({
  children,
  block,
  className = "",
}) => (
  <a href={KIRVANO_URL} className={`btn-cta ${block ? "btn-block" : ""} ${className}`}>
    {children}
    <span className="btn-arrow" aria-hidden>→</span>
  </a>
);

export default CTA;
