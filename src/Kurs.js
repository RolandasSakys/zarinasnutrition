import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Kurs = () => {
  const [showText, setShowText] = useState(false);

  return (
    <section className="button-containers">
      <button
        href="#kurs"
        className="btn"
        onClick={() => setShowText(!showText)}
      >
        Kурсы нутрициологии <br />
        Дополнительные возможности для специалистов индустрии красоты и спорта
      </button>
      <CSSTransition
        in={showText}
        timeout={300}
        classNames="kurs-transition"
        unmountOnExit
      >
        <section className="kurs-section" id="kurs">
          <p>
            Чтоб стать экспертом в сфере здорового образа жизни, сейчас есть
            возможность получить доступ к архиву записей курсов со скидкой -50%
          </p>
          <br />
          <p>
            🔸четыре курса нутрициологии, основы нутрициологии (пятидневные);
          </p>
          <br />
          <p>🔸семь конференций</p>
          <br />
          <ul>
            <li>Здоровье сердца и сосудов</li>
            <li>Здоровье нервной системы</li>
            <li>Женское здоровье</li>
            <li>Коррекция веса и правильное питание</li>
            <li>Здоровье желудочно-кишечного тракта</li>
            <li>Пульмонология - здоровье дыхательной системы</li>
          </ul>

          <br />
          <p>
            С выдачей сертификата и доступом ко всем презентациям! Доступ на 12
            месяцев - 49$ (вместо 99$) Доступ на 6 месяцев - 19$ (вместо 49$)
          </p>

          <p>Все подробности уточняйте персонально</p>
        </section>
      </CSSTransition>
    </section>
  );
};

export default Kurs;
