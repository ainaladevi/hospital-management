import React from 'react'

const RecordVitalsForm = () => {
  return (
    <div className='recordvital-form'>
        <div>
        <label>Recording Date & Time *</label>
        <input type='text'/>
        </div>
        <div>
            <label>Recorded By *</label>
            <input type='text' placeholder='Nurse Sarah Miller'/>
        </div>
    </div>
  )
}

export default RecordVitalsForm