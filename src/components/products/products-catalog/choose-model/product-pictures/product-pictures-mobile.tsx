import React from 'react';
import './product-pictures-mobile.scss';
import { IImage } from '../../../../../consts/interfaces-for-request';
import { ApiUrl, ApiStorage } from '../../../../../consts/api';

// import thumbBoiler from '../../../../../images/products/boilers/boiler-thumb.png';
// import largeBoiler from '../../../../../images/products/boilers/boiler-large.png';
// import thumbFit20 from '../../../../../images/products/boilers/Fit20-thumb.jpg';
// import largeFit20 from '../../../../../images/products/boilers/Fit20-large.jpg';
// import thumbFit40 from '../../../../../images/products/boilers/Fit40-thumb.jpg';
// import largeFit40 from '../../../../../images/products/boilers/Fit40-large.jpg';

interface ProductPictureProps {
  imageInfoList: IImage[];
}

export default ({ imageInfoList }: ProductPictureProps) => {
  const shortImageList = imageInfoList.slice(0, 3);
  const [mainImage, changeMainImage] = React.useState(shortImageList[0].fullPath);
  const [mainAlt, changeMainAlt] = React.useState(shortImageList[0].description);
  
  const thumbImageList = shortImageList.map((item) => (
    <button
      type="button"
      onClick={() => {
        changeMainImage(item.fullPath);
        changeMainAlt(item.description);
      }}
    >
      <img src={`${ApiStorage}/${item.thumbPath}`} alt={item.description} />
    </button>
  ));

  
  return (
    <div className="product-pictures mobile">
      <div className="large-picture"><img src={`ApiStorage/${mainImage || undefined}`} alt={mainAlt} width="100%" /></div>
      <div className="small-pictures">
        {thumbImageList}
      </div>
    </div>
  );
};
