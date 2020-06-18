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
  const [arrayOfAdvantages, setAdvantages] = React.useState([] as IAdvantage[]);
  const [renderPermission, allowRender] = React.useState(false);
  const params = useParams() as IParams;
  const currentProdline = params.line;
  const matchedProdlineIndex = prodlines.findIndex((item) => item.path.includes(currentProdline));
  const matchedId = prodlines[matchedProdlineIndex].id;
  
  console.log('prodlines', prodlines);
  React.useEffect(() => {
    allowRender(false);
    axios.get(`${ApiUrl}/productLine/${matchedId}/advantage`)
      .then((response) => {
        const result = response.data as IAdvantage[];
        result.forEach((item) => {
          axios.get(`${ApiStorage}/${item.icon}`)
            .then((res) => Object.assign(item, { image: res.data }));
          console.log('item', item);
        });
        console.log('result', result);
        setAdvantages(result);
        allowRender(true);
      });
  }, [matchedId]);
  console.log('arrayOfAdvantages', arrayOfAdvantages);
  const sortedList = arrayOfAdvantages.slice(0, 4);
  sortedList.sort((a, b) => (a.weight - b.weight));
  const listOfAdvantages = sortedList.map((item) => (
    <li key={item.weight}>
      <img className="icon" src={`${ApiStorage}/${item.icon}`} alt={item.icon} />
      <span dangerouslySetInnerHTML={{ __html: item.title }} />
    </li>
  ));
  return (
    renderPermission && (
    <div className="decor-line">
      <ul>
        {listOfAdvantages}
      </ul>
    </div>
    )
  );
};
