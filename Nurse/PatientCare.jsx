import React from "react";
import { TfiTimer } from "react-icons/tfi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LuClipboardList } from "react-icons/lu";

const PatientCare = () => {
  return (
    <section className=" patientcare-section mt-5">
      <div className="card row gap-2">
        <div className="bed-card col-lg-5">
          <div className="bed-inner-content">
            <p className="bed-inner-data">Bed Status by Ward</p>
          </div>
          <div className="card-details">
            <div className="hero-cards">
              <div className="icu-inner-content">
                <p className="icu-inner-data1">ICU</p>
                <p className="icu-inner-data2">Intensive Care Unit</p>
              </div>
              <div className="icu-inner-content1">
                <div className="icu-inner-content2">
                  <p className="icu-inner-data3">2 / 3 occupied</p>
                  <p className="icu-inner-data4">67% occupancy</p>
                </div>
                <div className="icu-inner-content3 mt-3">
                  <span className="icu-inner-data5">High</span>
                </div>
              </div>
            </div>
            <div className="hero-cards">
              <div className="wardA-inner-content">
                <p className="wardA-inner-data1">General Ward A</p>
                <p className="wardA-inner-data2">General medical ward</p>
              </div>
              <div className="wardA-inner-content1">
                <div className="wardA-inner-content2">
                  <p className="wardA-inner-data3">2 / 2 occupied</p>
                  <p className="wardA-inner-data4">100% occupancy</p>
                </div>
                <div className="wardA-inner-content3 mt-3">
                  <span className="wardA-inner-data5">Full</span>
                </div>
              </div>
            </div>
            <div className="hero-cards">
              <div className="patientward-inner-content">
                <p className="patientward-inner-data1">Private Ward</p>
                <p className="patientward-inner-data2">Private rooms</p>
              </div>
              <div className="patientward-inner-content1">
                <div className="patientward-inner-content2">
                  <p className="patientward-inner-data3">0 / 2 occupied</p>
                  <p className="patientward-inner-data4">0% occupancy</p>
                </div>
                <div className="patientward-inner-content3 mt-3">
                  <span className="patientward-inner-data5">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="upcomingtask-card col-lg-5">
          <div className="upcomingtask-inner-content">
            <p className="upcomingtask-inner-data">Upcoming Tasks</p>
          </div>
          <div className="hero-card1">
            <div className="left-section">
              <TfiTimer color="#F54900" size={20} className="timer-icon" />
            <div className="meditation-inner-content">
              <span className="meditation-inner-data">
                Medication Round - 2:00 PM
              </span>
              <span className="meditation-inner-data1">
                ICU Ward - 3 patients
              </span>
            </div>
            </div>
            <button className="start-btn">Start</button>
          </div>
          <div className="hero-card2">
            <div className="left-section">
              <TbActivityHeartbeat size={20} color="#0084D1" className="graph-icon" />
            <div className="vitalcheck-inner-content">
              <span className="vitalcheck-inner-data">
                Vitals Check - 3:00 PM
              </span>
              <span className="vitalcheck-inner-data1">
                All wards - 8 patients
              </span>
            </div>
            </div>
            <button className="start-btn">Start</button>
          </div>
          <div className="hero-card3">
            <div className="left-section">
              <LuClipboardList color="#9810FA" className="clipboard-icon1"/>
            <div className="shift-inner-content">
              <span className="shift-inner-data">
                Shift Handover - 7:00 PM
              </span>
              <span className="shift-inner-data1">
                Prepare handover notes
              </span>
            </div>
            </div>
            <button className="prepare-btn">prepare</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientCare;
