import React from 'react'
import PharmaSidebar from './PharmaSidebar'
import PharmaNavbar from './PharmaNavBar'
import InventoryHeading from './InventoryHeading'
import InventoryTable from './InventoryTable'

const AllPage = () => {
  return (
    <div><div className="app-layout">
      <PharmaSidebar />
      <div className="content">
        <PharmaNavbar />
        <InventoryHeading/>
        <InventoryTable/>
        </div>
        </div>
        </div>
  )
}

export default AllPage