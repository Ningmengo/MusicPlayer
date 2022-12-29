import React from "react";
import "../cssFiles/WidgetCard.css";
import WidgetEntry from "./WidgetEntry";

const WidgetCard = ({ title, similar, featured, newRelease }) => {
  return (
    <div className="widgetcard-body">
      <p className="widget-title">{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              title={artist.name}
              subtitle={artist.followers?.total}
              image={artist.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              title={playlist?.name}
              subtitle={playlist?.tracks?.total}
              image={playlist?.images[2]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
              title={album?.name}
              subtitle={album.artists[0]?.name}
              image={album.images[2]?.url}
            />
          ))
        : null}
    </div>
  );
};

export default WidgetCard;
