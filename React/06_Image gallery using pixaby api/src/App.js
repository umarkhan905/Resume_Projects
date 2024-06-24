import { useEffect, useState } from "react";
import "./App.css";
import Images from "./components/Images";
import Search from "./components/Search";

function App() {
  const [imgData, setImgData] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNo, setpageNo] = useState(1);
  const [loading, setLoading] = useState(true);
  // const [totalResults, setTotalResults] = useState(0);

  const fetchMoreData = async () => {
    setpageNo((prev) => prev + 1);
    setLoading(true);
    const api = `https://pixabay.com/api/?key=37490596-d25b976d8974291cdb4df67fa&q=${search}&image_type=photo&per_page=18&page=${
      pageNo + 1
    }`;
    const response = await fetch(api);
    const data = await response.json();
    // setImgData(imgData.concat(data.hits));
    setImgData([...imgData, ...data.hits]);
    setLoading(false);
  };

  const fetchData = async () => {
    const api = `https://pixabay.com/api/?key=37490596-d25b976d8974291cdb4df67fa&q=${search}&image_type=photo&per_page=18&page=${pageNo}`;
    const response = await fetch(api);
    const data = await response.json();
    setImgData(data.hits);
    // setTotalResults(data.totalHits);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <Search setSearch={setSearch} search={search} fetchData={fetchData} />
        <Images imgData={imgData} loading={loading} />
        {loading && <h4 style={{ padding: "5px 0" }}>Loading...</h4>}
        <button onClick={fetchMoreData} className="load_more_btn">
          Load More
        </button>
      </div>
    </>
  );
}

export default App;
