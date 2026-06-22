import React from "react";
import { IoMdClose } from "react-icons/io";
import RecordVitalsForm from "./RecordVitalsForm";
import VitalsSigns from "./VitalsSigns";
import AdditionalMeasurements from './AdditionalMeasurements'

const RecordVitalsHead = ({closePopup}) => {
  return (
    <div>
      <div className="admit-modal">
        <div className="admit-modal-content">
          <button className="close-btn" onClick={closePopup}>
            <IoMdClose />
          </button>
          <h3 className="recordvitalsign-heading">Record Vital Signs</h3>
          <p className="recordvitals-sub">Robert Taylor - ICU-101</p><hr/><br/>
          <RecordVitalsForm/>
          <VitalsSigns/>
          <AdditionalMeasurements/>
        </div>
      </div>
    </div>
  );
};

export default RecordVitalsHead;
