import React, { useState } from "react";

const DoctorDashboard = () => {
  // --- Schedule Management ---
  const [selectedDate, setSelectedDate] = useState("");
  const [slots, setSlots] = useState([]);
  
  const generateSlots = () => {
    if (!selectedDate) return alert("Please select a date first");
    const times = [];
    for (let h = 10; h <= 20; h++) {
      times.push(`${h}:00`);
      times.push(`${h}:30`);
    }
    setSlots(times);
  };

  // --- Patient Queue Management ---
  const [patients, setPatients] = useState([
    { name: "John Doe", time: "10:00" },
    { name: "Jane Smith", time: "10:30" },
    { name: "Alice Brown", time: "11:00" },
  ]);

  // --- E-Prescription Generation ---
  const [prescription, setPrescription] = useState({
    patientName: "",
    diagnosis: "",
    medicines: "",
  });
  const [history, setHistory] = useState([]);

  const submitPrescription = () => {
    if (!prescription.patientName) return alert("Enter patient name");
    setHistory([prescription, ...history]);
    setPrescription({ patientName: "", diagnosis: "", medicines: "" });
    alert("Prescription generated!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="bg-white rounded-xl shadow p-6">
          <h1 className="text-3xl font-bold text-gray-800">Doctor Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your appointments, patient queue, and prescriptions</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Schedule Management */}
            <section className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Schedule Management</h2>
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                  {slots.length} slots
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
                <button
                  onClick={generateSlots}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition duration-200 shadow-sm hover:shadow"
                >
                  Generate Slots
                </button>
              </div>

              {slots.length > 0 && (
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Available Time Slots</h3>
                  <div className="flex flex-wrap gap-2">
                    {slots.map((slot, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 hover:bg-indigo-50 border border-gray-200 rounded-lg px-4 py-2 cursor-pointer transition duration-200 hover:border-indigo-300"
                      >
                        <span className="text-gray-700 font-medium">{slot}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* E-Prescription */}
            <section className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">E-Prescription Generation</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter patient name"
                    value={prescription.patientName}
                    onChange={(e) =>
                      setPrescription({ ...prescription, patientName: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Diagnosis
                  </label>
                  <input
                    type="text"
                    placeholder="Enter diagnosis"
                    value={prescription.diagnosis}
                    onChange={(e) =>
                      setPrescription({ ...prescription, diagnosis: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Medicines
                  </label>
                  <input
                    type="text"
                    placeholder="Enter prescribed medicines"
                    value={prescription.medicines}
                    onChange={(e) =>
                      setPrescription({ ...prescription, medicines: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  />
                </div>
                
                <button
                  onClick={submitPrescription}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition duration-200 shadow-sm hover:shadow mt-2"
                >
                  Generate Prescription
                </button>
              </div>

              {history.length > 0 && (
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800">Prescription History</h3>
                    <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                      {history.length} total
                    </span>
                  </div>
                  <div className="space-y-3">
                    {history.map((h, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex justify-between items-start">
                          <span className="font-medium text-gray-800">{h.patientName}</span>
                          <span className="text-sm text-gray-500">#{i + 1}</span>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          <div><span className="font-medium">Diagnosis:</span> {h.diagnosis}</div>
                          <div><span className="font-medium">Medicines:</span> {h.medicines}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Right Column - Patient Queue */}
          <div>
            <section className="bg-white rounded-xl shadow p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Patient Queue Management</h2>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {patients.length} waiting
                </span>
              </div>
              
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        #
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Appointment Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {patients.map((p, idx) => (
                      <tr 
                        key={idx} 
                        className={idx === 0 ? "bg-blue-50" : "hover:bg-gray-50 transition duration-150"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                            idx === 0 ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-700"
                          } font-medium`}>
                            {idx + 1}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {p.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {p.time}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 text-sm text-gray-600 bg-gray-50 rounded-lg p-4">
                <p className="font-medium">Next patient:</p>
                <p className="mt-1">{patients[0]?.name} at {patients[0]?.time}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;