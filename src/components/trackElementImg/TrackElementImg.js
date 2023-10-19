import React, { useRef } from "react";
import "./TrackElementImg.scss";

const TrackElementImg = (props) => {
  const { img, audio, activeState, count, setActiveState, index } = props;
  const audioRef = useRef(null);
  const isActive = activeState === index;

  const clickHandler = () => {
    if (!audio || !isActive) {
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
      <img
        onClick={clickHandler}
        className={`${
          isActive ? "track-elem__img--active" : "track-elem__img"
        }`}
        src={img}
      />
      {audio && (
        <audio ref={audioRef} controls>
          <source src={audio} type="audio/ogg"></source>
        </audio>
      )}
    </>
  );
};

export default TrackElementImg;
