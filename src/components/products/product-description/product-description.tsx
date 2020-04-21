/* eslint-disable no-plusplus */
import React from 'react';
import './product-description.scss';
import Button from '../../shared/buttons/button';
import * as buttonClassName from '../../../consts/button-types';

export default () => {
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
  
  const classButton = buttonClassName.productDescriptionButton;
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
    <div className="product-description">
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
