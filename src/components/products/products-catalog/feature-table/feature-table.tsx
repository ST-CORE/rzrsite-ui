/* eslint-disable no-plusplus */
import React from 'react';
import './feature-table.scss';
import { IFeatureTable } from '../../../../consts/interfaces-for-request';

interface IFeatureTableProps {
    featureTable: IFeatureTable;
}

export default ({ featureTable }: IFeatureTableProps) => {

    const ftTbale = featureTable;

    return (
        <div>
            <table className="feature-table">
                <thead>
                    <tr>
                        <th key={'feature_type_table_header'}>Характеристика</th>
                        {ftTbale.products.map((product, i) => (
                            <th key={'feature_type_table_header_'+product.id + '_' + product.id + '_' + i}>{product.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {ftTbale.featuresByType.map((row, i) => {
                        return (
                            <tr key={"feature_type_table_"+row.featureTypeId}>
                                <td key={"feature_type_row_"+row.featureTypeId+'_'+i}>{row.featureTypeName}</td>
                                {row.features.map((cell,j) => {
                                    return <td key={'feature_type_cell_' +  cell.id + '_' + row.featureTypeId + '_' + i  + '_' + j}>{cell.value}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
};
