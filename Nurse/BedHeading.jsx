import React, { useState } from 'react'
import AdmitPatient from './AdmitPatient';

const BedHeading = () => {
    const[showPopup, setShowPopup] = useState(false);
  return (
    <header className='bed-section ps-3'>
        <div className='bed-heading'>
            <h1 className='heading'>Bed Management</h1>
            <p className='bed-data'>Monitor and manage hospital bed allocation</p>
        </div>
        <div className='btn-section d-flex'>
            <div className='btn-set'>
                <button className='btn1'>All Beds</button>
                <button className='btn-2'>Occupied</button>
                <button className='btn-2'>Vacant</button>
            </div>
            <button className='btn-3 mt-2' onClick={()=> setShowPopup(true)}>+ Admit Patient</button>
            {showPopup && (
                <AdmitPatient closePopup={()=>setShowPopup(false)}/>
            )}
        </div>
        </header>
  )
}

export default BedHeading