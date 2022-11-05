import React, { useEffect, useState } from "react";
import "./SideBar.css";
import SideBarButton from "./SideBarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotify";

const SideBar = () => {
  const [image, setImage] = useState(
    "https://media.istockphoto.com/id/639085642/vector/user-sign-icon-person-symbol-human-avatar.jpg?s=612x612&w=0&k=20&c=n4Zr1A7GMVTY8rZztu_OnMQ4_dkLBLRRAcTb0IIbQfY="
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div className="SideBarButton-Each">
        <SideBarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SideBarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SideBarButton title="Player" to="/player" icon={<FaPlay />} />
        <SideBarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SideBarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>

      <SideBarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
};

export default SideBar;
