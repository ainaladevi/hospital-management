import React from 'react'

const InventoryTable = () => {
  return (
    <div className='container inventory-table-section'>
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
                    <td className='medication-data'><span className='medication-item1'>Paracetamol 500mg</span>
                    <span className='medication-item2'>Medicine</span></td>
                    <td className='stock-data1'>5000 tablets</td>
                    <td>2000 tablets</td>
                    <td>2027-06-15</td>
                    <td className='location-data'>Pharmacy - Shelf A3</td>
                    <td><button className='instock-btn'>in-stock</button></td>
                    <td><button className='reorder-btn'>Reorder</button></td>
                </tr>
                <tr>
                    <td className='medication-data'><span className='medication-item1'>Insulin Glargine 100U/ml</span>
                    <span className='medication-item2'>Medicine</span></td>
                    <td className='stock-data2'>450 vials</td>
                    <td>500 vials</td>
                    <td>2026-03-20</td>
                    <td className='location-data'>Pharmacy - Refrigerator B</td>
                    <td><button className='lowstock-btn'>low-stock</button></td>
                    <td><button className='reorder-btn'>Reorder</button></td>
                </tr>
                <tr>
                    <td className='medication-data'><span className='medication-item1'>Amoxicillin 250mg</span>
                    <span className='medication-item2'>Medicine</span></td>
                    <td className='stock-data3'>0 capsules</td>
                    <td>1000 capsules</td>
                    <td>N/A</td>
                    <td className='location-data'>Pharmacy - Shelf A3</td>
                    <td><button className='outofstock-btn'>out-of-stock</button></td>
                    <td><button className='reorder-btn'>Reorder</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default InventoryTable