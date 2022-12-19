import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import APIkit from "../../spotify";
import { AiFillPlayCircle } from "react-icons/ai";
import "../cssFiles/Library.css";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    APIkit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists.map((playlist) => {
          return (
            <div
              className="playlist-card"
              key={playlist.id}
              onClick={() => playPlaylist(playlist.id)}
            >
              <img
                src={playlist.images[0].url}
                className="playlist-image"
                alt="Playlist-Art"
              ></img>
              <p className="playlist-title">{playlist.name}</p>
              <p className="playlist-subtitle">{playlist.tracks.total} songs</p>
              <div className="playlist-fade">
                <IconContext.Provider
                  value={{
                    size: "60px",
                    color: "rgba(166, 236, 222, 1)",
                  }}
                >
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Library;
