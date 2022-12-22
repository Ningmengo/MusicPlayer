import React from "react";
import "../../cssFiles/AlbumInfo.css";

const AlbumInfo = ({ album }) => {
  const artists = [];
  album?.artists.forEach((element) => {
    artists.push(element.name);
  });

  return (
    <div className="albunInfo-card">
      <div className="albumName-container">
        <div className="marquee">
          <p>{album?.name + " - " + artists?.join(", ")}</p>
        </div>
      </div>
      <div className="album-info">
        <p>{`${album?.name} is an ${album?.album_type} with ${album?.total_tracks} track(s)`}</p>
        {/* <p>
          {album.name +
            " is an " +
            album.album_type +
            " with " +
            album.total_tracks +
            " track(s)"}
        </p> */}
      </div>
      <div className="albumName-release">
        <p>{`Release Date: ${album?.release_date}`}</p>
      </div>
    </div>
  );
};

export default AlbumInfo;
