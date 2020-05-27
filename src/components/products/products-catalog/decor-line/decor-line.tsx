import React from 'react';
import './decor-line.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { IProdLine, IParams, IAdvantage } from '../../../../consts/interfaces-for-request';
import { ApiUrl, ApiStorage } from '../../../../consts/api';

interface DecorLineProps {
  prodlines: IProdLine[];
}

export default ({ prodlines }: DecorLineProps) => {
  const [arrayOfAdvantages, setAdvantages] = React.useState();
  const params = useParams() as IParams;
  const currentProdline = params.line;
  const matchedProdlineId = prodlines.findIndex((item) => item.path.includes(currentProdline));
  
  console.log(prodlines);
  React.useEffect(() => {
    // axios.get(`${ApiUrl}/productLine/${matchedProdlineId}/advantage`)
    //   .then((response) => {
    //     const result = response.data as IAdvantage[];
    //     // result.forEach((item) => axios.get(`${ApiStorage}/${item.icon}`)
    //     //   .then((res) => Object.assign(item, { image: res.data })));
    //     console.log(result);
    //   });
  }, [matchedProdlineId]);
  return (
    <div className="decor-line">
      <ul>
        <li>
          Высокая эффективность
          <br />
          (КПД 85-90%)
        </li>
        <li>
          Две камеры сжигания
          <br />
          топлива
        </li>
        <li>
          Легкость
          <br />
          обслуживания
        </li>
        <li>
          Полная автономность
          <br />
          котла
        </li>
      </ul>
    </div>
  );
};
