import React from 'react';
import './product-pictures-mobile.scss';

import thumbBoiler from '../../../../images/products/boilers/boiler-thumb.png';
import largeBoiler from '../../../../images/products/boilers/boiler-large.png';
import thumbFit20 from '../../../../images/products/boilers/Fit20-thumb.jpg';
import largeFit20 from '../../../../images/products/boilers/Fit20-large.jpg';
import thumbFit40 from '../../../../images/products/boilers/Fit40-thumb.jpg';
import largeFit40 from '../../../../images/products/boilers/Fit40-large.jpg';


export default () => {
  const [mainImage, changeImage] = React.useState(largeBoiler);
  return (
    <div className="product-pictures mobile">
      <div className="large-picture"><img src={mainImage} alt="рендер котла Fit-40" width="100%" /></div>
      <div className="small-pictures">
        <button type="button" onClick={() => changeImage(largeFit40)}><img src={thumbFit40} alt="показать фотографию котла Fit-40" /></button>
        <button type="button" onClick={() => changeImage(largeFit20)}><img src={thumbFit20} alt="показать фотографию котла Fit-20" /></button>
        <button type="button" onClick={() => changeImage(largeBoiler)}><img src={thumbBoiler} alt="показать рендер котла Fit-40" /></button>
      </div>
    </div>
  );
};
