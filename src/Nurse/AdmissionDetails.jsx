import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AdmissionDetails = () => {
  return (
    <div className="admission-section mt-4">
      <h2>Admission Details</h2>
      <hr/>
      <div className="admission-form">
        <div>
          <label for="">Admission Date &amp; Time *</label><br/>
          <input type="text" />
        </div>
        <div>
          <label for="">Admitting Doctor *</label><br/>
          <input type="text" />
        </div>
      </div>
      <div className="admission-form">
        <div>
          <label for="">Primary Diagnosis *</label><br/>
          <input type="text" placeholder="Enter Primary Diagnosis"/>
        </div>
        <div>
          <label for="">Critical Status *</label><br/>
          <input type="text" />
        </div>
      </div>
      <div className="admission-form1 mt-3">
        <label for="">Admission Notes</label>
        <textarea cols={100} rows={3} placeholder="Patient condition, special requirements, care instructions..."></textarea>
      </div>
      <div className="preadmission-section">
        <h3 className="checklist-heading">Pre-Admission Checklist</h3>
        <div className="checklist-items">
            <label>
            <input type="checkbox"/>
            <span>Patient identification verified</span>
            </label>
            <label>
            <input type="checkbox"/>
            <span>Bed cleaned and prepared</span>
            </label>
            <label>
            <input type="checkbox"/>
            <span>Medical equipment ready</span>
            </label>
            <label>
            <input type="checkbox"/>
            <span>Consent forms signed</span>
            </label>
        </div>
      </div>
      <div className="submission-btn mt-4">
        <button type="submit" className="submit-btn"> <IoMdCheckmarkCircleOutline /> Confirm Admission</button>
        <button className="cancel-btn">cancel</button>
      </div>
    </div>
  );
};

export default AdmissionDetails;
