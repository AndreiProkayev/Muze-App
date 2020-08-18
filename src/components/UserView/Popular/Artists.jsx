import React from "react";
import "./Popular.css";

function Artists(props) {
  const artistsComponent = props.artists.map((artist, index) => (
    <div key={index} className="popular-artist">
      <img className="popular-artist-img" src={artist.img} alt="Artist" />
      <p>{artist.name}</p>
    </div>
  ));

  return <div className="popular-list">{artistsComponent}</div>;
}

export default Artists;
