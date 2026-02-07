import React, { useState } from "react";

const initialDoctors = [
  { name: "Dr. Emily Larson", speciality: "Gynecologist", status: "Available" },
  { name: "Dr. Amelia Hill", speciality: "Dermatologist", status: "Available" },
  { name: "Dr. Ryan Martinez", speciality: "Gynecologist", status: "Available" },
  { name: "Dr. Chloe Evans", speciality: "General Physician", status: "Available" },
  { name: "Dr. Patrick Harris", speciality: "Neurologist", status: "Available" },
  { name: "Dr. Zoe Kelly", speciality: "Neurologist", status: "Available" },
  { name: "Dr. Jeffrey King", speciality: "Pediatricians", status: "Available" },
  { name: "Dr. Ava Mitchell", speciality: "Dermatologist", status: "Available" },
  { name: "Dr. Timothy White", speciality: "Gynecologist", status: "Available" },
  { name: "Dr. Christopher Davis", speciality: "General Physician", status: "Available" },
  { name: "Dr. Andrew Williams", speciality: "Neurologist", status: "Available" },
  { name: "Dr. Jennifer Garcia", speciality: "Neurologist", status: "Available" },
  { name: "Dr. Christopher Lee", speciality: "Pediatricians", status: "Available" },
  { name: "Dr. Sarah Patel", speciality: "Dermatologist", status: "Available" },
  { name: "Dr. Richard James", speciality: "General Physician", status: "Available" },
];

const initialClinics = [
  { name: "Sunrise Clinic", location: "New York" },
  { name: "HealthFirst", location: "Los Angeles" },
  { name: "Wellness Center", location: "Chicago" },
];

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [clinics, setClinics] = useState(initialClinics);

  const approveDoctor = (index) => {
    const newDoctors = [...doctors];
    newDoctors[index].status = "Approved";
    setDoctors(newDoctors);
  };

  const deleteClinic = (index) => {
    const newClinics = [...clinics];
    newClinics.splice(index, 1);
    setClinics(newClinics);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage doctors, clinics, and view analytics</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctor Registration */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Doctor Registration</h2>
              <div className="flex gap-4">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  {doctors.filter(d => d.status === "Approved").length} Approved
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {doctors.filter(d => d.status === "Available").length} Pending
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              {doctors.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-150"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-indigo-700">D</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{doc.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-600">{doc.speciality}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${doc.status === "Approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                          {doc.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {doc.status === "Available" && (
                    <button
                      onClick={() => approveDoctor(index)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200 font-medium"
                    >
                      Approve
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Analytics Dashboard */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Analytics Dashboard</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Total Doctors</p>
                  <p className="text-2xl font-bold text-gray-800">{doctors.length}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Approved Doctors</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {doctors.filter((d) => d.status === "Approved").length}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Total Clinics</p>
                  <p className="text-2xl font-bold text-gray-800">{clinics.length}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Patients Today</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {Math.floor(Math.random() * 50) + 10}
                  </p>
                </div>
              </div>

              {/* Chart */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-3">
                  <p className="font-medium text-gray-700">Weekly Appointments</p>
                  <span className="text-sm text-gray-500">This week</span>
                </div>
                <div className="h-40 bg-gray-100 rounded-lg p-4 flex items-end space-x-2">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div
                        style={{ height: `${Math.floor(Math.random() * 100) + 20}px` }}
                        className="w-8 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t-lg"
                      ></div>
                      <span className="text-xs text-gray-500 mt-2">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Management */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Clinic Management</h2>
            <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
              {clinics.length} Clinics
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clinics.map((clinic, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-blue-700">C</span>
                  </div>
                  <button
                    onClick={() => deleteClinic(index)}
                    className="text-red-600 hover:text-red-800 hover:bg-red-50 p-2 rounded-lg transition duration-150"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">{clinic.name}</h3>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{clinic.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;