import React, { useState, useEffect } from "react";
import ArtistData from "./ArtistData";
import Singer from "./Singer";
import SubHeading from "./SubHeading";
const Singers = ({ searchValue, setCurrentSongs }) => {
  const [data, setData] = useState(ArtistData);

  useEffect(() => {
    const filterdata = (searchValue) => {
      const fdata = ArtistData.filter((element) => {
        return element.artist.includes(searchValue.toLowerCase());
      });
      setData(fdata);
    };
    filterdata(searchValue);
  }, [searchValue]);
  return (
    <>
      <div className="singers_container">
        <SubHeading heading={"Featured singers"} />
        <div className="singers_info">
          {data.length === 0 ? (
            <p className="error">No Singer Found</p>
          ) : (
            data.map((element, index) => {
              const { imgSrc, artist } = element;
              return (
                <>
                  <Singer
                    key={index}
                    imgSrc={imgSrc}
                    artist={artist}
                    setCurrentSongs={setCurrentSongs}
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

export default Singers;
