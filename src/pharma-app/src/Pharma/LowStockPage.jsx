import React from 'react'
import PharmaSidebar from './PharmaSidebar'
import PharmaNavbar from './PharmaNavBar'
import InventoryHeading from './InventoryHeading'
import LowStockTable from './LowStockTable'

const LowStockPage = () => {
  return (
    <div><div className="app-layout">
      <PharmaSidebar />
      <div className="content">
        <PharmaNavbar />
        <InventoryHeading/>
        <LowStockTable/>
        </div>
        </div></div>
  )
}

export default LowStockPage