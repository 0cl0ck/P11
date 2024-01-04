import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="/logo-footer.png" alt="logo" />
      </div>
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
