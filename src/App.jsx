// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Gauge from './gauge'; // Import the Gauge component
import StorageArea from './StorageArea'; // Import the new StorageArea component

function App() {
  const [snapshots, setSnapshots] = useState([]);
  const [gaugeSpeed, setGaugeSpeed] = useState(0); // Store gauge speed state
  const [storageData, setStorageData] = useState([]); // Store updated storage data

  // Fetch machine data
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setSnapshots(data));
  }, []);

  // Update gauge speed and storage data in real-time
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the gauge speed by a random value or based on your logic
      setGaugeSpeed(prevSpeed => Math.min(prevSpeed + 100, 20000)); // Adjust max speed as needed

      // Update storage data to reflect the gauge speed
      setStorageData(prevData =>
        prevData.map(snapshot =>
          snapshot.map(storage => ({
            ...storage,
            Act_Weight: Math.min(storage.Act_Weight + (Math.random() * 500), 20000), // Adjust weight increase and add randomness
          }))
        )
      );
    }, 1000); // Update every 1 second

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [gaugeSpeed]);

  useEffect(() => {
    // Initialize storage data based on the fetched snapshots
    const initialStorageData = snapshots.map(snapshot =>
      snapshot.map(storage => ({
        ...storage,
        Act_Weight: storage.Act_Weight, // Use initial Act_Weight from JSON data
      }))
    );
    setStorageData(initialStorageData);
  }, [snapshots]);

  return (
    <div className="app-container">
      <div className="dashboard">
        <div className="machine-area">
          {snapshots.map((snapshot, index) => (
            <div key={index} className="snapshot">
              <h2>Snapshot #{index + 1}</h2>
              <div className="machine-grid">
                {snapshot.map((machine) => (
                  <div className="card" key={machine.Id_pk}>
                    <img
                      src={`https://lnwcad.com/wp-content/uploads/2021/07/20-1131x800.jpg`}
                      alt={machine.Material}
                      className="product-image"
                    />
                    <div className="card-info">
                      <h3>{machine.Material}</h3>
                      <p><strong>รุ่น:</strong> {machine.Tagname}</p>
                      <p><strong>สถานะ:</strong> ปกติ</p>
                      <p><strong>น้ำหนัก (kg):</strong> {(machine.Act_Weight + Math.random() * 500).toFixed(2)}</p> {/* Display Act_Weight with randomness */}
                      <p><strong>เวลา:</strong> {machine.DateTime}</p>
                      <Gauge value={gaugeSpeed} max={20000} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pass updated storageData to StorageArea component */}
        <StorageArea storageData={storageData} snapshots={snapshots} /> 
      </div>
    </div>
  );
}

export default App;
