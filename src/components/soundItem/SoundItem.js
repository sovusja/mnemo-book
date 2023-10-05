import React from "react";
import "./SoundItem.scss";

const SoundItem = (props) => {
  const { soundData, setActiveSoundsData } = props;

  const clickHandler = () => {
    setActiveSoundsData(soundData);
  };

  return (
    <div onClick={clickHandler} className="sound-item">
      <div className="sound-item__inner">{soundData.shortName}</div>
    </div>
  );
};

export default SoundItem;
