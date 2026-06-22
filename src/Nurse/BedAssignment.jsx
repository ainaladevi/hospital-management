import React from "react";

const BedAssignment = () => {
  return (
    <div className="bedassignment-section">
      <h2 className="herobed-heading">Bed Assignment</h2>
      <div className="bed-form">
        <div>
          <label for="ward">Ward *</label>
          <input type="text"></input>
        </div>
        <div>
          <label for="bed">Bed Number *</label>
          <input type="text"></input>
        </div>
        <div>
          <label for="nurse">Assigned Nurse *</label>
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
};

export default BedAssignment;
