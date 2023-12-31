import React from "react";
import "./Sound.scss";
import BackBtn from "../backBtn/BackBtn";
import SoundActivity from "../soundActivity/SoundActivity";
import PopUp from "../popUp/PopUp";
import PopUpBtn from "../popUpBtn/PopUpBtn";

const Sound = (props) => {
  const {
    soundData,
    setActiveSoundsData,
    setCurrentActivity,
    isShowPopUp,
    setIsShowPopUp,
  } = props;

  const clickHandler = () => {
    setActiveSoundsData(null);
  };
  const clickHandlerPopUp = () => {
    setIsShowPopUp(!isShowPopUp);
  };
  const clickHandlerPopUpBack = (e) => {
    if (e.target === e.currentTarget) {
      setIsShowPopUp(!isShowPopUp);
    }
  };

  return (
    <>
      {isShowPopUp && (
        <PopUp
          onClick={clickHandlerPopUpBack}
          roadeMap={soundData.roadeMap.fields}
        />
      )}
      {soundData.background && (
        <img
          className="page__background"
          src={soundData.background.fields.file.url}
          alt="fon"
        />
      )}

      <div className="sound">
        <div className="title-wrapper">
          <BackBtn onClick={clickHandler} />
          <div className="sound__title">
            <h1 className="sound__title--title">{soundData.title}</h1>
          </div>
        </div>

        {soundData.roadeMap && (
          <PopUpBtn
            className="category__wanderer"
            onClick={clickHandlerPopUp}
            roadeMap={soundData.roadeMap.fields}
          />
        )}

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
        <p className="copyright">© Лілія Зайдулліна, 2023</p>
      </div>
    </>
  );
};

export default Sound;
