import React from "react";
import "./footer-banner.styles.scss";
import CustomButton from "../custom-button/custom-buttom.component";

const FooterBanner = () => (
  <div className="footer-banner">
    <div className="footer-banner__content">
      <div className="footer-banner__text">
        Sign up to our newsletter for the latest news and exclusive deals
      </div>
      <CustomButton className="footer-banner__button">SIGN UP</CustomButton>
    </div>
  </div>
);

export default FooterBanner;
