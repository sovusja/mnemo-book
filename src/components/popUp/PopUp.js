import React from "react";
import "./PopUp.scss";
import Travel from "../travel/Travel";

const PopUp = (props) => {
  const { onClick, roadeMap } = props;
  return (
    <div className="pop-up" onClick={onClick}>
      <div className="pop-up__content">
        <Travel roadeMap={roadeMap} />
      </div>
    </div>
  );
};

export default PopUp;
