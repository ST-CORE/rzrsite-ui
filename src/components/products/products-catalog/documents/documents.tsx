/* eslint-disable no-plusplus */
import React from 'react';
import './documents.scss';
import { IProductLineDocument } from '../../../../consts/interfaces-for-request';
import { ApiStorage } from '../../../../consts/api';
import docImage from './../../../../images/doc.png';

interface IDocumentsProps {
    documents: IProductLineDocument[];
}

export default ({ documents }: IDocumentsProps) => {

    const lineDocuments = documents;

    return (
        <div className="full-width" >
            <div className="row">
                {lineDocuments.map((row, i) => {
                    return (
                        <a target="_blank" href={`${ApiStorage}/${row.filePath}`}>
                            <div key={i} className="document-item col-md-6">
                                <span className="image"><img className="document-item__image" src={docImage} /></span>
                                <span className="text">{row.description}</span>
                            </div>
                        </a>
                    )
                })}                
            </div>
        </div>
    );
};
