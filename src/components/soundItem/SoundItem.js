import React from "react";
import "./SoundItem.scss";

const SoundItem = (props) => {
  const { soundData, setActiveSoundsData, isAuth } = props;

  const clickHandler = () => {
    setActiveSoundsData(soundData);
  };

  if (!soundData.isDemo && !isAuth) {
    return null;
  }

  return (
    <div onClick={clickHandler} className="sound-item">
      <img
        className="sound-item__img-back"
        src={soundData.backgroundElement.fields.file.url}
        alt={soundData.backgroundElement.fields.title}
      />
      <img
        className="sound-item__img-animal"
        src={soundData.backgroundAnimal.fields.file.url}
        alt={soundData.backgroundAnimal.fields.title}
      />
      <div className="sound-item__inner">{soundData.shortName}</div>
    </div>
  );
};

export default SoundItem;
