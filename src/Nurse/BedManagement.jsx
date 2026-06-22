import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import BedHeading from './BedHeading'
import BedsData from './BedsData'


const BedManagement = () => {
  return (
    <div className="app-layout">
            <Sidebar/>
            <div className="content">
              <Navbar/>
              <BedHeading/>
              <BedsData/>
              </div>
              </div>
  )
}

export default BedManagement