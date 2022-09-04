import React from 'react';
import './product-pictures-mobile.scss';
import { IImage } from '../../../../../consts/interfaces-for-request';
import { ApiStorage } from '../../../../../consts/api';

interface ProductPictureProps {
  imageInfoList: IImage[];
  linkToVideo: String
}

export default ({ ...props}: ProductPictureProps) => {
  const shortImageList = props.imageInfoList.slice(0, 3);
  const [mainImage, changeMainImage] = React.useState('');
  const [mainAlt, changeMainAlt] = React.useState('');
  
  const thumbImageList = shortImageList.map((item) => (
    <button
      key={"thumbimage_mobile"+item.id}
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
    if (props.imageInfoList.length) {
      const item = props.imageInfoList[0];
      const primalImage = `${ApiStorage}/${item.thumbPath}`;
      changeMainImage(primalImage);
      changeMainAlt(item.description);
    }
  }, [props.imageInfoList]);
    
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
