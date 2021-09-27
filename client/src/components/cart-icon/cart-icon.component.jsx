import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { Container, ItemCount, SVG } from "./cart-icon.styles.jsx";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <Container onClick={toggleCartHidden}>
    <SVG />
    <ItemCount>{itemCount}</ItemCount>
  </Container>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
