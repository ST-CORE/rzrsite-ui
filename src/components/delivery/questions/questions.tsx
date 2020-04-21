/* eslint-disable max-len */
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import './questions.scss';
import Button from '../../shared/buttons/button';
import * as buttonClassName from '../../../consts/button-types';
import AnyQuestions from '../../shared/any-questions/any-questions';

export default () => {
  const [tab, setTab] = React.useState('guide');
  const [transitioning, setTransitioning] = React.useState(false);
  const classButton = buttonClassName.transparentButton;
  const activeClassName = `${classButton} active`;
  const switchTab = (i: string) => {
    setTab(i);
    setTransitioning(true);
  };
  const guideTab: boolean = ((tab === 'guide') && (transitioning === false));
  const questionsTab: boolean = ((tab === 'questions') && (transitioning === false));

  return (
    <section className="questions">
      <Button className={(tab === 'guide') ? activeClassName : classButton} clickHandler={() => switchTab('guide')} label="Как сделать заказ?" />
      <Button className={(tab === 'questions') ? activeClassName : classButton} clickHandler={() => switchTab('questions')} label="Остались вопросы?" />
      <CSSTransition in={guideTab} timeout={200} classNames="carousel" onExited={() => setTransitioning(false)} unmountOnExit>
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
      <CSSTransition in={questionsTab} timeout={200} classNames="carousel" onExited={() => setTransitioning(false)} unmountOnExit>
        <AnyQuestions />
      </CSSTransition>
    </section>
  );
};
