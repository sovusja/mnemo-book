import React, { useState } from "react";
import "./CleanSpeaker.scss";
import BackBtn from "../backBtn/BackBtn";
import SpeakerElement from "../speakerElement/SpeakerElement";

const CleanSpeaker = (props) => {
  const { currentActivity, setCurrentActivity } = props;
  const [activeState, setActiveState] = useState(null);

  const clickHandler = () => {
    setCurrentActivity(null);
  };

  return (
    <>
      {currentActivity.background && (
        <img
          className="page__background"
          src={currentActivity.background.fields.file.url}
          alt="fon"
        />
      )}
      <BackBtn isOnTop onClick={clickHandler} />
      <div className="speaker">
        <div className="speaker__title">
          <h1 className="speaker__title--title">{currentActivity.title}</h1>
          <h1 className="speaker__title--title">
            {currentActivity.titleTitle}
          </h1>
        </div>

        <div className="speaker__block">
          {currentActivity.pictures.map((elem, index) => {
            return (
              <SpeakerElement
                currentElementData={elem.fields}
                key={elem.fields.id}
                activeState={activeState}
                setActiveState={setActiveState}
                index={index}
              />
            );
          })}
        </div>
      </div>
      <p className="copyright">© Лілія Зайдулліна, 2023</p>
    </>
  );
};

export default CleanSpeaker;
