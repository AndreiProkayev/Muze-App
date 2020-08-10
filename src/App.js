import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LeftNav from "./components/LeftNav/LeftNav";
import UserView from "./components/UserView/UserView";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main">
      <Header />
      <LeftNav />
      <UserView />
      <Footer />
    </div>
  );
}

export default App;
