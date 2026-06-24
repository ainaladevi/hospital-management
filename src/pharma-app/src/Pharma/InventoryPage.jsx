import React from 'react'
import PharmaSidebar from './PharmaSidebar'
import PharmaNavbar from './PharmaNavBar'
import InventoryHeading from './InventoryHeading'

const InventoryPage = () => {
  return (
    <div className="app-layout">
      <PharmaSidebar />
      <div className="content">
        <PharmaNavbar />
        <InventoryHeading/>
      </div>
    </div>
  )
}

export default InventoryPage