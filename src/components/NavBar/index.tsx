import React from 'react';

import logoWhite from '../../assets/logo-white.svg';
import iconHouse from '../../assets/icon-house.svg';

import { Container, Content, ButtonHouse, ButtonMenu } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoWhite} alt="Logo Branca da Rebanho" />
          <ButtonHouse>
            <img src={iconHouse} alt="icon house" />
          </ButtonHouse>
        </div>

        <div>
          <ButtonMenu backgroundColor="#581518">Social</ButtonMenu>
          <ButtonMenu backgroundColor="#8C351B">Atendimento</ButtonMenu>
        </div>
      </Content>
    </Container>
  );
};

export default NavBar;
