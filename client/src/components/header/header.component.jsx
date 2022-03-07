import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import SearchIcon from "../search-icon/search-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import SuperContainer from "./super/super.component";
import AdvertScroll from "../advert-scroll/advert-scroll.component";

import UserIcon from "../user-icon/user-icon.component";
import LogoIcon from "../logo-icon/logo-icon.component";

import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import "./header.styles.scss";

const Header = ({ hidden }) => {
  const isLimited = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const limitedClass = isLimited ? "header--limited" : "header--not-limited";
  return (
    <div className={limitedClass}>
      {!isLimited && <SuperContainer />}
      <div className={`${limitedClass}__container`}>
        <div className={`${limitedClass}__options_left`}>
          {!isLimited ? (
            <LogoIcon />
          ) : (
            <Fragment>
              <SearchIcon />
              <UserIcon />
            </Fragment>
          )}
        </div>
        <div className={`${limitedClass}__options_mid`}>
          {!isLimited ? (
            <Fragment>
              <div className={`${limitedClass}__options_container`}>
                <Link className={`${limitedClass}__link`} to="/shop/womens">
                  WOMENS
                </Link>
              </div>
              <div className={`${limitedClass}__options_container`}>
                <Link className={`${limitedClass}__link`} to="/shop/mens">
                  MENS
                </Link>
              </div>
            </Fragment>
          ) : (
            <LogoIcon />
          )}
        </div>
        <div className={`${limitedClass}__options_right`}>
          {!isLimited ? (
            <div className={`${limitedClass}__options_right--sub`}>
              <SearchIcon />
              <UserIcon />
              <CartIcon />
            </div>
          ) : (
            <CartIcon />
          )}
        </div>

        {hidden ? null : <CartDropdown />}
      </div>
      {!isLimited ? (
        <AdvertScroll />
      ) : (
        <div className={`${limitedClass}__options_bottom`}>
          <div className={`${limitedClass}__options_container`}>
            <Link to="/shop/womens">SHOP WOMENS</Link>
          </div>
          <div className={`${limitedClass}__options_divider`}></div>
          <div className={`${limitedClass}__options_container`}>
            <Link to="/shop/mens">SHOP MENS</Link>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
