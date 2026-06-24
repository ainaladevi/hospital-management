import React from "react";
import PharmaSidebar from "./PharmaSidebar";
import PharmaNavbar from "./PharmaNavBar";
import PharmacyDashboardHead from "./PharmacyDashboardHead";
import PharmacyDashboardCards from "./PharmacyDashboardCards";

const PharmacyDashboardPage = () => {
  return (
    <div className="app-layout">
      <PharmaSidebar />
      <div className="content">
        <PharmaNavbar />
        <PharmacyDashboardHead/>
        <PharmacyDashboardCards/>
      </div>
    </div>
  );
};

export default PharmacyDashboardPage;
