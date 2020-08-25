import React from "react";

function RecommendedList(props) {
  const songsComponent = props.recSongs.map((song, index) => (
    <div key={index} className="rec-song-items">
      <div>{song.img}</div>
      <div>{song.name}</div>
    </div>
  ));
  return <div className="rec-song-area">{songsComponent}</div>;
}

export default RecommendedList;
