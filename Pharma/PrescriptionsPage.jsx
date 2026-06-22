import React from 'react'
import PharmaSidebar from './PharmaSidebar'
import PharmaNavbar from './PharmaNavBar'
import PrescriptionHeading from './PrescriptionHeading'
import PendingPrescriptions from './PendingPrescriptions'

const PrescriptionsPage = () => {
  return (
    <div className="app-layout">
      <PharmaSidebar />
      <div className="content">
        <PharmaNavbar />
        <PrescriptionHeading/>
        <PendingPrescriptions/>
      </div>
    </div>
  )
}

export default PrescriptionsPage