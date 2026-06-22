import React from "react";
import { GoAlert } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AdditionalMeasurements = () => {
  return (
    <div className="measurements-section mt-5">
      <h3 className="measurements-heading">Additional Measurements</h3>
      <hr />
      <div className="vitalssign-form mt-3">
        <div>
          <label for="">Blood Glucose (mg/dL)</label>
          <br />
          <input type="text" placeholder="100" />
        </div>
        <div>
          <label for="">Weight (kg)</label>
          <br />
          <input type="text" placeholder="70.0" />
        </div>
        <div>
          <label for="">Height (cm)</label>
          <br />
          <input type="text" placeholder="170" />
        </div>
      </div>
      <div className="clinical-card mt-5">
        <label for="">Clinical Observations & Notes</label>
        <br />
        <textarea
          rows={3}
          cols={50}
          placeholder="Any observations, patient complaints, or concerns..."
        ></textarea>
      </div>
      <div className="alert-section mt-5">
        &nbsp;<span className="alert-data"><GoAlert color="#F54900" />Alert Conditions</span>
        <div className="mt-3 alert-data2">
          <div className="alert-data1">
            <input type="checkbox" />
            <span>Abnormal readings detected</span>
          </div>
          <div className="alert-data1">
            <input type="checkbox" />
            <span>Notify attending physician</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="submission-btn mt-4">
        <button className="submit-btn">
          <IoMdCheckmarkCircleOutline /> Save Vitals to Chart
        </button>
        <button className="cancel-btn">cancel</button>
      </div>
    </div>
  );
};

export default AdditionalMeasurements;
