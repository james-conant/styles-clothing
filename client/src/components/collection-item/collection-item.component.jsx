import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-buttom.component";

import "./collection-item.styles.scss";

const collectionItem = ({ size, item, addItem, extra1 }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className={`collection-item collection-item--${size}`}>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        {extra1 ? (
          <Fragment>
            <div className="collection-footer__line-1">
              <span className="collection-footer__extra-1">{extra1}</span>
              <span className="collection-footer__price">${price} USD</span>
            </div>
            <div className="collection-footer__line-2">
              <span className="collection-footer__name">{name}</span>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="collection-footer__line-1">
              <span className="collection-footer__name">{name}</span>
              <span className="collection-footer__price">${price} USD</span>
            </div>
          </Fragment>
        )}
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(collectionItem);
