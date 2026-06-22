import React from 'react'
import RecordVitalsHead from './RecordVitalsHead'

const RecordVitalSignsPage = ({closePopup}) => {
  return (
    <div>
        <div className="content">
              <RecordVitalsHead closePopup={closePopup}/>
              </div>
    </div>
  )
}

export default RecordVitalSignsPage