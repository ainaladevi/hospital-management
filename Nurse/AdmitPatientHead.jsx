import React from 'react'
import { IoMdClose } from "react-icons/io";
import BedAssignment from './BedAssignment';
import PatientSelection from './PatientSelection'
import AdmissionDetails from './AdmissionDetails';

const AdmitPatient = ({closePopup}) => {
  return (
    <div className='admit-modal'>
        <div className="admit-modal-content">
            <button className='close-btn' onClick={closePopup}><IoMdClose /></button>
        <h1 className="hero-patient-heading">Admit Patient to Available Bed</h1>
        <PatientSelection/>
        <BedAssignment/>
        <AdmissionDetails/>
        </div>
    </div>
  )
}

export default AdmitPatient