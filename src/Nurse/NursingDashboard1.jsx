import React from 'react'
import Sidebar from './Sidebar'
import PatientCare from './PatientCare'
import CriticalPatients from './CriticalPatients'
import HospitalData from './HospitalData'
import Nursingdashboard from './Nursingdashboard'
import Navbar from './Navbar'

const NursingDashboard1 = () => {
  return (
    <div className="app-layout">
            <Sidebar/>
            <div className="content">
              <Navbar/>
              <Nursingdashboard/>
            </div>
          </div>
  )
}

export default NursingDashboard1