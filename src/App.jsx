import { useState } from 'react'
import './Nurse/Styling.css'
import { Routes, Route } from "react-router-dom";
import NursingDashboard1 from './Nurse/NursingDashboard1';
import BedManagement from './Nurse/BedManagement';
import PatientCarePage from './Nurse/PatientCarePage';
import VitalsMonitoringPage from './Nurse/VitalsMonitoringPage';
import TasksPage from './Nurse/TasksPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<NursingDashboard1 />}></Route>
          <Route path="/BedManagement" element={<BedManagement />}></Route>
          <Route path="/Patientcarepage" element={<PatientCarePage />}></Route>
          <Route path="/VitalsMonitoring" element={<VitalsMonitoringPage />}></Route>
          <Route path="/TasksPage" element={<TasksPage />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
