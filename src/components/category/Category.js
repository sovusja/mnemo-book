import React from "react";
import "./Category.scss";
import BackBtn from "../backBtn/BackBtn";
import SoundItem from "../soundItem/SoundItem";

const Category = (props) => {
  const { categoryData, setActiveCategoryData, setActiveSoundsData } = props;

  const clickHandler = () => {
    setActiveCategoryData(null);
  };

  return (
    <>
      {categoryData.background && (
        <img
          className="page__background"
          src={categoryData.background.fields.file.url}
        />
      )}
      <BackBtn onClick={clickHandler} />

      <div className="category">
        <div className="category__title">
          <h1 className="category__title--title">{categoryData.title}</h1>
        </div>

        <div className="category__wanderer">бродилка</div>

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
