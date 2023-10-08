import React from "react";
import "./TrackElement.scss";

const TrackElement = (props) => {
  const { currentElementData } = props;

  return (
    <>
      <div className="element-track">
        <div className="element-track__images">
          {currentElementData.images.map((item) => (
            <img src={item.fields.image.fields.file.url} />
          ))}
        </div>
        <div className="element-track__text">{currentElementData.text}</div>
      </div>
    </>
  );
};

export default TrackElement;
