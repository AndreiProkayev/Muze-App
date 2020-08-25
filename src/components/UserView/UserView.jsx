import React from "react";
import TrendingBox from "./Trending/TrendingBox";
import Artists from "./Popular/Artists";
import TopPlayList from "./Top&Recommend/TopPlayList";
import "./UserView.css";

const artists = [
  {
    img:
      "https://vrscout.com/wp-content/uploads/2020/07/SnoopARWine_1-scaled.jpg",
    name: "Snoop Dogg",
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Wiz_Khalifa_Stavernfestivalen_2018_%28231822%29.jpg",
    name: "Wiz Khalifa",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91jh-52G%2BSL._AC_SL1500_.jpg",
    name: "Post Malone",
  },
  {
    img:
      "https://lastfm.freetls.fastly.net/i/u/174s/5ad83e2e194ee3ee12e4d5b119a402b1.png",
    name: "Jah Khalib",
  },
  {
    img:
      "https://www.covercentury.com/covers/audio/g/greatest-hits_elton-john_30803884.jpg",
    name: "Elton John",
  },
  {
    img:
      "https://i.pinimg.com/originals/9e/03/0f/9e030fedf721c6c69dfc4bc3e817603e.jpg",
    name: "Alt-J",
  },
];

function UserView() {
  return (
    <div className="view-box">
      <TrendingBox />
      <Artists artists={artists} />
      <TopPlayList />
    </div>
  );
}

export default UserView;
