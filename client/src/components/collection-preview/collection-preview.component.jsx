import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, length, extra1 }) => {
  const createTitle = title.replace("-", " ");
  return (
    <div className="collection-preview">
      <h1 className="title">{createTitle}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < (length ? length : 4))
          .map((item) => (
            <CollectionItem key={item.id} item={item} extra1={extra1} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
