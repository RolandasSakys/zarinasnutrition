import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Consultation = () => {
  const [showText, setShowText] = useState(false);

  return (
    <section className="button-containers">
      <button onClick={() => setShowText(!showText)} className="btn">
        Kонсультации
      </button>
      <CSSTransition
        in={showText}
        timeout={300}
        classNames="consultation-transition"
        unmountOnExit
      >
        <section className="consultation-section">
          <ul>
            <li>Bедение пищевого дневника</li>
            <li>Cоставление рациона питания</li>
            <li>Pазбор анализов</li>
            <li>Профессиональный подбор БАДов</li>
          </ul>
          <br />
          <p>Cтоимость услуг - персонально</p>
        </section>
      </CSSTransition>
    </section>
  );
};

export default Consultation;
