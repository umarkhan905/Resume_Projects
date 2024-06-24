import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Start from "./components/Start";
import Main from "./components/Main";

function App() {
  const [intro, setIntro] = useState(false);
  const [userName, setUserName] = useState(null);
  return (
    <>
      <div className="container">
        {intro ? (
          userName ? (
            <Main setIntro={setIntro} />
          ) : (
            <Start setUserName={setUserName} />
          )
        ) : (
          <Intro setIntro={setIntro} />
        )}
      </div>
    </>
  );
}

export default App;
