import React from "react";
import "./MnemoTrack.scss";
import BackBtn from "../backBtn/BackBtn";
import TrackElement from "../trackElement/TrackElement";

const MnemoTrack = (props) => {
  const { currentActivity, setCurrentActivity } = props;

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
      <BackBtn onClick={clickHandler} />
      <div className="track">
        <div className="track__title">
          <h1 className="track__title--title">{currentActivity.title}</h1>
        </div>
        <div className="track__block">
          {currentActivity.phrases.map((elem) => {
            return (
              <TrackElement
                currentElementData={elem.fields}
                key={elem.fields.id}
              />
            );
          })}
        </div>
      </div>
      1111
    </>
  );
};

export default MnemoTrack;
