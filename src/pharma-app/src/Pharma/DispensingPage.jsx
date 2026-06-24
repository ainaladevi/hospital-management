import React from 'react'
import PharmaSidebar from './PharmaSidebar'
import PharmaNavbar from './PharmaNavBar'
import DispensingHeading from './DispensingHeading'
import DispensingData from './DispensingData'

const DispensingPage = () => {
  return (
    <div className="app-layout">
      <PharmaSidebar />
      <div className="content">
        <PharmaNavbar />
        <DispensingHeading/>
        <DispensingData/>
        </div></div>
  )
}

export default DispensingPage