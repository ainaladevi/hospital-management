import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineBed } from "react-icons/md";
import { RxPeople } from "react-icons/rx";
import taskimg from "./task.png";
import admin from "./admin.png";
import medicareicon from "./mediicon.png";
import { IoCloseSharp } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { RiCapsuleLine } from "react-icons/ri";
import { FiPackage } from "react-icons/fi";
import { LuClipboardList } from "react-icons/lu";

const PharmaSidebar = () => {
  return (
    <header>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-fixed">
          <div className="list-group list-group-flush mx-3 mt-2">
            <div className="header container">
              <div className="header-content">
                <img src={medicareicon} className="medi-icon"></img>
                <div className="medicare-data">MediCare HIS</div>
              </div>
              <div>
                <span><IoCloseSharp size={30} color="#0F172B" className="close me-5"/></span>
              </div>
            </div>

            <div className="dashboard-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "sidebar-items active-menu" : "sidebar-items"
                }
              >
                <span className="dashboard">
                  <RiDashboardLine size={20} />
                  &nbsp; Dashboard
                </span>
              </NavLink>
            </div>
            <NavLink
              to="/PrescriptionPage"
              className={({ isActive }) =>
                isActive ? "sidebar-items active-menu" : "sidebar-items"
              }
            >
              <span className="bed-management">
                <RiCapsuleLine size={20} />
                &nbsp;Prescriptions
              </span>
            </NavLink>
            <NavLink
              to="/Inventorypage"
              className={({ isActive }) =>
                isActive ? "sidebar-items active-menu" : "sidebar-items"
              }
            >
              <span className="patient">
                <FiPackage size={20} />
                &nbsp; Inventory
              </span>
            </NavLink>
            <NavLink
              to="/DispensingPage"
              className={({ isActive }) =>
                isActive ? "sidebar-items active-menu" : "sidebar-items"
              }
            >
              <span className="vital">
                <LuClipboardList size={20} />
                &nbsp; Dispensing
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="sidebar-footer position-fixed">
        <div className="footer-admin">
          <img src={admin} />
          <div>
            <span className="admin-name">Robert Martinez</span>
            <p className="admin-occ">pharmacist</p>
          </div>
        </div>
        <div className="login-btn">
          <CiLogin className="login-icon" />
          <span className="logout-btn">Logout</span>
        </div>
      </div>
    </header>
  );
};

export default PharmaSidebar;
