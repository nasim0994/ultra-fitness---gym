import React from "react";
import "./Profile.css";

import Account from "../Account/Account";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";

const Profile = ({ times }) => {
  return (
    <div className="profile-area">
      <Account></Account>
      <ExerciseDetails times={times}></ExerciseDetails>
    </div>
  );
};

export default Profile;
