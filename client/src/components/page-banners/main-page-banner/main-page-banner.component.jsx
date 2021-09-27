import React from "react";

import "./main-page-banner.styles.scss";
import { Link } from "react-router-dom";

const MainPageBanner = () => {
  return (
    <div className="banner-wrapper">
      <div className="wrapper">
        <div className="container">
          <div className="must-haves "></div>
          <p className="item">For those who move.</p>
          <Link className="button " to="/shop">
            SHOP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPageBanner;
