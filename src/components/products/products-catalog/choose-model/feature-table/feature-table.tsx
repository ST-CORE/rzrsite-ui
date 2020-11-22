import React from 'react';
import { IFeatureTable, IProduct } from '../../../../../consts/interfaces-for-request';
import './feature-table.scss';

interface IFeatureTableShort {
  featureTable: IFeatureTable;
  currentProduct: IProduct;
}

export default ({ featureTable, currentProduct }: IFeatureTableShort) => {

  console.log(featureTable, currentProduct);

  const productIndex = featureTable?.products?.find(x => x.id == currentProduct.id)?.id ?? -1;

  const productDesc = featureTable?.featuresByType.slice(0, 5) ?? [];
 
  return (
    <div className="feature-table">

      {productDesc.map((row, i) => {
        return (
          <ul key={i}>
            <li key="-1">{row.featureTypeName}</li>
            <li key={row.features[productIndex].id}>{row.features[productIndex].value}</li>
          </ul>
        )
      })}     
    </div>
  );
};
