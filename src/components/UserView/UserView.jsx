import React from "react";
import TrendingBox from "./TrendingBox";
import "./UserView.css";
import PopularArtists from "./PopularArtists";

function UserView() {
  return (
    <div className="view-box">
      <TrendingBox />
      <PopularArtists />
    </div>
  );
}

export default UserView;
