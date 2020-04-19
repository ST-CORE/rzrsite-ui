/* eslint-disable max-len */
import * as React from 'react';
import './pay-and-delivery.scss';

export default () => (
  <section className="pay-and-delivery">
    <h1>Оплата и доставка</h1>
    <p>
      Оплатить продукцию можно несколькими способами:
    </p>
    <ul className="blue-bullets-list">
      <li>
        Наличными средствами (переводом на расчетный счет или банковскую карту),
      </li>
      <li>
        Переводом на расчетный счет с НДС,
      </li>
      <li>
        Переводом на расчетный счет без НДС,
      </li>
    </ul>
    <h2>Доставка</h2>
    <p>
      Доставка заказов осуществляется одним из следующих способов:
      
    </p>
    <ul className="blue-bullets-list">
      <li>
        Грузовой машиной с манипулятором (в пределах г. Красноярска и пригорода),
      </li>
      <li>
        Отправка транспортной компанией (Деловые линии, ПЭК, Байкал-Сервис),
      </li>
      <li>
        Самовывоз со склада по адресу г. Красноярск, пгт. Берёзовка ул. Щорса 8\14,
      </li>
    </ul>
    <p>
      Доставка транспортной компанией и грузовой машиной с манипулятором оплачивается покупателем при получении.
    </p>
  </section>
);
