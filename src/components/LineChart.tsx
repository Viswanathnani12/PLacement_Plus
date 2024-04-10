import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Placed", "Unplaced"],
  ["2023", 1000, 400],
  ["2022", 1170, 460],
  ["2022", 660, 1120],
  ["2021", 1030, 540],
];

export const options = {
  title: "Placements Performance",
  curveType: "function",
  legend: { position: "bottom" },
};



const LineChart = () => {
  return (
    <div>
      <Chart
      chartType="LineChart"
      width="90%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  )
}

export default LineChart
