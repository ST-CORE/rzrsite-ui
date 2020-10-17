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
                        <th key="-1">Характеристика</th>
                        {ftTbale.products.map(product => (
                            <th key={product.id}>{product.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {ftTbale.featuresByType.map((row, i) => {
                        return (
                            <tr key={i}>
                                <td key="-1">{row.featureTypeName}</td>
                                {row.features.map(cell => {
                                    return <td key={cell.id}>{cell.value}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
};
