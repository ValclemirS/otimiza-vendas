import React from "react";
import Logo from "../components/Logo";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="wrap">
      <Logo size="text-xl" />
      <p className="foot-note">
        Planilhas para gestão de estoque, vendas e finanças. Este material é
        informativo e não garante resultados financeiros específicos.
      </p>
      <p className="foot-copy mono">© 2025 otimiza++ · Todos os direitos reservados</p>
    </div>
  </footer>
);

export default Footer;
