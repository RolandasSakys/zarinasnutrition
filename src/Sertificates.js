import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { CSSTransition } from "react-transition-group";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const Sertificates = ({ slides }) => {
  const [appearSertificates, setAppearSertificates] = useState(false);

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="sertificate-section">
      <button
        onClick={() => setAppearSertificates(!appearSertificates)}
        className="btn"
      >
        Cертификаты
      </button>
      <CSSTransition
        in={appearSertificates}
        timeout={300}
        classNames="sertificate-transition"
        unmountOnExit
      >
        <section className="sertificates">
          <div className="slider">
            <FaAngleDoubleLeft className="left-arrow" onClick={prevSlide} />
            <FaAngleDoubleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index, desc) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img src={slide.img} alt={desc} className="image" />
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </CSSTransition>
    </section>
  );
};

export default Sertificates;
