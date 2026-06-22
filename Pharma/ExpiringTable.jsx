import React from 'react'

const ExpiringTable = () => {
  return (
    <div><div className='container inventory-table1-section'>
        <table className='inventory-table'>
            <thead className='inventory-header'>
                <tr>
                    <th>Medication</th>
                    <th>Current Stock</th>
                    <th>Min Stock</th>
                    <th>Expiry Date</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className='inventory-body'>
                <tr>
                    <td className='medication-data'><span className='medication-item1'>IV Fluid - Normal Saline 500ml</span>
                    <span className='medication-item2'>Consumable</span></td>
                    <td className='stock-data2'>300 bags</td>
                    <td>1000 bags</td>
                    <td>2026-02-10</td>
                    <td className='location-data'>Storage - Section A</td>
                    <td><button className='expiring-btn1'>expiring-soon</button></td>
                    <td><button className='reorder-btn'>Reorder</button></td>
                </tr>
            </tbody>
        </table>
    </div></div>
  )
}

export default ExpiringTable