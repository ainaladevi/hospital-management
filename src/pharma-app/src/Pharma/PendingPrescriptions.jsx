import React from "react";

const PendingPrescriptions = () => {
  return (
    <div className="container Pendingprescriptions-section">
      <h3 className="pendingprescription-heading">Pending Prescriptions</h3>
      <div className="prescription-cards">
        <div className="prescription-items">
          <div className="prescription-inner-item">
            <div className="prescription">
              <span>Prescription #2001</span>&nbsp;
              <button>Pending Review</button>
            </div>
            <p>
              Patient: John Anderson | Doctor: Dr. James Wilson | Date: Jan 3,
              2026
            </p>
          </div>
          <button className="review-btn1">Review</button>
        </div>
        <table className="table">
          <thead className="table-header1">
            <tr>
              <th>Medication</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="table-body1">
            <tr>
              <td>Metformin</td>
              <td>500mg</td>
              <td>Twice Daily</td>
              <td>30 days</td>
              <td>
                <button className="status-available">Available</button>
              </td>
            </tr>
            <tr>
              <td>Lisinopril</td>
              <td>10mg</td>
              <td>Once Daily</td>
              <td>30 days</td>
              <td>
                <button className="status-available">Available</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="prescription-cards">
        <div className="prescription-items">
          <div className="prescription-inner-item">
            <div className="prescription">
              <span>Prescription #2002</span>&nbsp;
              <button>Pending Review</button>
            </div>
            <p>
              Patient: John Anderson | Doctor: Dr. James Wilson | Date: Jan 3,
              2026
            </p>
          </div>
          <button className="review-btn1">Review</button>
        </div>
        <table className="table">
          <thead className="table-header1">
            <tr>
              <th>Medication</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="table-body1">
            <tr>
              <td>Metformin</td>
              <td>500mg</td>
              <td>Twice Daily</td>
              <td>30 days</td>
              <td>
                <button className="status-available">Available</button>
              </td>
            </tr>
            <tr>
              <td>Lisinopril</td>
              <td>10mg</td>
              <td>Once Daily</td>
              <td>30 days</td>
              <td>
                <button className="status-available">Available</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="prescription-cards">
        <div className="prescription-items">
          <div className="prescription-inner-item">
            <div className="prescription">
              <span>Prescription #2003</span>&nbsp;
              <button>Pending Review</button>
            </div>
            <p>
              Patient: John Anderson | Doctor: Dr. James Wilson | Date: Jan 3,
              2026
            </p>
          </div>
          <button className="review-btn1">Review</button>
        </div>
        <table className="table">
          <thead className="table-header1">
            <tr>
              <th>Medication</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="table-body1">
            <tr>
              <td>Metformin</td>
              <td>500mg</td>
              <td>Twice Daily</td>
              <td>30 days</td>
              <td>
                <button className="status-available">Available</button>
              </td>
            </tr>
            <tr>
              <td>Lisinopril</td>
              <td>10mg</td>
              <td>Once Daily</td>
              <td>30 days</td>
              <td>
                <button className="status-available">Available</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingPrescriptions;
