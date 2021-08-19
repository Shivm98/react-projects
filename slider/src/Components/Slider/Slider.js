import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./Slider.css";
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpg";

const Slider = () => {
  const [images, setImages] = useState([one, two, three]);
  const [counter, setCounter] = useState(0);

  const styles = {
    transform: `translateX(${-1 * (counter * 700)}px)`,
  };

  const checkSlideIsValid = (number) => {
    if (number > images.length - 1) {
      return images.length - 1;
    } else if (number < 0) {
      return 0;
    } else {
      return number;
    }
  };

  const prevSlide = () => {
    setCounter((prev) => {
      let currentCounter = prev;
      return checkSlideIsValid(currentCounter - 1);
    });
  };
  const nextSlide = () => {
    setCounter((prev) => {
      let currentCounter = prev;
      return checkSlideIsValid(currentCounter + 1);
    });
  };

  console.log(counter);

  return (
    <div className="slider">
      <div className="container">
        <div className="slider-img">
          {images.map((image, index) => {
            return <img src={image} alt={image} style={styles} />;
          })}
        </div>
        <div className="arrows">
          <div className="arrow arrow-left" onClick={prevSlide}>
            <AiOutlineLeft />
          </div>
          <div className="arrow arrow-right" onClick={nextSlide}>
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
