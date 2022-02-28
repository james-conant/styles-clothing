import React, { useEffect, Suspense } from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import FooterBanner from "../../components/footer-banner/footer-banner.component";
// import Spinner from "../../components/spinner/spinner.component";

import "./homepage.styles.scss";
import MainPageBanner from "../../components/page-banners/main-page-banner/main-page-banner.component";

import {
  homepageImage,
  homepageImage2,
  mustHavesImage,
} from "../../assets/index";

const HomePage = ({ fetchCollectionsStart, hotItemsCollection }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__mainbanner homepage__mainbanner--1">
        <MainPageBanner
          primaryImage={homepageImage}
          secondaryImage={mustHavesImage}
          text="For those who move."
        ></MainPageBanner>
      </div>

      <div className="homepage__collection homepage__collection1">
        {hotItemsCollection.map((item) => (
          <CollectionItem key={item._id} item={item}></CollectionItem>
        ))}
      </div>
      {/* <div className="homepage__mainbanner homepage__mainbanner--2">
        <MainPageBanner
          primaryImage={homepageImage2}
          text="The Gymshark x Whitney Simmons Collection"
          title="SHAPED BY PROGRESS"
          styleType={2}
        />
      </div>

      <div className="homepage__collection homepage__collection2">
        {hotItemsCollection.map((item) => (
          <CollectionItem key={item._id} item={item}></CollectionItem>
        ))}
      </div>

      <FooterBanner className="footer-banner" /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  hotItemsCollection: state.shop.collections,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: (key) => dispatch(fetchCollectionsStart(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
