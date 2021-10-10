import React from "react";

import "./main-page-banner.styles.scss";
import {
  Wrapper,
  SecondImageWrapper,
  BannerWrapper,
} from "./main-page-banner.styles";
import { Link } from "react-router-dom";

const MainPageBanner = ({
  title,
  text,
  styleType,
  primaryImage,
  secondaryImage,
}) => {
  const secondaryImg = secondaryImage ? secondaryImage : "";
  return (
    <BannerWrapper className="banner-wrapper">
      <Wrapper className="wrapper" primaryImage={primaryImage}>
        <div className={`container container--${styleType}`}>
          {title ? <div className="title">{title}</div> : null}

          {secondaryImage ? (
            <SecondImageWrapper
              className="must-haves"
              secondaryImage={secondaryImg}
            ></SecondImageWrapper>
          ) : null}

          <p className="item">{text}</p>
          <Link className="button " to="/shop">
            SHOP
          </Link>
        </div>
      </Wrapper>
    </BannerWrapper>
  );
};

export default MainPageBanner;
