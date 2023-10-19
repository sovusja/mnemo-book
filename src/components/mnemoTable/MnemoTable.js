import React, { useState } from "react";
import "./MnemoTable.scss";
import BackBtn from "../backBtn/BackBtn";
import TableElement from "../tableElement/TableElement";

const MnemoTable = (props) => {
  const { currentActivity, setCurrentActivity } = props;
  const [activeState, setActiveState] = useState(0);

  const clickHandler = () => {
    setCurrentActivity(null);
  };

  const isSixPictures =
    currentActivity.id === "l-mnemo-table" ||
    currentActivity.id === "z-mnemo-table";

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
      <div className="table">
        <div className="table__title">
          <h1 className="table__title--title">{currentActivity.title}</h1>
        </div>

        <div
          style={{
            maxWidth: `${isSixPictures ? "1239px" : "1250px"}`,
          }}
          className="table__block"
        >
          {currentActivity.images.map((elem, index) => {
            return (
              <TableElement
                currentElementData={elem.fields}
                key={elem.fields.id}
                activeState={activeState}
                setActiveState={setActiveState}
                count={currentActivity.images.length}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MnemoTable;
