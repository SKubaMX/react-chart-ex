// import MyCharts from './components/charts';

// function App() {
//   return (
//     <div className="App">
//       <MyCharts />
//     </div>
//   );
// };

// export default App;

import React, { Component } from "react";
import Chart from "react-apexcharts";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Уценка",
          data: [
            [Date.now() - 7 * 3600000, 311],
            [Date.now() - 6 * 3600000, 363],
            [Date.now() - 5 * 3600000, 387],
            [Date.now() - 4 * 3600000, 335],
            [Date.now() - 3 * 3600000, 387],
            [Date.now() - 2 * 3600000, 364],
            [Date.now() - 3600000, 349],
            [Date.now(), 345]
          ]
        },
        {
          name: "Утиль",
          data: [
            [Date.now() - 7 * 3600000, 110],
            [Date.now() - 6 * 3600000, 78],
            [Date.now() - 5 * 3600000, 78],
            [Date.now() - 4 * 3600000, 591],
            [Date.now() - 3 * 3600000, 73],
            [Date.now() - 2 * 3600000, 267],
            [Date.now() - 3600000, 267],
            [Date.now(), 267]
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          id: "area-datetime",
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        grid: {
          show: true,
          strokeDashArray: 2,
          padding: {
            top: 0,
            right: 10,
            bottom: 5,
            left: 10
          }
        },
        title: {
          text: "Анализ движения входа/выхода экземпляров",
          align: "left"
        },
        subtitle: {
          text: "Движения экземпляров",
          align: "left"
        },
        legend: {
          horizontalAlign: "center"
        },
        xaxis: {
          type: "datetime",
          labels: {
            datetimeUTC: false,
            show: true
          },
          axisBorder: {
            show: false,
            color: "#78909C",
            height: 0,
            width: "100%",
            offsetX: 0,
            offsetY: 0
          },
          axisTicks: {
            show: false,
            borderType: "solid",
            color: "#78909C",
            height: 6,
            offsetX: 0,
            offsetY: 0
          },
          min: Date.now() - 7 * 3600000, // Where the 6 is the number of days
          max: Date.now() // Today
        },
        yaxis: {
          show: true,
          opposite: false
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        },
        colors: ["#FFAA33", "#36454F"]
      }
    };
  }
  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
          width={700}
        />
      </div>
    );
  }
}
export default App;