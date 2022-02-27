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

import {
  HeaderContainer,
  OptionsContainerLeft,
  OptionsContainerRight,
  OptionsContainerMid,
  OptionContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ hidden }) => (
  <div className="headerwrapper">
    <div className="header-container">
      <SuperContainer />

      <HeaderContainer>
        <OptionsContainerLeft>
          <LogoIcon />
        </OptionsContainerLeft>
        <OptionsContainerMid>
          <OptionContainer>
            <OptionLink to="/shop/womens">WOMENS</OptionLink>
          </OptionContainer>
          <OptionContainer>
            <OptionLink to="/shop/mens">MENS</OptionLink>
          </OptionContainer>
        </OptionsContainerMid>
        <OptionsContainerRight>
          <SearchIcon />
          <UserIcon />
          <CartIcon />
        </OptionsContainerRight>

        {hidden ? null : <CartDropdown />}
      </HeaderContainer>
    </div>
    <AdvertScroll />
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
