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
  const [mainImage, changeMainImage] = React.useState('');
  const [mainAlt, changeMainAlt] = React.useState('');
  
  const thumbImageList = shortImageList.map((item) => (
    <button
      key={item.id}
      type="button"
      onClick={() => {
        const newMainImage = `${ApiStorage}/${item.thumbPath}`;
        changeMainImage(newMainImage);
        changeMainAlt(item.description);
      }}
    >
      <img src={`${ApiStorage}/${item.thumbPath}`} alt={item.description} />
    </button>
  ));
  
  React.useEffect(() => {
    if (imageInfoList.length) {
      const item = imageInfoList[0];
      const primalImage = `${ApiStorage}/${item.thumbPath}`;
      changeMainImage(primalImage);
      changeMainAlt(item.description);
    }
  }, [imageInfoList]);
    
  return (
    <div className="product-pictures mobile">
      <div className="large-picture">
        <img src={mainImage} alt={mainAlt} width="100%" />
      </div>
      <div className="small-pictures">
        {thumbImageList}
      </div>
    </div>
  );
};
