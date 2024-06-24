import "./App.css";
import Images from "./components/Images";
import InputField from "./components/InputField";
import { useEffect, useState } from "react";
import ModalBox from "./components/ModalBox";

function App() {
  const [text, setText] = useState({ search: "", images: 3 });
  const [data, setData] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [currnetImage, setCurrnetImage] = useState("");
  const setTextFunc = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setText({ ...text, [name]: value });
  };
  const dialogBox = (src) => {
    setCurrnetImage(src);
    setIsShow(true);
  };
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://pixabay.com/api/?key=37490596-d25b976d8974291cdb4df67fa&q=${text.search}&per_page=${text.images}&image_type=photo`
      );
      const parsedData = await response.json();
      setData(parsedData.hits);
    };
    fetchImages();
  }, [text]);
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="lines">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <h1>Pixaby Image Finder</h1>
        </nav>
      </header>
      <InputField setText={setTextFunc} text={text} />
      <Images data={data} text={text.search} setCurrnetImage={dialogBox} />
      {isShow ? <ModalBox src={currnetImage} setIsShow={setIsShow} /> : null}
    </div>
  );
}

export default App;
