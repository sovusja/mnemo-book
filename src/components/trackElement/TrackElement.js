import React, { useRef, useState } from "react";
import "./TrackElement.scss";
import TrackElementImg from "../trackElementImg/TrackElementImg";

const TrackElement = (props) => {
  const { currentElementData } = props;
  const [activeState, setActiveState] = useState(0);

  const soundData = currentElementData?.fullPhrase?.fields.file.url;
  const audioRef = useRef(null);

  const clickHandler = () => {
    if (!soundData) {
      return;
    }

    audioRef.current.play();
  };

  return (
    <>
      <div className="element-track">
        <div className="element-track__images">
          {currentElementData.images.map((item, index) => (
            <TrackElementImg
              img={item.fields.image.fields.file.url}
              audio={item.fields?.sound?.fields.file.url}
              activeState={activeState}
              setActiveState={setActiveState}
              count={currentElementData.images.length}
              index={index}
            />
          ))}
        </div>
        <div onClick={clickHandler} className="element-track__text">
          {currentElementData.text}
        </div>
        {soundData && (
          <audio ref={audioRef} controls>
            <source src={soundData} type="audio/ogg"></source>
          </audio>
        )}
      </div>
    </>
  );
};

export default TrackElement;
