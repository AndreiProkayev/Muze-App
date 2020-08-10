import React from "react";
import "./LeftNav.css";

function LeftNav() {
  return (
    <div className="left-nav">
      <div className="nav-menu">
        <i className="fa fa-home" aria-hidden="true"></i>Home
      </div>
      <div className="nav-menu">
        <i className="fa fa-heart" aria-hidden="true"></i>My Favourites
      </div>
      <div className="nav-menu">
        <i className="fa fa-headphones" aria-hidden="true"></i>My Playlist
      </div>
      <div className="nav-menu">
        <i className="fa fa-microphone" aria-hidden="true"></i>Artists
      </div>
      <div className="nav-menu">
        <i className="fa fa-music" aria-hidden="true"></i>Albums
      </div>
    </div>
  );
}

export default LeftNav;
