import React, { useRef } from "react";
import "./TravelElement.scss";

import ArrowIconLeft from "../../assets/03.webp";
import ArrowIconRight from "../../assets/01.webp";
import ArrowIconLeftDown from "../../assets/04.webp";
import ArrowIconRightDown from "../../assets/02.webp";

const TravelElement = (props) => {
  const { src, alt, arrowIcon, sound, index } = props;
  const soundRef = useRef(null);

  const clickHandler = () => {
    if (!sound) {
      return;
    }
    soundRef.current.play();
  };

  return (
    <div onClick={clickHandler} className="travel__content__elem">
      {sound && (
        <audio ref={soundRef} controls>
          <source src={sound} type="audio/ogg"></source>
        </audio>
      )}
      {arrowIcon === "ArrowIconLeft" && (
        <img
          className="travel__content__elem-arrow"
          src={ArrowIconLeft}
          alt="arrow"
        />
      )}
      {arrowIcon === "ArrowIconLeftDown" && (
        <img
          className="travel__content__elem-arrow"
          src={ArrowIconLeftDown}
          alt="arrow"
        />
      )}
      <img className="travel__content__elem-img" src={src} alt={alt} />
      {arrowIcon === "ArrowIconRight" && (
        <img
          className="travel__content__elem-arrow"
          src={ArrowIconRight}
          alt="arrow"
        />
      )}
      {arrowIcon === "ArrowIconRightDown" && (
        <img
          className="travel__content__elem-arrow"
          src={ArrowIconRightDown}
          alt="arrow"
        />
      )}
      {index !== 8 && (
        <img
          className="travel__content__elem-arrow-down"
          src={ArrowIconRight}
          alt="arrow"
        />
      )}
    </div>
  );
};
export default TravelElement;
