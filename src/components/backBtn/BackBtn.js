import React from "react";
import "./BackBtn.scss";
import BtnIcon from "../../assets/03.webp";

const BackBtn = (props) => {
  const { onClick, isOnTop } = props;

  const className = isOnTop ? "back-btn__top" : "back-btn";

  return (
    <div className={className} onClick={onClick}>
      <img className="back-btn__img" src={BtnIcon} alt="Назад" />
    </div>
  );
};

export default BackBtn;
