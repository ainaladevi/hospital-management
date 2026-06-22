import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineBed } from "react-icons/md";
import { RxPeople } from "react-icons/rx";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LuClipboardList } from "react-icons/lu";
import admin from "./admin.png";
import medicareicon from "./mediicon.png";
import wrong from "./wrong.png";
import { CiLogin } from "react-icons/ci";
import NursingDashboard1 from "./NursingDashboard1";
import BedManagement from "./BedManagement";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <header>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
            <div className="position-fixed">
              <div className="list-group list-group-flush mx-3 mt-4">
                <div className="header">
                              <div className="header-content">
                                    <img src={medicareicon} className="medi-icon"></img>
                                    <div className="medicare-data">MediCare HIS</div>
                                  </div>
                                  <div>
                                    <img
                                      src={wrong}
                                      className="wrong-content"
                                      width="20px"
                                      height="20px"
                                    ></img>
                                  </div>
                                </div>
        
            <div className="dashboard-item">
            <NavLink
              to="/"
              className={({ isActive})=>isActive ? "sidebar-items active-menu":"sidebar-items"}
            >
              <span className="dashboard">
                <RiDashboardLine size={20} />
                &nbsp; Dashboard
              </span>
            </NavLink></div>
            <NavLink
              to="/BedManagement"
              className={({ isActive})=>isActive ? "sidebar-items active-menu":"sidebar-items"}
            >
              <span className="bed-management">
                <MdOutlineBed size={20} />
                &nbsp;Bed Management
              </span>
            </NavLink>
            <NavLink
              to="/Patientcarepage"
              className={({ isActive})=>isActive ? "sidebar-items active-menu":"sidebar-items"}
            >
              <span className="patient">
                <RxPeople size={20} />
                &nbsp; Patient Care
              </span>
            </NavLink>
            <NavLink
              to="/VitalsMonitoring"
              className={({ isActive})=>isActive ? "sidebar-items active-menu":"sidebar-items"}
            >
              <span className="vital">
                <TbActivityHeartbeat size={20}/>&nbsp; Vitals
                Monitoring
              </span>
            </NavLink>
            <NavLink
              to="/TasksPage"
              className={({ isActive})=>isActive ? "sidebar-items active-menu":"sidebar-items"}
            >
              <span className="task">
                <LuClipboardList size={20}/>&nbsp; Tasks
                &amp; HandOver
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
        <div className="sidebar-footer position-fixed">
          <div className="footer-admin">
            <img src={admin} />
            <div>
                <span className="admin-name">Jennifer Thompson</span>
                <p className="admin-occ">nurse</p>
            </div>
          </div>
          <div className="login-btn">
             <CiLogin className="login-icon"/>
             <span className="logout-btn">Logout</span>
          </div>
        </div>
    </header>
  );
};

export default Sidebar;
