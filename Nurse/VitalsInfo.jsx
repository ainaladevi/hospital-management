import React from "react";

const VitalsInfo = () => {
  return (
    <div className="vitals-form-section mt-5">
      <div className="hero-vitalsform row">
        <div className="col-lg-6">
          <label for="">Recording Date &amp; Time *</label><br/>
          <input type="text" />
        </div>
        <div className="col-lg-6">
          <label for="">Recorded By *</label><br/>
          <input type="text" placeholder="Nurse Sarah Miller"/>
        </div>
      </div>
    </div>
  );
};

export default VitalsInfo;
