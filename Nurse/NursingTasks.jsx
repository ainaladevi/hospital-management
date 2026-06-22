import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const NursingTasks = () => {
  return (
    <div className="nursingtask-section my-4">
      <h3 className="nursing-task-heading">Nursing Tasks & Interventions</h3>
      <div className="nursingtasks-cards">
        <div className="nursingtask-items">
          <span className="nursingtask-data">
            Position change & skin assessment
          </span>
          <span className="nursingtask-data1">
            Due: Every 2 hours | Last: 12:00 PM
          </span>
        </div>
        <button className="done-btn">Done</button>
      </div>
      <div className="nursingtasks-cards">
        <div className="nursingtask-items">
          <span className="nursingtask-data">Wound dressing change</span>
          <span className="nursingtask-data1">
            Due: 02:00 PM | Status: Overdue
          </span>
        </div>
        <button className="status-due">overdue</button>
      </div>
      <div className="nursingtasks-cards">
        <div className="nursingtask-items">
          <span className="nursingtask-data">
            Encourage fluid intake - 250ml
          </span>
          <span className="nursingtask-data1">Due: 03:00 PM</span>
        </div>
        <button className="scheduled-btn">scheduled</button>
      </div>
      <div className="caringplan-section mt-4">
        <h3 className="caringplan-heading">Care Plan Notes & Updates</h3>
        <textarea placeholder="Add care plan updates, observations, or changes in patient condition..."></textarea>
        <hr />
        <div className="submission-btn mt-4">
          <button type="submit" className="submit-btn">
            {" "}
            <IoMdCheckmarkCircleOutline /> Save Care Plan
          </button>
          <button className="cancel-btn">cancel</button>
        </div>
      </div>
    </div>
  );
};

export default NursingTasks;
