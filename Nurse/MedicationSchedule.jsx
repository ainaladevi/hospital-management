import React from 'react'

const MedicationSchedule = () => {
  return (
    <div className='medication-section mt-4'>
        <div className="medication-heading">
            Medication Schedule
        </div>
        <table className='medication-table'>
            <thead className='medication-header'>
                <tr>
                    <th>Time</th>
                    <th>Medication</th>
                    <th>Dosage</th>
                    <th>Route</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='medication-body'>
                <tr>
                    <td>08:00 AM</td>
                    <td>Metformin</td>
                    <td>500mg</td>
                    <td>Oral</td>
                    <td><button className='status-given'>Given</button></td>
                    <td><button className='view-btn'>View</button></td>
                </tr>
                <tr>
                    <td>02:00 PM</td>
                    <td>Lisinopril</td>
                    <td>10mg</td>
                    <td>Oral</td>
                    <td><button className='status-due'>Due Now</button></td>
                    <td><button className='administer-btn'>Administer</button></td>
                </tr>
                <tr>
                    <td>08:00 PM</td>
                    <td>Metformin</td>
                    <td>500mg</td>
                    <td>Oral</td>
                    <td><button className='status-scheduled'>scheduled</button></td>
                    <td><button className='details-btn'>Details</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default MedicationSchedule