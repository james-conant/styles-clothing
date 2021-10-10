import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollection } from "../../redux/shop/shop.selectors";
import FooterBanner from "../../components/footer-banner/footer-banner.component";

import {
  WomensPageContainer,
  MainPageBannerWrapper,
  CollectionsOverviewWrapper,
} from "./womens-page.styles";

import {
  womensPageImage,
  womensPageImage2,
  apexLogo,
} from "../../assets/index";

const WomensPage = ({ hotItemsCollection, newReleasesCollection }) => {
  return (
    <WomensPageContainer>
      <MainPageBannerWrapper
        primaryImage={womensPageImage}
        title="YOUR LATEST MISSION"
        text="Made possible in all-new Adapt Camo"
        styleType={1}
      />
      <CollectionsOverviewWrapper>
        <CollectionPreview
          length={4}
          extra1="new"
          id={hotItemsCollection.id}
          {...hotItemsCollection}
        />
      </CollectionsOverviewWrapper>
      <MainPageBannerWrapper
        primaryImage={womensPageImage2}
        secondaryImage={apexLogo}
        text="Elite seamless, engineered heat-mapping, enduring ergonomic designs."
        styleType={2}
      />
      <CollectionsOverviewWrapper>
        <CollectionPreview
          length={4}
          extra1="new"
          id={newReleasesCollection.id}
          {...newReleasesCollection}
        />
      </CollectionsOverviewWrapper>

      <FooterBanner className="footer-banner" />
    </WomensPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hotItemsCollection: selectCollection("hot-items"),
  newReleasesCollection: selectCollection("new-releases"),
});

export default connect(mapStateToProps)(WomensPage);
