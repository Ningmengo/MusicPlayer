import React, { useEffect, useState } from "react";
import apiClient from "../../spotify";
import "../cssFiles/Widget.css";
import WidgetCard from "./WidgetCard";

const Widget = ({ artistID }) => {
  const [similar, SetSimilar] = useState([]);
  const [featured, SetFeatured] = useState([]);
  const [newRelease, SetNewRelease] = useState([]);

  const id = artistID?.artists[0]?.id;

  useEffect(() => {
    apiClient
      .get(`/artists/${id}/related-artists`)
      .then((res) => {
        const a = res.data?.artists.slice(0, 3);
        SetSimilar(a);
      })
      .catch((err) => console.error(err));

    apiClient
      .get(`/browse/featured-playlists`)
      .then((res) => {
        const a = res.data?.playlists.items.slice(0, 3);
        SetFeatured(a);
      })
      .catch((err) => console.error(err));

    apiClient
      .get(`/browse/new-release`)
      .then((res) => {
        const a = res.data?.albums.items.slice(0, 3);
        SetNewRelease(a);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="widgets-body flex">
      <WidgetCard title="Similar Artists" similar={similar} />
      <WidgetCard title="Made For You" similar={featured} />
      <WidgetCard title="New Release" similar={newRelease} />
    </div>
  );
};

export default Widget;
