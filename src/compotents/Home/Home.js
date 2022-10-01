import React, { useEffect, useState } from "react";
import "./Home.css";
import Profile from "./../Profile/Profile";
import Main from "../Main/Main";

const Home = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const [times, setTimes] = useState(0);

  const addToList = (time) => {
    const totalTime = times + time;
    setTimes(totalTime);
  };
  return (
    <div className="home">
      <Main activities={activities} addToList={addToList}></Main>
      <Profile times={times}></Profile>
    </div>
  );
};

export default Home;
