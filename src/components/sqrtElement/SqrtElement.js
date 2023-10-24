import React, { useRef } from "react";
import "./SqrtElement.scss";

const SqrtElement = (props) => {
  const { currentElementData } = props;

  const soundData = currentElementData?.sound?.fields;
  const audioRef = useRef(null);

  const clickHandler = () => {
    if (!soundData) {
      return;
    }
    audioRef.current.play();
  };

  return (
    <div onClick={clickHandler} className="element-sqrt">
      <img
        className="element-sqrt__img"
        src={currentElementData.image.fields.file.url}
        alt={currentElementData.image.fields.file.name}
      />
      <h3 className="element-sqrt__text">{currentElementData.text}</h3>
      {soundData && (
        <audio ref={audioRef} controls>
          <source src={soundData.file.url} type="audio/ogg"></source>
        </audio>
      )}
    </div>
  );
};

export default SqrtElement;
