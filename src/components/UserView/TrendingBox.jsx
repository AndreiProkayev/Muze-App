import React from "react";

function TrendingBox() {
  return (
    <div className="trending-box">
      <div className="trending-text-box">
        <h1>Trending</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur alop sin adipisicing elit. Quos
          quisquam sit undey nemo mako nihil voluptate fugiat hout sukin.
        </p>
        <div className="trending-buttons">
          <button className="trending-play-button">
            <i className="fa fa-play" aria-hidden="true"></i>Play
          </button>
          <button className="follow-button">
            <i className="fa fa-rss" aria-hidden="true"></i>Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrendingBox;
