import React from 'react'

const appointments = [
  { id: 'PAT001', name: 'John Anderson', status: 'waiting', time: '09:00', type: 'follow-up' },
  { id: 'PAT002', name: 'Sarah Williams', status: 'scheduled', time: '10:30', type: 'consultation' },
  { id: 'PAT003', name: 'Michael Chen', status: 'scheduled', time: '11:00', type: 'consultation' },
  { id: 'PAT004', name: 'Emily Davis', status: 'scheduled', time: '14:00', type: 'follow-up' },
  { id: 'PAT005', name: 'Robert Taylor', status: 'scheduled', time: '15:30', type: 'consultation' },
]

function Appointments() {
  return (
    <div>
      <div className="header-one">
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Appointments</h2>
        <p className="para-one">Manage your consultation schedule</p>
      </div>

      <div className="schedule-container">
        <div className="schedule-header">
          <h1>Today's Appointments ({appointments.length})</h1>
        </div>

        {appointments.map((appt) => (
          <div className="patient-container" key={appt.id}>
            <div className="patient-card">
              <div className="patient-details">
                <div className="top-row">
                  <h4>{appt.name}</h4>
                  <span className="pat-1">{appt.id}</span>
                </div>
                <div className="time">
                  <span>{appt.time}</span>
                  <span>|</span>
                  <span>{appt.type}</span>
                </div>
              </div>

              <span className={appt.status === 'waiting' ? 'status-waiting' : 'status-scheduled'}>
                {appt.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Appointments