import React from 'react'

const PatientInfo = () => {
  return (
    <div className='patientinfo-section'>
        <div className='patient-inner-info'>
            <span className='patient-inner-info1'>Patient</span>
            <span className='patient-inner-info2'>Robert Taylor</span>
        </div>
        <div className='patient-inner-info'>
            <span className='patient-inner-info1'>Admission Date</span>
            <span className='patient-inner-info2'>2026-01-01</span>
        </div>
        <div className='patient-inner-info'>
            <span className='patient-inner-info1'>Critical Status</span>
            <button className='critical-btn'>critical</button>
        </div>
    </div>
  )
}

export default PatientInfo