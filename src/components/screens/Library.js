import React, { useEffect, useState } from "react";
import APIkit from "../../spotify";
import "../cssFiles/Library.css";

const Library = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    APIkit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists.map((playlist, index) => {
          return (
            <div className="playlist-card" key={index}>
              <img
                src={playlist.images[0].url}
                className="playlist-image"
                alt="Playlist-Art"
              ></img>
              <p className="playlist-title">{playlist.name}</p>
              <p className="playlist-subtitle">{playlist.tracks.total} songs</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Library;
