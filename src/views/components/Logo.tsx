import React from "react";

const Logo: React.FC<{ size?: string }> = ({ size = "text-2xl" }) => (
  <span className={`font-display font-extrabold tracking-tight ${size}`}>
    otimiza<span className="mono lime">++</span>
  </span>
);

export default Logo;
