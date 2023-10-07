import React from "react";
import "./CleanSpeaker.scss";
import BackBtn from "../backBtn/BackBtn";
import SpeakerElement from "../speakerElement/SpeakerElement";

const CleanSpeaker = (props) => {
  const { currentActivity, setCurrentActivity } = props;

  const clickHandler = () => {
    setCurrentActivity(null);
  };

  console.log(currentActivity);
  return (
    <>
      {currentActivity.background && (
        <img
          className="page__background"
          src={currentActivity.background.fields.file.url}
          alt="fon"
        />
      )}
      <BackBtn onClick={clickHandler} />
      <div className="speaker">
        <div className="speaker__title">
          <h1 className="speaker__title--title">{currentActivity.title}</h1>
        </div>

        <div className="speaker__block">
          {currentActivity.pictures.map((elem) => {
            return (
              <SpeakerElement
                currentElementData={elem.fields}
                key={elem.fields.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CleanSpeaker;
