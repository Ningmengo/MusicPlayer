import React from "react";
import { useLocation } from "react-router-dom";

const Player = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="screen-container">
      <div className="left-player-body"></div>
      <div className="right-player-body"></div>
    </div>
  );
};

export default Player;
