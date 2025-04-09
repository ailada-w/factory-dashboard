import React, { useRef, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import SolidGauge from "highcharts/modules/solid-gauge";

// Use Highcharts modules
if (typeof HighchartsMore === "function") HighchartsMore(Highcharts);
if (typeof SolidGauge === "function") SolidGauge(Highcharts);

function Gauge({ max = 200, value }) {
  const chartRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    chartRef.current = Highcharts.chart(containerRef.current, {
      chart: {
        type: 'gauge',
        backgroundColor: null,
        height: '80%',
      },
      title: null,
      pane: {
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%',
        background: null,
      },
      yAxis: {
        min: 0,
        max: max,
        tickPixelInterval: 72,
        tickPosition: 'inside',
        tickLength: 20,
        tickWidth: 2,
        labels: {
          distance: 20,
          style: { fontSize: '14px' },
        },
        plotBands: [
          { from: 0, to: max * 0.65, color: '#55BF3B', thickness: 20 },
          { from: max * 0.6, to: max * 0.8, color: '#DDDF0D', thickness: 20 },
          { from: max * 0.75, to: max, color: '#DF5353', thickness: 20 },
        ],
      },
      series: [
        {
          name: 'Gauge Speed',
          data: [value],
          tooltip: { valueSuffix: ' kg' },
          dataLabels: {
            format: 'Speed: {y} kg',
            style: { fontSize: '16px' },
          },
          dial: {
            radius: '80%',
            backgroundColor: 'gray',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%',
          },
          pivot: {
            backgroundColor: 'gray',
            radius: 6,
          },
        },
      ],
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [max, value]); // Re-render when max or value changes

  return <div ref={containerRef} style={{ width: '100%', height: '220px', margin: 'auto' }} />;
}

export default Gauge;
