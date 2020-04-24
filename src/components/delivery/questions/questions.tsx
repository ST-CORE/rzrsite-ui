/* eslint-disable max-len */
import * as React from 'react';
import './questions.scss';
import Button from '../../shared/buttons/button';
import * as buttonClassName from '../../../consts/button-types';
import AnyQuestions from '../../shared/any-questions/any-questions';

export default () => {
  const [tab, setTab] = React.useState('guide');
  const classButton = buttonClassName.tabSwitchButton;
  const activeClassName = `${classButton} active`;
  const switchTab = (i: string) => setTab(i);

  return (
    <section className="questions">
      <header>
        <Button className={(tab === 'guide') ? activeClassName : classButton} clickHandler={() => switchTab('guide')} label="Как сделать заказ?" />
        <Button className={(tab === 'questions') ? activeClassName : classButton} clickHandler={() => switchTab('questions')} label="Остались вопросы?" />
      </header>

      {(tab === 'guide') && (
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
      )}

      {(tab === 'questions') && <AnyQuestions />}
        
    </section>
  );
};
