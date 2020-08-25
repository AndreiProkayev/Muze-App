import React from "react";
import TopPlayed from "./Top/TopPlayed";
import Recommended from "./Recommend/Recommended";
import "./TopPlayList.css";

function TopPlayList() {
  return (
    <div className="playlist">
      <div className="top-played">
        <h1>Top played</h1>
        <TopPlayed />
      </div>
      <div className="recommended-area">
        <h1>Recommended Songs</h1>
        <Recommended />
      </div>
    </div>
  );
}

export default TopPlayList;
