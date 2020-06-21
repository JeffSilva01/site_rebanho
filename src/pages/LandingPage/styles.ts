import styled from 'styled-components';

import backgroundCurv from '../../assets/background-curv.svg';
import logoCoatOfArms from '../../assets/logo-who-we-are.svg';
import iconWhoWeAre from '../../assets/icon-who-we-are.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 50%;
    max-width: 500px;
    margin-top: 5rem;
  }
`;

export const WhoWeAre = styled.div`
  margin-top: 30px;
  background-color: var(--secondary);
`;

export const WhoWeAreContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100vh;

  margin: 100px auto;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ImgCurvTop = styled.img.attrs({
  src: `${backgroundCurv}`,
})`
  width: 100%;
`;

export const ImgCurvBottom = styled.img.attrs({
  src: `${backgroundCurv}`,
})`
  width: 100%;
  transform: rotate(180deg);
`;

export const ImgLogoCoatOfArms = styled.img.attrs({
  src: `${logoCoatOfArms}`,
})`
  width: 400px;
`;

export const ImgIconWhoWeAre = styled.img.attrs({
  src: `${iconWhoWeAre}`,
})`
  height: 600px;
`;
