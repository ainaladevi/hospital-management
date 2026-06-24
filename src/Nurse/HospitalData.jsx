import React from "react";
import { MdOutlineBed } from "react-icons/md";
import { MdWarningAmber } from "react-icons/md";
import vector from "./Vector.png";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LuClipboardList } from "react-icons/lu";

const HospitalData = () => {
  return (
    <section className="container hospital-data">
      <div className="beds">
        <div className="beds-card">
          <div className="beds-inner-data">
            <MdOutlineBed className="bed-icon" size={20} />
            <span className="beds-text">Occupied Beds</span>
          </div>
          <p className="beds-inner-data1">5/8</p>
          <p className="beds-inner-data2">63% occupancy</p>
        </div>
        <div className="beds-card">
          <div className="patients-inner-data">
            <MdWarningAmber color="#E7000B" size={20} />
            <span className="patients-data">Critical Patients</span>
          </div>
          <p className="patients-inner-data1">1 Active</p>
        </div>
        <div className="beds-card">
          <div className="vitals-inner-data">
            <TbActivityHeartbeat className="vector-icon"/> 
            <span className="vitals-data">Vitals Due</span>
          </div>
          <p className="vitals-inner-data1">1 Active</p>
        </div>
        <div className="beds-card">
          <div className="task-inner-data">
            <LuClipboardList className="clipboard-icon"/>  
            <span className="task-data">Pending Task</span>
          </div>
          <p className="task-inner-data1">12 Tasks</p>
        </div>
      </div>
    </section>
  );
};

export default HospitalData;
