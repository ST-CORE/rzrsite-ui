import React from 'react';
import './product-pictures.scss';
import { IImage, IVideo } from '../../../../../consts/interfaces-for-request';
import ModalPicture from '../../../../shared/modal-picture/modal-picture';
import { ApiStorage } from '../../../../../consts/api';

interface ProductPictureProps {
    imageInfoList: IImage[];
    videoInfoList: IVideo[];
}

export default ({ imageInfoList, videoInfoList }: ProductPictureProps) => {
  
  const firstPartPreviewLink = "//img.youtube.com/vi/";
  const lastPartPreviewLink = "/mqdefault.jpg";
  const youtubeButtonLink = "https://pngicon.ru/file/uploads/youtube-1.png";
  const firstPartVideoLink = "https://www.youtube.com/embed/";
  
  const [modalPicture, openModalPicture] = React.useState(false);
  const [modalVideo, openModalVideo] = React.useState(false);
  
  const video = videoInfoList[0];
  const shortImageList = imageInfoList != null ? imageInfoList.slice(0, 2): [];
  const videoId = video != null? video.url.split("=")[1] : "";
  const videoPreviewLink = video != null? firstPartPreviewLink + videoId + lastPartPreviewLink : "";
  const videoLink = video != null? firstPartVideoLink + videoId : "";
  const videoDescription = video != null? video.description : "";

  const [viewedImage, changeImage] = React.useState('');
  const [viewedImageAlt, changeAlt] = React.useState('');
  
  const openPicture = (a: IImage) => {
    changeImage(a.fullPath);
    changeAlt(a.description);
    openModalPicture(true);
  };
  
  const thumbImageList = shortImageList != null? shortImageList.map((item) => (
    <div key={'short_image_holder_'+ item.id} className="small-picture">
      <button type="button" onClick={() => openPicture(item)}>
        <img src={`${ApiStorage}/${item.thumbPath}`} alt={item.description} />
      </button>
    </div>
  )): <div></div>;
  
  return (
    <div className="product-pictures desktop">
      {thumbImageList}
      
      <div className="last-small-area">
        {video != null ? (
          <button type="button" onClick={() => openModalVideo(true)}>
            <img src={videoPreviewLink} alt={videoDescription} />
            <img src={youtubeButtonLink} alt="youtube button" className="inner"/>
          </button>
        ) : (
          imageInfoList.length >= 3 && (
            <button type="button" onClick={() => openPicture(imageInfoList[2])}>
              <img src={`${ApiStorage}/${imageInfoList[2].thumbPath}`} alt={imageInfoList[2].description} />
            </button>
            )
        )}
      </div>
      
      <div className="medium-picture">
        {imageInfoList.length && (
          <button type="button" onClick={() => openPicture(imageInfoList[0])}>
            <img src={`${ApiStorage}/${imageInfoList[0].thumbPath}`} alt={imageInfoList[0].description} />
          </button>
        )}
      </div>
        
      <ModalPicture modalState={modalPicture} closeModal={() => openModalPicture(false)} overlay description={viewedImageAlt}>
        <img className="full-image" src={`${ApiStorage}/${viewedImage}`} alt={viewedImageAlt} />
      </ModalPicture>
      
      <ModalPicture modalState={modalVideo} closeModal={() => openModalVideo(false)} overlay description={videoDescription}>
        <iframe src={videoLink}
          title={videoDescription}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </ModalPicture>
    </div>
  );
};
