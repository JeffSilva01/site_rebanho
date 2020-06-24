import styled from 'styled-components';

import img1 from '../../assets/instagram/1.png';
import img2 from '../../assets/instagram/2.png';
import img3 from '../../assets/instagram/3.png';

export const Container = styled.div`
  width: 900px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgInstagram1 = styled.img.attrs({
  src: `${img1}`,
})`
  width: 250px;
  border: 5px solid #ce9f84;
  margin: 5px;
  margin-top: 350px;
`;

export const ImgInstagram2 = styled.img.attrs({
  src: `${img2}`,
})`
  width: 450px;
  border: 5px solid #ce9f84;
  margin: 5px;
  margin-top: 350px;
`;

export const ImgInstagram3 = styled.img.attrs({
  src: `${img3}`,
})`
  width: 250px;
  border: 5px solid #ce9f84;
  margin: 5px;
  margin-top: 350px;
`;
