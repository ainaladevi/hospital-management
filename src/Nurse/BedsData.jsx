import React, { useState } from "react";
import { MdBedroomParent } from "react-icons/md";
import AdmitPatient from "./AdmitPatientHead";

const BedsData = () => {
    // const[showModal, setShowModal] = useState(false);
    const[showPopup, setShowPopup] = useState(false);
  return (
    <section className="container bedsdata-section">
      <div className="bedcards">
        <div className="beds-cards d-flex flex-wrap gap-2">
          <div className="hero-beds">
            <div className="icu-card">
              <MdBedroomParent size={48} color="#E7000B" />
              <div className="icu-content mb-3">
                <span>ICU-101</span>
                <span className="hero-icu">ICU</span>
              </div>
            </div>
            <span className="occupied-data">Occupied</span>
          </div>
          <div className="floor-details">
            <div className="floor-inner-details">
              <p>Type</p>
              <p>Floor</p>
            </div>
            <div className="floor-inner-details1">
              <p>ICU</p>
              <p>Floor1</p>
            </div>
          </div>
          <hr/>
            <div className="icu-inner-details1">
              <span className="patient">Patient:</span>
              <span className="patient-name">Robert Taylor</span>
              <span className="patient">ID: PAT005</span>
            </div>
            <div className="icu-inner-details2 mt-2">
              <div className="card-details2 mt-4">
                <p>Admitted:</p>
                <p>Assigned Nurse:</p>
              </div>
              <div className="card-details3 mt-4">
                <p>2026-01-01</p>
                <p>Jennifer Thompson</p>
              </div>
              </div>
            <div>
                <button className="critical-btn">CRITICAL</button>
                <hr/>
            </div>
            <div className="btn-inner-section">
                <button className="chart-btn">View Chart</button>
                <button className="discharge-btn">Discharge</button>
            </div>
        </div>
        <div className="beds-cards">
          <div className="hero-beds">
            <div className="icu-card">
              <MdBedroomParent size={48} color="#0084D1" />
              <div className="icu-content ">
                <span>ICU-102</span>
                <span className="hero-icu">ICU</span>
              </div>
            </div>
            <span className="occupied-data">Occupied</span>
          </div>
          <div className="floor-details">
            <div className="floor-inner-details">
              <p>Type</p>
              <p>Floor</p>
            </div>
            <div className="floor-inner-details1">
              <p>ICU</p>
              <p>Floor1</p>
            </div>
          </div>
          <hr/>
            <div className="icu-inner-details1">
              <span className="patient">Patient:</span>
              <span className="patient-name">Maria Garcia</span>
              <span className="patient">ID: PAT006</span>
            </div>
            <div className="icu-inner-details2 mt-2">
              <div className="card-details2">
                <p>Admitted:</p>
                <p>Assigned Nurse:</p>
              </div>
              <div className="card-details3">
                <p>2026-01-02</p>
                <p>Jennifer Thompson</p>
              </div>
              </div>
            <div>
                <button className="stable-btn">STABLE</button>
                <hr/>
            </div>
            <div className="btn-inner-section">
                <button className="chart-btn">View Chart</button>
                <button className="discharge-btn">Discharge</button>
            </div>
          </div>
        <div className="beds-cards">
          <div className="hero-beds">
            <div className="icu-card">
              <MdBedroomParent size={48} color="#00A63E" />
              <div className="icu-content">
                <span>ICU-103</span>
                <span className="hero-icu">ICU</span>
              </div>
            </div>
            <span className="vacant-data">Vacant</span>
          </div>
            <div className="floor-details">
            <div className="floor-inner-details">
              <p>Type</p>
              <p>Floor</p>
            </div>
            <div className="floor-inner-details1">
              <p>ICU</p>
              <p>Floor1</p>
            </div>
          </div><hr/>
          <button className="admit-btn" onClick={()=> setShowPopup(true)}>Admit Patient</button>
          {showPopup && (
                <>
                <div className="modal-backdrop-custom fade show" onClick={()=>setShowPopup(false)}></div>
                <AdmitPatient closePopup={()=>setShowPopup(false)}/></>
            )}
        </div>
      </div>
      <div className="bedcards">
        <div className="beds-cards">
          <div className="hero-beds">
            <div className="icu-card">
              <MdBedroomParent size={48} color="#0084D1" />
              <div className="icu-content">
                <span>GW-201</span>
                <span className="hero-icu">General Ward A</span>
              </div>
            </div>
            <span className="occupied-data">Occupied</span>
          </div>
          <div className="floor-details">
            <div className="floor-inner-details">
              <p>Type</p>
              <p>Floor</p>
            </div>
            <div className="floor-inner-details1">
              <p>General</p>
              <p>Floor2</p>
            </div>
          </div>
          <hr/>
            <div className="icu-inner-details1">
              <span className="patient">Patient:</span>
              <span className="patient-name">David Kim</span>
              <span className="patient">ID: PAT007</span>
            </div>
            <div className="icu-inner-details2 mt-2">
              <div className="card-details2">
                <p>Admitted:</p>
                <p>Assigned Nurse:</p>
              </div>
              <div className="card-details3">
                <p>2025-12-31</p>
                <p>Karen Foster</p>
              </div>
              </div>
                <hr/>
            <div className="btn-inner-section">
                <button className="chart-btn">View Chart</button>
                <button className="discharge-btn">Discharge</button>
            </div>
        </div>
        <div className="beds-cards">
          <div className="hero-beds">
            <div className="icu-card">
              <MdBedroomParent size={48} color="#0084D1" />
              <div className="icu-content">
                <span>GW-202</span>
                <span className="hero-icu">General Ward A</span>
              </div>
            </div>
            <span className="occupied-data">Occupied</span>
          </div>
          <div className="floor-details">
            <div className="floor-inner-details">
              <p>Type</p>
              <p>Floor</p>
            </div>
            <div className="floor-inner-details1">
              <p>General</p>
              <p>Floor2</p>
            </div>
          </div>
          <hr/>
            <div className="icu-inner-details1">
              <span className="patient">Patient:</span>
              <span className="patient-name">Lisa Martinez</span>
              <span className="patient">ID: PAT008</span>
            </div>
            <div className="icu-inner-details2 mt-2">
              <div className="card-details2">
                <p>Admitted:</p>
                <p>Assigned Nurse:</p>
              </div>
              <div className="card-details3">
                <p>2026-01-02</p>
                <p>Karen Foster</p>
              </div>
              </div>
                <hr/>
            <div className="btn-inner-section">
                <button className="chart-btn">View Chart</button>
                <button className="discharge-btn">Discharge</button>
            </div>
          </div>
        <div className="beds-cards">
          <div className="hero-beds">
            <div className="icu-card">
              <MdBedroomParent size={48} color="#00A63E" />
              <div className="icu-content">
                <span>Private</span>
                <span className="hero-icu">Floor 3</span>
              </div>
            </div>
            <span className="vacant-data">Vacant</span>
          </div>
            <div className="floor-details">
            <div className="floor-inner-details">
              <p>Type</p>
              <p>Floor</p>
            </div>
            <div className="floor-inner-details1">
              <p>ICU</p>
              <p>Floor1</p>
            </div>
          </div><hr/>
          <button className="admit-btn" onClick={()=> setShowPopup(true)}>Admit Patient</button>
          {showPopup && (
                <AdmitPatient closePopup={()=>setShowPopup(false)}/>
            )}
        </div>
      </div>
      <div className="bedcards">
         <div className="beds-cards1">
          <div className="hero-beds">
            <div className="icu-card">
              <MdBedroomParent size={48} color="#90A1B9" />
              <div className="icu-content">
                <span>PV-302</span>
                <span className="hero-icu">Private Ward</span>
              </div>
            </div>
            <span className="reserved-data">reserved</span>
          </div>
            <div className="floor-details">
            <div className="floor-inner-details">
              <p>Type</p>
              <p>Floor</p>
            </div>
            <div className="floor-inner-details1">
              <p>Private</p>
              <p>Floor 3</p>
            </div>
          </div><hr/>
          <button className="admit-btn" onClick={()=> setShowPopup(true)}>Admit Patient</button>
          {showPopup && (
                <AdmitPatient closePopup={()=>setShowPopup(false)}/>
            )}
        </div>
        <div className="beds-cards1">
          <div className="hero-beds">
            <div className="icu-card">
              <MdBedroomParent size={48} color="#F54900" />
              <div className="icu-content">
                <span>ER-001</span>
                <span className="hero-icu">Emergency</span>
              </div>
            </div>
            <span className="occupied-data">Occupied</span>
          </div>
          <div className="floor-details">
            <div className="floor-inner-details">
              <p>Type</p>
              <p>Floor</p>
            </div>
            <div className="floor-inner-details1">
              <p>Emergency</p>
              <p>Floor 0</p>
            </div>
          </div>
          <hr/>
            <div className="icu-inner-details1">
              <span className="patient">Patient:</span>
              <span className="patient-name">Thomas Wright</span>
              <span className="patient">ID: PAT009</span>
            </div>
            <div className="icu-inner-details2 mt-2">
              <div className="card-details2">
                <p>Admitted:</p>
                <p>Assigned Nurse:</p>
              </div>
              <div className="card-details3">
                <p>2026-01-03</p>
                <p>Emergency Staff</p>
              </div>
              </div>
            <div>
                <button className="moderate-btn">MODERATE</button>
                <hr/>
            </div>
            <div className="btn-inner-section">
                <button className="chart-btn">View Chart</button>
                <button className="discharge-btn">Discharge</button>
            </div>
        </div>
        </div>
    </section>
  );
};

export default BedsData;
