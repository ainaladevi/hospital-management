import React from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaTemperatureEmpty } from "react-icons/fa6";

const VitalsSigns = () => {
  return (
    <div className="Vitalssigns-section mt-4">
      <h3 className="vitalssign-heading">Vitals Signs</h3>
      <hr />
      <div className="vitalssign-form">
        <div>
          <label for="">
            <TbActivityHeartbeat /> Blood Pressure (mmHg) *
          </label>
          <br></br>
          <div className="inner-form">
            <input type="text" placeholder="Systolic" />
            <span className="fs-4"> / </span>
            <input type="text" placeholder="Diastolic" />
          </div>
        </div>
        <div>
          <label for="">Heart Rate (bpm) *</label>
          <br />
          <input type="text" placeholder="72" />
        </div>
        <div>
          <label for="">
            <FaTemperatureEmpty /> Temperature (°F) *
          </label>
          <br />
          <input type="text" placeholder="98.6" />
        </div>
      </div>
      <div className="vitalssign-form mt-3">
        <div>
          <label for="">Respiratory Rate (per min) *</label>
          <br />
          <input type="text" placeholder="16" />
        </div>
        <div>
          <label for="">O2 Saturation (%) *</label>
          <br />
          <input type="text" placeholder="98" />
        </div>
        <div>
          <label for="">Pain Score (0-10)</label>
          <br />
          <input type="text" placeholder="0" />
        </div>
      </div>
    </div>
  );
};

export default VitalsSigns;
