import React from "react";
import FooterTables from "./footer-tables/footer-tables.component";
import PaymentMethods from "./payment-methods/payment-methods.component";
import Legal from "./legal/legal.component";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        <FooterTables></FooterTables>
        <PaymentMethods></PaymentMethods>
      </div>
      <div className="footer__legal">
        <Legal></Legal>
      </div>
    </div>
  );
};

export default Footer;
