import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Marafon = () => {
  const [showText, setShowText] = useState(false);

  return (
    <section className="button-containers">
      <button className="btn" onClick={() => setShowText(!showText)}>
        Mарафоны
      </button>

      <CSSTransition
        in={showText}
        timeout={300}
        classNames="marafon-transition"
        unmountOnExit
      >
        <section className="marafon-section">
          <ul>
            <li>Реабилитация ЖКТ</li>
            <li>Детокс 14</li>
            <li>Чистая лимфа - здоровый иммунитет</li>
            <li>Здоровье печени</li>
            <li>Противопаразитарный</li>
            <li>Антистресс</li>
          </ul>
          <br />
          <p>
            Маpафoны проходят циклично, на постоянной основе. О ближайшем
            марафоне уточните персонально
          </p>
        </section>
      </CSSTransition>
    </section>
  );
};

export default Marafon;
