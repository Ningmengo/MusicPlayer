import React from "react";
import "../cssFiles/AudioPlayer.css";
import ProgressCircle from "./ProgressCircle";

const AudioPlayer = ({ currentTrack }) => {
  console.log(currentTrack);
  return (
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
          percentage={75}
          isPlaying={true}
          image={currentTrack?.images[0]?.url}
          size={300}
          color="orange"
        />
      </div>
      <div className="player-right-body flex"></div>
    </div>
  );
};

export default AudioPlayer;
