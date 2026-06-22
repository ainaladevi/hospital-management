import React, { useState } from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoCameraOutline } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import RecordVitals from "./RecordVitals";
import NursingCarePlan from "./NursingCarePlan";
import RecordVitalSignsPage from "./RecordVitalSignsPage";

const PatientsData = () => {
  const[showPopup, setShowPopup] = useState(false);
  const[showCarePlan, setShowCarePlan] = useState(false);
  return (
    <div className="container patients-data-section ms-3">
      <div className="patientdata-card">
        <div className="patients-data-items">
          <div className="patient-data1">
            <p>Bed 101</p>
          </div>
          <div className="patient-data">
            <div className="patient-info">
              <div className="patient-data2">
                <span>Robert Taylor</span>
                <button className="pat-btn">PAT005</button>
                <button className="critical-btn">critical</button>
              </div>
              <span className="icuadmit-data">ICU | Admitted: 2026-01-01</span>
            </div>
            <div className="patients-actions">
              <button className="vitals-btn" onClick={()=> setShowPopup(true)}>
                <TbActivityHeartbeat /> Record Vitals
              </button>
              {showPopup && (
                <RecordVitalSignsPage closePopup={()=>setShowPopup(false)}/>
            )}
              <button className="scan-btn">
                <IoCameraOutline /> Upload Scan
              </button>
              <button className="plan-btn" onClick={()=> setShowCarePlan(true)}>
                <LuClipboardList />
                Care Plan
              </button>
              {showCarePlan && (
                <NursingCarePlan closePopup={()=>setShowCarePlan(false)}/>
            )}
            </div>
          </div>
        </div>
        <hr />
        <div className="patient-info1">
          <div className="patient-item1">
            <span className="patient-inner-details">Age/Gender</span>
            <span className="patient-inner-details1">67yr / Male</span>
          </div>
          <div className="patient-item1">
            <span className="patient-inner-details">Blood Group</span>
            <span className="patient-inner-details1">O-</span>
          </div>
          <div className="patient-item1">
            <span className="patient-inner-details">Emergency contact</span>
            <span className="patient-inner-details1">+1-555-0502</span>
          </div>
          <div className="patient-item1">
            <span className="patient-inner-details">Allergies</span>
            <span className="patient-inner-details2">None recorded</span>
          </div>
        </div>
      </div>
      <div className="patientdata-card1">
        <div className="patients-data-items">
          <div className="patient-carddata1">
            <p>Bed 102</p>
          </div>
          <div className="patient-data">
            <div className="patient-info">
              <div className="patient-data2">
                <span>Maria Garcia</span>
                <button className="pat-btn">PAT006</button>
                <button className="stable-btn">stable</button>
              </div>
              <span className="icuadmit-data">ICU | Admitted: 2026-01-02</span>
            </div>
            <div className="patients-actions">
              <button className="vitals-btn" onClick={()=> setShowPopup(true)}>
                <TbActivityHeartbeat /> Record Vitals
              </button>
              {/* {showPopup && (
                <RecordVitals closePopup={()=>setShowPopup(false)}/>
            )} */}
              <button className="scan-btn">
                <IoCameraOutline /> Upload Scan
              </button>
              <button className="plan-btn" onClick={()=> setShowCarePlan(true)}>
                <LuClipboardList />
                Care Plan
              </button>
              {showCarePlan && (
                <NursingCarePlan closePopup={()=>setShowCarePlan(false)}/>
            )}
            </div>
          </div>
        </div>
      </div>
      <div className="patientdata-card1">
        <div className="patients-data-items">
          <div className="patient-carddata1">
            <p>Bed 201</p>
          </div>
          <div className="patient-data">
            <div className="patient-info">
              <div className="patient-data2">
                <span>David Kim</span>
                <button className="pat-btn">PAT007</button>
              </div>
              <span className="icuadmit-data">ICU | Admitted: 2025-12-31</span>
            </div>
            <div className="patients-actions">
              <button className="vitals-btn" onClick={()=> setShowPopup(true)}>
                <TbActivityHeartbeat /> Record Vitals
              </button>
              {/* {showPopup && (
                <RecordVitals closePopup={()=>setShowPopup(false)}/>
            )} */}
              <button className="scan-btn">
                <IoCameraOutline /> Upload Scan
              </button>
              <button className="plan-btn" onClick={()=> setShowCarePlan(true)}>
                <LuClipboardList />
                Care Plan
              </button>
              {showCarePlan && (
                <NursingCarePlan closePopup={()=>setShowCarePlan(false)}/>
            )}
            </div>
          </div>
        </div>
      </div>
      <div className="patientdata-card1">
        <div className="patients-data-items">
          <div className="patient-carddata1">
            <p>Bed 202</p>
          </div>
          <div className="patient-data">
            <div className="patient-info">
              <div className="patient-data2">
                <span>Lisa Martinez</span>
                <button className="pat-btn">PAT008</button>
              </div>
              <span className="icuadmit-data">ICU | Admitted: 2026-01-02</span>
            </div>
            <div className="patients-actions">
              <button className="vitals-btn" onClick={()=> setShowPopup(true)}>
                <TbActivityHeartbeat /> Record Vitals
              </button>
              {/* {showPopup && (
                <RecordVitals closePopup={()=>setShowPopup(false)}/>
            )} */}
              <button className="scan-btn">
                <IoCameraOutline /> Upload Scan
              </button>
              <button className="plan-btn" onClick={()=> setShowCarePlan(true)}>
                <LuClipboardList />
                Care Plan
              </button>
              {showCarePlan && (
                <NursingCarePlan closePopup={()=>setShowCarePlan(false)}/>
            )}
            </div>
          </div>
        </div>
      </div>
      <div className="patientdata-card1">
        <div className="patients-data-items">
          <div className="patient-carddata2">
            <p>Bed 101</p>
          </div>
          <div className="patient-data">
            <div className="patient-info">
              <div className="patient-data2">
                <span>Thomas Wright</span>
                <button className="pat-btn">PAT009</button>
                <button className="moderate-btn">moderate</button>
              </div>
              <span className="icuadmit-data">ICU | Admitted: 2026-01-03</span>
            </div>
            <div className="patients-actions">
              <button className="vitals-btn" onClick={()=> setShowPopup(true)}>
                <TbActivityHeartbeat /> Record Vitals
              </button>
              {/* {showPopup && (
                <RecordVitals closePopup={()=>setShowPopup(false)}/>
            )} */}
              <button className="scan-btn">
                <IoCameraOutline /> Upload Scan
              </button>
              <button className="plan-btn" onClick={()=> setShowCarePlan(true)}>
                <LuClipboardList />
                Care Plan
              </button>
              {showCarePlan && (
                <NursingCarePlan closePopup={()=>setShowCarePlan(false)}/>
            )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PatientsData;
