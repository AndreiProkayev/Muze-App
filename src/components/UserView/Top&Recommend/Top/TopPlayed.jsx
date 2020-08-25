import React from "react";
import TopList from "./TopList";

const topArtists = [
  {
    num: "01",
    img:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/76472441/original/b380ae9428fe0348ea74f889bc5c00099049a66c/design-your-face-like-the-weeknd-starboy-cover-art.jpg",
    name: "The Weekend - STARBOY",
    time: "3:24",
  },
  {
    num: "02",
    img: "https://pbs.twimg.com/media/DXk9toEX0AAV4wh.jpg",
    name: "Michael Jackson - Billie Jean",
    time: "4:56",
  },
  {
    num: "03",
    img:
      "https://img.discogs.com/XvAi6OH5At_5qX4Z12hoggGBzkw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-9043014-1473778022-6298.jpeg.jpg",
    name: "Pink Floyd - Another Brick In The Wall",
    time: "3:50",
  },
  {
    num: "04",
    img: "https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg",
    name: "Beatles - Let It Be",
    time: "4:00",
  },
  {
    num: "05",
    img: "https://upload.wikimedia.org/wikipedia/en/c/ca/6ix9ine_-_Gooba.png",
    name: "Tekashi69 - Gooba",
    time: "2:28",
  },
];

function TopPlayed() {
  return <TopList topArtists={topArtists} />;
}

export default TopPlayed;
