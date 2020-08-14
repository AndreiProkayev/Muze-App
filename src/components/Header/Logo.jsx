import React from "react";

function Logo(props) {
  return (
    <div className="logo-box">
      <h2>
        <span className="logo-circle">{props.text[0]}</span>
        {props.text.substring(1)}
      </h2>
    </div>
  );
}

export default Logo;
