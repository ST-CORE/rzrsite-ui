/* eslint-disable no-plusplus */
import React from 'react';
import './product-description.scss';
import Button from '../../../shared/buttons/button';
import * as buttonTypes from '../../../../consts/button-types';
import { IFeatureTable } from '../../../../consts/interfaces-for-request';
import FeatureTable from '../feature-table/feature-table';

interface ProductDescriptionProps {
  isMobile: boolean;
  featureTable: IFeatureTable;
}

export default ({ isMobile, featureTable }: ProductDescriptionProps) => {
  const myList = [
    {
      title: 'description',
      text: 'Описание',
      imageSource: '',
      imageAlt: '',
      figureCaption: '',
      selected: true,
      showFeatureTable: false
    },
    {
      title: 'allFeatures',
      text: 'Полные характеристики',
      imageSource: '',
      imageAlt: '',
      figureCaption: '',
      selected: false,
      showFeatureTable: true
    },
    {
      title: 'documentation',
      text: 'Документация',
      imageSource: '',
      imageAlt: '',
      figureCaption: '',
      selected: false,
      showFeatureTable: false
    },
  ];

  const ftTable = featureTable;
  console.log(ftTable);

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
        {myList[itemIndex].showFeatureTable ? (
          <FeatureTable featureTable={ftTable} />
        ) : (
            myList[itemIndex].text
          )}
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
