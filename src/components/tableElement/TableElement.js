import React from "react";
import "./TableElement.scss";

const TableElement = (props) => {
  const { currentElementData } = props;

  return (
    <>
      <div className="element-table">
        <img
          className="element-table__img"
          src={currentElementData.image.fields.file.url}
        />
        <h3 className="element-table__text">{currentElementData.text}</h3>
      </div>
    </>
  );
};

export default TableElement;
