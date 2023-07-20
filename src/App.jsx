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
      //margin: 100,
      type: "scatter3d",
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
      text: "Draggable box"
    },
    subtitle: {
      text: "Click and drag the plot area to rotate in space"
    },
    plotOptions: {
      scatter: {
        width: 10,
        height: 10,
        depth: 10
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
        marker: {
          symbol: dependentStateVar % 2 === 0 ? "square" : "circle",
          fillColor: dependentStateVar % 2 === 0 ? "blue" : "red",
        },
        data: [
          [1, 6, 1],
          [8, 7, 1],
          [1, 3, 1],
          [4, 6, 1],
          [5, 7, 1],
          [6, 9, 1],
          [7, 0, 1],
          [2, 3, 1],
          [3, 9, 1],
          [3, 6, 1],
          [4, 9, 1],
          [2, 3, 1],
          [6, 9, 1],
          [0, 7, 1],
          [7, 7, 1],
          [7, 2, 1],
          [0, 6, 2],
          [4, 6, 1],
          [3, 7, 1],
          [0, 1, 1],
          [2, 8, 1],
          [2, 3, 1],
          [6, 4, 1],
          [3, 5, 1],
          [7, 9, 1],
          [3, 1, 7],
          [4, 4, 1],
          [3, 6, 2],
          [3, 1, 6],
          [6, 8, 5],
          [6, 6, 7],
          [4, 1, 1],
          [7, 2, 7],
          [7, 7, 0],
          [8, 8, 9],
          [9, 4, 1],
          [8, 3, 4],
          [9, 8, 9],
          [3, 5, 3],
          [0, 2, 4],
          [6, 0, 2],
          [2, 1, 3],
          [5, 8, 9],
          [2, 1, 1],
          [9, 7, 6],
          [3, 0, 2],
          [9, 9, 0],
          [3, 4, 8],
          [2, 6, 1],
          [8, 9, 2],
          [7, 6, 5],
          [6, 3, 1],
          [9, 3, 1],
          [8, 9, 3],
          [9, 1, 0],
          [3, 8, 7],
          [8, 0, 0],
          [4, 9, 7],
          [8, 6, 2],
          [4, 3, 0],
          [2, 3, 5],
          [9, 1, 4],
          [1, 1, 4],
          [6, 0, 2],
          [6, 1, 6],
          [3, 8, 8],
          [8, 8, 7],
          [5, 5, 0],
          [3, 9, 6],
          [5, 4, 3],
          [6, 8, 3],
          [0, 1, 5],
          [6, 7, 3],
          [8, 3, 2],
          [3, 8, 3],
          [2, 1, 6],
          [4, 6, 7],
          [8, 9, 9],
          [5, 4, 2],
          [6, 1, 3],
          [6, 9, 5],
          [4, 8, 2],
          [9, 7, 4],
          [5, 4, 2],
          [9, 6, 1],
          [2, 7, 3],
          [4, 5, 4],
          [6, 8, 1],
          [3, 4, 0],
          [2, 2, 1],
          [5, 1, 1],
          [9, 9, 1],
          [6, 9, 1],
          [8, 4, 1],
          [4, 1, 1],
          [6, 2, 1],
          [0, 4, 1],
          [3, 5, 1],
          [6, 9, 1],
          [1, 9, 1]
        ]
      }
    ]
  });

  return (
    <div style={{width:1000,height:2000}}>
      <button
        onClick={() => {
          setDependentStateVar((prev) => ++prev);
          setOptions({
            zAxis: {
              title: {
                text: dependentStateVar
              }
            }
          });
        }}
      >
        Rerender
      </button>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default App
