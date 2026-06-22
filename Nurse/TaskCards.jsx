import React from 'react'
import { BsClipboard } from "react-icons/bs";

const TaskCards = () => {
  return (
    <div className='task-cards'>
     <div className='task-inner-card'>
        <div className="my-task">
            <span>My Tasks</span>
            <button>+ Add Task</button>
        </div>
        <div className="task-items">
            <div className="task-inner-items">
                <span className='task-inner-item1'>Medication round - ICU Ward</span>
                <span className='task-inner-item2'>Due: 2:00 PM</span>
            </div>
            <button className='status-abnormal'>Urgent</button>
        </div>
        <div className="task-items mt-3">
            <div className="task-inner-items">
                <span className='task-inner-item1'>Vitals check - All patients</span>
                <span className='task-inner-item2'>Due: 3:00 PM</span>
            </div>
            <button className='scheduled-btn'>Routine</button>
        </div>
        <div className="task-items2 mt-3">
            <div className="task-inner-items">
                <span className='task-inner-item1'><del>Wound dressing - Bed GW-201</del></span>
                <span className='task-inner-item2'>Completed at 1:30 PM</span>
            </div>
            <button className='done-btn'>Done</button>
        </div>
     </div>
     <div className='task-inner-card'>
        <h3 className='shift-heading'>Shift Handover Notes</h3>
        <div className="shift-form mt-4 ps-2">
            <label for ="">Shift Date & Time</label><br/>
            <input type='text'></input>
        </div>
        <div className="critical-updates ps-2 mt-2">
            <label for ="">Critical Updates</label><br/>
            <textarea placeholder='Important information for the next shift'></textarea>
        </div>
        <div className="patient-form1 ps-2 mt-2">
            <label for ="">Patient-Specific Notes</label><br/>
            <textarea placeholder='Specific patient care notes, observations, concerns...'></textarea>
        </div>
        <button className='save-btn1 px-3'><BsClipboard /> Save Handover Notes</button>
     </div>
    </div>
  )
}

export default TaskCards