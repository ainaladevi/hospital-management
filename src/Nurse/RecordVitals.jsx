import React from 'react'
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const RecordVitals = () => {
  return (
    <div className='container recordvitals-section'>
        <h3 className='recordvitals-heading'>Record Vitals</h3>
        <div className="recordvitals-form">
            <div className='recordvitals-innerform'>
                <label for ="">Patient</label><br/>
                <input type='text'/>
            </div>
            <div>
                <label for ="">Recording Time</label><br/>
                <input type='text'/>
            </div>
        </div>
        <div className="vitalssign-form2">
                <div>
                  <label for="">
                    <TbActivityHeartbeat /> Blood Pressure (mmHg) *
                  </label>
                  <br></br>
                  <div className="inner-form1">
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
              <div className="vitalssign-form3 mt-3">
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
              <div className="notes-section mt-4">
                    <label for ="">Notes</label><br/>
                    <textarea placeholder='Any observations or concerns...'></textarea>
              </div>
              <div className="btns-section mt-3">
                <button type='submit' className='save-btn'><IoMdCheckmarkCircleOutline /> Save Vitals</button>
                <button type='reset' className='clear-btn'>Clear Form</button>
                <button className='sync-btn '>Auto-sync from IoT devices</button>
              </div>
    </div>
  )
}

export default RecordVitals