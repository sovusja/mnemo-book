import React, { useRef } from "react";
import "./TableElement.scss";

const TableElement = (props) => {
  const { currentElementData, activeState, count, setActiveState, index } =
    props;

  const soundData = currentElementData?.sound?.fields;
  const audioRef = useRef(null);
  const isActive = activeState === index;

  const clickHandler = () => {
    if (!soundData || !isActive) {
      return;
    }

    audioRef.current.play();
    setActiveState((prev) => {
      if (index === count - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <>
      <div
        onClick={clickHandler}
        className={`${isActive ? "element-table--active" : "element-table"}`}
      >
        <img
          className="element-table__img"
          src={currentElementData.image.fields.file.url}
          alt={currentElementData.image.fields.title}
        />
        <h3 className="element-table__text">{currentElementData.text}</h3>
        {soundData && (
          <audio ref={audioRef} controls>
            <source src={soundData.file.url} type="audio/ogg"></source>
          </audio>
        )}
      </div>
    </>
  );
};

export default TableElement;
