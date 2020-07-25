import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
  backgroundColor: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: auto 50px;

  background-color: var(--primary);

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */

  position: relative;

  img {
    max-width: 80%;
    height: 70%;
    margin: auto auto 15px auto;
  }

  nav {
    top: 50px;
    position: absolute;

    @media only screen and (min-width: 600px) {
      right: 100px;
    }
  }

  div {
    display: flex;
    margin: auto;
  }

  a:not(:first-child) {
    margin-left: 50px;

    display: block;

    width: 200px;
    height: 45px;

    text-align: center;
    justify-content: center;
    line-height: 45px;
    text-transform: uppercase;
    font-size: 24px;

    color: var(--white);
    background-color: #30b441;
  }
`;

export const SocialButton = styled.button<ButtonProps>`
  width: 40px;
  height: 40px;

  background-color: ${(props) => props.backgroundColor};
`;

export const Enter = styled(Link)`
  display: block;

  width: 200px;
  height: 45px;

  text-align: center;
  justify-content: center;
  line-height: 45px;
  text-transform: uppercase;
  font-size: 24px;

  color: var(--primary);
  background-color: var(--secondary);
`;
