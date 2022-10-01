import React from "react";
import nasim from "../../img/nasim.jpeg";
import "./Account.css";

const Account = () => {
  return (
    <div className="my-details">
      {/* Name & location */}
      <div className="d-flex align-items-center gap-3">
        <img className="my-img" src={nasim} alt="" />
        <div>
          <h5>Md Nasim Uddin</h5>
          <p className="text-black-50">
            <i className="fas fa-map-marker-alt"></i> Dhaka,Bangladesh
          </p>
        </div>
      </div>
      {/* weight. height & age */}
      <div className="bg-ash d-flex align-items-center justify-content-around text-center mt-4 rounded-2 p-2">
        <div>
          <h4>
            72<small className="text-black-50 fs-6">kg</small>
          </h4>
          <p>Weight</p>
        </div>

        <div>
          <h4>5′9</h4>
          <p>Height</p>
        </div>

        <div>
          <h4>
            25<small className="text-black-50 fs-6">yrs</small>
          </h4>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
