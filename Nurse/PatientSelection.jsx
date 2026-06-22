import React from "react";

const PatientSelection = () => {
  return (
    <div className="patientselection-section">
      <h2 className="hero-patient-heading1">Patient Selection</h2>
      <hr />
      <div className="patient-form">
        <div>
          <label for="">Search Patient *</label><br/>
          <input type="text" placeholder="Enter patient ID or name" />
        </div>
        <div>
          <label For="">Patient Type *</label><br/>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default PatientSelection;
