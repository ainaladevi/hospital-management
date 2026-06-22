import React from 'react'
import { IoMdClose } from "react-icons/io";
import MedicationSchedule from './MedicationSchedule';
import Monitoring from './Monitoring';
import PatientInfo from './PatientInfo';
import NursingTasks from './NursingTasks';

const NursingCarePlanHead = ({closePopup}) => {
  return (
    <div className='admit-modal'>
        <div className="admit-modal-content">
            <button className='close-btn' onClick={closePopup}><IoMdClose /></button>
            <h1 className="hero-nursing-head">Nursing Care Plan</h1>
            <p className='hero-nursing-sub'>Robert Taylor - ICU-101</p>
            <hr/>
            <PatientInfo/>
            <MedicationSchedule/>
            <Monitoring/>
            <NursingTasks/>
        </div>
    </div>
  )
}

export default NursingCarePlanHead