import React from 'react'
import { MdWarningAmber } from "react-icons/md";

const CriticalPatients = () => {
  return (
    <section className=' patients-section'>
        <div className="patients-main">
            <div className="cpatients-data">
               <MdWarningAmber color="#E7000B" size={20} />
               <span className='cpatients-inner-data'>Critical Patients - Immediate Attention Required</span>
            </div>
            <div className="cpatients-card ">
                <div className="cpatients-inner-content">
                    <div className="cpatients-inner-content1">
                      <div className="icu-icon">
                        <span className='icu-data'>ICU-101</span>
                      </div>
                      <div className="cpatients-inner-content2">
                        <div className="cpatients-data1">
                            <span className='cpatients-inner-data1'>Robert Taylor</span>
                            <span className='cpatients-inner-data2'>CRITICAL</span>
                        </div>
                        <span className='cpatients-inner-data3'>Ward:ICU | Admitted:2026-01-01</span>
                      </div>
                      <div className="cpatients-inner-content3">
                        <div className="cpatient-btn">
                            <span className='cpatient-inner-data4'>Record Vitals</span>
                        </div>
                        <div className="hero-chart">
                           <span className='cpatients-inner-data5'>View Chart</span>
                        </div>
                      </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default CriticalPatients