import React from "react";

import "./collection-header.styles.scss";

const CollectionHeader = ({ category }) => {
  return (
    <div className="collection-header">
      <div className="collection-header__wrapper">
        <div className="collection-header__gender">MENS</div>
        <div className="collection-header__category">{category}</div>
      </div>
    </div>
  );
};

export default CollectionHeader;
