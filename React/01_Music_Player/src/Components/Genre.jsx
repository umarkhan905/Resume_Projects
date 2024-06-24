import React, { useEffect, useState } from "react";
import GenreData from "./GenreData";
import SubHeading from "./SubHeading";
import GenreInfo from "./GenreInfo";
const Genre = ({ searchValue, setCurrentSongs, setShowAlert }) => {
  const [data, setData] = useState(GenreData);

  useEffect(() => {
    const filterdata = (searchValue) => {
      const fdata = GenreData.filter((element) => {
        return element.genre.includes(searchValue.toLowerCase());
      });
      setData(fdata);
    };
    filterdata(searchValue);
  }, [searchValue]);
  return (
    <>
      <div className="genre_container">
        <SubHeading heading={"Genre"} />
        <div className="genre_info_container">
          {data.length === 0 ? (
            <p className="error">No Genre Found</p>
          ) : (
            data.map((element, index) => {
              const { genre, id } = element;
              return (
                <>
                  <GenreInfo
                    genre={genre}
                    key={id}
                    setCurrentSongs={setCurrentSongs}
                    setShowAlert={setShowAlert}
                  />
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Genre;
