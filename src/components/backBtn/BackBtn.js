import React from "react";
import "./BackBtn.scss";
import BtnIcon from "../../assets/03.webp";

const BackBtn = (props) => {
  const { onClick } = props;

  return (
    <div className="back-btn" onClick={onClick}>
      <img className="back-btn__img" src={BtnIcon} alt="Назад" />
    </div>
  );
};

export default BackBtn;
