import React from "react";
import "../../cssFiles/Queue.css";

const Queue = ({ tracks, setCurrentIndex }) => {
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>

        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div
              key={index}
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="track-name" key={index}>{`${index + 1}. ${
                track?.track?.name
              }`}</p>
              <p> 0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
