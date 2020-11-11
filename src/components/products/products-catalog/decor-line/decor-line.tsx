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
  const defaultLine = prodlines[0];
  const currentProdline = params.line ? params.line : defaultLine.path;
  const matchedProdlineIndex = prodlines.findIndex((item) => item.path.includes(currentProdline));
  const matchedId = prodlines[matchedProdlineIndex].id;

  React.useEffect(() => {
    allowRender(false);
    axios.get(`${ApiUrl}/productLine/${matchedId}/advantage`)
      .then((response) => {
        const result = response.data as IAdvantage[];
        if (result){
          result.forEach((item) => {
            axios.get(`${ApiStorage}/${item.icon}`).then((res) => Object.assign(item, { image: res.data }));          
          });        
          setAdvantages(result);
        }        
        allowRender(true);
      });
  }, [matchedId]);  
  const sortedList = arrayOfAdvantages.slice(0, 4);
  sortedList.sort((a, b) => (a.weight - b.weight));
  const listOfAdvantages = sortedList.map((item) => (
    <li key={item.weight}>
      <img className="icon" src={`${ApiStorage}/${item.icon}`} alt={item.icon} />
      <span dangerouslySetInnerHTML={{ __html: item.title }} />
    </li>
  ));
  return (
    (
      <div className="decor-line">
        <ul>
          {listOfAdvantages}
        </ul>
      </div>
    )
  );
};
