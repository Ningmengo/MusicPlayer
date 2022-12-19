import React from "react";
import "../../cssFiles/SongCard.css";
import AlbumImage from "./AlbumImage";
import AlbumInfo from "./AlbumInfo";

const SongCard = (props) => {
  console.log(props.album);
  return (
    <div className="songCard-body">
      {/* <AlbumImage url={album.image[0].url} />
      <AlbumInfo album={album} /> */}
    </div>
  );
};

export default SongCard;
