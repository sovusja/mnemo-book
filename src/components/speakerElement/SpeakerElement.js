import React, { useRef, useState } from "react";
import "./SpeakerElement.scss";

const SpeakerElement = (props) => {
  const { currentElementData, index, activeState, setActiveState } = props;
  const [isClicked, setIsClicked] = useState(false);

  const soundData1 = currentElementData?.sound1?.fields;
  const soundData2 = currentElementData?.sound2?.fields;
  const audioRef = useRef(null);
  const audioRef2 = useRef(null);
  const isActive = activeState === index;

  const clickHandler = () => {
    if (activeState === null) {
      setActiveState(index);
    }

    if (!soundData1 || !soundData2 || (!isActive && activeState)) {
      return;
    }

    isClicked ? audioRef2.current.play() : audioRef.current.play();
    setIsClicked((prev) => !prev);

    if (isClicked && isActive) {
      setActiveState(null);
    }
  };

  return (
    <div
      onClick={clickHandler}
      className={`${isActive ? "element-speaker--active" : "element-speaker"}`}
    >
      <h3 className="element-speaker__text1">{currentElementData.text1}</h3>
      {soundData1 && (
        <audio ref={audioRef} controls>
          <source src={soundData1.file.url} type="audio/ogg"></source>
        </audio>
      )}
      {soundData2 && (
        <audio ref={audioRef2} controls>
          <source src={soundData2.file.url} type="audio/ogg"></source>
        </audio>
      )}
      <img
        className="element-speaker__img"
        src={currentElementData.picture.fields.file.url}
      />
      <h3 className="element-speaker__text2">{currentElementData.text2}</h3>
    </div>
  );
};

export default SpeakerElement;
