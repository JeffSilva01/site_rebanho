import React, { useRef, useEffect } from 'react';

import { Container, Content, Item } from './styles';

import img1 from '../../assets/banner/1.jpg';
import img2 from '../../assets/banner/2.jpg';
import img3 from '../../assets/banner/3.jpg';

const Banner: React.FC = () => {
  const itemsRef = useRef<HTMLDivElement>(null);

  function handlerBanner() {
    itemsRef.current?.scrollBy({ left: 300, top: 0, behavior: 'smooth' });

    console.log(itemsRef.current?.scrollLeft);

    if (itemsRef.current?.scrollLeft === 5600) {
      itemsRef.current?.scrollBy({ left: -5600, top: 0, behavior: 'smooth' });
    }

    console.log('final');
  }

  useEffect(() => {
    const interval = setInterval(handlerBanner, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Content ref={itemsRef}>
        <Item>
          <img src={img1} alt="" />
        </Item>
        <Item>
          <img src={img2} alt="" />
        </Item>
        <Item>
          <img src={img3} alt="" />
        </Item>
        <Item>
          <img src={img1} alt="" />
        </Item>
        <Item>
          <img src={img2} alt="" />
        </Item>
        <Item>
          <img src={img3} alt="" />
        </Item>
      </Content>
    </Container>
  );
};

export default Banner;
