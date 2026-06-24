import React from 'react'
import { TbActivityHeartbeat } from "react-icons/tb";
import { LuClipboardList } from "react-icons/lu";

const Monitoring = () => {
  return (
    <div className='monitoring-section'>
        <h3 className='monitoring-heading'>Monitoring & Assessments</h3>
        <div className="monitoring mt-3">
            <div className="monitoring-cards p-2">
                <span className='monitoring-cards-info'><TbActivityHeartbeat color='#0084D1'/>Vital Signs Monitoring</span>
                <p className='monitoring-cards-info1'>Every 4 hours</p>
                <p className='monitoring-cards-info2'>Last recorded: 10:00 AM</p>
                <button className='record-btn'>Record Now</button>
            </div>
            <div className="monitoring-cards p-2">
                <span className='monitoring-cards-info'><LuClipboardList color='#00A63E'/>Neurological Assessment</span>
                <p className='monitoring-cards-info1'>Every 8 hours</p>
                <p className='monitoring-cards-info2'>Last recorded: 06:00 AM</p>
                <button className='acess-btn'>Acess</button>
            </div>
        </div>
    </div>
  )
}

export default Monitoring