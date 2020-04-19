/* eslint-disable max-len */
import * as React from 'react';
import './delivery.scss';
import { CSSTransition } from 'react-transition-group';
import Button from '../shared/button/button';
import * as buttonClassName from '../../consts/button-types';
import AnyQuestions from '../shared/any-questions/any-questions';

export default () => {
  const [state, setState] = React.useState('guide');
  const [transitioning, setTransitioning] = React.useState(false);
  return (
    <div className="delivery-page container-small">
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
      
      <section className="how-to-make-order">
        <Button className={buttonClassName.transparentButton} clickHandler={() => { setState('guide'); setTransitioning(true); }} label="Как сделать заказ?" />
        <Button className={buttonClassName.transparentButton} clickHandler={() => { setState('questions'); setTransitioning(true); }} label="Остались вопросы?" />
        <CSSTransition in={((state === 'guide') && (transitioning === false))} timeout={800} classNames="carousel" onExited={() => setTransitioning(false)} unmountOnExit>
          <div className="guide">
            <ol className="bold-counters-list">
              <li>
                Вы связываетесь с нашим менеджером, выбираете интересующую вас модель и/или дополнительные опции;
              </li>
              <li>
                Менеджер высылает Вам счёт на оплату вместе с нашими реквизитами;
              </li>
              <li>
                Вы оплачиваете необходимую сумму по расчётному счёту в банке, или переводом через сбербанк онлайн;
              </li>
              <li>
                Менеджер подтверждает Ваш заказ и указывает сроки отгрузки продукции вместе с сопроводительными документами;
              </li>
              <li>
                При готовности продукции с Вами согласовывается вариант отправки и, после отправки, менеджер высылает вам номер транспортной накладной, по которой вы можете отслеживать свою покупку.
              </li>
            </ol>
          </div>
        </CSSTransition>
        <CSSTransition in={((state === 'questions') && (transitioning === false))} timeout={800} classNames="carousel" onExited={() => setTransitioning(false)} unmountOnExit>
          <AnyQuestions />
        </CSSTransition>
      </section>
    </div>
  );
};
