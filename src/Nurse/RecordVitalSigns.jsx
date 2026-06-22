import React from 'react'

const RecordVitalSigns = ({}) => {
  return (
    <div className='container recordvitalsign-section mt-4'>
        <h3 className='recordvitalsign-heading'>Recent Vital Signs</h3>
        <table className='table-section'>
            <thead className='table-header'>
                <tr>
                    <th>Time</th>
                    <th>Patient</th>
                    <th>BP</th>
                    <th>HR</th>
                    <th>Temperature</th>
                    <th>RR</th>
                    <th>SpO2</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody className='table-body'>
                <tr>
                    <td>14:00</td>
                    <td>Robert Taylor (ICU-101)</td>
                    <td className='table-data'>145/92</td>
                    <td>88</td>
                    <td>98.4°F</td>
                    <td>18</td>
                    <td>96%</td>
                    <td><button className='status-abnormal'>Abnormal</button></td>
                </tr>
                <tr>
                    <td>13:45</td>
                    <td>Maria Garcia (ICU-102)</td>
                    <td>118/76</td>
                    <td>72</td>
                    <td>98.6°F</td>
                    <td>16</td>
                    <td>98%</td>
                    <td><button className='status-normal'>Normal</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default RecordVitalSigns