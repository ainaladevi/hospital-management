import React from "react";
import { RiCapsuleLine } from "react-icons/ri";
import { FiPackage } from "react-icons/fi";
import { LuTriangleAlert } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const PharmacyDashboardCards = () => {
  return (
    <div className="container pharmacydashboard-cards mt-4 ms-3">
      <div className="row">
        <div className=" pharmacy-cards col-lg-3">
          <RiCapsuleLine size={20} color="#0084D1" />
          <span className="pharmacy-items"> Pharmacy Prescriptions</span>
          <p className="pharmacy-items1">15 Orders</p>
        </div>
        <div className="pharmacy-cards col-lg-3">
          <FiPackage size={20} color="#F54900" />{" "}
          <span className="pharmacy-items"> Low Stock Items</span>
          <p className="pharmacy-items1">3 Items</p>
        </div>
        <div className="pharmacy-cards col-lg-3">
          <LuTriangleAlert size={20} color="#E7000B" />
          <span className="pharmacy-items"> Expiring Soon</span>
          <p className="pharmacy-items1">1 Items</p>
        </div>
        <div className="pharmacy-cards col-lg-3">
          <IoMdCheckmarkCircleOutline size={20} color="#00A63E" />
          <span className="pharmacy-items">Completed Today</span>
          <p className="pharmacy-items1">42 Dispensed</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="alert-cards col-lg-6">
          <h3 className="alert-head">Low Stock Alerts</h3>
          <div className="alert-card-items mt-3">
            <div className="alert-items">
              <span className="alert-inner-items">
                Insulin Glargine 100U/ml
              </span>
              <span className="alert-inner-items1">
                Current: 450 vials | Min: 500 vials
              </span>
            </div>
            <button className="record-btn1">Recorder</button>
          </div>
        <div className="alert-card-items mt-3">
          <div className="alert-items">
            <span className="alert-inner-items">Surgical Gloves (Medium)</span>
            <span className="alert-inner-items1">
              CCurrent: 150 boxes | Min: 500 boxes
            </span>
          </div>
          <button className="record-btn1">Recorder</button>
        </div>
        <div className="alert-card-items mt-3">
          <div className="alert-items">
            <span className="alert-inner-items">Amoxicillin 250mg</span>
            <span className="alert-inner-items1">
              Current: 0 capsules | Min: 1000 capsules
            </span>
          </div>
          <button className="record-btn1">Recorder</button>
        </div>
        </div>
      <div className="alert-cards col-lg-6">
        <h3 className="alert-head">Expiry Alerts</h3>
        <div className="alert-card-items">
          <div className="alert-items">
            <span className="alert-inner-items">IV Fluid - Normal Saline 500ml</span>
            <span className="alert-inner-items1">
              Expires: 2026-02-10 | Stock: 300 bags
            </span>
          </div>
          <button className="review-btn">Review</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PharmacyDashboardCards;
