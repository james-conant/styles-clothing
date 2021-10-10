import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollection } from "../../redux/shop/shop.selectors";
import FooterBanner from "../../components/footer-banner/footer-banner.component";

import {
  MensPageContainer,
  MainPageBannerWrapper,
  CollectionsOverviewWrapper,
} from "./mens-page.styles";

import {
  mensPageImage,
  mensPageImage2,
  mustHavesImage,
  apexLogo,
} from "../../assets/index";

const MensPage = ({ hotItemsCollection, newReleasesCollection }) => {
  return (
    <MensPageContainer>
      <MainPageBannerWrapper
        primaryImage={mensPageImage}
        secondaryImage={mustHavesImage}
        text={"Move like Ryan Garcia in these essentials"}
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
        primaryImage={mensPageImage2}
        text="Elite seamless, engineered heat-mapping, enduring ergonomic designs."
        secondaryImage={apexLogo}
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
    </MensPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hotItemsCollection: selectCollection("hot-items"),
  newReleasesCollection: selectCollection("new-releases"),
});

export default connect(mapStateToProps)(MensPage);
