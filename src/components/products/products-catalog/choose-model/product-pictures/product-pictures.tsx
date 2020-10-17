import React from 'react';
import './product-pictures.scss';
import Modal from '../../../../shared/modal/modal';
import { IImage } from '../../../../../consts/interfaces-for-request';
import { ApiUrl, ApiStorage } from '../../../../../consts/api';

// import imageSmallBoiler from '../../../../../images/products/boilers/small-boiler.png';
// import imageMediumBoiler from '../../../../../images/products/boilers/medium-boiler.png';
// import imageLargeBoiler from '../../../../../images/products/boilers/boiler-large.png';
// import imageFit20Large from '../../../../../images/products/boilers/Fit20-large.jpg';

// export default () => {
//   const imgs = {
//     image1: {
//       imgSmall: imageSmallBoiler,
//       alt: 'Rezer',
//       imgBig: imageLargeBoiler,
//     },
//     image2: {
//       imgSmall: imageSmallBoiler,
//       alt: 'Rezer',
//       imgBig: imageLargeBoiler,
//     },
//     image3: {
//       imgSmall: imageSmallBoiler,
//       alt: 'Rezer',
//       imgBig: imageLargeBoiler,
//     },
//     image4: {
//       imgSmall: imageMediumBoiler,
//       alt: 'Rezer Fit-20',
//       imgBig: imageFit20Large,
//     },
//   };
  
//   const [modal, openModal] = React.useState(false);
//   const [viewedImage, changeImage] = React.useState('');
//   const [viewedImageAlt, changeAlt] = React.useState('');
  
//   const openPicture = (a: object) => {
//     changeImage(a.imgBig);
//     changeAlt(a.alt);
//     openModal(true);
//   };
  
//   return (
//     <div className="product-pictures desktop">
//       <div className="small-picture"><button type="button" onClick={() => openPicture(imgs.image1)}><img src={imgs.image1.imgSmall} alt={imgs.image1.alt} /></button></div>
//       <div className="small-picture"><button type="button" onClick={() => openPicture(imgs.image2)}><img src={imgs.image2.imgSmall} alt={imgs.image2.alt} /></button></div>
//       <div className="small-picture"><button type="button" onClick={() => openPicture(imgs.image3)}><img src={imgs.image3.imgSmall} alt={imgs.image3.alt} /></button></div>
//       <div className="medium-picture"><button type="button" onClick={() => openPicture(imgs.image4)}><img src={imgs.image4.imgSmall} alt={imgs.image4.alt} /></button></div>
      
//       <Modal modalState={modal} closeModal={() => openModal(false)} overlay>
//         <img src={viewedImage} alt={viewedImageAlt} />
//       </Modal>
//     </div>
//   );
// };

interface ProductPictureProps {
  imageInfoList: IImage[];
}

export default ({ imageInfoList }: ProductPictureProps) => {
  const [modal, openModal] = React.useState(false);
  const shortImageList = imageInfoList.slice(0, 3);

  const [viewedImage, changeImage] = React.useState('');
  const [viewedImageAlt, changeAlt] = React.useState('');
  
  const openPicture = (a: IImage) => {
    changeImage(a.fullPath);
    changeAlt(a.description);
    openModal(true);
  };
  
  const thumbImageList = shortImageList.map((item) => (
    <div className="small-picture">
      <button type="button" onClick={() => openPicture(item)}>
        <img src={`${ApiStorage}/${item.thumbPath}`} alt={item.description} />
      </button>
    </div>
  ));
  
  return (
    <div className="product-pictures desktop">
      {thumbImageList}
      <div className="medium-picture">
        {imageInfoList.length && (
          <button type="button" onClick={() => openPicture(imageInfoList[0])}>
            <img src={`${ApiStorage}/${imageInfoList[0].thumbPath}`} alt={imageInfoList[0].description} />
          </button>
        )}
      </div>
      
      <Modal modalState={modal} closeModal={() => openModal(false)} overlay>
        <img className="full-image" src={`${ApiStorage}/${viewedImage}`} alt={viewedImageAlt} />
      </Modal>
    </div>
  );
};
