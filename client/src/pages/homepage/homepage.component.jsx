import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollection } from "../../redux/shop/shop.selectors";
import FooterBanner from "../../components/footer-banner/footer-banner.component";

import {
  HomePageContainer,
  MainPageBannerWrapper,
  CollectionsOverviewWrapper,
} from "./homepage.styles";

import {
  homepageImage,
  homepageImage2,
  mustHavesImage,
} from "../../assets/index";

const HomePage = ({ hotItemsCollection, newReleasesCollection }) => {
  return (
    <HomePageContainer>
      <MainPageBannerWrapper
        primaryImage={homepageImage}
        secondaryImage={mustHavesImage}
        text="For those who move."
        styleType={1}
      />
      <CollectionsOverviewWrapper></CollectionsOverviewWrapper>
      <MainPageBannerWrapper
        primaryImage={homepageImage2}
        text="The Gymshark x Whitney Simmons Collection"
        title="SHAPED BY PROGRESS"
        styleType={2}
      />
      <CollectionsOverviewWrapper></CollectionsOverviewWrapper>

      <FooterBanner className="footer-banner" />
    </HomePageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hotItemsCollection: selectCollection("hot-items"),
  newReleasesCollection: selectCollection("new-releases"),
});

export default connect(mapStateToProps)(HomePage);
