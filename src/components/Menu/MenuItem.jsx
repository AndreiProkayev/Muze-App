import React from "react";

function MenuItem(props) {
  return (
    <div className="nav-menu">
      {props.icon}
      {props.text}
    </div>
  );
}

export default MenuItem;
