import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";
import CollectionHeader from "./components/collection-header/collection-header.component";
import CollectionFilter from "./components/collection-filter/collection-filter.component";
import FooterBanner from "../../components/footer-banner/footer-banner.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <CollectionHeader category={title} />
      <CollectionFilter />
      <div className="items">
        {items.map((item) => (
          <CollectionItem size="collection" key={item.id} item={item} />
        ))}
      </div>
      <FooterBanner />
    </div>
  );
};

export default CollectionPage;
