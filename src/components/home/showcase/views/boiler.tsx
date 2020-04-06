import * as React from 'react';
import './boiler.scss';

export default () => (
  <div className="showcase-item boiler">
    <div className="showcase-item-description">
      <h1 className="big-title">Твердотопливные котлы Rezer</h1>
      <div className="advantages">
        <ul>
          <li>
            Высокая эффективность.
            <br />
            (КПД 85-90%)
          </li>
          <li>
            Полная автономность
            <br />
            котла
          </li>
          <li>
            Легкость
            <br />
            обслуживания
          </li>
        </ul>
      </div>
      <div className="to-catalog">
        <ul>
          <li><a href=" ">Линейка Fit</a></li>
          <li><a href=" ">Линейка Maxi</a></li>
        </ul>
        <a href=" " className="to-catalog-button">Перейти в каталог</a>
      </div>
    </div>
  </div>
);
