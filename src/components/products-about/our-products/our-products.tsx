/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import './our-products.scss';
import Button from '../../shared/buttons/button';
import * as byttonTypes from '../../../consts/button-types';
import imageFit from '../../../images/products/boilers/boiler-large.png';
import imageMaxi from '../../../images/products/boilers/boilerMaxi150-large.png';
import imageCrusher from '../../../images/products/crusher-large.png';

export default () => (
  <article className="our-products">
    <h1>
      Наша продукция
    </h1>
    
    <section className="chapter">
      <section>
        <p>
          Компания Rezer производит котлы отопления с 2013 года.
          Сейчас у нас в продаже есть две линейки котлов и одна линейка дробилок угля. Оборудование внутри линеек различается мощностью,
          размером и другими техническими характеристиками, чтобы вы могли подобрать для себя аппарат, идеально подходящий под ваши нужды.
          Мы постоянно развиваем наше производство, разрабатывая и улучшая новые линейки оборудования. Мы работаем, чтобы вам было тепло!
        </p>
      </section>  
      
      <h2>
        Котлы отопления
      </h2>
      
      <div className="grid-block">
        <section className="about-product-lines grid-item">
          <Link to="/products/boilers/Fit" className="image-container image-link">
            <img src={imageFit} alt="Котел Fit" />
          </Link>
          <p>
            <Link to="/products/boilers/Fit" className="text-link">Линейка Fit</Link>
            {' '}
            отличается небольшими габаритами и полной автономностью. Эти котлы прекрасно подойдут для отопления помещений меньше 460 кв.м.
          </p>
          <p>
            В них установлены две камеры сжигания топлива — для ручного и для автоматического сжигания; 
            водонаполненные колосники входят в базовую комплектацию. Рабочая фракция топлива — уголь &ldquo;орех&rdquo; 25-50 мм.
            Однако, благодаря фирменной системе анти-клин, крупные фракции угля (до +30% от фракции &ldquo;орех&rdquo;) не создают помех в работе.
          </p>
        </section>
        
        <section className="about-product-lines grid-item">
          <Link to="/products/boilers/Maxi" className="image-container image-link">
            <img src={imageMaxi} alt="Котел Maxi" />
          </Link>
          <p>
            <Link to="/products/boilers/Maxi" className="text-link">Линейка Maxi</Link>
            {' '}
            разнообразнее по размерам: от котлов для небольших помещений (до 140 кв.м) до автоматических котельных
            в производственные помещения с площадью 2500 кв.м. 
          </p>
          <p>
            Эта линейка отличается низким потреблением топлива; рабочая фракция — уголь &ldquo;орех&rdquo; 25-50 мм.
            В них также установлена система анти-клин, благодаря которой более крупные фракции угля (до +30% от фракции &ldquo;орех&rdquo;) 
            не забивают топливный бункер.
          </p>
        </section>
      </div>
      
      <h2>
        Дробилки угля
      </h2>
      
      <section className="about-product-lines grid-block">
        <Link to="/products/crushers" className="image-link grid-item image-container">
          <img src={imageCrusher} alt="Дробилка DC" />
        </Link>
        <div className="grid-item">
          <p>
            <Link to="/products/crushers" className="text-link">Линейка DC</Link> 
            {' '}
            представлена одной моделью DC-2. Она предназначена для дробления угля и отходов производства, в которых
            размер кусков не более 25 см. На аппарате 
            установлена регулируемая система Антиклин и дробящий вал с распределённой 
            нагрузкой на ножи. Они обеспечивают бесперебойную работы, даже если сырье неоднородно по размеру кусков. 
            Размер итоговых частиц не более 35 мм, что соответствует фракции угля &ldquo;семечка&rdquo;.
          </p>
          <p>
            Благодаря небольшим размерам дробилку DC-2 можно установить в любом месте, она мобильная и легка в эксплуатации 
            — для работы необходим один оператор.
          </p>
        </div>
      </section>
    </section>
    
    <div className="button-block">
      <Button label="Скачать документацию по котлам Rezer" clickHandler="" className={byttonTypes.blueButton} />
      <Button label="Скачать документацию по дробилкам Rezer" clickHandler="" className={byttonTypes.blueButton} />
    </div>
  </article>
);
