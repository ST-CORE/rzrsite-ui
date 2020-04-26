import * as React from 'react';
import './showcase-item.scss';
import imgCrusher from '../../../../images/showcase/crusher-transparent.png';

export default () => (
  <div className="showcase-item crusher">
    <div className="image-container">
      <img src={imgCrusher} alt="Дробилка Резер ДС-2" />
    </div>
    <div className="showcase-item-description">
      <h1 className="big-title">Дробилки угля автоматические Rezer</h1>
      <div className="advantages">
        <ul>
          <li>
            Надёжность.
            <br />
            Регулируемая система &quot;Антиклин&quot;
          </li>
          <li>
            Лёгкая эксплуатация.
            <br />
            Необходим один оператор
          </li>
          <li>
            Мобильность.
            <br />
            Возможность установки в любом месте
          </li>
        </ul>
      </div>
      <div className="to-catalog">
        <ul>
          <li><a href=" ">Линейка DC-2</a></li>
        </ul>
        <a href=" " className="to-catalog-button">Перейти в каталог</a>
      </div>
    </div>
  </div>
);
