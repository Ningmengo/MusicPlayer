import React, { useEffect, useState } from "react";
import "../cssFiles/Player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../queue&songcard/songCard/SongCard";
import Queue from "../queue&songcard/queue/Queue";

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState({});
  const [currentIndex, setCurrentIndex] = useState();
  const [currentTrack, setCurrentTrack] = useState();

  useEffect(() => {
    if (location.state) {
      //console => playlist => get playlist items

      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data.items[0].track);
        });
    }
  }, [location.state]);

  console.log(currentTrack);

  return (
    <div className="screen-container flex">
      <div className="left-player-body"></div>
      <div className="right-player-body">
        <SongCard album={currentTrack} />
        <Queue />
      </div>
    </div>
  );
};

export default Player;
