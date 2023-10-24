import React from "react";
import "./Category.scss";
import BackBtn from "../backBtn/BackBtn";
import SoundItem from "../soundItem/SoundItem";
import PopUp from "../popUp/PopUp";
import PopUpBtn from "../popUpBtn/PopUpBtn";

const Category = (props) => {
  const {
    categoryData,
    setActiveCategoryData,
    setActiveSoundsData,
    isShowPopUp,
    setIsShowPopUp,
  } = props;

  const clickHandlerBack = () => {
    setActiveCategoryData(null);
  };

  const clickHandlerPopUp = () => {
    setIsShowPopUp(!isShowPopUp);
  };
  const clickHandlerPopUpBack = (e) => {
    if (e.target === e.currentTarget) {
      setIsShowPopUp(!isShowPopUp);
    }
  };

  return (
    <>
      {isShowPopUp && (
        <PopUp
          onClick={clickHandlerPopUpBack}
          roadeMap={categoryData.roadeMap.fields}
        />
      )}
      {categoryData.background && (
        <img
          className="page__background"
          src={categoryData.background.fields.file.url}
          alt={categoryData.background.fields.file.name}
        />
      )}

      <div className="category">
        <div className="title-wrapper">
          <BackBtn onClick={clickHandlerBack} />
          <div className="category__title">
            <h1 className="category__title--title">{categoryData.title}</h1>
          </div>
        </div>

        {categoryData.roadeMap && (
          <PopUpBtn
            className="category__wanderer"
            onClick={clickHandlerPopUp}
            roadeMap={categoryData.roadeMap.fields}
          />
        )}

        <div className="category__sounds">
          {categoryData.sounds.map((elem) => {
            return (
              <SoundItem
                key={elem.fields.id}
                soundData={elem.fields}
                setActiveSoundsData={setActiveSoundsData}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
