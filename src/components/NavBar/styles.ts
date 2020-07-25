import styled from 'styled-components';

interface Props {
  backgroundColor?: string;
}

export const Container = styled.div`
  width: 100%;
  height: 45px;

  padding: 20px;

  display: flex;
  justify-content: center;

  background-image: linear-gradient(-90deg, var(--secondary), var(--primary));

  position: fixed;
  z-index: 1;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const ButtonHouse = styled.button`
  width: 35px;
  height: 35px;

  margin-top: calc(5px + 35px);
  margin-left: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--secondary);

  > img {
    width: 25px;
  }
`;

export const ButtonMenu = styled.button<Props>`
  width: 170px;
  height: 35px;

  margin-top: calc(5px + 35px);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;

  color: var(--primary);
  background-color: ${(props) => props.backgroundColor};
`;
