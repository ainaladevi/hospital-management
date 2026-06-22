import React from 'react'
import AdmitPatientHead from "./AdmitPatientHead"

const AdmitPatient = ({closePopup}) => {
  return (
            <div className="content">
              <AdmitPatientHead closePopup={closePopup}/>
              </div>
  )
}

export default AdmitPatient