import React from "react";
import "./SqrtElement.scss";

const SqrtElement = (props) => {
  const { currentElementData } = props;

  return (
    <div className="element-sqrt">
      <img
        className="element-sqrt__img"
        src={currentElementData.image.fields.file.url}
      />
      <h3 className="element-sqrt__text">{currentElementData.text}</h3>
    </div>
  );
};

export default SqrtElement;
