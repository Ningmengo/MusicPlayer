import React from "react";
import "../../cssFiles/Queue.css";

const Queue = ({ tracks, setCurrentIndex }) => {
  console.log(tracks);
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>

        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div key={index}>{`${index + 1}: ${track?.track?.name}`}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
