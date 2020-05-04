import React from 'react';
import './product-pictures.scss';

import image1 from '../../../../images/products/boilers/small-boiler.png';
import image2 from '../../../../images/products/boilers/medium-boiler.png';

export default () => {
  const imgs = {
    img1: image1,
    img2: image1,
    img3: image1,
    img4: image2,
  };
  
  return (
    <div className="product-pictures desktop">
      <div className="small-picture"><img src={imgs.img1} alt="" /></div>
      <div className="small-picture"><img src={imgs.img2} alt="" /></div>
      <div className="small-picture"><img src={imgs.img3} alt="" /></div>
      <div className="medium-picture"><img src={imgs.img4} alt="" /></div>
    </div>
  );
};
