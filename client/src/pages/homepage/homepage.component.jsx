import React from "react";

import Directory from "../../components/directory/directory.component";

import MainPageBanner from "../../components/page-banners/main-page-banner/main-page-banner.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <MainPageBanner />
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
