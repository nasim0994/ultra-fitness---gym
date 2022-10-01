import React, { useState, useEffect } from "react";
import "./ExerciseDetails.css";
import Swal from "sweetalert2";
import { getLocalStorage } from "../../utility/script";

const ExerciseDetails = ({ times }) => {
  const breakTimes = [10, 15, 30, 45, 60];

  //If Reload localstorage to display
  useEffect(() => {
    const getLS = getLocalStorage();
    setBreaks(getLS);
  }, []);

  // Break time handel
  const [breaks, setBreaks] = useState(0);
  const breakHandel = (breaks) => {
    setBreaks(breaks);

    localStorage.setItem("break-time", breaks);
  };

  //Complete Handel
  const completeHandel = (breaks) => {
    if (breaks > 0) {
      // selected aleart
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Activity Completed",
        showConfirmButton: true,
      });
    } else {
      alert("please break time select");
    }
  };

  return (
    <div>
      <div className="mt-5">
        <div className="break-area">
          <h5>Add A Break</h5>
          <div className="d-flex align-items-center justify-content-around text-center mt-4 rounded-2 p-3 break-times">
            {breakTimes.map((breakTime) => (
              <button key={breakTime} onClick={() => breakHandel(breakTime)}>
                {breakTime}s
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h5>Exercise Details</h5>
        {/* Exercise time */}
        <div className="d-flex align-items-center justify-content-between bg-ash mt-3 rounded-2 py-3 px-4 ">
          <h6>Exercise time</h6>
          <p className="text-black-50">{times} seconds</p>
        </div>
        {/* Break time */}
        <div className="d-flex align-items-center justify-content-between bg-ash mt-3 rounded-2 py-3 px-4 ">
          <h6>Break time</h6>
          <p className="text-black-50">{breaks} seconds</p>
        </div>
      </div>

      <button
        onClick={() => completeHandel(breaks)}
        className="btn btn-primary text-center w-100 mt-3 py-2 fw-semibold "
      >
        Activity Completed
      </button>
    </div>
  );
};

export default ExerciseDetails;
