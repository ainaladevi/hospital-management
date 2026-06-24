import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const DispensingData = () => {
  return (
    <div className=' dispensing-section1'>
        <h3 className='dispense-header'>Dispense Medication</h3>
        <div className="dispense-form mt-3">
            <div><label>Prescription ID</label><br/>
            <input type='text' placeholder='Enter prescription number...'/></div>
            <div>
            <label>Patient ID</label><br/>
            <input type='text' placeholder='Patient ID or search...'/>
            </div>
        </div>
        <div className="prescription-details">
            <h3 className='prescription-heading1'>Prescription Details</h3>
            <div className="prescription-inner-details">
                <span>Patient:</span>
                <span>John Anderson</span>
            </div>
            <div className="prescription-inner-details">
                <span>Doctor:</span>
                <span>Dr. James Wilson</span>
            </div>
            <div className="prescription-inner-details">
                <span>Date:</span>
                <span>Jan 3, 2026</span>
            </div>
        </div>
        <h3 className="medications-heading mt-4">Medications to Dispense</h3>
        <div className="medication-cards">
            <div className="medicationcard-items">
                <div className="medicationcard-inner-item">
                    <span className='medication-data1'>Metformin 500mg</span>
                    <span className='medication-data2'>Twice daily - 30 days (60 tablets)</span>
                </div>
                <button className='available-btn'>Available</button>
            </div>
        </div>
        <div className="medication-cards mt-4">
            <div className="medicationcard-items">
                <div className="medicationcard-inner-item">
                    <span className='medication-data1'>Lisinopril 10mg</span>
                    <span className='medication-data2'>Once daily - 30 days (30 tablets)</span>
                </div>
                <button className='available-btn'>Available</button>
            </div>
        </div>
        <div className="pharmicist-section mt-4">
            <label>Pharmacist Notes</label><br/>
            <textarea placeholder='Any special instructions or notes for the patient...'></textarea>
        </div>
        <div className="btns-section1 mt-4">
            <button className='dispensing-btn'><IoMdCheckmarkCircleOutline /> Complete Dispensing</button>
            <button className='print-btn'>Print Label</button>
            <button className='cancel-btn1'>Cancel</button>
        </div>
    </div>
  )
}

export default DispensingData