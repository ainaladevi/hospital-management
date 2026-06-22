import React from 'react'
import VitalsMonitoringHead from './VitalsMonitoringHead'
import RecordVitals from './RecordVitals'
import RecordVitalSigns from './RecordVitalSigns'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const VitalsMonitoringPage = () => {
  return (
    <div className="app-layout">  
            <Sidebar/>
            <div className="content">
              <Navbar/>
              <VitalsMonitoringHead/>
              <RecordVitals/>
              <RecordVitalSigns/>
              </div></div>
  )
}

export default VitalsMonitoringPage