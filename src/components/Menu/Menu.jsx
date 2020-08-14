import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";

function Menu() {
  return (
    <div className="left-nav">
      <MenuItem
        icon={<i className="fa fa-home" aria-hidden="true"></i>}
        text="Home"
      />
      <MenuItem
        icon={<i className="fa fa-heart" aria-hidden="true"></i>}
        text={"My Favorites"}
      />
      <MenuItem
        icon={<i className="fa fa-headphones" aria-hidden="true"></i>}
        text={"My Playlist"}
      />
      <MenuItem
        icon={<i className="fa fa-microphone" aria-hidden="true"></i>}
        text={"Artists"}
      />
      <MenuItem
        icon={<i className="fa fa-music" aria-hidden="true"></i>}
        text={"Albums"}
      />
    </div>
  );
}

export default Menu;
