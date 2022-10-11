import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Discount = () => {
  const [showText, setShowText] = useState(false);

  return (
    <section className="button-containers">
      <button className="btn" onClick={() => setShowText(!showText)}>
        Оформить заказ NSP с дисконтом-30%
        <br />
        Получить персональную консультацию
      </button>
      <CSSTransition
        in={showText}
        timeout={300}
        classNames="discount-transition"
        unmountOnExit
      >
        <section className="discount-section">
          <a href="https://es4341160.e-naturessunshine.com/">
            Оформить заказ с дисконтом -30% ЕС
          </a>

          <a href="https://nsp25.com/signup.php?sid=384241">
            Оформить заказ с дисконтом -30% Украина
          </a>
          <a href="https://nsp-sport.nsp.ua/phytoproducty-dlya-zdorovya/">
            Сайт с аннотациями
          </a>

          <a href="https://forms.gle/WnA3GxB2vk18mg1g9">
            Анкета для персональной консультации
          </a>
        </section>
      </CSSTransition>
    </section>
  );
};

export default Discount;
