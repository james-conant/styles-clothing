import React from "react";

import "./main-page-banner.styles.scss";
import { Link } from "react-router-dom";

const MainPageBanner = ({ primaryImage, secondaryImage, text }) => {
  const primaryImg = { backgroundImage: `url(${primaryImage})` };
  const secondaryImg = { backgroundImage: `url(${secondaryImage})` };

  return (
    <div className="banner">
      <div className="banner__primary" style={primaryImg}>
        <div className="banner__secondary" style={secondaryImg}></div>
        <div className="banner__content">
          <Link class="banner__button" to="/shop">
            Shop
          </Link>
          <p class="banner__text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default MainPageBanner;
