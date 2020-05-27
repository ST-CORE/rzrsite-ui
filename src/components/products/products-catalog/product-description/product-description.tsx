/* eslint-disable no-plusplus */
import React from 'react';
import './product-description.scss';
import Button from '../../../shared/buttons/button';
import * as buttonTypes from '../../../../consts/button-types';

interface ProductDescriptionProps {
  isMobile: boolean;
}

export default ({ isMobile }: ProductDescriptionProps) => {
  const myList = [
    {
      title: 'description',
      text: 'Описание',
      imageSource: '',
      imageAlt: '',
      figureCaption: '',
      selected: true,
    },
    {
      title: 'allFeatures',
      text: 'Полные характеристики',
      imageSource: '',
      imageAlt: '',
      figureCaption: '',
      selected: false,
    },
    {
      title: 'documentation',
      text: 'Документация',
      imageSource: '',
      imageAlt: '',
      figureCaption: '',
      selected: false,
    },
  ];
  
  const [itemIndex, setItemIndex] = React.useState(0);
  
  const selectItem = (index: number) => {
    myList.forEach((i) => {
      // eslint-disable-next-line no-param-reassign
      i.selected = false;
    });
    myList[index].selected = true;
    setItemIndex(index);
  };
  
  const classButton = isMobile ? buttonTypes.tabSwitchButtonMobile : buttonTypes.tabSwitchButton;
  const classActiveButton = `${classButton} active`;
  const buttons = myList.map((listItem, i) => (
    <Button
      key={i.toString()}
      className={itemIndex === i ? classActiveButton : classButton}
      label={listItem.text}
      clickHandler={() => selectItem(i)}
    />
  ));
  
  return (
    <div className={`product-description ${isMobile ? 'mobile' : 'desktop'}`}>
      <header>
        {buttons}
      </header>
      <section>
        {myList[itemIndex].text}
        <aside>
          <figure>
            <img src={myList[itemIndex].imageSource} alt={myList[itemIndex].imageAlt} />
            <figcaption>
              {myList[itemIndex].figureCaption}
            </figcaption>
          </figure>
        </aside>
      </section>
    </div>
  );
};
