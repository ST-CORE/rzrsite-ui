import React from 'react';
import { IFeatureTable, IProduct } from '../../../../../consts/interfaces-for-request';
import './feature-table.scss';

interface IFeatureTableShort {
  featureTable: IFeatureTable;
  currentProduct: IProduct;
}

export default ({ featureTable, currentProduct }: IFeatureTableShort) => {

  //console.log(featureTable, currentProduct);


  const productIndex = featureTable?.products?.findIndex(x => x.id == currentProduct.id) ?? -1;
  if (productIndex == -1) return null;

  const productDesc = featureTable?.featuresByType.slice(0, 7) ?? [];
  
  return (
    <div className="feature-table">

      {productDesc.map((row, i) => {

        return (
          <ul key={"feature_" + currentProduct.id + "_" + row.featureTypeId + "_" + i }>
            <li key={"featurename_"+ currentProduct.id+ "_" +row.featureTypeId + "_" + i}>{row.featureTypeName}</li>
            <li key={"featurevalue_"+ currentProduct.id+ "_" +row.featureTypeId + "_" + row.features[productIndex].id + "_" + i}>{row.features[productIndex].value} </li>
          </ul>
        )
      })}     
    </div>
  );
};
