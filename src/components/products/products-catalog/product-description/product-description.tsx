/* eslint-disable no-plusplus */
import React from 'react';
import './product-description.scss';
import Button from '../../../shared/buttons/button';
import * as buttonTypes from '../../../../consts/button-types';
import { IFeatureTable, IProductLineDocument } from '../../../../consts/interfaces-for-request';
import FeatureTable from '../feature-table/feature-table';
import Documents from '../documents/documents';

interface ProductDescriptionProps {
  isMobile: boolean;
  featureTable: IFeatureTable;
  documents: IProductLineDocument[];
  description?: string;
}

enum DescriptionType {
  Text,
  FeatureTable,
  Documents
}

export default ({ isMobile, featureTable, documents, description }: ProductDescriptionProps) => {
  const myList = [
    {
      title: 'description',
      text: 'Описание',
      imageSource: '',
      imageAlt: '',
      figureCaption: '',
      selected: true,
      type: DescriptionType.Text,
      showDocuments: false
    },
    {
      title: 'allFeatures',
      text: 'Полные характеристики',
      imageSource: '',
      imageAlt: '',
      figureCaption: '',
      selected: false,
      type: DescriptionType.FeatureTable,
      showDocuments: false
    },
    {
      title: 'documentation',
      text: 'Документация',
      imageSource: '',
      imageAlt: '',
      figureCaption: '',
      selected: false,
      type: DescriptionType.Documents,
      showDocuments: true
    },
  ];

  const ftTable = featureTable;
  const lineDocuments = documents;

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
      key={"product_button_"+i}
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
        {myList[itemIndex].type == DescriptionType.Text && (
          <div className="description-markup" dangerouslySetInnerHTML={{__html: description ?? ''}} />
        )}
        {myList[itemIndex].type == DescriptionType.FeatureTable && (
          <FeatureTable featureTable={ftTable} />
        )}
        {myList[itemIndex].type == DescriptionType.Documents && (
          <Documents documents={lineDocuments} />
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
