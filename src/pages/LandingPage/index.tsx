import React from 'react';

import logoRebanho from '../../assets/logo-rebanho.svg';

import {
  Container,
  WhoWeAre,
  ImgCurvTop,
  ImgCurvBottom,
  WhoWeAreContainer,
  ImgLogoCoatOfArms,
  ImgIconWhoWeAre,
} from './styles';

import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';

const LandingPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>
        <img src={logoRebanho} alt="Logo Rebanho" />
        <Banner />
      </Container>
      <WhoWeAre>
        <ImgCurvTop />
        <WhoWeAreContainer>
          <ImgLogoCoatOfArms />
          <ImgIconWhoWeAre />
        </WhoWeAreContainer>
        <ImgCurvBottom />
      </WhoWeAre>
    </>
  );
};

export default LandingPage;
