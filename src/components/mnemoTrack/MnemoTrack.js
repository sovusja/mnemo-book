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
      <BackBtn isOnTop onClick={clickHandler} />
      <div className="track">
        <div className="track__title">
          <h1 className="track__title--title">{currentActivity.title}</h1>
          <h1 className="track__title--title">{currentActivity.titleTitle}</h1>
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
      <p className="copyright">© Лілія Зайдулліна, 2023</p>
    </>
  );
};

export default MnemoTrack;
