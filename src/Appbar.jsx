import React, { useState } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);

function App() {
  const [dependentStateVar, setDependentStateVar] = useState(0);
  const [options, setOptions] = useState({
    chart: {
      renderTo: "container",
      type: "bar", // Change the chart type to bar
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
      text: "Bar Graph"
    },
    subtitle: {
      text: "Click and drag the plot area to rotate in space"
    },
    plotOptions: {
      bar: {
        depth: 10, // Add depth to the bars
      }
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
          [1, 6, 1],
          [8, 7, 1],
          [1, 3, 1],
          [2, 5, 50],  //[x,y,z]
          // ... (rest of your data)
        ]
      }
    ]
  });

  return (
    <div style={{width: 1000, height: 800}}>
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
