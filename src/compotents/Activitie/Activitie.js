import React from "react";
import "./Activitie.css";

const Activitie = ({ activitie, addToList }) => {
  const { picture, name, time, description, age } = activitie;
  return (
    <div className="card p-3 rounded-2 border-0">
      <img src={picture} alt="" className="w-100 rounded-3" />
      <h5 className="py-2">{name}</h5>
      <p className="text-black-50 pb-2">{description.slice(0, 70) + "..."}</p>
      <h6 className="pb-2">For Age : {age}</h6>
      <h6 className="pb-2">Time required : {time}s</h6>
      <button className="btn" onClick={() => addToList(time)}>
        Add Your Activity
      </button>
    </div>
  );
};

export default Activitie;
