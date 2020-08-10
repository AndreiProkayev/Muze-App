import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-box">
        <h2>
          <span className="logo-m">M</span>UZE
        </h2>
      </div>
      <div className="input-search-box">
        <input className="user-input" type="text" placeholder="Search..." />
      </div>
      <div className="notifications-box">
        <i className="far fa-bell"></i>
      </div>
      <div className="user-profile-box">
        <div className="profile">img</div>
      </div>
    </div>
  );
}

export default Header;
