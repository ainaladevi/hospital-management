import "./PatientStyling.css"
import PatientSidebar from "./PatientSidebar"
import { Routes, Route } from "react-router-dom"
import DashboardPage from "./DashboardPage"

function App() {

  return (
      <>
      <PatientSidebar/>
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
      </Routes>
      </>
  )
}

export default App
