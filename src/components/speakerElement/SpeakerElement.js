import React from "react";
import "./SpeakerElement.scss";

const SpeakerElement = (props) => {
  const { currentElementData } = props;

  return (
    <div className="element-speaker">
      <h3 className="element-speaker__text1">{currentElementData.text1}</h3>
      <img
        className="element-speaker__img"
        src={currentElementData.picture.fields.file.url}
      />
      <h3 className="element-speaker__text2">{currentElementData.text2}</h3>
    </div>
  );
};

export default SpeakerElement;
