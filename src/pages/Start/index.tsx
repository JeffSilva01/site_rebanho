import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

import coatOfArms from '../../assets/coat-of-arms.svg';

import { Container, SocialButton, Enter } from './styles';

const Start: React.FC = () => (
  <Container>
    <nav>
      <SocialButton backgroundColor="#2151AB">
        <FaFacebookF color="#fff" size={24} />
      </SocialButton>
      <SocialButton backgroundColor="#000">
        <FaInstagram color="#fff" size={24} />
      </SocialButton>
      <SocialButton backgroundColor="#6E87CC">
        <FaLinkedinIn color="#fff" size={24} />
      </SocialButton>
      <SocialButton backgroundColor="#0794DC">
        <FaTwitter color="#fff" size={24} />
      </SocialButton>
    </nav>

    <img src={coatOfArms} alt="Brasão" />

    <div>
      <Enter to="/LandingPage">Entrar</Enter>
      <a
        href="https://api.whatsapp.com/send?l=pt-BR&phone=5585999878510"
        target="_blank"
        rel="noopener noreferrer"
      >
        Whatsapp
      </a>
    </div>
  </Container>
);

export default Start;
