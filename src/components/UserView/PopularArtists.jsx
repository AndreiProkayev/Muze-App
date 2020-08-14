import React from "react";
import "./UserView.css";

function PopularArtists() {
  return (
    <div className="popular-artists">
      <h2>Popular Artists</h2>

      <div className="popular-list">
        <div className="popular-artist-img">
          IMG<p>Name</p>
        </div>
        <div className="popular-artist-img">
          IMG<p>Name</p>
        </div>
        <div className="popular-artist-img">
          IMG<p>Name</p>
        </div>
        <div className="popular-artist-img">
          IMG<p>Name</p>
        </div>
        <div className="popular-artist-img">
          IMG<p>Name</p>
        </div>
      </div>
    </div>
  );
}

export default PopularArtists;
