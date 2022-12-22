import React from "react";
import "../../cssFiles/Queue.css";

const Queue = ({ tracks, setCurrentIndex }) => {
  console.log(tracks[2]?.track?.name);
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
      </div>
      <div className="queue-list">
        {tracks?.map((item) => {
          <div>
            <p>{item?.track?.name}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Queue;
