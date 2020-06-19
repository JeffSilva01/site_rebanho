import React from 'react';

import logoRebanho from '../../assets/logo-rebanho.svg';

import { Container } from './styles';

import NavBar from '../../components/NavBar';

const LandingPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>
        <img src={logoRebanho} alt="Logo Rebanho" />
      </Container>
    </>
  );
};

export default LandingPage;
