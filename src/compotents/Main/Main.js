import React from "react";
import "./Main.css";
import Activities from "../Activities/Activities";
import Header from "../Header/Header";
import Faqs from "../Faqs/Faqs";

const Main = ({ activities, addToList }) => {
  return (
    <div className="main-area">
      <Header></Header>
      <Activities activities={activities} addToList={addToList}></Activities>
      <Faqs></Faqs>
    </div>
  );
};

export default Main;
