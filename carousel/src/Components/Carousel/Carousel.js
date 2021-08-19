import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { VscCircleFilled, VscCircleOutline } from "react-icons/vsc";
import "./Carousel.css";

import data from "../../data";

const Carousel = () => {
  const [slides, setSlides] = useState(data);
  const [activeSlide, setActiveSlide] = useState(0);
  const { image, name, title, quote } = slides[activeSlide];

  const checkSlideIsValid = (number) => {
    if (number > slides.length - 1) {
      return 0;
    } else if (number < 0) {
      return slides.length - 1;
    } else {
      return number;
    }
  };

  const nextSlide = () => {
    setActiveSlide((prev) => {
      let currentSlide = prev;
      return checkSlideIsValid(currentSlide + 1);
    });

    return;
  };

  const prevSlide = () => {
    setActiveSlide((prev) => {
      let currentSlide = prev;
      return checkSlideIsValid(currentSlide - 1);
    });

    return;
  };

  const moveToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="carousel">
      <div className="container">
        <div className="carousel-img">
          <img src={image} alt="slide" />
        </div>
        <div className="content">
          <h1>{name}</h1>
          <h3>{title}</h3>
          <p>{quote}</p>
        </div>
        <div className="arrows">
          <div className="arrow arrow-left" onClick={prevSlide}>
            <AiOutlineLeft />
          </div>
          <div className="arrow arrow-right" onClick={nextSlide}>
            <AiOutlineRight />
          </div>
        </div>
        <div className="indicators">
          {slides.map((slide, index) => {
            console.log(index, activeSlide);
            if (index === activeSlide) {
              return <VscCircleFilled />;
            } else {
              return <VscCircleOutline onClick={() => moveToSlide(index)} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
