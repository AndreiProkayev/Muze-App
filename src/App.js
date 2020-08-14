import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import UserView from "./components/UserView/UserView";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main">
      <Header />
      <Menu />
      <UserView />
      <Footer />
    </div>
  );
}

export default App;
