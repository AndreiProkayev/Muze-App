import React from "react";

function TopList(props) {
  const artistsComponent = props.topArtists.map((artist, index) => (
    <div key={index} className="top-song-area">
      <span>{artist.num}</span>
      <img className="top-song-img" src={artist.img} alt="artist" />
      <button className="top-played-btn">
        <i className="fa fa-play" aria-hidden="true"></i>
      </button>
      <div className="top-artist-name">
        <p>{artist.name}</p>
      </div>
      <i className="fa fa-heart heart-icon-liked" aria-hidden="true"></i>
      <div>{artist.time}</div>
    </div>
  ));

  return <div className="top-artist-list"> {artistsComponent}</div>;
}

export default TopList;
