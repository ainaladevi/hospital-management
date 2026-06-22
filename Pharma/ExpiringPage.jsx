import React from 'react'
import InventoryHeading from './InventoryHeading'
import PharmaNavbar from './PharmaNavBar'
import PharmaSidebar from './PharmaSidebar'
import ExpiringTable from './ExpiringTable'

const ExpiringPage = () => {
  return (
    <div><div className="app-layout">
      <PharmaSidebar />
      <div className="content">
        <PharmaNavbar />
        <InventoryHeading/>
        <ExpiringTable/>
        </div>
        </div></div>
  )
}

export default ExpiringPage