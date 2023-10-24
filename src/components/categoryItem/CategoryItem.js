import React from "react";
import "./CategoryItem.scss";

const CategoryItem = (props) => {
  const { categoryData, setActiveCategoryData } = props;

  const clickHandler = () => {
    setActiveCategoryData(categoryData);
  };

  return (
    <div onClick={clickHandler} className="category-item">
      <img
        className="category-item__img-back"
        src={categoryData.backgroundElement.fields.file.url}
        alt={categoryData.backgroundElement.fields.title}
      />
      <img
        className="category-item__img-animal"
        src={categoryData.backgroundAnimal.fields.file.url}
        alt={categoryData.backgroundAnimal.fields.title}
      />
      <div className="category-item__inner">{categoryData.title}</div>
    </div>
  );
};

export default CategoryItem;
