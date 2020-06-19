import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
  backgroundColor: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--primary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  img {
    width: 600px;
  }

  nav {
    margin-right: 50px;
    margin-left: auto;
  }

  div {
    display: flex;
  }

  a:not(:first-child) {
    margin-left: 50px;

    display: block;

    width: 150px;
    height: 30px;

    text-align: center;
    justify-content: center;
    line-height: 30px;
    text-transform: uppercase;

    color: var(--white);
    background-color: #30b441;
  }
`;

export const SocialButton = styled.button<ButtonProps>`
  width: 45px;
  height: 45px;

  background-color: ${(props) => props.backgroundColor};
`;

export const Enter = styled(Link)`
  display: block;

  width: 150px;
  height: 30px;

  text-align: center;
  justify-content: center;
  line-height: 30px;
  text-transform: uppercase;

  color: var(--primary);
  background-color: var(--secondary);
`;
