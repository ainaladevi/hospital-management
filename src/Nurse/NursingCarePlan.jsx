import React from 'react'
import NursingCarePlanHead from './NursingCarePlanHead'

const NursingCarePlan = ({closePopup}) => {
  return (
    <div><div className="content">
        <NursingCarePlanHead closePopup={closePopup}/>
    </div></div>
  )
}

export default NursingCarePlan