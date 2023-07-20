import React, { useState } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
import highchartsMore from "highcharts/highcharts-more"; // Import highcharts-more
highcharts3d(Highcharts);
highchartsMore(Highcharts); 

function App() {
  const [dependentStateVar, setDependentStateVar] = useState(0);
  const [options, setOptions] = useState({
    chart: {
      renderTo: "container",
      type: "bubble", // Change the chart type to bubble
      animation: false,
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 30,
        depth: 250,
        viewDistance: 5,
        fitToPlot: false,
        frame: {
          bottom: { size: 1, color: "rgba(0,0,0,0.02)" },
          back: { size: 1, color: "rgba(0,0,0,0.04)" },
          side: { size: 1, color: "rgba(0,0,0,0.06)" }
        }
      }
    },
    title: {
      text: "Bubble Chart with Radial Gradient"
    },
    subtitle: {
      text: "Click and drag the plot area to rotate in space"
    },
    plotOptions: {
      bubble: {
        depth: 10, // Add depth to the bubbles
        marker: {
          fillColor: {
            radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
            stops: [
              [0, "rgba(255, 0, 0, 0.5)"], // First color stop at 50% opacity (red)
              [1, "rgba(255, 0, 0, 1)"], // Second color stop at 100% opacity (red)
            ]
          },
        },
      },
    },
    yAxis: {
      min: 0,
      max: 10,
      title: null
    },
    xAxis: {
      min: 0,
      max: 10,
      gridLineWidth: 1
    },
    zAxis: {
      min: 0,
      max: 10,
      showFirstLabel: false
    },
    legend: {
      enabled: false
    },
    series: [
      {
        name: "Data",
        colorByPoint: true,
        accessibility: {
          exposeAsGroupOnly: true
        },
        data: [
          [1, 6, 1], // Data point 1: x=1, y=6, z=1 (size of bubble)
          [8, 7, 1], // Data point 2: x=8, y=7, z=1 (size of bubble)
          [1, 3, 1], // Data point 3: x=1, y=3, z=1 (size of bubble)
          // ... (more data points)
        ]
      }
    ]
  });

  return (
    <div style={{ width: 1000, height: 800 }}>
      <button
        onClick={() => {
          setDependentStateVar((prev) => ++prev);
          setOptions({
            zAxis: {
              title: {
                text: `New Title ${dependentStateVar}`
              }
            }
          });
        }}
      >
        Rerender
      </button>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default App;
