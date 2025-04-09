// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Gauge from './gauge';
import StorageArea from './StorageArea';

function App() {
  const [snapshots, setSnapshots] = useState([]);
  const [gaugeSpeed, setGaugeSpeed] = useState(0);
  const [storageData, setStorageData] = useState([]);

  // Simulate fetching data (no JSON fetch)
  useEffect(() => {
    const mockData =[
      [{"0":1,"Id_pk":1,
      "1":"X", "OrderNumber":"X",
      "2":"2440006","SemiBatch":"2440006",
      "3":"SESHE06","Material":"SESHE06",
      "4":"LD2FST01","Tagname":"LD2FST01",
      "5":0,"Act_Inv":0,
      "6":10365.056640625,"Act_Weight":10365.056640625,
      "7":"Jul 10 2024 11:02:29:000AM", "DateTime":"Jul 10 2024 11:02:29:000AM"},
      {"0":2,"Id_pk":2,"1":"X","OrderNumber":"X","2":"2440078","SemiBatch":"2440078","3":"SESDM21","Material":"SESDM21","4":"LD2FST02","Tagname":"LD2FST02","5":0,"Act_Inv":0,"6":4477.3969726562,"Act_Weight":4477.3969726562,"7":"Jul 10 2024 11:02:29:000AM","DateTime":"Jul 10 2024 11:02:29:000AM"},
      {"0":3,"Id_pk":3,"1":"X","OrderNumber":"X","2":"2440061","SemiBatch":"2440061","3":"SESDG28","Material":"SESDG28","4":"LD2FST03","Tagname":"LD2FST03","5":0,"Act_Inv":0,"6":19403.16796875,"Act_Weight":19403.16796875,"7":"Jul 10 2024 11:02:29:000AM","DateTime":"Jul 10 2024 11:02:29:000AM"}],
      
      [{"0":1,"Id_pk":1,"1":"X","OrderNumber":"X","2":"2440006","SemiBatch":"2440006","3":"SESHE06","Material":"SESHE06","4":"LD2FST01","Tagname":"LD2FST01","5":0,"Act_Inv":0,"6":10366.4765625,"Act_Weight":10366.4765625,"7":"Jul 10 2024 01:09:31:000PM","DateTime":"Jul 10 2024 01:09:31:000PM"},
      {"0":2,"Id_pk":2,"1":"X","OrderNumber":"X","2":"2440078","SemiBatch":"2440078","3":"SESDM21","Material":"SESDM21","4":"LD2FST02","Tagname":"LD2FST02","5":0,"Act_Inv":0,"6":471.34725952148,"Act_Weight":471.34725952148,"7":"Jul 10 2024 01:09:31:000PM","DateTime":"Jul 10 2024 01:09:31:000PM"},
      {"0":3,"Id_pk":3,"1":"X","OrderNumber":"X","2":"2440061","SemiBatch":"2440061","3":"SESDG28","Material":"SESDG28","4":"LD2FST03","Tagname":"LD2FST03","5":0,"Act_Inv":0,"6":13340.837890625,"Act_Weight":13340.837890625,"7":"Jul 10 2024 01:09:31:000PM","DateTime":"Jul 10 2024 01:09:31:000PM"}],
      
      [{"0":1,"Id_pk":1,"1":"X","OrderNumber":"X","2":"2440006","SemiBatch":"2440006","3":"SESHE06","Material":"SESHE06","4":"LD2FST01","Tagname":"LD2FST01","5":0,"Act_Inv":0,"6":10365.766601562,"Act_Weight":10365.766601562,"7":"Jul 10 2024 03:04:32:000PM","DateTime":"Jul 10 2024 03:04:32:000PM"}
      ,{"0":2,"Id_pk":2,"1":"X","OrderNumber":"X","2":"2440078","SemiBatch":"2440078","3":"SESDM21","Material":"SESDM21","4":"LD2FST02","Tagname":"LD2FST02","5":0,"Act_Inv":0,"6":376.91082763672,"Act_Weight":376.91082763672,"7":"Jul 10 2024 03:04:32:000PM","DateTime":"Jul 10 2024 03:04:32:000PM"}
      ,{"0":3,"Id_pk":3,"1":"X","OrderNumber":"X","2":"2440061","SemiBatch":"2440061","3":"SESDG28","Material":"SESDG28","4":"LD2FST03","Tagname":"LD2FST03","5":0,"Act_Inv":0,"6":10065.418945312,"Act_Weight":10065.418945312,"7":"Jul 10 2024 03:04:32:000PM","DateTime":"Jul 10 2024 03:04:32:000PM"}],
      
      [{"0":1,"Id_pk":1,"1":"X","OrderNumber":"X","2":"2440006","SemiBatch":"2440006","3":"SESHE06","Material":"SESHE06","4":"LD2FST01","Tagname":"LD2FST01","5":0,"Act_Inv":0,"6":10365.766601562,"Act_Weight":10365.766601562,"7":"Jul 10 2024 03:49:33:000PM","DateTime":"Jul 10 2024 03:49:33:000PM"},{"0":2,"Id_pk":2,"1":"X","OrderNumber":"X","2":"2440078","SemiBatch":"2440078","3":"SESDM21","Material":"SESDM21","4":"LD2FST02","Tagname":"LD2FST02","5":0,"Act_Inv":0,"6":379.04138183594,"Act_Weight":379.04138183594,"7":"Jul 10 2024 03:49:33:000PM","DateTime":"Jul 10 2024 03:49:33:000PM"},{"0":3,"Id_pk":3,"1":"X","OrderNumber":"X","2":"2440061","SemiBatch":"2440061","3":"SESDG28","Material":"SESDG28","4":"LD2FST03","Tagname":"LD2FST03","5":0,"Act_Inv":0,"6":7225.255859375,"Act_Weight":7225.255859375,"7":"Jul 10 2024 03:49:33:000PM","DateTime":"Jul 10 2024 03:49:33:000PM"}],
      
      [{"0":1,"Id_pk":1,"1":"X","OrderNumber":"X","2":"2440006","SemiBatch":"2440006","3":"SESHE06","Material":"SESHE06","4":"LD2FST01","Tagname":"LD2FST01","5":0,"Act_Inv":0,"6":10365.766601562,"Act_Weight":11914.821601562,"7":"Jul 10 2024 04:23:33:000PM","DateTime":"Jul 10 2024 04:23:33:000PM"},{"0":2,"Id_pk":2,"1":"X","OrderNumber":"X","2":"2440078","SemiBatch":"2440078","3":"SESDM21","Material":"SESDM21","4":"LD2FST02","Tagname":"LD2FST02","5":0,"Act_Inv":0,"6":379.04138183594,"Act_Weight":611.04238183594,"7":"Jul 10 2024 04:23:33:000PM","DateTime":"Jul 10 2024 04:23:33:000PM"},{"0":3,"Id_pk":3,"1":"X","OrderNumber":"X","2":"2440061","SemiBatch":"2440061","3":"SESDG28","Material":"SESDG28","4":"LD2FST03","Tagname":"LD2FST03","5":0,"Act_Inv":0,"6":7225.255859375,"Act_Weight":6425.255859375,"7":"Jul 10 2024 04:23:33:000PM","DateTime":"Jul 10 2024 04:23:33:000PM"}],
      
      [{"0":1,"Id_pk":1,"1":"X","OrderNumber":"X","2":"2440006","SemiBatch":"2440006","3":"SESHE06","Material":"SESHE06","4":"LD2FST01","Tagname":"LD2FST01","5":0,"Act_Inv":0,"6":7336.0224609375,"Act_Weight":7336.0224609375,"7":"Jul 11 2024 09:17:44:000AM","DateTime":"Jul 11 2024 09:17:44:000AM"},{"0":2,"Id_pk":2,"1":"X","OrderNumber":"X","2":"2440078","SemiBatch":"2440078","3":"SESDM21","Material":"SESDM21","4":"LD2FST02","Tagname":"LD2FST02","5":0,"Act_Inv":0,"6":58.102722167969,"Act_Weight":58.102722167969,"7":"Jul 11 2024 09:17:44:000AM","DateTime":"Jul 11 2024 09:17:44:000AM"},{"0":3,"Id_pk":3,"1":"X","OrderNumber":"X","2":"2440061","SemiBatch":"2440061","3":"SESDG28","Material":"SESDG28","4":"LD2FST03","Tagname":"LD2FST03","5":0,"Act_Inv":0,"6":222.83312988281,"Act_Weight":222.83312988281,"7":"Jul 11 2024 09:17:44:000AM","DateTime":"Jul 11 2024 09:17:44:000AM"}],
      
      [{"0":1,"Id_pk":1,"1":"X","OrderNumber":"X","2":"2440006","SemiBatch":"2440006","3":"SESHE06","Material":"SESHE06","4":"LD2FST01","Tagname":"LD2FST01","5":0,"Act_Inv":0,"6":-39.882751464844,"Act_Weight":-39.882751464844,"7":"Jul 12 2024 08:48:00:000AM","DateTime":"Jul 12 2024 08:48:00:000AM"},{"0":2,"Id_pk":2,"1":"X","OrderNumber":"X","2":"2440078","SemiBatch":"2440078","3":"SESDM21","Material":"SESDM21","4":"LD2FST02","Tagname":"LD2FST02","5":0,"Act_Inv":0,"6":67.334136962891,"Act_Weight":67.334136962891,"7":"Jul 12 2024 08:48:00:000AM","DateTime":"Jul 12 2024 08:48:00:000AM"},{"0":3,"Id_pk":3,"1":"X","OrderNumber":"X","2":"2440061","SemiBatch":"2440061","3":"SESDG28","Material":"SESDG28","4":"LD2FST03","Tagname":"LD2FST03","5":0,"Act_Inv":0,"6":239.87329101562,"Act_Weight":239.87329101562,"7":"Jul 12 2024 08:48:00:000AM","DateTime":"Jul 12 2024 08:48:00:000AM"}]
      ]
      
      
      ;
    setSnapshots(mockData);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGaugeSpeed(prev => Math.min(prev + Math.random() * 1000, 20000));
      setStorageData(prev =>
        prev.map(snapshot =>
          snapshot.map(item => ({
            ...item,
            Act_Weight: Math.min(item.Act_Weight + Math.random() * 300, 20000),
          }))
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const initialStorage = snapshots.map(snapshot =>
      snapshot.map(item => ({
        ...item,
        Act_Weight: item.Act_Weight
      }))
    );
    setStorageData(initialStorage);
  }, [snapshots]);

  return (
    <div className="app-container">
      <div className="dashboard">
        <div className="machine-area">
          {snapshots.map((snapshot, index) => (
            <div key={index} className="snapshot">
              <h2>เครื่องจักร #{index + 1}</h2>
              <div className="machine-grid">
                {snapshot.map((machine) => (
                  <div className="card" key={machine.Id_pk}>
                    <img
                      src="https://lnwcad.com/wp-content/uploads/2021/07/20-1131x800.jpg"
                      alt={machine.Material}
                      className="product-image"
                    />
                    <div className="card-info">
                      <h3>{machine.Material}</h3>
                      <p><strong>รุ่น:</strong> {machine.Tagname}</p>
                      <p><strong>สถานะ:</strong> ปกติ</p>
                      <p><strong>น้ำหนัก (kg):</strong> {(machine.Act_Weight + Math.random() * 500).toFixed(2)}</p>
                      <p><strong>เวลา:</strong> {machine.DateTime}</p>
                      <Gauge value={gaugeSpeed} max={20000} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <StorageArea storageData={storageData} />
      </div>
    </div>
  );
}

export default App;
