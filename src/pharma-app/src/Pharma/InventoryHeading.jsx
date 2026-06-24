import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const InventoryHeading = () => {
    const[activeBtn,setActiveBtn] = useState("all")
  return (
    <header className='inventory-section mt-5 ms-3'>
        <div>
            <h1 className='inventory-heading'>Pharmacy Inventory</h1>
            <p className='inventory-sub'>Manage medication stock levels</p>
        </div>
        <div className='btn-section1'>
            <NavLink to="/allpage" className={({isActive})=> isActive ? "all-btn active-btn":"all-btn"}>All</NavLink>
            <NavLink to="/lowstock" className={({isActive})=> isActive ? "stock-btn active-btn":"stock-btn"} >Low Stock</NavLink>
            <NavLink to ="/expiring" className={({isActive})=> isActive ? "expiring-btn active-btn":"expiring-btn"}>Expiring</NavLink>
        </div>
    </header>
  )
}

export default InventoryHeading