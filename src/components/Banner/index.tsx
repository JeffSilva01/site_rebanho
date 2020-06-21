import React from 'react';

import img1 from '../../assets/banner/1.jpg';
import img2 from '../../assets/banner/2.jpg';
import img3 from '../../assets/banner/3.jpg';

import { CarouselBanner } from './styles';

const Banner: React.FC = () => {
  return (
    <CarouselBanner autoPlay infiniteLoop width={800} showThumbs={false}>
      <div>
        <img src={img1} alt="foto 1" />
      </div>

      <div>
        <img src={img2} alt="foto 2" />
      </div>

      <div>
        <img src={img3} alt="foto 2" />
      </div>
    </CarouselBanner>
  );
};

export default Banner;
