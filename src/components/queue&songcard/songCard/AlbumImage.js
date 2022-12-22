import React from "react";
import "../../cssFiles/AlbumImage.css";

const AlbumImage = ({ url }) => {
  //console.log(url);
  return (
    <div className="albumImage flex">
      <img src={url} alt="album img" className="albumImage-img" />
      <div className="albumImage-shadow">
        <img src={url} alt="shadow" className="albumImage-shadow" />
      </div>
    </div>
  );
};

export default AlbumImage;
