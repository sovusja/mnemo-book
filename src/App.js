import "./App.scss";
import React, { useMemo, useState, useEffect } from "react";
import { createClient } from "contentful";
import Category from "./components/category/Category";
import CategoryItem from "./components/categoryItem/CategoryItem";
import Sound from "./components/sound/Sound";
import MnemoSQRT from "./components/mnemoSQRT/MnemoSQRT";
import MnemoTrack from "./components/mnemoTrack/MnemoTrack";
import MnemoTable from "./components/mnemoTable/MnemoTable";
import CleanSpeaker from "./components/cleanSpeaker/CleanSpeaker";
import LoaderGif from "./assets/Spinner-1s-200px.gif";
import PopUpForm from "./components/popUpForm/PopUpForm";

function App() {
  const space = process.env.REACT_APP_SPACE;
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

  const [content, setContent] = useState({});
  const [activeCategoryData, setActiveCategoryData] = useState(null);
  const [activeSoundsData, setActiveSoundsData] = useState(null);
  const [currentActivity, setCurrentActivity] = useState(null);
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth"));

  const { authorName, title, subtitle, background, categories } = content;

  const client = useMemo(
    () =>
      createClient({
        space,
        accessToken,
      }),
    [space, accessToken]
  );

  useEffect(() => {
    client
      .getEntries({ content_type: "homepage", include: 10 })
      .then((response) => {
        setContent(response?.items[0]?.fields);
      })
      .catch(console.error);
  }, [client]);

  const renderMap = {
    sqrt: (
      <MnemoSQRT
        currentActivity={currentActivity}
        setCurrentActivity={setCurrentActivity}
      />
    ),
    table: (
      <MnemoTable
        currentActivity={currentActivity}
        setCurrentActivity={setCurrentActivity}
      />
    ),
    track: (
      <MnemoTrack
        currentActivity={currentActivity}
        setCurrentActivity={setCurrentActivity}
      />
    ),
    speaker: (
      <CleanSpeaker
        currentActivity={currentActivity}
        setCurrentActivity={setCurrentActivity}
      />
    ),
  };

  const mainLayout = (
    <>
      {background && (
        <img
          className="homepage__background"
          src={background.fields.file.url}
          alt={background.fields.file.name}
        />
      )}
      <div className="main">
        <div className="main__author">
          <p className="main__author--text">{authorName}</p>
        </div>
        <PopUpForm isAuth={isAuth} />
        <div className="main__title">
          <h1 className="main__title--title">{title}</h1>
          <h2 className="main__title--sub-title">{subtitle}</h2>
        </div>

        {categories && (
          <div className="categories">
            {categories.map((elem) => {
              return (
                <CategoryItem
                  key={elem.fields.id}
                  categoryData={elem.fields}
                  setActiveCategoryData={setActiveCategoryData}
                  isAuth={isAuth}
                />
              );
            })}
          </div>
        )}
        <p className="copyright">© Лілія Зайдулліна, 2023</p>
      </div>
    </>
  );

  if (!Object.keys(content).length) {
    return (
      <h1 className="loading">
        <img src={LoaderGif} alt="Loader" />
      </h1>
    );
  }

  if (currentActivity) {
    return renderMap[currentActivity.type];
  }

  if (activeSoundsData) {
    return (
      <Sound
        soundData={activeSoundsData}
        setActiveSoundsData={setActiveSoundsData}
        setCurrentActivity={setCurrentActivity}
        isShowPopUp={isShowPopUp}
        setIsShowPopUp={setIsShowPopUp}
      />
    );
  }

  if (activeCategoryData) {
    return (
      <Category
        categoryData={activeCategoryData}
        setActiveCategoryData={setActiveCategoryData}
        setActiveSoundsData={setActiveSoundsData}
        isShowPopUp={isShowPopUp}
        setIsShowPopUp={setIsShowPopUp}
        isAuth={isAuth}
      />
    );
  }

  return <div className="App">{mainLayout}</div>;
}

export default App;
