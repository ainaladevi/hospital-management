import React from 'react'
import HospitalData from './HospitalData'
import CriticalPatients from './CriticalPatients'
import PatientCare from './PatientCare'

const Nursingdashboard = () => {
  return (
    <header className='container hero-main bg-light'>
        <div className='main-data'>
           <h1 className='hero-heading mt-4'>Nursing Dashboard</h1>
           <p className='hero-sub mb-2'>Ward management, patient care &amp; vital monitoring</p>
           <HospitalData/>
           <CriticalPatients/>
           <PatientCare/>
        </div>
    </header>
  )
}

export default Nursingdashboard