import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const StorageArea = ({ storageData }) => {
  // ฟังก์ชันนี้จะใช้ storageData ที่ส่งมาในการแสดงกราฟ
  const generateStorageData = (storageData) => {
    return storageData.map((storage, index) => ({
      name: `${storage.Tagname} - ${storage.Material}`, // ใช้ชื่อเครื่องจักรและวัสดุ
      data: [storage.Act_Weight], // ใช้ Act_Weight ที่อัปเดตจาก storageData
      color: index === 0 ? '#3498db' : index === 1 ? '#2ecc71' : '#e74c3c', // เลือกสีให้กับแต่ละกราฟ
    }));
  };

  const renderStorageCharts = () => {
    return storageData.map((snapshot, index) => {
      const storageChartOptions = {
        chart: {
          type: 'bar',
          backgroundColor: '#f4f4f4',
        },
        title: {
          text: `เครื่องจักร ${index + 1} - Storage Levels`,
        },
        xAxis: {
          categories: snapshot.map((storage) => `${storage.Tagname} - ${storage.Material}`),
          title: {
            text: 'Machine Names',
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Weight (kg)',
          },
        },
        series: generateStorageData(snapshot), 
      };

      return (
        <div key={index} className="snapshot-chart">
          <HighchartsReact highcharts={Highcharts} options={storageChartOptions} />
        </div>
      );
    });
  };

  return (
    <div className="storage-area">
      <h2>Storage Area</h2>
      <div className="storage-info">
        {renderStorageCharts()} 
      </div>
    </div>
  );
};

export default StorageArea;
