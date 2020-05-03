/* eslint-disable max-len */
import * as React from 'react';
import './questions-mobile.scss';
import Button from '../../shared/buttons/button';
import * as buttonClassName from '../../../consts/button-types';
import AnyQuestionsMobile from '../../shared/any-questions/any-questions-mobile';

export default () => {
  const [tab, setTab] = React.useState('guide');
  const classButton = buttonClassName.tabSwitchButtonMobile;
  const activeClassName = `${classButton} active`;

  return (
    <section className="questions mobile">
      <header>
        <Button className={(tab === 'guide') ? activeClassName : classButton} clickHandler={() => setTab('guide')} label="Как сделать заказ?" />
        <Button className={(tab === 'questions') ? activeClassName : classButton} clickHandler={() => setTab('questions')} label="Остались вопросы?" />
      </header>

      {(tab === 'guide') && (
        <div className="guide">
          <ol className="regular-counters-list">
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
      )}

      {(tab === 'questions') && <AnyQuestionsMobile />}
        
    </section>
  );
};
