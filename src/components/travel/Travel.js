import React from "react";
import "./Travel.scss";
import ArrowIconLeft from "../../assets/03.webp";
import ArrowIconRight from "../../assets/01.webp";
import ArrowIconLeftDown from "../../assets/04.webp";
import ArrowIconRightDown from "../../assets/02.webp";

const Travel = (props) => {
  const { roadeMap } = props;

  return (
    <div className="travel">
      {roadeMap.background && (
        <img
          className="travel__background"
          src={roadeMap.background.fields.file.url}
          alt="background"
        />
      )}
      <div className="travel__title">
        <h1 className="travel__title--title">{roadeMap.title}</h1>
      </div>
      <div className="travel__content">
        <div className="travel__content__elem">
          <img
            className="travel__content__elem-img"
            src={roadeMap.images[0].fields.image.fields.file.url}
            alt={roadeMap.images[0].fields.name}
          />
          <img
            className="travel__content__elem-arrow"
            alt="arrow"
            src={ArrowIconRight}
          />
        </div>

        <div className="travel__content__elem">
          <img
            className="travel__content__elem-img"
            src={roadeMap.images[1].fields.image.fields.file.url}
            alt={roadeMap.images[1].fields.name}
          />
          <img
            className="travel__content__elem-arrow"
            alt="arrow"
            src={ArrowIconRight}
          />
        </div>

        <div className="travel__content__elem">
          <img
            className="travel__content__elem-img"
            src={roadeMap.images[2].fields.image.fields.file.url}
            alt={roadeMap.images[2].fields.name}
          />
          <img
            className="travel__content__elem-arrow"
            src={ArrowIconRightDown}
            alt="arrow"
          />
        </div>

        <div className="travel__content__elem">
          <img
            className="travel__content__elem-arrow"
            src={ArrowIconLeftDown}
            alt="arrow"
          />
          <img
            className="travel__content__elem-img"
            src={roadeMap.images[3].fields.image.fields.file.url}
            alt={roadeMap.images[3].fields.name}
          />
        </div>

        <div className="travel__content__elem">
          <img
            className="travel__content__elem-arrow"
            alt="arrow"
            src={ArrowIconLeft}
          />
          <img
            className="travel__content__elem-img"
            src={roadeMap.images[4].fields.image.fields.file.url}
            alt={roadeMap.images[4].fields.name}
          />
        </div>

        <div className="travel__content__elem">
          <img
            className="travel__content__elem-arrow"
            alt="arrow"
            src={ArrowIconLeft}
          />
          <img
            className="travel__content__elem-img"
            src={roadeMap.images[5].fields.image.fields.file.url}
            alt={roadeMap.images[5].fields.name}
          />
        </div>

        <div className="travel__content__elem">
          <img
            className="travel__content__elem-img"
            src={roadeMap.images[6].fields.image.fields.file.url}
            alt={roadeMap.images[6].fields.name}
          />
          <img
            className="travel__content__elem-arrow"
            alt="arrow"
            src={ArrowIconRight}
          />
        </div>

        <div className="travel__content__elem">
          <img
            className="travel__content__elem-img"
            src={roadeMap.images[7].fields.image.fields.file.url}
            alt={roadeMap.images[7].fields.name}
          />
          <img
            className="travel__content__elem-arrow"
            alt="arrow"
            src={ArrowIconRight}
          />
        </div>

        <div className="travel__content__elem">
          <img
            className="travel__content__elem-img"
            src={roadeMap.images[8].fields.image.fields.file.url}
            alt={roadeMap.images[8].fields.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Travel;
