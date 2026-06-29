import React, { useState } from 'react'
import { IoMdPeople } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiAlertLine } from "react-icons/ri";
import { GrFormSchedule } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
import { LuBrain } from "react-icons/lu";
import { LuDot } from "react-icons/lu";


function Clinicaldashboard() {
  const [showModal, setShowModal] = useState(false);
  const [walkinPatients, setWalkinPatients] = useState([]);
  const [tokenCounter, setTokenCounter] = useState(10);

  const [form, setForm] = useState({
    name: '', age: '', gender: '', phone: '', complaint: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Patient name is required';
    if (!form.age) e.age = 'Age is required';
    if (!form.gender) e.gender = 'Gender is required';
    if (!form.complaint.trim()) e.complaint = 'Chief complaint is required';
    return e;
  };

  const handleRegister = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    const newToken = tokenCounter + 1;
    setTokenCounter(newToken);

    const newPatient = {
      id: Date.now(),
      token: newToken,
      patId: `PAT${String(newToken).padStart(3, '0')}`,
      name: form.name,
      age: form.age,
      gender: form.gender,
      phone: form.phone,
      complaint: form.complaint,
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      status: 'Waiting',
    };

    setWalkinPatients([...walkinPatients, newPatient]);
    setForm({ name: '', age: '', gender: '', phone: '', complaint: '' });
    setErrors({});
    setShowModal(false);
  };

  const handleCancel = () => {
    setForm({ name: '', age: '', gender: '', phone: '', complaint: '' });
    setErrors({});
    setShowModal(false);
  };

  const changeStatus = (id, newStatus) => {
    setWalkinPatients(walkinPatients.map(p =>
      p.id === id ? { ...p, status: newStatus } : p
    ));
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>

      {/* Header */}
      <div className="header-one">
        <h1 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '4px' }}>Clinical Dashboard</h1>
        <p className='para-one'>Today's appointments and patient overview</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-container">
        <div className="row g-3">

          <div className="col-md-3">
            <div className="card">
              <div className="card-body py-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <GrFormSchedule style={{ color: '#0084D1', fontSize: '22px' }} />
                  <span className='text'>Today's Appointments</span>
                </div>
                <h4 className='patients'>{2 + walkinPatients.length} Patients</h4>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body py-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <IoMdPeople style={{ color: '#00A63E', fontSize: '22px' }} />
                  <span className='text'>Total Patients</span>
                </div>
                <h4 className='patients'>348 Active</h4>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body py-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <IoDocumentTextOutline style={{ color: '#9810FA', fontSize: '22px' }} />
                  <span className='text'>Pending Reports</span>
                </div>
                <h4 className='patients'>7 To Review</h4>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body py-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <RiAlertLine style={{ color: '#F54900', fontSize: '22px' }} />
                  <span className='text'>Critical Alerts</span>
                </div>
                <h4 className='patients'>2 Requires Action</h4>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ---- Today's Schedule ---- */}
      <div className="schedule-container">

        <div className="schedule-header">
          <div>
            <h1>Today's Schedule</h1>
            <p className="text-2">Your appointments for today</p>
          </div>
          <button className="walkin" onClick={() => setShowModal(true)}>
            + Add Walk-in Patient
          </button>
        </div>

        {/* ---- John Anderson ---- */}
        <div className="patient-container">
          <div className="patient-card">
            <div className="icon">
              <button>3</button>
            </div>
            <div className="patient-details">
              <div className="top-row">
                <h4>John Anderson</h4>
                <p className="pat-1">PAT001</p>
                <p style={{
                  backgroundColor: '#FEF9C2', color: '#A65F00',
                  padding: '2px 10px', borderRadius: '20px', fontSize: '12px', margin: 0
                }}>Waiting</p>
              </div>
              <div className="follow-upcontainer">
                <div className="time">
                  <span>Time:</span>
                  <span style={{ color: '#0F172B', fontWeight: '500' }}>09:00</span>
                  <span style={{ margin: '0 2px' }}>·</span>
                  <span>Type:</span>
                  <span style={{ color: '#0F172B', fontWeight: '500' }}>Follow-up</span>
                  <span style={{ margin: '0 2px' }}>·</span>
                  <span>Age/Gender:</span>
                  <span style={{ color: '#0F172B', fontWeight: '500' }}>45yr / Male</span>
                </div>
                <div className="history">
                  <button className='btn-1'>
                    <MdHistory style={{ fontSize: '18px' }} />
                    View History
                  </button>
                  <button className='btn-2'>Start Consultation</button>
                </div>
              </div>
              <div className="condition">
                <CiWarning style={{ fontSize: '18px', color: '#FF6900' }} />
                <span style={{ color: '#FF6900', fontSize: '14px' }}>Hypertension, Type 2 Diabetes</span>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Michael Chen ---- */}
        <div className="patient-container">
          <div className="patient-card">
            <div className="icon">
              <button>5</button>
            </div>
            <div className="patient-details">
              <div className="top-row">
                <h4>Michael Chen</h4>
                <p className="pat-1">PAT003</p>
                <p style={{
                  backgroundColor: '#DCFCE7', color: '#16A34A',
                  padding: '2px 10px', borderRadius: '20px', fontSize: '12px', margin: 0
                }}>Scheduled</p>
              </div>
              <div className="follow-upcontainer">
                <div className="time">
                  <span>Time:</span>
                  <span style={{ color: '#0F172B', fontWeight: '500' }}>11:00</span>
                  <span style={{ margin: '0 2px' }}>·</span>
                  <span>Type:</span>
                  <span style={{ color: '#0F172B', fontWeight: '500' }}>Consultation</span>
                  <span style={{ margin: '0 2px' }}>·</span>
                  <span>Age/Gender:</span>
                  <span style={{ color: '#0F172B', fontWeight: '500' }}>28yr / Male</span>
                </div>
                <div className="history">
                  <button className='btn-1'>
                    <MdHistory style={{ fontSize: '18px' }} />
                    View History
                  </button>
                  <button className='btn-2'>Start Consultation</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Walk-in Patients ---- */}
        {walkinPatients.map((p) => (
          <div key={p.id} className="patient-container">
            <div className="patient-card">
              <div className="icon">
                <button>{p.token}</button>
              </div>
              <div className="patient-details">
                <div className="top-row">
                  <h4>{p.name}</h4>
                  <p className="pat-1">{p.patId}</p>
                  <p style={{
                    backgroundColor: '#FEF9C2', color: '#A65F00',
                    padding: '2px 10px', borderRadius: '20px', fontSize: '12px', margin: 0
                  }}>{p.status}</p>
                  <span style={{
                    fontSize: '11px', backgroundColor: '#E0F2FE', color: '#0369A1',
                    padding: '2px 8px', borderRadius: '999px', fontWeight: '500'
                  }}>Walk-in</span>
                </div>
                <div className="follow-upcontainer">
                  <div className="time">
                    <span>Time:</span>
                    <span style={{ color: '#0F172B', fontWeight: '500' }}>{p.time}</span>
                    <span style={{ margin: '0 2px' }}>·</span>
                    <span>Type:</span>
                    <span style={{ color: '#0F172B', fontWeight: '500' }}>Walk-in</span>
                    <span style={{ margin: '0 2px' }}>·</span>
                    <span>Age/Gender:</span>
                    <span style={{ color: '#0F172B', fontWeight: '500' }}>
                      {p.age}yr / {p.gender.charAt(0).toUpperCase() + p.gender.slice(1)}
                    </span>
                  </div>
                  <div className="history">
                    <button className='btn-1'>
                      <MdHistory style={{ fontSize: '18px' }} />
                      View History
                    </button>
                    <select
                      value={p.status}
                      onChange={(e) => changeStatus(p.id, e.target.value)}
                      style={{
                        padding: '6px 10px', borderRadius: '8px',
                        border: '1px solid #E2E8F0', fontSize: '13px', cursor: 'pointer'
                      }}
                    >
                      <option>Waiting</option>
                      <option>Consulting</option>
                      <option>Done</option>
                    </select>
                    <button className='btn-2'>Start Consultation</button>
                  </div>
                </div>
                {p.complaint && (
                  <div className="condition">
                    <CiWarning style={{ fontSize: '18px', color: '#FF6900' }} />
                    <span style={{ color: '#FF6900', fontSize: '14px' }}>{p.complaint}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* ---- AI & Critical ---- */}
        <div className="Ai-critical">
          <div className="row g-3">

            {/* AI Clinical Insights */}
            <div className="col-12 col-md-6">
              <div className="pat1">
                <div className="pat1-header">
                  <LuBrain style={{ color: '#9810FA', fontSize: '22px' }} />
                  <span>AI Clinical Insights</span>
                </div>

                <div className="management-alert">
                  <LuDot style={{ color: '#9810FA', fontSize: '24px', flexShrink: 0, marginTop: '1px' }} />
                  <div>
                    <p style={{ color: '#59168B', fontWeight: '600', margin: '0 0 4px 0', fontSize: '14px' }}>
                      Patient PAT001 - Diabetes Management Alert
                    </p>
                    <p style={{ color: '#7C3AED', margin: 0, fontSize: '13px', lineHeight: '1.4' }}>
                      HbA1c levels show upward trend. Consider medication adjustment.
                    </p>
                  </div>
                </div>

                <div className="warning">
                  <LuDot style={{ color: '#155DFC', fontSize: '24px', flexShrink: 0, marginTop: '1px' }} />
                  <div>
                    <p style={{ color: '#1C398E', fontWeight: '600', margin: '0 0 4px 0', fontSize: '14px' }}>
                      Drug Interaction Warning
                    </p>
                    <p style={{ color: '#2563EB', margin: 0, fontSize: '13px', lineHeight: '1.4' }}>
                      Patient PAT003 prescribed medications have potential interaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Critical Alerts */}
            <div className="col-12 col-md-6">
              <div className="pat2">
                <div className="pat2-header">
                  <RiAlertLine style={{ color: '#F54900', fontSize: '22px' }} />
                  <span>Critical Alerts</span>
                </div>

                {/* Critical Lab Result */}
                <div className="alert-item critical">
                  <div className="alert-item-header">
                    <RiAlertLine style={{ color: '#E7000B', fontSize: '18px', flexShrink: 0 }} />
                    <span>Critical Lab Result - PAT005</span>
                  </div>
                  <p className="alert-desc">
                    Creatinine levels elevated: 3.2 mg/dL (Normal: 0.6–1.2)
                  </p>
                  <button className="alert-btn red">Review Now</button>
                </div>

                {/* Follow-up Overdue */}
                <div className="alert-item overdue" style={{ marginTop: '12px' }}>
                  <div className="alert-item-header">
                    <RiAlertLine style={{ color: '#F54900', fontSize: '18px', flexShrink: 0 }} />
                    <span>Follow-up Overdue - PAT007</span>
                  </div>
                  <p className="alert-desc">
                    Post-surgery follow-up scheduled 5 days ago
                  </p>
                  <button className="alert-btn orange">Contact Patient</button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ---- Walk-in Modal ---- */}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
          justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff', borderRadius: '16px',
            padding: '32px', width: '512px', boxShadow: '0 25px 50px rgba(0,0,0,0.25)'
          }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h4 style={{ margin: 0, fontWeight: '600' }}>Add Walk-in Patient</h4>
              <button onClick={handleCancel} style={{
                background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#666'
              }}>✕</button>
            </div>

            {/* Name */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontWeight: '500', marginBottom: '6px', display: 'block' }}>Patient Name *</label>
              <input name="name" value={form.name} onChange={handleChange}
                type="text" placeholder="Enter patient name" style={{
                  width: '100%', padding: '10px 14px', borderRadius: '8px',
                  border: `1px solid ${errors.name ? '#E7000B' : '#E2E8F0'}`,
                  fontSize: '14px', outline: 'none'
                }} />
              {errors.name && <p style={{ color: '#E7000B', fontSize: '12px', marginTop: '4px' }}>{errors.name}</p>}
            </div>

            {/* Age & Gender */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: '500', marginBottom: '6px', display: 'block' }}>Age *</label>
                <input name="age" value={form.age} onChange={handleChange}
                  type="number" placeholder="Age" style={{
                    width: '100%', padding: '10px 14px', borderRadius: '8px',
                    border: `1px solid ${errors.age ? '#E7000B' : '#E2E8F0'}`,
                    fontSize: '14px', outline: 'none'
                  }} />
                {errors.age && <p style={{ color: '#E7000B', fontSize: '12px', marginTop: '4px' }}>{errors.age}</p>}
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: '500', marginBottom: '6px', display: 'block' }}>Gender *</label>
                <select name="gender" value={form.gender} onChange={handleChange} style={{
                  width: '100%', padding: '10px 14px', borderRadius: '8px',
                  border: `1px solid ${errors.gender ? '#E7000B' : '#E2E8F0'}`,
                  fontSize: '14px', outline: 'none', backgroundColor: '#fff'
                }}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p style={{ color: '#E7000B', fontSize: '12px', marginTop: '4px' }}>{errors.gender}</p>}
              </div>
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontWeight: '500', marginBottom: '6px', display: 'block' }}>Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange}
                type="tel" placeholder="+91 98765 43210" style={{
                  width: '100%', padding: '10px 14px', borderRadius: '8px',
                  border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none'
                }} />
            </div>

            {/* Complaint */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontWeight: '500', marginBottom: '6px', display: 'block' }}>Chief Complaint *</label>
              <textarea name="complaint" value={form.complaint} onChange={handleChange}
                placeholder="Brief description of symptoms..." rows={4} style={{
                  width: '100%', padding: '10px 14px', borderRadius: '8px',
                  border: `1px solid ${errors.complaint ? '#E7000B' : '#E2E8F0'}`,
                  fontSize: '14px', outline: 'none', resize: 'none'
                }} />
              {errors.complaint && <p style={{ color: '#E7000B', fontSize: '12px', marginTop: '4px' }}>{errors.complaint}</p>}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={handleRegister} style={{
                flex: 1, padding: '12px', borderRadius: '8px', border: 'none',
                backgroundColor: '#0084D1', color: '#fff', fontWeight: '600',
                fontSize: '14px', cursor: 'pointer'
              }}>
                Register & Generate Token
              </button>
              <button onClick={handleCancel} style={{
                padding: '12px 24px', borderRadius: '8px',
                border: '1px solid #E2E8F0', backgroundColor: '#fff',
                fontWeight: '600', fontSize: '14px', cursor: 'pointer'
              }}>
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Clinicaldashboard