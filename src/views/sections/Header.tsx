import React from "react";
import Logo from "../components/Logo";
import CTA from "../components/CTA";

const Header: React.FC = () => (
  <header className="header">
    <div className="wrap row between center">
      <Logo />
      <nav className="nav mono">
        <a href="#pack">O pack</a>
        <a href="#bonus">Bônus</a>
        <a href="#faq">Dúvidas</a>
      </nav>
      <CTA className="btn-sm">Comprar</CTA>
    </div>
  </header>
);

export default Header;
