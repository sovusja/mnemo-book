import React from "react";
import "./SoundItem.scss";

const SoundItem = (props) => {
  const { soundData, setActiveSoundsData } = props;
  console.log(soundData);

  const clickHandler = () => {
    setActiveSoundsData(soundData);
  };

  return (
    <div onClick={clickHandler} className="sound-item">
      <img
        className="sound-item__img-back"
        src={soundData.backgroundElement.fields.file.url}
      />
      <img
        className="sound-item__img-animal"
        src={soundData.backgroundAnimal.fields.file.url}
      />
      <div className="sound-item__inner">{soundData.shortName}</div>
    </div>
  );
};

export default SoundItem;
