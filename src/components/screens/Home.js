import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./Favorites";
import Feed from "./Feed";
import Library from "./Library";
import Player from "./Player";
import Trending from "./Trending";
import "../cssFiles/Home.css";
import SideBar from "../sidebar/SideBar";

const Home = () => {
  return (
    <Router>
      <div className="main-body">
        <SideBar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
