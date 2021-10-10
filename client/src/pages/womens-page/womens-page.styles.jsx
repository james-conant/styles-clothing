import styled from "styled-components";
import MainPageBanner from "../../components/page-banners/main-page-banner/main-page-banner.component";

export const WomensPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CollectionsOverviewWrapper = styled.div`
  width: 100%;
`;

export const MainPageBannerWrapper = styled(MainPageBanner)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 90px;
  color: #fff;
`;
