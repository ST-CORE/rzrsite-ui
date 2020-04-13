import React from 'react';
import './feature-table.scss';

export default () => {
  const anyValue: string = '564 кВт';
  return (
    <div className="feature-table">
      <ul>
        <li>
          Номинальная мощность:
        </li>
        <li>{anyValue}</li>
      </ul>
      <ul>
        <li>Масса котла:</li>
        <li>{anyValue}</li>
      </ul>
      <ul>
        <li>КПД котла:</li>
        <li>{anyValue}</li>
      </ul>
      <ul>
        <li>Емкость топливного бункера:</li>
        <li>{anyValue}</li>
      </ul>
      <ul>
        <li>Топливо основное:</li>
        <li>{anyValue}</li>
      </ul>
      <div><a href="|">Полные характеристики</a></div>
    </div>
  );
};
