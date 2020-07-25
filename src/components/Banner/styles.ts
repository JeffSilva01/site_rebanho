import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: red;

  margin-top: 32px;
`;

export const Content = styled.div`
  display: flex;

  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  --webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`;

export const Item = styled.div`
  flex: none;

  width: 100%;
  height: 400px;

  scroll-snap-align: start;

  pointer-events: none;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;
