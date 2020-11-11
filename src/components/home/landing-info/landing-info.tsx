import * as React from 'react';
import './landing-info.scss';

interface LandingInfoProps {
  mobile: boolean,
}

export default ({ mobile }: LandingInfoProps) => {
  const className = mobile ? 'mobile' : 'container-small desktop';
  return (
    <div className={`landing-info ${className}`}>
      <div className="why-us">
        <h2>Почему стоит выбрать Rezer?</h2>
        <ul>
          <li>Полный цикл производства от А до Я</li>
          <li>Продажа без посредников</li>
          <li>Низкая цена</li>
          <li>Быстрые поставки</li>
        </ul>
      </div>
      <div className="why-us">
        <h2>Наше производство</h2>
        <ul>
          <li>Более 10 000 проданных котлов за год</li>
          <li>Сотни положительных отзывов</li>
          <li>Точки продаж по всё России</li>
          <li>Гарантия на всю продукцию</li>
        </ul>
      </div>
    </div>
  );
};
