import React from 'react';
import './product-description.scss';
import Button from '../../shared/button/button';
import * as buttonClassName from '../../../consts/button-types';

export default () => {
  const description = {
    text: 'ghjjghj',
    imageSource: '',
    imageAlt: '',
    figureCaption: '',
  };
  
  const allFeatures = {
    text: 'trrr',
    imageSource: '',
    imageAlt: '',
    figureCaption: '',
  };
  
  const documentation = {
    text: 'sss',
    imageSource: '',
    imageAlt: '',
    figureCaption: '',
  };
  
  const [bookmark, openBookmark] = React.useState(description);
  
  return (
    <div className="product-description">
      <header>
        <Button className={`${buttonClassName.productDescriptButton} active`} label="Описание" clickHandler={() => openBookmark(description)} />
        <Button className={buttonClassName.productDescriptButton} label="Полные характеристики" clickHandler={() => openBookmark(allFeatures)} />
        <Button className={buttonClassName.productDescriptButton} label="Документация" clickHandler={() => openBookmark(documentation)} />
      </header>
      <section>
        {bookmark.text}
        
        <aside>
          <figure>
            <img src={bookmark.imageSource} alt={bookmark.imageAlt} />
            <figcaption>
              {bookmark.figureCaption}
            </figcaption>
          </figure>
        </aside>
      </section>
    </div>
  );
};
