import React from 'react';

import logoRebanho from '../../assets/logo-rebanho.svg';
import logoAnimals from '../../assets/logo-animals.svg';

import {
  Container,
  WhoWeAre,
  ImgCurvTop,
  ImgCurvBottom,
  WhoWeAreContainer,
  ImgLogoCoatOfArms,
  ImgIconWhoWeAre,
  AnimalNutrition,
  Full,
  Contacit,
} from './styles';

import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import Instagram from '../../components/Instagram';
import Form from '../../components/Form';

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
      <AnimalNutrition>
        <section>
          <img src={logoAnimals} alt="Logo Nutrição Animal" />

          <ul>
            <li>Bovinos</li>
            <li>Suínos</li>
            <li>Equinos</li>
            <li>Aves</li>
            <li>Caprinos</li>
            <li>Ovinos</li>
          </ul>
        </section>

        <div>
          <h1> Mídias digitais</h1>
          <ul>
            <li>
              <a href="none">Catálogo</a>
            </li>
            <li>
              <a href="none">Catálogo</a>
            </li>
            <li>
              <a href="none">Catálogo</a>
            </li>
            <li>
              <a href="none">Catálogo</a>
            </li>
            <li>
              <a href="none">Catálogo</a>
            </li>
            <li>
              <a href="none">Catálogo</a>
            </li>
          </ul>
        </div>
      </AnimalNutrition>
      <Full>
        <Contacit>
          <Instagram />
          <Form />
        </Contacit>
      </Full>
    </>
  );
};

export default LandingPage;
