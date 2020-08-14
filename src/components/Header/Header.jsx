import React from "react";
import Logo from "./Logo";
import UserInput from "./UserInput";
import NotificationBox from "./NotificationsBox";
import UserProfile from "./UserProfile";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Logo text={"Muse"} />
      <UserInput />
      <NotificationBox />
      <UserProfile />
    </div>
  );
}

export default Header;
