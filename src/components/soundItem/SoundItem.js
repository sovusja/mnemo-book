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
        alt={soundData.backgroundElement.fields.file.name}
      />
      <img
        className="sound-item__img-animal"
        src={soundData.backgroundAnimal.fields.file.url}
        alt={soundData.backgroundAnimal.fields.file.name}
      />
      <div className="sound-item__inner">{soundData.shortName}</div>
    </div>
  );
};

export default SoundItem;
