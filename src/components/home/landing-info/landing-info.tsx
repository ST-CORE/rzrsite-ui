import * as React from 'react';
import './landing-info.scss';
import VideoRezer from '../../shared/video/videoRezer';

interface LandingInfoProps {
  mobile: boolean,
}

export default ({ mobile }: LandingInfoProps) => {
  const className = mobile ? 'mobile' : 'container-small desktop';
  return (
    <div className={`landing-info ${className}`}>
      <div className="why-us">
        <h2>Почему стоит выбрать Rezer?</h2>
        <ul>
          <li>Полный цикл производства от А до Я</li>
          <li>Продажа без посредников</li>
          <li>Низкая цена</li>
          <li>Быстрые поставки</li>
        </ul>
      </div>
      <div className="video-block">
        <h2>Наше производство</h2>
        <div className="video">
          <VideoRezer />
        </div>
      </div>
    </div>
  );
};
