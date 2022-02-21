import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-buttom.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => (
  <div key={item._id} className={`collection-item collection-item--${null}`}>
    <div
      className="image"
      style={{ backgroundImage: `url(${item.images[0].url_570xN})` }}
    />
    <div className="collection-footer">
      <Fragment>
        <div className="collection-footer__line-1">
          <span className="collection-footer__name">
            {item.title.slice(0, 15)}
          </span>
          <span className="collection-footer__price">${item.price} USD</span>
        </div>
      </Fragment>
    </div>
    <CustomButton onClick={() => addItem(item)} inverted>
      Add to cart
    </CustomButton>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
