import React from "react";
import "./MnemoTable.scss";
import BackBtn from "../backBtn/BackBtn";
import TableElement from "../tableElement/TableElement";

const MnemoTable = (props) => {
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
      <div className="table">
        <div className="table__title">
          <h1 className="table__title--title">{currentActivity.title}</h1>
        </div>

        <div
          style={{
            gridTemplateColumns: `repeat(${currentActivity.columnCount}, 1fr)`,
          }}
          className="table__block"
        >
          {currentActivity.images.map((elem) => {
            return (
              <TableElement
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

export default MnemoTable;
