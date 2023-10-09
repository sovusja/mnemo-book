import React from "react";
import "./PopUpBtn.scss";

const PopUpBtn = (props) => {
  const { onClick } = props;
  return (
    <div className="pop-up__btn" onClick={onClick}>
      <h3 className="pop-up__btn--text">Бродилка</h3>
    </div>
  );
};

export default PopUpBtn;
