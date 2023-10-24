import React from "react";
import "./PopUpBtn.scss";

const PopUpBtn = (props) => {
  const { onClick, roadeMap } = props;

  return (
    <div className="pop-up__btn" onClick={onClick}>
      <img
        className="pop-up__btn--img"
        src={roadeMap.backgroundElement.fields.file.url}
        alt="arrow"
      />
      <h3 className="pop-up__btn--text">Бродилка</h3>
    </div>
  );
};

export default PopUpBtn;
