import React from "react";
import TasksHeading from "./TasksHeading";
import TaskCards from "./TaskCards";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const TasksPage = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <TasksHeading/>
        <TaskCards/>
      </div>
    </div>
  );
};

export default TasksPage;
