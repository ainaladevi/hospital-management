import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// import StaticComponents from "./tasks/StaticComponents";
// import DynamicComponents from "./tasks/DynamicComponents";
// import objects from "./tasks/Objects";
// import Objects from "./tasks/Objects";
// import Hooks from "./tasks/Hooks";
// import Ternary from "./tasks/Ternary";
// import EmployeeDetails from "./tasks/EmployeeDetails";
// // import './tasks/Sample.css';
// import LiveNameDisplay from "./tasks/LiveNameDisplay";
// import Counterapp from "./tasks/Counterapp";
// import Charactercounter from "./tasks/Charactercounter";
// import Login from "./tasks/Login";
// import Header from "./Home/Header";
// import "./Home/Styling.css";
// import About from "./Home/About";
// import Services from "./Home/Services";
// import Projects from "./Home/Projects";
// import Business from "./Home/Business";
// import Pricing from "./Home/Pricing";
// import ClientsTestinomials from "./Home/ClientsTestinomials";
// import Blogs from "./Home/Blogs";
// import Footer from "./Home/Footer";
// import Header1 from "./About/Header1";
// import TeamMembers from "./About/TeamMembers";
// import Footer1 from "./About/Footer1";
// import Header2 from "./Services/Header2";
// import Services1 from "./Services/Services1";
// import Pricing1 from "./Services/Pricing1";
// import Header3 from "./Team/Header3";
// import TeamMembers1 from "./Team/TeamMembers1";
// import Header4 from "./Contact/Header4";
// import Map from "./Contact/Map";
// import Details from "./Contact/Details";
// import Header5 from "./Blog/Header5";
// import BlogDetails from "./Blog/BlogDetails";
// import Routing from "./pratice-tasks/Routing";
// import FirstName from "./pratice-tasks/FirstName";
// import SecondPage from "./pratice-tasks/SecondPage";
// import { ContextProvider } from "./pratice-tasks/Context";
// import SecondComp from "./pratice-tasks/SecondComp";
// import FirstComp from "./pratice-tasks/FirstComp";
// import ThirdComp from "./pratice-tasks/ThirdComp";
import NursingDashboard1 from "./Hospital Website/NursingDashboard1";
import BedManagement from "./Hospital Website/BedManagement";
import AdmitPatient from "./Hospital Website/AdmitPatient";
import PatientCarePage from "./PatientCarePage";
import VitalsMonitoringPage from "./VitalsMonitoringPage";
import TasksPage from "./TasksPage";
import PharmaSidebar from "./Pharma/PharmaSidebar";
import PharmaNavBar from "./Pharma/PharmaNavBar";
import PharmacyDashboardPage from "./Pharma/PharmacyDashboardPage";
import PrescriptionsPage from "./Pharma/PrescriptionsPage";
import InventoryPage from "./Pharma/InventoryPage";
import AllPage from "./Pharma/AllPage";
import LowStockPage from "./Pharma/LowStockPage";
import ExpiringPage from "./Pharma/ExpiringPage";
import DispensingPage from "./Pharma/DispensingPage";

function App() {
  const student = {
    name: "Devi",
    age: 22,
    city: "Guntur",
  };
  return (
    <div className="App">
      {/* <StaticComponents/>
      <DynamicComponents/>
      <Objects/> */}
      {/* <Hooks/> */}
      {/* <Ternary/> */}
      {/* <EmployeeDetails/> */}
      {/* <LiveNameDisplay/> */}
      {/* <Counterapp/> */}
      {/* <Charactercounter/> */}
      {/* <Login/> */}

      {/* Home Page */}
      {/* <Header/>
      <About/>
      <Services/>
      <Projects/>
      <Business/>
      <Pricing/>
      <ClientsTestinomials/>
      <Blogs/>
      <Footer/> */}

      {/* About page
      <Header1/>
      <About/>
      <Business/>
      <ClientsTestinomials/>
      <TeamMembers/>
      <Footer1/> */}

      {/* ServicesPage
      <Header2/>
      <Services1/>
      <Pricing1/>
      <Footer1/> */}

      {/* Team Page
      <Header3 />
      <TeamMembers1 />
      <Footer1/> */}

      {/* Contact Page
      <Header4/>
      <Map/>
      <Details/>
      <Footer1/> */}

      {/* Blog Page
      <Header5/>
      <BlogDetails/>
      <Footer1/> */}
      {/* <Routing />
      <ContextProvider>
        <Routes>
          <Route path="/abc" element={<FirstName />}></Route>
          <Route path="/xyz" element={<SecondPage />}></Route>
        </Routes>
      </ContextProvider> */}
      {/* <FirstComp name="Devi"/>
      <SecondComp name="Nani"/>
      <ThirdComp name={student}/> */}
        <Routes>
          <Route path="/" element={<NursingDashboard1 />}></Route>
          <Route path="/BedManagement" element={<BedManagement />}></Route>
          <Route path="/Patientcarepage" element={<PatientCarePage />}></Route>
          <Route path="/VitalsMonitoring" element={<VitalsMonitoringPage />}></Route>
          <Route path="/TasksPage" element={<TasksPage />}></Route>
        </Routes>
        {/* <Routes>
          <Route path="/" element={<PharmacyDashboardPage />}></Route>
          <Route path="/PrescriptionPage" element={<PrescriptionsPage />}></Route>
          <Route path="/InventoryPage" element={<InventoryPage />}></Route>
          <Route path="/DispensingPage" element={<DispensingPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/allpage" element={<AllPage />}></Route>
          <Route path="/lowstock" element={<LowStockPage />}></Route>
          <Route path="/expiring" element={<ExpiringPage />}></Route>
        </Routes> */}
    </div>
  );
}

export default App;
