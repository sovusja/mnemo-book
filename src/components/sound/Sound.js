import React from "react";
import "./Sound.scss";
import BackBtn from "../backBtn/BackBtn";
import SoundActivity from "../soundActivity/SoundActivity";

const Sound = (props) => {
  const { soundData, setActiveSoundsData, setCurrentActivity } = props;
  const clickHandler = () => {
    setActiveSoundsData(null);
  };

  return (
    <>
      {soundData.background && (
        <img
          className="page__background"
          src={soundData.background.fields.file.url}
          alt="fon"
        />
      )}
      <BackBtn onClick={clickHandler} />

      <div className="sound">
        <div className="sound__title">
          <h1 className="sound__title--title">{soundData.title}</h1>
        </div>
        <div className="sound__activities">
          <SoundActivity
            activityData={soundData.sqrt.fields}
            setCurrentActivity={setCurrentActivity}
          />
          <SoundActivity
            activityData={soundData.mnemoTrack.fields}
            setCurrentActivity={setCurrentActivity}
          />
          <SoundActivity
            activityData={soundData.cleanSpeaker.fields}
            setCurrentActivity={setCurrentActivity}
          />
          <SoundActivity
            activityData={soundData.mnemoTable.fields}
            setCurrentActivity={setCurrentActivity}
          />
        </div>
      </div>
    </>
  );
};

export default Sound;
