import React from "react";
import RecommendedList from "./RecommendedList";

const recSongs = [
  {
    img: "#",
    name: "Bob",
  },
  {
    img: "#",
    name: "Mosh",
  },
  {
    img: "#",
    name: "Tog",
  },
  {
    img: "#",
    name: "Timati",
  },
];

function Recommended() {
  return <RecommendedList recSongs={recSongs} />;
}

export default Recommended;
