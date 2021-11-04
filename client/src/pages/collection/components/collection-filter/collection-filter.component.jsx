import React from "react";

import "./collection-filter.styles.scss";

const CollectionFilter = () => {
  return (
    <div className="collection-filter">
      <div className="collection-filter__wrapper">
        <div className="collection-filter__title">FILTERS</div>
        <div className="collection-filter__price">PRICE</div>
        <div className="collection-filter__sortby">SORT BY</div>
      </div>
    </div>
  );
};

export default CollectionFilter;
