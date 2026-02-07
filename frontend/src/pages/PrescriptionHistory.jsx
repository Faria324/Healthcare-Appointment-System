import React, { useEffect, useState } from "react";

const PrescriptionHistory = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("prescriptions")) || [];
    setPrescriptions(data);
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Prescription History</h2>

      {prescriptions.length === 0 ? (
        <p className="text-gray-500">No prescriptions available.</p>
      ) : (
        prescriptions.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 mb-4 bg-white shadow-sm"
          >
            <p className="font-medium">
              Dr. {item.doctorName} ({item.speciality})
            </p>
            <p className="text-sm text-gray-600">
              {item.date} at {item.time}
            </p>

            <div className="mt-2">
              <p className="font-medium">Medicines:</p>
              <ul className="list-disc ml-5 text-sm">
                {item.medicines.map((med, i) => (
                  <li key={i}>
                    {med.name} – {med.dosage} ({med.duration})
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm mt-2">
              <strong>Doctor Notes:</strong> {item.notes}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default PrescriptionHistory;
