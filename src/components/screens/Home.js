import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./Favorites";
import Feed from "./Feed";
import Library from "./Library";
import Player from "./Player";
import Trending from "./Trending";
import "../cssFiles/Home.css";
import SideBar from "../sidebar/SideBar";
import Login from "./Login";
import { setClientToken } from "../../spotify";
import { useContext1 } from "../../context/context1";

const Home = () => {
  const [token, setToken] = useState("");

  const { testState } = useContext1();
  console.log(testState);
  useEffect(() => {
    //标签值
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    //if token or hash doesn't exist, get token from the hash and assign it to window.localStorage
    //
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return !token ? (
    <Login />
  ) : (
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
