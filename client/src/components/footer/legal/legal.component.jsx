import React from "react";
import "./legal.styles.scss";

const Legal = () => {
  return (
    <div className="legal">
      <div className="legal__items">
        <div className="legal__left">
          <div className="legal__left__item">&copy; 2021</div>|
          <div className="legal__left__item">Styles-Clothing</div>|
          <div className="legal__left__item">All Rights Reserved</div>|
          <div className="legal__left__item">Be a Visonary</div>
        </div>
        <div className="legal__right">
          <div className="legal__right__item">Terms & Conditions</div>
          <div className="legal__right__item">Terms of Use</div>
          <div className="legal__right__item">Privacy Notice</div>
          <div className="legal__right__item chocolate">
            Chocolate Cookie Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
