import React from "react";
import "./Travel.scss";
import TravelElement from "../travelElement/travelElement";

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
        {roadeMap.images.map((item, index) => {
          return (
            <TravelElement
              alt={item.fields.image.title}
              src={item.fields.image.fields.file.url}
              arrowIcon={item.fields.arrowIcon}
              sound={item.fields?.sound?.fields?.file?.url}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Travel;
