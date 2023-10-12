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
        className="sound-activity__img"
        src={activityData.backgroundElement.fields.file.url}
      />
      <div className="sound-activity__inner">{activityData.title}</div>
    </div>
  );
};

export default SoundActivity;
