import styled from 'styled-components';

import backgroundCurv from '../../assets/background-curv.svg';
import logoCoatOfArms from '../../assets/logo-who-we-are.svg';
import iconWhoWeAre from '../../assets/icon-who-we-are.svg';
import backgroundAnimalNutrition from '../../assets/img-animals.png';
import fullBackground from '../../assets/full-background.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: calc(100vh - 45px);
  margin: auto;

  background-color: red;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* > img {
    width: 350px;
    max-width: 500px;
    /* margin-top: 7rem; */
  } */
`;

export const WhoWeAre = styled.div`
  margin-top: 30px;
  background-color: var(--secondary);
`;

export const WhoWeAreContainer = styled.div`
  width: 100%;
  max-width: 900px;

  margin: 100px auto;
  padding: 20px;

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
  margin-bottom: -3px;
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

export const AnimalNutrition = styled.div`
  width: 100%;
  max-width: 900px;
  min-height: 500px;

  margin: auto;
  padding: 20px auto;

  background-image: url(${backgroundAnimalNutrition});
  background-repeat: no-repeat;
  background-size: 400px;
  background-position-y: bottom;

  > section {
    display: flex;

    img {
      width: 400px;
      margin: auto;
    }

    ul {
      margin-top: 40px;
      list-style: none;
    }

    li {
      font-size: 2.5rem;
    }

    li::before {
      content: '•';
      color: var(--primary);
      margin-right: 30px;
    }
  }

  > div {
    width: 500px;
    margin-left: auto;
    margin-top: 50px;
    padding: 10px;

    background-color: var(--primary);

    h1 {
      text-align: center;
    }

    ul {
      margin-top: 10px;
      list-style: none;
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto auto;
    }

    li {
      height: 40px;
      margin: 3px;
      background-color: var(--secondary);

      display: flex;
      align-items: center;
      justify-content: center;

      a {
        color: var(--white);
        font-size: 1.5rem;
      }
    }
  }
`;

export const Full = styled.div`
  width: 100%;

  background-image: url(${fullBackground});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Contacit = styled.div`
  width: 100%;
  height: 2750px;
  margin: auto;
  padding: 0 50px;
`;
