import React from "react";
import "./SoundActivity.scss";

const SoundActivity = (props) => {
  const { activityData, setCurrentActivity } = props;

  const clickhandler = () => {
    setCurrentActivity(activityData);
  };

  return (
    <div onClick={clickhandler} className="sound-activity">
      <img
        className="sound-activity__img-back"
        src={activityData.backgroundElement.fields.file.url}
        alt={activityData.backgroundElement.fields.title}
      />
      <img
        className="sound-activity__img-animal"
        src={activityData.backgroundAnimal.fields.file.url}
        alt={activityData.backgroundAnimal.fields.title}
      />
      <div className="sound-activity__inner">
        <h3>
          {activityData.type === "speaker" ? "чистомовки " : ""}
          {activityData.titleTitle}
        </h3>
        <h3>{activityData.titleText}</h3>
      </div>
    </div>
  );
};

export default SoundActivity;
