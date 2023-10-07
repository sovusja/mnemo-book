import React from "react";
import "./MnemoSQRT.scss";
import BackBtn from "../backBtn/BackBtn";
import SqrtElement from "../sqrtElement/SqrtElement";

const MnemoSQRT = (props) => {
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
      <div className="sqrt">
        <div className="sqrt__title">
          <h1 className="sqrt__title--title">{currentActivity.title}</h1>
        </div>

        <div className="sqrt__block">
          {currentActivity.pictures.map((elem) => {
            return (
              <SqrtElement
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

export default MnemoSQRT;
