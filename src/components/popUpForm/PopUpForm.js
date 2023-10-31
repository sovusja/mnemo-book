import React, { useState } from "react";
import "./PopUpForm.scss";

const PopUpForm = (props) => {
  const { isAuth } = props;
  const [activeForm, setActiveForm] = useState(false);
  const [activeIntut, setActiveInput] = useState("");
  const [error, setError] = useState(false);

  const demoPass = process.env.REACT_APP_DEMO;

  const clickHandler = () => {
    setActiveForm((prev) => !prev);
  };

  const changeHandler = (event) => {
    setError(false);
    setActiveInput(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (activeIntut === demoPass) {
      localStorage.setItem("auth", 1);
      window.location.reload();
    } else {
      setActiveInput("");
      setError(true);
    }
  };

  if (isAuth) {
    return null;
  }

  return (
    <div className="demo-form">
      <button onClick={clickHandler} className="demo-form__btn">
        Демо
      </button>
      {activeForm && (
        <form onSubmit={submitHandler} className="demo-form__form">
          <input
            value={activeIntut}
            onChange={changeHandler}
            className={`demo-form__form-inp ${error ? "error" : ""}`}
            type="text"
            placeholder="Введіть ключ"
          />
          <button className="demo-form__form-btn" type="submit">
            ok
          </button>
        </form>
      )}
    </div>
  );
};

export default PopUpForm;
