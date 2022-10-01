import React from "react";
import "./Activities.css";
import Activitie from "../Activitie/Activitie";

const Activities = ({ activities, addToList }) => {
  return (
    <div>
      <h5 className="py-3">Select today's exercise</h5>

      <div className="cards mt-3">
        {activities.map((activitie) => (
          <Activitie
            activitie={activitie}
            key={activitie.id}
            addToList={addToList}
          ></Activitie>
        ))}
      </div>
    </div>
  );
};

export default Activities;
